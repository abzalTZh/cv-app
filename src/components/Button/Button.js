import { useNavigate } from "react-router-dom";
import './button.scss';

function Button(props) {
    let navigate = useNavigate();
    function handleClick() {
        if (props.to) navigate(props.to);
        if (props.onClick) {
            const clickFunc = props.onClick;
            clickFunc();
        }
    }

    return (
        <button className="app-section__button" id={props.id} type={props.type ? `${props.type}` : 'button'} onClick={handleClick} disabled={props.disabled}>
            <span>
                {props.icon}
            </span>
            {props.text}
        </button>
    )
}

export default Button;