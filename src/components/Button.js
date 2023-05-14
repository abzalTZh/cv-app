import { useNavigate } from "react-router-dom";

function Button(props) {
    let navigate = useNavigate();
    function handleClick() {
        if (props.to) navigate(props.to);
        else {
            const clickFunc = props.onClick;
            clickFunc();
        }
    }

    return (
        <button className="app-section__button" id={props.id} type="button" onClick={handleClick}>
            <span>
                {props.icon}
            </span>
            {props.text}
        </button>
    )
}

export default Button;