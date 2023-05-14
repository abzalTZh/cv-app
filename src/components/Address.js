import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPhone, faEnvelope,
 } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faSkype } from "@fortawesome/free-brands-svg-icons"

function Address() {
    return(
        <address className="app-section__address">
            <dl>
                <dt>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                </dt>
                <dd>
                    <a href="tel:500 342 242">
                        <strong>500 342 242</strong>
                    </a>
                </dd>
            </dl>
            <dl>
                <dt>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </dt>
                <dd>
                    <a href="mailto:office@kamsolutions.pl">
                        <strong>office@kamsolutions.pl</strong>
                    </a>
                </dd>
            </dl>
            <dl>
                <dt>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </dt>
                <dd>
                    <strong>Twitter</strong> <br />
                    <a href="https://twitter.com/wordpress">https://twitter.com/wordpress</a>
                </dd>
            </dl>
            <dl>
                <dt>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </dt>
                <dd>
                    <strong>Facebook</strong> <br />
                    <a href="https://www.facebook.com/facebook">https://www.facebook.com/facebook</a>
                </dd>
            </dl>
            <dl>
                <dt>
                    <FontAwesomeIcon icon={faSkype} size="lg" />
                </dt>
                <dd>
                    <strong>Skype</strong> <br />
                    <a href="skype:kamsolutions.pl">kamsolutions.pl</a>
                </dd>
            </dl>
        </address>
    )
}

export default Address;