import PhotoBox from "../components/PhotoBox";
import userAvi from '../assets/user-avi.jpg';
import Button from '../components/Button';

function Home() {
    return(
        <main id="main-home">
            <PhotoBox
                imgSrc={userAvi}
                fullName="John Doe"
                position="Programmer. Creative. Innovator"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque "
            >
                <Button text="Know more" to="/inner" />
            </PhotoBox>
        </main>
    )
}

export default Home;