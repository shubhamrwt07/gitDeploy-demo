import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer_section ">
        <div className="container-fluid p-0 end_section py-lg-4 py-xl-1">
          <div className=" custom-container pb-lg-3">
            <div className=" Homepage  py-lg-5 py-xl-1 mx-xl-5 px-xl-5 ">
              <div className="row mx-auto pt-4 pb-0">
                <div className="col-lg-4 col-12 mb-md-0  mb-lg-0  ">
                  <div className="row mx-auto">
                    <div className="col">
                      <h5 className="largHead_text m-0 p-0">Help & Support</h5>
                    </div>
                    <div className="row m-0 px-0 mt-4 mt-xl-4  mb-2">
                      <div className="col-auto footer_text  d-flex ">
                        <img
                          className=" flag_imgs me-3"
                          src="https://rowthtech.s3.amazonaws.com/imgHome17.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                        <p className=" m-0 col_imp">
                          <b className="company_area">New York : </b> 1180
                          Avenue of Americas, 8th floor New York, NY 10018
                        </p>
                      </div>
                    </div>
                    <div className="row px-0 m-0 mt-3  mt-xl-1  mb-2">
                      <div className="col-lg-10 col-12  footer_text   d-flex align-items-start">
                        <img
                          className=" flag_imgs me-3"
                          src="https://rowthtech.s3.amazonaws.com/imgHome7.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                        <p className="m-0">
                          <Link
                            className="text-decoration-none col_imp"
                            target="blank"
                            to="https://goo.gl/maps/ax4sTFGa1r98V35JA"
                          >
                            <b className="company_area">Chandigarh : </b>
                            Berkeley Square, Plot no. 24, Industrial Area Phase
                            I, Chandigarh, 160002
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="row px-0 m-0 mt-3  mt-xl-1  mb-2">
                      <div className="col-lg-10 col-12  footer_text   d-flex align-items-start">
                        <img
                          className=" flag_imgs me-3"
                          src="https://rowthtech.s3.amazonaws.com/imgHome7.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                        <p className="m-0">
                          <Link
                            className="text-decoration-none col_imp"
                            target="blank"
                            to="#"
                          >
                            <b className="company_area">Pune :</b> Sr No 68,
                            Tapkir Nagar, Kalewadi Pune ,17
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="row m-0 px-0  mb-2 d-flex align-items-center">
                      <div className="col-6 col-lg-12 mt-xl-1 footer_text  d-flex mt-md-3 mt-0 mt-lg-0">
                        <img
                          className=" mail_size mx-3 mx-xl-0"
                          src="https://rowthtech.s3.amazonaws.com/imgHome1.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                        <Link
                          className="text-decoration-none ms-xl-3 col_imp"
                          to="mailto: hello@rowthtech.com"
                        >
                          <p className="m-0 mobile_text col_imp">
                            hello@rowthtech.com
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 col-lg-12 mb-lg-2 mt-md-0 mb-md-0 footer_text pe-0 justify-content-md-start d-flex align-items-end">
                        <img
                          className="phone_size me-md-4 me-3 d-flex align-items-start justify-content-center transform"
                          src="https://rowthtech.s3.amazonaws.com/imgHome6.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                        <Link
                          className="text-decoration-none "
                          to="tel:+91 9592226666"
                        >
                          <p className="mobile_text mt-3 col_imp">
                            +91 95922 26666
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mt-5 mt-md-0 col-5 col-md-4">
                  <div className="row mx-auto">
                    <div className="col ps-2">
                      <h5 className="m-0 smallHead_text ms-2">Service</h5>
                    </div>
                    <div className="row mt-md-4 mt-2 mx-auto px-0">
                      <div className="col px-0 footer_text ">
                        <ul>
                          <li className="mb-lg-2 mb-md-2 mb-0">
                            Web Application
                          </li>
                          <li className="mb-lg-2 mb-md-2 mb-0">
                            E-commerce APP
                          </li>
                          <li className="mb-lg-2 mb-md-2 mb-0">
                            Mobile-Friendly APP
                          </li>
                          <li className="mb-lg-2 mb-md-2 mb-0">Landing Page</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-5 mt-md-0 col-3 col-md-3 mx-md-4 mx-lg-0">
                  <div className="row">
                    <div className="col ps-2">
                      <h5 className="m-0 smallHead_text ms-2">Back End</h5>
                    </div>
                    <div className="row mt-md-4 mt-2 mx-auto px-0">
                      <div className="col px-0 footer_text ">
                        <ul>
                          <li className="mb-lg-2 mb-md-2 mb-0">Java/J2ee </li>
                          <li className="mb-lg-2 mb-md-2 mb-0">
                            Microsoft.Net
                          </li>
                          <li className="mb-lg-2 mb-md-2 mb-0"> Node.js</li>
                          <li className="mb-lg-2 mb-md-2 mb-0"> PHP</li>
                          <li className="mb-lg-2 mb-md-2 mb-0">Python</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 mt-5 mt-md-0 col-4 ">
                  <div className="row">
                    <div className="col ps-2">
                      <h5 className="m-0 smallHead_text ms-2">Front End</h5>
                    </div>
                    <div className="row mt-md-4 mt-2 mx-auto px-0">
                      <div className="col px-0 footer_text ">
                        <ul>
                          <li className="mb-lg-2 mb-md-2 mb-0">Angular</li>
                          <li className="mb-lg-2 mb-md-2 mb-0">CSS</li>
                          <li className="mb-lg-2 mb-md-2 mb-0">HTML</li>
                          <li className="mb-lg-2 mb-md-2 mb-0">jQuery</li>
                          <li className="mb-lg-2 mb-md-2 mb-0">JavaScript</li>
                          <li className="mb-lg-2 mb-md-2 mb-0">ReactJs </li>
                          <li className="mb-lg-2 mb-md-2 mb-0">PreactJs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="containerFor1600px  mx-lg-5 px-lg-5 mx-4 pb-4">
              <div className="row footer_container mx-auto pb-lg-2 pb-md-3 d-flex align-items-center justify-content-start">
                <div className="col-lg-2 col-md-6 col-2 pe-0 ms-md-3 ps-md-0 pe-md-0 pb-2 d-flex align-items-center col-auto">
                  <h4 className="text-start mb-0 ps-md-3 ps-lg-0 pt-lg-0 pt-0">
                    Follow Us on
                  </h4>
                </div>
                <div className="col-lg-4 col-md-5 d-md-flex justify-content-lg-end mt-md-1 pb-2  me-lg-5 pe-lg-4 col-auto  ms-auto ms-md-0">
                  <div className="row">
                    <div className="col-auto ps-lg-5 ms-lg-4 ms-xl-1 ps-xl-1 text-align-right">
                      <Link
                        className="d-block"
                        target={"_blank"}
                        to="https://www.facebook.com/RowthTech"
                      >
                        <img
                          className=" social_img"
                          src="https://rowthtech.s3.amazonaws.com/imgHome18.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                      </Link>
                    </div>
                    <div className="col-auto ps-lg-5 ms-lg-4  ps-xl-1 ms-xl-2">
                      <Link
                        className="d-block "
                        target={"_blank"}
                        to="https://www.instagram.com/rowthtech/"
                      >
                        <img
                          className="social_img "
                          src="https://rowthtech.s3.amazonaws.com/imgHome5.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />

                      </Link>
                    </div>
                    <div className="col-auto ps-lg-5 ms-lg-4 ps-xl-1 ms-xl-2">
                      <Link className="d-block" to="#">
                        <img
                          className="social_img"
                          src="https://rowthtech.s3.amazonaws.com/imgHome19.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                      </Link>
                    </div>
                    <div className="col-auto ps-lg-5 ms-lg-4 ps-xl-1 ms-xl-2">
                      <Link className="d-block" to="#">
                        <img
                          className="social_img"
                          src="https://rowthtech.s3.amazonaws.com/imgHome20.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                      </Link>
                    </div>
                    <div className="col-auto ps-lg-5 ms-lg-4 ps-xl-1 ms-xl-2 ">
                      <Link className="d-block" to="#">
                        <img
                          className="social_img"
                          src="https://rowthtech.s3.amazonaws.com/imgHome2.webp"
                          alt="rowthtech_img"
                          loading="lazy"

                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pb-lg-5 pb-4 privacy_policy mx-0  pb-xl-1">
                <div className="col-12">
                  <div className="row mx-xl-auto">
                    <div className="col-lg-5 col-xl-5 col-md-5 col-12 ps-md-0 pt-md-0 pt-4  ">
                      <p className=" copy_text p-0 m-0">
                        © 2022 RowthTech | All Rights Reserved.
                      </p>
                    </div>
                    <div className="col-7 ps-xl-7 d-md-flex col-xl-6 justify-content-md-start">
                      <div className="row">
                        <div className="col-auto d-none d-md-block px-4 px-xl-1 me-4">
                          <Link
                            to="/wedding"
                            className="text-decoration-none"
                            href="#"
                          >
                            <p className="m-0  copy_link ">
                              Wedding Privacy Policy
                            </p>
                          </Link>
                        </div>
                        <div className="col-auto d-none d-md-block px-4 px-xl-1 me-4">
                          <Link
                            to="/PrivacyPolicy"
                            className="text-decoration-none"
                            href="#"
                          >
                            <p className="m-0  copy_link ">Privacy Policy</p>
                          </Link>
                        </div>
                        <div className="col-auto  d-none d-md-block px-4 px-xl-1 me-4">
                          <Link
                            to="/Cookies"
                            className="text-decoration-none"
                            href="#"
                          >
                            <p className="m-0 copy_link"> Manage Cookies</p>
                          </Link>
                        </div>
                        <div className="col-auto d-none d-md-block m-0 p-0 me-4">
                          <Link className="text-decoration-none" to="#">
                            <p className="m-0 copy_link"> Sitemap </p>
                          </Link>
                        </div>
                        <div className="col-auto d-none d-md-block  m-0 p-0 ">
                          <Link className="text-decoration-none" to="/blog">
                            <p className="m-0 copy_link"> Blog </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
