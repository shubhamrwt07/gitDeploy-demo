import React, { useState, useEffect } from "react";
import "../header/header.css";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handlePhoneClick = () => navigate("/rtgit");
  const [industryDropdown, setIndustryDropdown] = useState(false);
  const [topIndDropdown, setTopIndDropdown] = useState(false);
  const [btnHideShow, setBtnHideShow] = useState(false);

  let activeStyle = {
    Color: "orange",
    textDecoration: "none",
  };

  const toppositon = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const cl = window.addEventListener(
      "click",
      (e) => {
        if (e.target.id !== "dropdownMenuLink") {
          setshowDropdown(false);
          setTopIndDropdown(false);
        }
      },
      false
    );
  }, []);
  const [showDropdown, setshowDropdown] = useState(false);
  return (
    <div className="fixed">
      <div className="main-body bg-white d-block d-md-none mobile-navbar">
        <div className="container1  ">
          <div className="row navbar   py-0 navbar-expand-lg navbar-light">
            <div className="col-auto navCol mx-auto ">
              <div className="row ">
                <div
                  className="collapse col-12 navbar-collapse  slide-right"
                  id="navbarNav"
                >
                  {!btnHideShow ? (
                    <>
                      <div className="row mx-auto navRow align-items-center">
                        <div className="croos d-lg-none d-md-block d-block  ">
                          <i
                            className="fas fa-times d-flex justify-content-end text-white navbar-toggler border-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setBtnHideShow(!btnHideShow)}
                          ></i>
                        </div>
                        <div className="col-12 px-4">
                          <div className="row mx-auto">
                            <div className="col-12 active1  p-0 m-md-0">
                              <Link
                                to="/"
                                className="nav-link  "
                                aria-current="page"
                                onClick={() => setBtnHideShow(!btnHideShow)}
                              >
                                Home
                              </Link>
                            </div>
                            <div className="col-12 active1 p-0 m-md-0 ">
                              <Link
                                to="/about"
                                onClick={() => setBtnHideShow(!btnHideShow)}
                                className="nav-link "
                                href="#"
                              >
                                About Us
                              </Link>
                            </div>
                            <div className="col-12 active1 p-0 m-md-0 ">
                              <Link
                                to="/services"
                                className="nav-link"
                                href="#"
                                onClick={() => setBtnHideShow(!btnHideShow)}
                              >
                                Services
                              </Link>
                            </div>

                            <div className="dropdown col-12  active1 p-0 m-md-0 d-flex align-items-center justify-content-start">
                              <Link
                                onClick={() => {
                                  setIndustryDropdown(!industryDropdown);
                                }}
                                className=" p-0 m-0 border-0 nav-link "
                                href="#"
                                role="button"
                                aria-expanded="false"
                              >
                                Industries
                              </Link>
                              <i
                                onClick={() => {
                                  setIndustryDropdown(!industryDropdown);
                                }}
                                className="fa fa-angle-right text-white industry_open_all ms-5"
                                aria-hidden="true"
                              ></i>
                            </div>
                            {industryDropdown && (
                              <div className=" border-0 p-0 m-0">
                                <div className="row mx-auto">
                                  <div
                                    className="col-12 pe-0
                        "
                                  >
                                    <div className="row mx-auto">
                                      <div className="col-12 p-0 text-center d-flex align-items-center justify-content-start">
                                        <div className="row">
                                          <div className="col-12 height_add_content_drop d-flex align=items-center justify-content-start">
                                            <Link
                                              className="m-0 p-0  add_font_industry"
                                              to="/retail"
                                              onClick={() =>
                                                setBtnHideShow(!btnHideShow)
                                              }
                                            >
                                              <i
                                                className="fa fa-arrow-right text-white me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Retail & E-Commerce
                                            </Link>
                                          </div>
                                          <div className="col-12 height_add_content_drop d-flex align=items-center justify-content-start">
                                            <Link
                                              className="m-0 p-0  add_font_industry"
                                              to="/finance"
                                              onClick={() =>
                                                setBtnHideShow(!btnHideShow)
                                              }
                                            >
                                              <i
                                                className="fa fa-arrow-right text-white me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Finance & Insurance
                                            </Link>
                                          </div>
                                          <div className="col-12 height_add_content_drop d-flex align=items-center justify-content-start">
                                            <Link
                                              className="m-0 p-0  add_font_industry"
                                              to="/automotive"
                                              onClick={() =>
                                                setBtnHideShow(!btnHideShow)
                                              }
                                            >
                                              <i
                                                className="fa fa-arrow-right text-white me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Automotive
                                            </Link>
                                          </div>
                                          <div className="col-12 height_add_content_drop d-flex align=items-center justify-content-start">
                                            <Link
                                              className="m-0 p-0  add_font_industry "
                                              to="/food"
                                              onClick={() =>
                                                setBtnHideShow(!btnHideShow)
                                              }
                                            >
                                              <i
                                                className="fa fa-arrow-right text-white me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Food & Beverages
                                            </Link>
                                          </div>
                                          <div className="col-12 height_add_content_drop d-flex align=items-center justify-content-start">
                                            <Link
                                              className="m-0 p-0  add_font_industry "
                                              to="/realestate"
                                              onClick={() =>
                                                setBtnHideShow(!btnHideShow)
                                              }
                                            >
                                              <i
                                                className="fa fa-arrow-right text-white me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Real Estate
                                            </Link>
                                          </div>
                                          <div className="col-12 height_add_content_drop d-flex align=items-center justify-content-start">
                                            <Link
                                              className="m-0 p-0  add_font_industry "
                                              to="/banking"
                                              onClick={() =>
                                                setBtnHideShow(!btnHideShow)
                                              }
                                            >
                                              <i
                                                className="fa fa-arrow-right text-white me-2"
                                                aria-hidden="true"
                                              ></i>
                                              Banking
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-6 text-center d-flex align-items-center justify-content-center">
                                        <div className="row"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="col-12 active1 p-0 m-md-0 mb-0">
                              <Link
                                to="/careers"
                                onClick={() => setBtnHideShow(!btnHideShow)}
                                className="nav-link"
                              >
                                Careers
                              </Link>
                            </div>
                            {/* <div className="col-12 active1 p-0 m-md-0 ">
                              <Link
                                to="/blog"
                                className="nav-link"
                                href="#"
                               
                              >
                                Blog
                              </Link>
                            </div> */}
                          
                          
                            <div className="dropdown col-12  active1 p-0 m-md-0 d-flex align-items-center justify-content-start">
                              <Link
                                onClick={() => setshowDropdown(!showDropdown)}
                                className=" p-0 m-0  border-0 nav-link d-flex align-items-center justify-content-start"
                                to="#"
                                role="button"
                                id="dropdownMenuLink"
                              >
                                Our Product{" "}
                              </Link>
                              <i
                                onClick={() => setshowDropdown(!showDropdown)}
                                className="fa fa-angle-right text-white industry_open_all ms-4"
                                aria-hidden="true"
                              ></i>
                            </div>
                            {showDropdown && (
                              <div
                                id="dropdown_productoverview"
                                className="col-12 height_add_content_drop d-flex align=items-center justify-content-start"
                                // style={{ transform: "translate(0px, 10px)" }}
                              >
                                <Link
                                  className="m-0 p-0 add_font_industry"
                                  to="/wedding"
                                  onClick={() => {
                                    setshowDropdown(!showDropdown);
                                    setBtnHideShow(!btnHideShow);
                                  }}
                                >
                                  <i
                                    className="fa fa-arrow-right text-white me-2 "
                                    aria-hidden="true"
                                  ></i>
                                  Wedding Event
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="container-fluid header_container shadow-none py-md-2">
        <nav className="navbar d-block navbar-expand-lg  custom-container">
          <div className="row nav_pos align-items-center">
            <div className="col-auto d-none d-md-none ">
              <div>
                <img
                  className="custom_search_icon"
                  src="https://rowthtech.s3.amazonaws.com/search.png"
                  alt="rowthtech_img"
                  loading="lazy"

                />
              </div>
            </div>
            <div className="col d-flex justify-content-md-start justify-content-sm-start">
              <Link to="/" className=" navbar-brand m-0 ms-sm-0 ms-md-0">
                <img
                  className="rowth_logo header_logo_image  "
                  src="https://rowthtech.s3.amazonaws.com/logo.png"
                  alt="rowthtech_img"
                  loading="lazy"

                />
              </Link>
            </div>

            <div className="col-auto d-block  d-flex d-lg-none px-md-2 px-0 justify-content-center align-items-center">
              <div className="ph_iconWork">
                <div
                  onClick={handlePhoneClick}
                  className=" btn-dark  d-flex custom_width_for_call_mobileicon align-items-center justify-content-center"
                >
                  <Link to="https://api.whatsapp.com/send/?phone=917042430271&text=Hi....&app_absent=0">
                    <img
                      className="phone_icon_mobile d-flex align-items-center justify-content-center "
                      src="https://rowthtech.s3.amazonaws.com/phoneIcon.png"
                      alt="rowthtech_img"
                      loading="lazy"

                    />
                  </Link>
                </div>
              </div>

              <button
                className="navbar-toggler border-0 text-dark shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setBtnHideShow(!btnHideShow)}
              >
                <i className="fas fa-bars text-dark toggle_btn_size"></i>
              </button>
            </div>
            <div className="col-12 nav_des d col-md-9 col-xl-9  navbar_HeadFont d-flex align-items-center justify-content-start">
              <div className="collapse navbar-collapse" id="navbarNavdesktop">
                <ul className="navbar-nav mx-md-5 link_container flex-grow-2 fw-bold d-flex align-items-center justify-content-start gap-5">
                  <div className="col-auto nav-item active1 p-0 m-md-0 mb-2 ">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/"
                      className="nav-link navlinkkk text-decoration-none text-uppercase text-dark "
                      href="#"
                      onClick={toppositon()}
                    >
                      Home
                    </NavLink>
                  </div>
              
              
                  <div className="col-auto nav-item active1 p-0 m-md-0 mb-2 ">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/about"
                      className="nav-link navlinkkk text-decoration-none text-uppercase text-dark "
                      href="#"
                    >
                      About Us
                    </NavLink>
                  </div>
                  
                  <div className="col-auto nav-item active1 p-0 m-md-0 mb-2 ">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/services"
                      className="nav-link navlinkkk text-uppercase text-dark"
                      href="#"
                    >
                      Services
                    </NavLink>
                  </div>
                  <div className="dropdown col-auto nav-item  active1 p-0 m-md-0 mb-2 ">
                    <Link
                      onClick={() => {
                        setTopIndDropdown(!topIndDropdown);
                      }}
                      className=" p-0 m-0 border-0 "
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                    >
                      Industries
                    </Link>
                    {topIndDropdown && (
                      <div className="dropdown-menu d-block add_width_all_industires tooltips border-0 p-0 m-0 px-3 py-4">
                        <div className="row mx-auto">
                          <div className="col-12 d-flex align-items-center justify-content-center">
                            <p className="m-0 p-0"> Industries</p>
                          </div>
                          <div
                            className="col-12 mt-2 pe-0
                        "
                          >
                            <div className="row mx-auto">
                              <div className="col-7 d-flex align-items-center justify-content-start">
                                <div className="row">
                                  <div className="col-12">
                                    <Link
                                      className="m-0 p-0 font_dec_indust"
                                      onClick={() => {
                                        setTopIndDropdown(!topIndDropdown);
                                      }}
                                      to="/retail"
                                    >
                                      <p className="m-0 p-0 font_dec_indust">
                                        Retail & E-Commerce
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="col-12 mt-1">
                                    <Link
                                      className="m-0 p-0 font_dec_indust"
                                      onClick={() => {
                                        setTopIndDropdown(!topIndDropdown);
                                      }}
                                      to="/finance"
                                    >
                                      <p className="m-0 p-0 font_dec_indust">
                                        Finance & Insurance
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="col-12 mt-1">
                                    <Link
                                      className="m-0 p-0 font_dec_indust"
                                      onClick={() => {
                                        setTopIndDropdown(!topIndDropdown);
                                      }}
                                      to="/automotive"
                                    >
                                      <p className="m-0 p-0 font_dec_indust">
                                        Automotive
                                      </p>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-5 ms-auto d-flex align-items-center justify-content-start">
                                <div className="row">
                                  <div className="col-12">
                                    <Link
                                      className="m-0 p-0 font_dec_indust"
                                      onClick={() => {
                                        setTopIndDropdown(!topIndDropdown);
                                      }}
                                      to="/food"
                                    >
                                      <p className="m-0 p-0 font_dec_indust">
                                        Food & Beverages
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="col-12 mt-1">
                                    <Link
                                      className="m-0 p-0 font_dec_indust"
                                      onClick={() => {
                                        setTopIndDropdown(!topIndDropdown);
                                      }}
                                      to="/realestate"
                                    >
                                      <p className="m-0 p-0 font_dec_indust">
                                        Real Estate
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="col-12 mt-1">
                                    <Link
                                      className="m-0 p-0 font_dec_indust"
                                      onClick={() => {
                                        setTopIndDropdown(!topIndDropdown);
                                      }}
                                      to="/banking"
                                    >
                                      <p className="m-0 p-0 font_dec_indust">
                                        Banking
                                      </p>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="col-auto nav-item active1 p-0 m-md-0 mb-2">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/careers"
                      className="nav-link navlinkkk text-uppercase text-dark"
                    >
                      Careers
                    </NavLink>
                  </div>
                  <div className="col-auto nav-item active1 p-0 m-md-0 mb-2 ">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/blog"
                      className="nav-link navlinkkk text-decoration-none text-uppercase text-dark "
                      href="#"
                      onClick={() => setBtnHideShow(!btnHideShow)}

                    >
                    Blog
                    </NavLink>
                  </div>
                  <div className="col-auto nav-item active1 p-0 m-md-0 mb-2">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/portfolio"
                      className="nav-link navlinkkk text-uppercase text-dark"
                      href="#"
                    >
                      Portfolio
                    </NavLink>
                  </div>

                  <div className="dropdown col-auto nav-item  active1 p-0 m-md-0 mb-2 ">
                    <Link
                      onClick={() => setshowDropdown(!showDropdown)}
                      className=" p-0 m-0 border-0 "
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                    >
                      Our Product{" "}
                    </Link>
                    {showDropdown && (
                      <div
                        id="dropdown_productoverview"
                        className="dropdown-menu col-auto d-block add_width_all_industires tooltips border-0 p-0 m-0 px-32 py-3"
                        style={{ transform: "translate(0px, 10px)" }}
                      >
                        <div className="row mx-auto">
                          <div className="col-12 d-flex align-items-center justify-content-center">
                            <Link
                              className="m-0 p-0 font_dec_indust"
                              onClick={() => {
                                setshowDropdown(!showDropdown);
                              }}
                              to="/wedding"
                            >
                              <p className="m-0 p-0 font_dec_indust">
                                Wedding Event
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <div className="col-auto nav-item active1 p-0 m-md-0 mb-2">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/blog"
                      className="nav-link navlinkkk text-uppercase text-dark"
                    >
                      Blog
                    </NavLink>
                  </div> */}
                  {/* <div className="col-auto nav-item active1 p-0 m-md-0 mb-2">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/readmore"
                      className="nav-link navlinkkk text-uppercase text-dark"
                    >
                      ReadMore
                    </NavLink>
                  </div> */}
                  {/* </div> */}
                </ul>

                <div className="nav-icons flex-grow-2 d-flex align-items-center  ms-md-auto">
                  <div className="search-icon"></div>
                  <Link
                    to="https://api.whatsapp.com/send/?phone=917042430271&text=Hi....&app_absent=0"
                    target="blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark d-flex align-items-center justify-content-center rounded-pill custom_width_for_call_icon p-2 p-xl-1 ms-3 ms-xl-4"
                    >
                      <img
                        className="phone_icon  custom_button_style_call"
                        src="https://rowthtech.s3.amazonaws.com/phoneIcon.png"
                        alt="rowthtech_img"
                        loading="lazy"

                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
