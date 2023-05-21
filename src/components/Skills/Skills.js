import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { fetchSkills, toggleForm, postSkills } from "../../features/skills/skillSlice";
import Box from "../Box/Box";
import Button from "../Button/Button";
import './skills.scss';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Skill name is a required field";
    }

    if (!values.range) {
        errors.range = "Skill range is a required field";
    } else if (values.range < 10) {
        errors.range = "Skill range must be greater than or equal to 10";
    } else if (values.range > 100) {
        errors.range = "Skill range must be less than or equal to 100";
    } else if (parseInt(values.range) != values.range) {
        errors.range = "Skill range must be a 'number' type";
    }

    return errors;
}

function Skills() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSkills());
    }, [dispatch]);

    const handleOpenEditClick = () => {
        dispatch(toggleForm());
    }

    const localData = JSON.parse(localStorage.getItem('skills'));
    const data = useSelector((state) => state.skills.data);
    const status = useSelector((state) => state.skills.status);
    const isOpen = useSelector((state) => state.skills.skillsIsOpen);

    let content;

    if (localData) {
        content = 
            localData.map((elem) => (
                <div className="skills-elem" key={elem.skills.id} style={ {width: `${elem.skills.range}%`} }>
                    <span>
                        {elem.skills.name}
                    </span>
                </div>
            ));
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            range: '',
        },
        validate,
        onSubmit: values => {
            dispatch(postSkills(values));
            formik.resetForm();
        },
    });

    return(
        <Box 
            title="Skills" 
            content={
                <Button
                    icon={<FontAwesomeIcon icon={faPen} />} 
                    text="Open edit"
                    onClick={handleOpenEditClick}
                />} 
            id="skills"
        >
            <form
                onSubmit={formik.handleSubmit}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                <label htmlFor="name">Skill Name</label>
                <input
                    className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter skill name"
                />
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                <br />

                <label htmlFor="range">Skill Range</label>
                <input 
                    className={formik.touched.range && formik.errors.range? 'input-error' : ''}
                    id="range"
                    name="range"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.range}
                    placeholder="Enter skill range"
                />
                {formik.touched.range && formik.errors.range ? <div>{formik.errors.range}</div> : null}
                <br />

                <Button 
                    type="submit"
                    text="Add skill"
                    disabled={
                        (!formik.touched.name && !formik.touched.range) || (formik.errors.name || formik.errors.range) ? 'disabled' : false
                    }
                />
            </form>
            <div className="app-section__skills-container">
                {content}
                <div className="skills-metrics">
                    <table>
                        <tbody>
                            <tr className="skills-metrics__scale">
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr className='skills-metrics__scale-label'>
                                <td>Beginner</td>
                                <td>Proficient</td>
                                <td>Expert</td>
                                <td>Master</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Box>
    )
}

export default Skills;