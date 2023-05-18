import { useState, useEffect } from 'react';
import Isotope from 'isotope-layout';
import portfolioElem1 from "../../assets/portfolio-card1.jpg";
import portfolioElem2 from "../../assets/portfolio-card2.jpg";
import './portfolio.scss';

function Portfolio() {
    const [iso, setIso] = useState(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        setIso(
            new Isotope('.app-section__portfolio-cards', {
                itemSelector: '.portfolio-elem',
                layoutMode: 'fitRows',
            })
        );
    }, []);

    useEffect(() => {
        if (iso) {
            filterKey === '*'
                ? iso.arrange({ filter: `*` })
                : iso.arrange({ filter: `.${filterKey}` });
        }
    }, [iso, filterKey])

    return(
        <>
            <div id="filters">
                <button className={`app-section__filter-button ${filterKey === '*' ? 'active' : ''}`} onClick={() => setFilterKey('*')}>All</button>
                /
                <button className={`app-section__filter-button ${filterKey === 'code' ? 'active' : ''}`} onClick={() => setFilterKey('code')}>Code</button>
                /
                <button className={`app-section__filter-button ${filterKey === 'ui' ? 'active' : ''}`} onClick={() => setFilterKey('ui')}>UI</button>
            </div>

            <div className='app-section__portfolio-cards'>
                <div className="portfolio-elem ui">
                    <img src={portfolioElem1} alt="Portfolio Card Element" />
                    <div className="portfolio-info">
                        <h3>Some text</h3>
                        <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                        </p>
                        <a href="https://www.example.com">View resource</a>
                    </div>
                </div>
                <div className="portfolio-elem code">
                    <img src={portfolioElem2} alt="Portfolio Card Element" />
                    <div className="portfolio-info">
                        <h3>Some text</h3>
                        <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                        </p>
                        <a href="https://www.example.com">View resource</a>
                    </div>
                </div>
                <div className="portfolio-elem ui">
                    <img src={portfolioElem1} alt="Portfolio Card Element" />
                    <div className="portfolio-info">
                        <h3>Some text</h3>
                        <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                        </p>
                        <a href="https://www.example.com">View resource</a>
                    </div>
                </div>
                <div className="portfolio-elem code">
                    <img src={portfolioElem2} alt="Portfolio Card Element" />
                    <div className="portfolio-info">
                        <h3>Some text</h3>
                        <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                        </p>
                        <a href="https://www.example.com">View resource</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;