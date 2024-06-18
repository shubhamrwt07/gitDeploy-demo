import React from "react";
import "../Carrers/Carrers.css";
import { Link } from "react-router-dom";
import { maskgroup } from "../../static content/images";

function Carrers() {
  return (
    <>
      <section className="container-fluid px-md-0 custom-container">
        <div className="row mx-auto flex-column">
          <div className="top_HeadingParentText mt-md-0 mt-3">
            <div className="row d-flex justify-content-around">
              <div className="col-md-8 pt-md-3 ps-md-5 col-6">
                <div className="line-img  d-md-block">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/car3l.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                  <h1 className="heading-1 position-relative black mt-md-0">
                    JOIN OUR TEAM !
                  </h1>
                </div>
              </div>
              <div className="heading-2 col-5 mx-auto align-self-center pe-md-5 flex-md-column align-items-md-end text-md-end col-md-4 px-0 ">
                <h2 className="heading-2 mb-0 d-inline-block mt-md-3 pe-md-5 mt-0">
                  become part of
                </h2>
                <br />
                <h2 className="heading-2 d-inline-block mb-0 pe-md-3 mt-md-0 mt-0">
                  <span className="org-txt-new">rowthTech Family !</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 containerForFullWidth px-md-0 px-0">
            <div className="img-sec img_container row my-md-4 py-3 mx-1 mx-md-0">
              <div className="col-12  px-0 min_hieght_aviod">
                <img
                  src={maskgroup}
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="row mx-auto">
              <div
                className=" col-11 mx-auto  show_desktop "
                style={{ border: "2px solid black ", width: "100rem" }}
              ></div>
              <div
                className=" col-12  mx-auto  show_mobile  "
                style={{ border: "1px solid black" }}
              ></div>
            </div>
          </div>

          <div className="containerFor1600px mx-auto main_cont px-0">
            <div className="col-12">
              <div className="row py-md-3 mt-md-3 rowthTech_DivMainText px-md-5 mx-auto d-flex  justify-content-between ">
                <div className="col-md-3 px-md-0">
                  <h2 className="heading-3 d-inline-block mb-0 black me-1">
                    <span className="Why-grey">WHY</span>
                    <br className="only1280" /> JOIN
                  </h2>
                  <br className="brktg" />
                  <h2 className="heading-3 d-inline-block  black">
                    <p className="brdr3-1"> ROWTHTECH?</p>
                  </h2>
                </div>
                <div className="col-md-9 ">
                  <p className="para-2 pt-1 pt-md-0">
                    RowthTech, categorized among the fastest-growing companies,
                    prides itself on a dynamic perspective and the promise of
                    client service, ongoing and continuous growth. In addition
                    to RowthTech's low attrition rate, the company's
                    contribution to its team members facilitates an ideal
                    working environment where colleagues can innovate,
                    understand, and excel. We are constantly adding new members
                    to the RowthTech family, and we embrace applicants that are
                    enthusiastically seeking to broaden their career potential
                    and achieve success. Share with us a copy of your resume at
                    <Link
                      to="mailto:hr@rowthtech.com"
                      className="text-decoration-none"
                    >
                      <span className="org-txt6-1"> hr@rowthtech.com</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 px-md-5">
              <div className="row bordr rowthTech_DivMainText mt-md-3 mx-auto">
                <div className="col-md-3 d-none d-md-block  px-md-0">
                  <h2 className="heading-3 ">
                    <p className="gray-txt mb-0">Is</p>
                    <p className="black mb-0">RowthTech</p>
                    <p className="brdr3-2 black mb-0"> worth it?</p>
                  </h2>
                </div>
                <div className="col-md-4 d-block d-md-none ps-md-0">
                  <h2 className="heading-3 pt-3 ps-md-0  ms-md-0  ">
                    IS ROWTHTECH <span className="brdr3-1">WORTH IT ?</span>
                  </h2>
                </div>

                <div className="col-md-9 ">
                  <p className="para-2 pt-1 pt-md-0">
                    Unlike a traditional company, RowthTech's people are
                    accountable and walk in the same way as their co-equals.
                    Active learning gets you the outcomes you desire,
                    strengthens your ingenuity, and allows you to relish the
                    relaxed ambiance while rewarding our employees with
                    freebies. We include everything you need to make you feel
                    professional & comfortable in the package.
                  </p>
                </div>
              </div>
            </div>

            <div className="row ">
              <div
                className=" col-11 line_color mx-auto  d-block d-md-none "
                style={{ border: "1px solid black" }}
              ></div>
            </div>
            <div className="row pt-md-3 pt-2  px-0 mx-0">
              <div
                className="col-12 col-xl-11 my-md-3 my-4 d-none mx-auto d-md-block"
                style={{ borderBottom: "3.8px solid black", width: "100rem" }}
              ></div>
              <div className="col-12 Passion_divText pt-md-3">
                <div className="row d-none d-md-flex">
                  <div className="col-md-5 ps-md-5">
                    <h1 className="passion ps-md-3 ">
                      <span className="gray-txt d-block"> What’s Your</span>
                      <span className="black d-block">Passion?</span>
                    </h1>
                  </div>
                  <div
                    className="col-3 ms-auto d-flex align-items-center  d-none
                d-md-flex"
                  >
                    <h2 className="passion-2">
                      Let's build together <br /> & join our family <br /> Email
                      us.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-block d-md-none px-1 px-md-0">
              <h2
                className="heading-3  ms-md-0  ps-md-1 ps-2 pt-2 pt-md-0 "
                id="headding3"
              >
                What's Your<span className="brdr3-1"> Passion?</span>
              </h2>
            </div>
            <div className="row mx-auto">
              <div className="col-md-11 mx-auto Passion_divText pt-md-5 passion-2para">
                <p className="passion-para  pb-md-5 mx-md-0 pt-md-0 p-0 m-0">
                  Unlike a traditional company, RowthTech's people are
                  accountable and walk in the same way as their co-equals.
                  Active learning gets you the outcomes you desire, strengthens
                  your ingenuity, and allows you to relish the relaxed ambiance
                  while rewarding our employees with freebies. We include
                  everything you need to make you feel professional &
                  comfortable in the package.
                </p>
                <div className="ms-auto col-md-4 d-block d-md-none">
                  <h2 className="passion-2">
                    Let's build together & join our <br />
                    family Email us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="global-contactus py-4 mt-4 mb-5">
        <div className="row mx-auto field--name-body d-flex align-items-center justify-content-evenly">
          <div className="col-6 left-block">
            <p className="ms-2 p-0 mb-2 career_mail_size text-white">
              <strong>Looking for career opportunities?</strong>
            </p>
            <p className="ms-2 p-0 career_mail_para text-white">
              Email your resume and our team will get in touch..
            </p>
          </div>
          <div className="col-5 col-md-3 right-block d-flex justify-content-end">
            <p className="me-2 p-0">
              <Link
                to="mailto:hr@rowthtech.com"
                className="email_resume bg-dark text-white"
                target="_blank"
                rel="noreferrer"
              >
                Email Resume
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carrers;
