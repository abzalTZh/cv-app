import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Panel from "../components/Panel/Panel";
import Box from "../components/Box/Box";
import TimeLine from "../components/Timeline/TimeLine";
import Expertise from "../components/Expertise/Expertise";
import Feedback from "../components/Feedback/Feedback";
import feedbackUser from '../assets/feedback-user.jpg';
import Portfolio from "../components/Portfolio/Portfolio";
import Address from "../components/Address/Address";
import Skills from '../components/Skills/Skills';

function Inner() {
    return(
        <>
            <Panel />
            <main id="main-inner">
                <Box
                    id="about-me"
                    title="About me"
                    content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque"
                />
                <Box id="education" title="Education">
                    <TimeLine />
                </Box>
                <Box title="Experience" id="experience">
                    <Expertise data={[ { 
                    date: '2013-2014', 
                    info: 
                        {
                            company: 'Google', 
                            job: 'Front-end developer / php programmer', 
                            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' 
                        } 
                    }, 
                    { 
                        date: '2012', 
                        info: 
                            { 
                                company: 'Twitter', 
                                job: 'Web developer', 
                                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' 
                            }
                    } 
                ]} />
                </Box>
                <Skills />
                <Box title="Portfolio" id="portfolio">
                    <Portfolio />
                </Box>
                <Box title="Contacts" id="contacts">
                    <Address />
                </Box>
                <Box title="Feedbacks" id="feedbacks">
                    <Feedback data={[ {
                        feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                        reporter: { 
                            photoUrl: feedbackUser, 
                            name: 'John Doe', 
                            citeUrl: 'https://www.citeexample.com' 
                        } 
                    }, 
                    {
                        feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                        reporter: { 
                            photoUrl: feedbackUser, 
                            name: 'John Doe', 
                            citeUrl: 'https://www.citeexample.com' 
                        }
                    } ]} />
                </Box>
                <a id="scroll-up-button" href='#about-me'>
                    <FontAwesomeIcon icon={faAngleUp} size="lg" />
                </a>
            </main>
        </>
    )
}

export default Inner;