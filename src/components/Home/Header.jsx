import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="row" style={{marginLeft: "10px"}}>
        <div className="col-lg-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://cdn.luxe.digital/media/2020/09/15155224/world-best-michelin-restaurants-luxe-digital.jpg"
                  alt="First slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://viterbischool.usc.edu/wp-content/uploads/2020/01/Hocking-hps-.jpg"
                  alt="Second slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://www.britishathletics.org.uk/wp-content/uploads/2018/07/Hannah-Cockroft-mag.jpg"
                  alt="Third slide"></img>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <i className="fas fa-bell fa-3x d-flex justify-content-center pb-1 pt-4"></i>
          <p className="content pt-2 font-weight-bold">Updates & Events</p>
          <div className="box">
            <p className="marquee">
              <i className="fas fa-arrow-circle-right"></i>
              Praesent ut felis id velit vehicula dapibus. Nullam bibendum nisl
              nibh, tincidunt bibendum massa lacinia eu.
            </p>
            <p className="marquee">
              <i className="fas fa-arrow-circle-right"></i>
              Praesent ut felis id velit vehicula dapibus. Nullam bibendum nisl
              nibh, tincidunt bibendum massa lacinia eu.
            </p>
            <p className="marquee">
              <i className="fas fa-arrow-circle-right"></i>
              Praesent ut felis id velit vehicula dapibus. Nullam bibendum nisl
              nibh, tincidunt bibendum massa lacinia eu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
