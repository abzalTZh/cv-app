import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import Info from "../Info/Info";
import { useEffect } from "react";
import { fetchEducation } from "../../features/education/educationsSlice";
import './timeline.scss';

function TimeLine() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEducation());
    }, [dispatch]);

    const data = useSelector((state) => state.education.data)
    const status = useSelector((state) => state.education.status);

    if (status === 'loading') {
        return(
            <div className="loading-bar" data-testid="loading-test">
                <FontAwesomeIcon className="app-section__timeline--loading" icon={faRotate} size="xl" />
            </div>
        )
    } else if (status === 'success') {
        return(
            <div className="app-section__timeline">
                <ul>
                    {data.educations.map((edu, index) => (
                        <li key={index}>
                            <div className="app-section__timeline-list-date">
                                {edu["date"]}
                            </div>
                            <div className="app-section__timeline-list-event">
                                <Info text={edu["description"]}>
                                    <h3>{edu["title"]}</h3>
                                </Info>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return(
            <div className="app-section__timeline--error-msg">
                Something went wrong, please review your server connection!
            </div>
        )
    }


}

export default TimeLine;