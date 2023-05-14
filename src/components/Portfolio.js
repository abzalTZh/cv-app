import Isotope from "isotope-layout"
import portfolioElem1 from "../assets/portfolio-card1.jpg";
import portfolioElem2 from "../assets/portfolio-card2.jpg";

var filterBtns = document.querySelectorAll('.app-section__filter-button');
for (var i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener('click', function() {
    for (var j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove('active');
    }
    this.classList.add('active');

    var iso = new Isotope('.app-section__portfolio-cards', {
      itemSelector: ".portfolio-elem",
      layoutMode: "fitRows",
    });
    var filterValue = this.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
}

function Portfolio() {
    return(
        <>
            <div id="filters">
                <button className="app-section__filter-button active" data-filter="*">All</button>
                /
                <button className="app-section__filter-button" data-filter=".code">Code</button>
                /
                <button className="app-section__filter-button" data-filter=".ui">UI</button>
            </div>
            <div className="app-section__portfolio-cards">
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