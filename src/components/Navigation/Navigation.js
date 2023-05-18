import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faGraduationCap, faPen,
    faGem, faBriefcase, faLocationArrow,
    faComment,
} from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';


function Navigation() {
    const [active, setActive] = useState('about');
    function handleLinkClick(link) {
        setActive(link)
    }

    return(
        <div className='nav-links-container'>
            <a href="#about-me" className={`nav-link ${active === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>
                <FontAwesomeIcon icon={faUser} />
                About me
            </a>
            <a href="#education" className={`nav-link ${active === 'edu' ? 'active' : ''}`} onClick={() => handleLinkClick('edu')}>
                <FontAwesomeIcon icon={faGraduationCap} />
                Education
            </a>
            <a href="#experience" className={`nav-link ${active === 'experience' ? 'active' : ''}`} onClick={() => handleLinkClick('experience')}>
                <FontAwesomeIcon icon={faPen} />
                Experience
            </a>
            <a href="#skills" className={`nav-link ${active === 'skills' ? 'active' : ''}`} onClick={() => handleLinkClick('skills')}>
                <FontAwesomeIcon icon={faGem} />
                Skills
            </a>
            <a href="#portfolio" className={`nav-link ${active === 'portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('portfolio')}>
                <FontAwesomeIcon icon={faBriefcase} />
                Portfolio
            </a>
            <a href="#contacts" className={`nav-link ${active === 'contacts' ? 'active' : ''}`} onClick={() => handleLinkClick('contacts')}>
                <FontAwesomeIcon icon={faLocationArrow} />
                Contacts
            </a>
            <a href="#feedbacks" className={`nav-link ${active === 'feedbacks' ? 'active' : ''}`} onClick={() => handleLinkClick('feedbacks')}>
                <FontAwesomeIcon icon={faComment} />
                Feedbacks
            </a>
        </div>
    )
}

export default Navigation;