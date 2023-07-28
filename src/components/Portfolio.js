import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("branding")}`}
              onClick={handleFilterKeyChange("branding")}
              data-filter=".branding"
            >
              Web
            </li>
            <li
              className={`c-pointer ${activeBtn("photoshop")}`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              Design
            </li></ul>

        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Yard Hoppers</h5>
                <span>An Innovative Backyard Rental Platform</span><br></br>
                <span><a href=
                      "https://yardhoppers.surge.sh/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/yardHoppers-frontend"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-1.jpg" title="" alt="yard-hoppers-snippet" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/yard-hoppers.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Zillock Home</h5>
                <span>3ds Max Sample Rendering</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-9.jpg" title="" alt="anonymonkey-merch-snippet" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/first_render.jpeg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Jobly</h5>
                <span>An Integrated Job Search Platform</span><br></br>
                <span><a href=
                      "https://codinghobo-jobly.surge.sh/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/jobly-frontend"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-3.jpg" title="" alt="jobly-snippet" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/jobly.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Memory Game</h5>
                <span>Can you beat your own high score?</span><br></br>
                <span><a href=
                      "https://jolly-daffodil-913b18.netlify.app/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/memory-game"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-5.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/mem-game-start.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Dazillio Home</h5>
                <span>AutoCAD Plans</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="elevations" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/cad_dazillio_home.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Warbler</h5>
                <span>A Comprehensive Social Media Platform</span><br></br>
                <span><a href=
                      "https://codinghobo-warbler.onrender.com/"
                      target="blank"> Demo
                      </a> | <a href=
                      "https://github.com/CodingHobo/flask-warbler"
                      target="blank"> Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-6.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/warbler.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Chadzilla Music</h5>
                <span>Site Design</span>
                <br></br>
                <span><a href=
                      "https://www.chadzillamusic.com/"
                      target="blank"> Visit </a> </span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-7.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/chadzilla_music.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Anonymonkey</h5>
                <span>Site Design</span><br></br>
                <span><a href=
                      "https://www.anonymonkey.co/"
                      target="blank"> Visit </a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-8.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/anonymonkey.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Anonymonkey</h5>
                <span>Branding and Product Design</span><br></br>
                <span><a href=
                      "https://www.anonymonkey.co/"
                      target="blank"> Visit </a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-2.jpg" title="" alt="anonymonkey-merch-snippet" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/anonymerch.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
