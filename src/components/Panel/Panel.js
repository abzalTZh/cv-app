import PhotoBox from "../PhotoBox/PhotoBox";
import userAvi from "../../assets/user-avi.jpg"
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import './panel.scss';

function Panel() {
    return(
        <nav>
            <PhotoBox imgSrc={userAvi} fullName="John Doe" />
            <Button icon={<FontAwesomeIcon icon={faBars} />} id="nav-hamburger" onClick={() => {
                const nav = document.querySelector('nav');
                nav.classList.toggle('nav-hide');
                const main = document.querySelector('#main-inner');
                main.classList.toggle('nav-hide');
            }} />
            <Navigation />
            <Button icon={<FontAwesomeIcon icon={faChevronLeft} />} id="back-button" text="Go back" to="/" />
        </nav>
    )
}

export default Panel;