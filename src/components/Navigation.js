import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faGraduationCap, faPen,
    faGem, faBriefcase, faLocationArrow,
    faComment,
} from '@fortawesome/free-solid-svg-icons';

let sidebarLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener('click', function() {
    for (var j = 0; j < sidebarLinks.length; j++) {
      sidebarLinks[j].classList.remove('active');
    }

    this.classList.add('active');
  });
}


function Navigation() {
    return(
        <div className='nav-links-container'>
            <a href="#about-me" className='nav-link active'>
                <FontAwesomeIcon icon={faUser} />
                About me
            </a>
            <a href="#education" className='nav-link'>
                <FontAwesomeIcon icon={faGraduationCap} />
                Education
            </a>
            <a href="#experience" className='nav-link'>
                <FontAwesomeIcon icon={faPen} />
                Experience
            </a>
            <a href="#skills" className='nav-link'>
                <FontAwesomeIcon icon={faGem} />
                Skills
            </a>
            <a href="#portfolio" className='nav-link'>
                <FontAwesomeIcon icon={faBriefcase} />
                Portfolio
            </a>
            <a href="#contacts" className='nav-link'>
                <FontAwesomeIcon icon={faLocationArrow} />
                Contacts
            </a>
            <a href="#feedbacks" className='nav-link'>
                <FontAwesomeIcon icon={faComment} />
                Feedbacks
            </a>
        </div>
    )
}

export default Navigation;