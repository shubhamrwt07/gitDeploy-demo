import React, { useState } from "react";
import "../Portfolio/portfolio.css";
import { DemoHomeImage, autoss, autosssImg, img1183, img291, img46, oyoedu, seekh } from "../../static content/images";
function Portfolio() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main_body mt-md-4">
        <section className="banner_section my-md-0 mt-4 mt-xl-0  pt-md-3  custom-container  containerForFullWidth  ">
          <div className="row mx-auto position-relative ">
            <div className="col-12 hero-img min_hieght_aviod">
              <img
                className="width radius-30"
                src={DemoHomeImage}
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
            <div
              className="col-12 contentsheading d-md-flex
              position-absolute"
            >
              <div className="content_inner_row row mx-auto ">
                <div className="col-12 banner_ParentFont d-flex">
                  <div
                    className="row content flex-column heading_text
                    justify-content-center position-relative mx-auto"
                  >
                    <div className="col-12">
                      <h1 className="banner-headings  text-uppercase mb-0">
                        <span className="rowths">RowthTech</span>{" "}
                        <b> Portfolio </b>
                      </h1>
                    </div>
                    <div className="col-12">
                      <h4
                        className="sub-banner-heading59 text-capitalize
                        text-center "
                      >
                        Let's Grow Together
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fuid  mx-4 mx-md-0  ">
          <div className="containerFor1450px py-lg-5 py-3 py-xl-1  ">
            <div className="row d-block d-lg-none  d-flex  justify-content-md-start justify-content-evenly show_mobile">
              <div className="col-7  col-md-5 ms-1 ms-md-2">
                <h2 className="fw-bold mt-md-2 ms-md-2 ">EDUREKA</h2>
              </div>

              <div className="col-4 col-md-6 ms-md-4 ">
                <img
                  src={oyoedu}
                  className="custom_width_for_protfolio_logos2 ms-md-5 ps-md-5 ms-4"
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
            {/* <div className="row   d-none d-lg-block show_desktop pt-4">
              <div className="col-md-8 col-12 d-flex  justify-content-md-start justify-content-end">
                <div className=" col-4 col-md-3 mt-3 mt-md-4 absolute">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/oyoedu.png"
                    className="custom_width_for_protfolio_logos2 mx-0 ms-lg-2"
                    alt="rowthtech_img"
                  />
                </div>
              </div>
            </div> */}
            <div className="row bgcolor position-relative d-flex justify-content-around pt-md-5 mb-md-0 mx-auto">
              <div className="col-lg-7 inner_ChildFont col-12 px-0 ">
                <div className="row mx-auto">
                  <div className="col-lg-11 col-12 ">
                    <div className="row d-md-block d-none mb-4 mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6 d-flex align-items-center ">
                            <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                              Edureka{" "}
                            </h2>
                          </div>
                          <div className="col-3  d-flex align-items-center justify-content-end col-md-6 mt-3 mt-xl-0 mt-md-0 absolute">
                            <img
                              src={oyoedu}
                              className="custom_width_for_protfolio_logos2 mx-0 ms-lg-2"
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-capitalize pt-md-0  font-size-16 ms-0 ms-lg-0 ms-md-1">
                      There are countless online education marketplaces on the
                      internet. And there’s us. We are not the biggest. We are
                      not the cheapest. But we are the fastest growing. We have
                      the highest course completion rate in the industry. We are
                      ridiculously committed to our students. Be it constant
                      reminders, relentless masters or 24 x 7 online support -
                      we will absolutely make sure that you run out of excuses
                      to not complete the course! We provide comprehensive
                      courses in Big Data & Analytics, Cloud Computing,
                      Programming, Application Development, and other trending
                      technologies.
                    </p>
                  </div>
                </div>
                <div className="row mx-auto  ms-0 ms-lg-0 ms-md-1  justify-content-between">
                  <div className="col-lg-12 col-4  content_div  mt-md-5">
                    <div className="row mx-auto d-flex ">
                      <div className="col-md-auto col-10 px-0 pe-md-5  mt-md-0">
                        <span>100M+</span>
                        <h6>Downloads</h6>
                      </div>
                      <div className=" col-md-auto col-12 text-center px-0 px-lg-5 my-md-0 my-3">
                        <div
                          className="star-div d-flex align-items-center
                           justify-content-md-center star_image_custom  mt-md-4 mt-lg-0"
                        >
                          <span className="mb-md-0 mb-2  ps-md-5 ms-lg-5">
                            4.3
                          </span>
                          <img
                            className="star_image_custom mb-2 ms-md-2 mb-lg-2 ms-1 mt-lg-0 mt-md-1 mt-0"
                            src="https://rowthtech.s3.amazonaws.com/star-img.png"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                        <h6 className="text-start text-md-center mt-2">
                          Average Rating
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <div className=" col-md-5 col-12 show_mobile ">
                      <img
                        src={img46}
                        className="edureka-img-mob"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-5 col-2 show_desktop">
                <img
                  className="custom_wdth_of_portfo_images2  width_img"
                  src={img46}
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fuid  bgcoloroyo mx-4 mx-md-0  ">
          <div className="containerFor1450px py-lg-5 py-3 py-xl-1  ">
            <div className="row d-block d-lg-none  d-flex  justify-content-md-start justify-content-evenly show_mobile">
              <div className="col-7  col-md-5 ms-1 ms-md-2">
                <h2 className="fw-bold mt-md-2 ms-md-2 ">Turns</h2>
              </div>

              <div className="col-4 col-md-6 ms-md-4 ">
                <img
                  src="https://rowthtech.s3.amazonaws.com/turnsImage.svg"
                  className="custom_width_for_protfolio_logos2 ms-md-5 ps-md-5 ms-4"
                  alt="rowthtech_img"

                />
              </div>
            </div>
            {/* <div className="row   d-none d-lg-block show_desktop pt-4">
              <div className="col-md-8 col-12 d-flex  justify-content-md-start justify-content-end">
                <div className=" col-4 col-md-3 mt-3 mt-md-4 absolute">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/turnsImage.svg"
                    className="custom_width_for_protfolio_logos2 mx-0 ms-lg-2"
                    alt="rowthtech_img"
                  />
                </div>
              </div>
            </div> */}
            <div className="row bgcolor position-relative d-flex justify-content-around pt-md-5 mb-md-0 mx-auto">
              <div className="col-lg-7 inner_ChildFont col-12 px-0 ">
                <div className="row mx-auto">
                  <div className="col-lg-11 col-12 ">
                    <div className="row d-md-block d-none mb-4 mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6 d-flex align-items-center ">
                            <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                              Turns{" "}
                            </h2>
                          </div>
                          <div className="col-3  d-flex align-items-center justify-content-end col-md-6 mt-3 mt-xl-0 mt-md-0 absolute">
                            <img
                              src="https://rowthtech.s3.amazonaws.com/turnsImage.svg"
                              className="custom_width_for_protfolio_logos2 mx-0 ms-lg-2"
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-capitalize pt-md-0  font-size-16 ms-0 ms-lg-0 ms-md-1">
                      We are a group of technologists who by some chance of luck
                      also had the opportunity to be a drycleaner in India. We
                      love this industry, its people, its customer sensitivity
                      and the challenges. Our main aim is to empower every
                      single drycleaner around the world to have the same tools
                      as we did.
                    </p>
                  </div>
                </div>
                <div className="row mx-auto  ms-0 ms-lg-0 ms-md-1  justify-content-between">
                  <div className="col-lg-12 col-4  content_div  mt-md-5">
                    <div className="row mx-auto d-flex ">
                      <div className="col-md-auto col-10 px-0 pe-md-5  mt-md-0">
                        <span>10M+</span>
                        <h6>Downloads</h6>
                      </div>
                      <div className=" col-md-auto col-12 text-center px-0 px-lg-5 my-md-0 my-3">
                        <div
                          className="star-div d-flex align-items-center
                           justify-content-md-center star_image_custom  mt-md-4 mt-lg-0"
                        >
                          <span className="mb-md-0 mb-2  ps-md-5 ms-lg-5">
                            4.0
                          </span>
                          <img
                            className="star_image_custom mb-2 ms-md-2 mb-lg-2 ms-1 mt-lg-0 mt-md-1 mt-0"
                            src="https://rowthtech.s3.amazonaws.com/star-img.png"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                        <h6 className="text-start text-md-center mt-2">
                          Average Rating
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <div className=" col-md-5 col-12 show_mobile ">
                      <img
                        src="https://rowthtech.s3.amazonaws.com/turns.webp"
                        className="edureka-img-mob"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-5 col-2 show_desktop">
                <img
                  className="image_turns  width_img"
                  src={img291}
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fuid  mx-4 mx-md-0  ">
          <div className="containerFor1450px py-lg-5 py-3 py-xl-1  ">
            <div className="row d-block d-lg-none  d-flex  justify-content-md-start justify-content-evenly show_mobile">
              <div className="col-7  col-md-5 ms-1 ms-md-2">
                <h2 className="fw-bold mt-md-2 ms-md-2 ">Seekh</h2>
              </div>

              <div className="col-4 col-md-6 ms-md-4 ">
                <img
                  src="https://rowthtech.s3.amazonaws.com/seekhabout.svg"
                  className="custom_width_for_protfolio_logos2 ms-md-5 ps-md-5 ms-4"
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
            {/* <div className="row   d-none d-lg-block show_desktop pt-4">
              <div className="col-md-8 col-12 d-flex  justify-content-md-start justify-content-end">
                <div className=" col-4 col-md-3 mt-3 mt-md-4 absolute">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/seekhabout.svg"
                    className="custom_width_for_protfolio_logos2 mx-0 ms-lg-2"
                    alt="rowthtech_img"
                  />
                </div>
              </div>
            </div> */}
            <div className="row bgcolor position-relative d-flex justify-content-around pt-md-5 pb-md-5 mb-md-0 mx-auto">
              <div className="col-lg-7 inner_ChildFont col-12 px-0 ">
                <div className="row mx-auto">
                  <div className="col-lg-11 col-12 ">
                    {/* <h2 className="text-uppercase fw-bold pt-0 mb-2 d-none d-lg-block  ">
                      Seekh
                    </h2> */}
                    <div className="row d-md-block d-none mb-4 mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6 d-flex align-items-center ">
                            <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                              Seekh{" "}
                            </h2>
                          </div>
                          <div className="col-3  d-flex align-items-center justify-content-end col-md-6 mt-3 mt-xl-0 mt-md-0 absolute">
                            <img
                              src="https://rowthtech.s3.amazonaws.com/seekhabout.svg"
                              className="custom_width_for_protfolio_logos2 mx-0 ms-lg-2"
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-capitalize pt-md-0  font-size-16 ms-0 ms-lg-0 ms-md-1">
                      Seekh helps students understand concepts better by doing
                      repeated practice sessions with friends on content they're
                      struggling with, pointing them to more reading material
                      when they need it, and giving them detailed performance
                      analytics on their progress.
                    </p>
                  </div>
                </div>
                <div className="row mx-auto  ms-0 ms-lg-0 ms-md-1  justify-content-between">
                  <div className="col-lg-12 col-4  content_div  mt-md-5">
                    <div className="row mx-auto d-flex ">
                      <div className="col-md-auto col-10 px-0 pe-md-5  mt-md-0">
                        <span>10M+</span>
                        <h6>Downloads</h6>
                      </div>
                      <div className=" col-md-auto col-12 text-center px-0 px-lg-5 my-md-0 my-3">
                        <div
                          className="star-div d-flex align-items-center
                           justify-content-md-center star_image_custom  mt-md-4 mt-lg-0"
                        >
                          <span className="mb-md-0 mb-2  ps-md-5 ms-lg-5">
                            5.0
                          </span>
                          <img
                            className="star_image_custom mb-2 ms-md-2 mb-lg-2 ms-1 mt-lg-0 mt-md-1 mt-0"
                            src="https://rowthtech.s3.amazonaws.com/star-img.png"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                        <h6 className="text-start text-md-center mt-2">
                          Average Rating
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 px-0">
                    <div className=" col-md-5 col-12 show_mobile ">
                      <img
                        src={seekh}
                        className="edureka-img-mob"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-5 col-2 show_desktop">
                <img
                  className="image_seekh  width_img"
                  src={img1183}
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/*rowth  */}
        <div className="container-fuid bgcoloroyo mx-4 mx-md-0 my-4 is_hidden">
          <div className="containerFor1450px pt-xl-5 py-md-0 py-3">
            <div className="row d-block d-lg-none  d-flex  justify-content-md-start justify-content-evenly show_mobile">
              <div className="col-7 ms-1">
                <h2 className="fw-bold pt-md-3 ms-md-1"> ROWTH AUTOS</h2>
              </div>
              <div className="col-4 ">
                <img
                  src={autoss}
                  className="custom_width_for_protfolio_logos2 ms-4 ms-md-5 ps-md-5 "
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="row bgcolor position-relative d-flex justify-content-around mx-auto ">
              <div className="col-md-7 inner_ChildFont col-12 px-0 ">
                {/* <div className="row mx-auto d-lg-block d-none mb-md-5 ">
                  <div className="col-12 d-flex  justify-content-md-start justify-content-end">
                    <div className="col-2 col-md-2">
                      <img
                        src="https://rowthtech.s3.amazonaws.com/autoss.png"
                        className="custom_width_for_protfolio_logos2"
                        alt="rowthtech_img"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="row mx-auto ">
                  <div className="col-md-11 col-12  ">
                    {/* <h2 className="text-uppercase fw-bold pt-0 m-0 d-none d-lg-block">
                      Rowth Autos
                    </h2> */}
                    <div className="row d-md-block d-none mb-4 mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-8 d-flex align-items-center ">
                            <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                              Rowth Autos
                            </h2>
                          </div>
                          <div className="col-3  d-flex align-items-center justify-content-end col-md-4 mt-3 mt-xl-0 mt-md-0 absolute">
                            <img
                              src={autoss}
                              className="custom_width_for_protfolio_logos2"
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-capitalize font-size-16 ">
                      RowthAutos is a Car-Buying Platform where a consumer can
                      compare the on-road prices of all OEM Dealers. With Rowth
                      you can not only Negotiate but book your new car online.
                      Current operations are being focused in 11 states and
                      1800+ OEM Dealers on board. RowthAutos is gearing up to
                      capture the New car Market in India with a storm.
                    </p>
                  </div>
                </div>
                <div className="row mx-auto mt-md-2 justify-content- pb-4 mt-md-5">
                  <div className="col-md-12 col-5  content_div ">
                    <div className="row mx-auto d-flex ">
                      <div className="col-lg-auto col-10 col-md-3 px-0 pe-md-5  mt-4 mt-md-0">
                        <span>10M+</span>
                        <h6>Downloads</h6>
                      </div>
                      <div className=" col-md-auto col-12 text-center px-0 px-md-5 my-md-0 my-3">
                        <div
                          className="star-div d-flex align-items-center
                                 justify-content-md-center img1-1 "
                        >
                          <span className="">4.2</span>
                          <img
                            className="star_image_custom mb-lg-2 ms-lg-2 mb-lg-2 ms-1"
                            src="https://rowthtech.s3.amazonaws.com/star-img.png"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                        <h6 className="text-start text-md-center mb-0 mt-md-0 mt-1 mt-md-1 mt-lg-0">
                          Average Rating
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 px-0 position-relative">
                    <div className=" col-md-5 col-12 show_mobile">
                      <img
                        src={autosssImg}
                        className="autos-mob"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-5 col-2 show_desktop">
                <img
                  src={autosssImg}
                  className="RowthAutos_img "
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid  ">
          <div className="containerFor1450px mt-lg-0 mt-0 mt-md-3">
            <div className="row d-lg-none d-block mx-md-1  mx-2 mt-2">
              <div className="col-12  ">
                <div className="row">
                  <div className="col-8">
                    <h2 className="text-uppercase ms-3  ms-md-0 fw-bold  mb-0 mt-1 mt-md-2 ">
                      Oyo Rooms
                    </h2>
                  </div>
                  <div className="col-2">
                    <p className=" mb-0 oyo_hotel_heading mt-1 ms-md-5 ps-md-5">
                      OYO
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-md-auto mx-2 bgcolor position-relative mt-lg-4 pb-4 pb-md-0 ">
              <div className=" mx-auto  col-7 my-auto inner_ChildFont">
                <div className="row  d-none d-lg-block ">
                  <div className="col-1 ">
                    <p className=" mb-0 oyo_hotel_heading  ">OYO</p>
                  </div>
                </div>
                <div className="row mx-auto">
                  <div className="col-md-12 col-11  px-0">
                    <h2 className="text-uppercase fw-bold  pt-0 m-0 my-md-3 mt-3  d-none d-lg-block">
                      Oyo Rooms
                    </h2>
                    <p className="text-capitalize mb-4 text-justify font-size-16 ms-0 ">
                      India’s Best Hotels & Homes Booking app is the go-to for
                      the best accommodation for work or vacation. Get
                      industry-first best services like VaccinAid–hotels with
                      vaccinated staff, Sanitised B4 UR Eyes–rooms sanitised in
                      front of you, Sanitised Stays–hotels with a 10-step
                      sanitisation SOP & more. Look for these tags to get safe
                      stays.
                    </p>
                  </div>
                </div>
                <div className="row mx-auto mt-lg-5 justify-content-between ms-0">
                  <div className="col-12  content_div px-0 justify-content-between ">
                    <div className="row mx-auto d-flex view_case ">
                      <div className="col-lg-auto col-5 ms-0 pe-lg-5 col-md-4 px-0 fifty_m">
                        <span className="mb-0">50M+</span>
                        <h6 className=" ">Downloads</h6>
                      </div>
                      <div className=" col-lg-auto col-md-4 col-6 px-0 text-center px-lg-5 average_">
                        <div className="star-div ">
                          <span className="mb-0">
                            4.4
                            <img
                              className="star_image_custom mb-lg-2  ms-lg-2"
                              src="https://rowthtech.s3.amazonaws.com/star-img.png"
                              alt="rowthtech_img"
                            />
                          </span>
                        </div>
                        <h6 className="text-start text-md-center  ">
                          Average Rating
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-5 col-5 align-self-end d-none d-md-block">
                <img
                  src="https://rowthtech.s3.amazonaws.com/Group+573.png"
                  className="custom_wdth_of_portfo_images width_img"
                  alt="rowthtech_img"
                />
              </div>
              <div className="d-md-none d-block col-md-5 col-4 align-self-end position-relative ">
                <img
                  src="https://rowthtech.s3.amazonaws.com/Group+573.png"
                  className="oyo-img-mobile oyosimgg"
                  alt="rowthtech_img"
                />
              </div>
            </div>
          </div>
        </div> */}

        {show && (
          <div>
            <div className="container-fuid mt-md-5 bgcoloroyo1 is_hidden d-lg-block d-none">
              <div className="containerFor1450px">
                {/* <div className="row mx-auto d-none d-md-block  ">
                  <div className="col-12 d-flex  justify-content-md-start justify-content-end  ">
                    <div className="col-2 col-md-2 absolute">
                      <img
                        src="https://rowthtech.s3.amazonaws.com/ayude.png"
                        className="width"
                        alt="rowthtech_img"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="row bgcolor d-flex justify-content-around pb-md-5  mx-auto">
                  <div className="col-md-7 inner_ChildFont col-12 px-0 ">
                    {/* <div className="row mx-auto d-block d-md-none ">
                      <div className="col-12 d-flex  justify-content-md-start justify-content-end">
                        <div className="col-3 mt-2 col-md-4 absolute">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/ayude.png"
                            className="width"
                            alt="rowthtech_img"
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row mx-auto">
                      <div className="col-md-11 col-12 ms-xl-3">
                        {/* <h2 className="text-uppercase fw-bold pt-0 pt-md-3 pb-md-2">
                          Aayojna Saral
                        </h2> */}
                        <div className="row d-md-block d-none mb-4 mt-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-8 d-flex align-items-center ">
                                <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                                  Aayojna Saral
                                </h2>
                              </div>
                              <div className="col-3  d-flex align-items-center justify-content-end col-md-4 mt-3 mt-xl-0 mt-md-0 absolute">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/ayude.png"
                                  className="width"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-capitalize font-size-16">
                          Aligning with Digital India’s vision of faceless,
                          paperless and cashless service/scheme delivery model,
                          Antyodaya-SARAL aims to transform citizen service
                          delivery in Haryana through complete digitization of
                          over 500+ services. The vision for Antyodaya-SARAL is
                          a unified platform to deliver and track
                          Government-to-Citizen (G2C) services/schemes across
                          the state.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-auto mt-md-4 pt-md-4  justify-content-between">
                      <div className="col-md-12 col-5  content_div     align-self-center ">
                        <div className="row mx-auto d-flex justify-content-between"></div>
                      </div>
                      <div className="col-7 px-0">
                        <div className=" col-md-5 col-12 show_mobile">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/4+11.png"
                            className="width"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-5 col-2 show_desktop align-self-md-center">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/4+11.png"
                      className="custom_wdth_of_portfo_images8 width_img"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fuid bgcoloroyo mx-4 mx-md-0 my-4 py-lg-0 py-0 py-md-3 my-md-0  py-xl-0 my-xl-0">
              <div className="containerFor1450px py-3 py-md-0">
                <div className="row d-block d-lg-none  d-flex  justify-content-md-start justify-content-evenly show_mobile">
                  <div className="col-7 ms-1">
                    <h2 className="fw-bold mt-md-3 ms-md-2">MY GOV</h2>
                  </div>
                  <div className="col-4 ">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/mygov.png"
                      className="custom_width_for_protfolio_logos2 ms-4"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* <div className="row mx-auto pt-md-5 my-xl-1 d-none d-lg-block">
                  <div className="col-md-8 col-12 d-flex  justify-content-md-start justify-content-end px-md-0">
                    <div className="col-3 col-md-3 mt-3 mt-xl-3 mt-md-0 absolute">
                      <img
                        src="https://rowthtech.s3.amazonaws.com/mygov.png"
                        className="custom_width_for_protfolio_logos2"
                        alt="rowthtech_img"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="row bgcolor position-relative d-flex justify-content-around  mx-auto pt-md-5 ">
                  <div className="col-md-7 inner_ChildFont col-12 px-0 mb-lg-5 pb-lg-5 ">
                    <div className="row mx-auto">
                      <div className="col-md-11 col-12 ">
                        <div className="row d-md-block d-none mb-4 mt-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6 d-flex align-items-center ">
                                <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                                  MY GOV
                                </h2>
                              </div>
                              <div className="col-3  d-flex align-items-center justify-content-end col-md-6 mt-3 mt-xl-0 mt-md-0 absolute">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/mygov.png"
                                  className="custom_width_for_protfolio_logos2"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-capitalize pt-md-3 pt-xl-0 font-size-16">
                          MyGov is Government of India’s innovative citizen
                          engagement platform for direct citizen participation
                          in governance by providing an avenue for channelizing
                          their ideas, comments and creative suggestions to
                          Central Ministries and associated organizations.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-auto mt-md-5  ">
                      <div className="col-md-12 col-5  content_div ">
                        <div className="row mx-auto d-flex ">
                          <div className="col-lg-auto col-md-3 col-10 px-0 pe-lg-5 mt-lg-0">
                            <span>1M+</span>
                            <h6>Downloads</h6>
                          </div>
                          <div className=" col-lg-auto col-md-8 col-12 text-center px-0 px-md-5 my-md-0 my-3">
                            <div
                              className="star-div d-flex align-items-center
                           justify-content-md-center img1-1 "
                            >
                              <span className="">4.4</span>
                              <img
                                className="star_image_custom mb-lg-2 ms-md-2 ms-1 mb-md-1"
                                src="https://rowthtech.s3.amazonaws.com/star-img.png"
                                alt="rowthtech_img"
                                loading="lazy"
                              />
                            </div>
                            <h6 className="text-start text-md-center mb-0 mt-md-0 mt-1 mt-md-1  mt-lg-0">
                              Average Rating
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-7 px-0">
                        <div className=" col-md-5 col-12 show_mobile">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/4+3.png"
                            className="width"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-5 col-2 show_desktop">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/4+3.png"
                      className="my_gov_image"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fuid mx-4 mx-md-0 my-4 my-md-0 bgcoloroyo1 ">
              <div className="containerFor1450px margin_bottom py-md-4 py-4 py-lg-0">
                <div className="row d-block d-lg-none  d-flex  justify-content-md-start justify-content-evenly show_mobile">
                  <div className="col-7 ms-1">
                    <h2 className="fw-bold mt-md-2 ms-md-3">SARAL</h2>
                  </div>

                  <div className="col-4 ">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/saral.png"
                      className="custom_width_for_protfolio_logos2 ms-4 ms-md-5 ps-md-5"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="row bgcolor position-relative d-flex justify-content-between pt-lg-5 pt-md-5 pb-md-5 ms-md-2">
                  <div className="col-md-7 inner_ChildFont col-6 px-0 ">
                    {/* <div className="row  d-none d-lg-block ">
                      <div className="col-12 d-flex  justify-content-start">
                        <div className="col-2 col-md-2">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/saral.png"
                            className="custom_width_for_protfolio_logos2"
                            alt="rowthtech_img"
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row mx-auto">
                      <div className="col-md-11 col-12 px-md-2 px-4">
                        <div className="row d-md-block d-none mb-4 mt-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6 d-flex align-items-center ">
                                <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                                  SARAL{" "}
                                </h2>
                              </div>
                              <div className="col-3  d-flex align-items-center justify-content-end col-md-6 mt-3 mt-xl-0 mt-md-0 absolute">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/saral.png"
                                  className="custom_width_for_protfolio_logos2"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-capitalize  mb-md-3 font-size-16">
                          With Saral, any retail shop owner or a small business
                          can create an order or directly send packages -
                          groceries, medicines, or any essentials to customers
                          nearby. All you need to do is fill in your details,
                          the pickup location and the delivery location and you
                          are set to ship items easily.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-auto mt-md-5  justify-content-between ms-md-0 ms-3  ms-xl-1">
                      <div className="col-md-12 col-12 mx-0  content_div ">
                        <div className="row mx-auto d-flex ">
                          <div className="col-md-auto col-6 px-0 pe-md-5  mt-md-0">
                            <span>10k+</span>
                            <h6>Downloads</h6>
                          </div>
                          <div className=" col-md-auto col-7 text-center px-0 px-lg-5 my-md-0">
                            <div
                              className="star-div d-flex align-items-center
                            justify-content-md-center img1-1 "
                            >
                              <span className="mb-0">3.9</span>
                              <img
                                className="star_image_custom mb-lg-2 mb-md-1 ms-md-2 ms-1"
                                src="https://rowthtech.s3.amazonaws.com/star-img.png"
                                alt="rowthtech_img"
                                loading="lazy"
                              />
                            </div>
                            <h6 className="text-start text-md-center mt-md-0 mt-1 mb-0">
                              Average Rating
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-4 col-6 image_HeightDiv align-self-end d-none d-md-block">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/4+2.png"
                      className="custom_wdth_of_portfo_images3 "
                      alt="rowthtech_img"
                    />
                  </div>
                  <div className="d-md-none d-block col-md-5 col-5 align-self-end position-relative ">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/4+2.png"
                      className="mob_width oyosimgg1"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fuid  bgcoloroyo is_hidden d-lg-block d-none">
              <div className="containerFor1450px">
                <div className="row bgcolor position-relative d-flex justify-content-between mx-auto">
                  <div className="col-7 inner_ChildFont px-0 ">
                    <div className="row mx-auto">
                      <div className="col-md-11 col-12 section_59">
                        <div className=" col-md-12 col-7 ">
                          <h2 className="text-uppercase fw-bold pt-5">
                            Crypto Portfolio & Taxes
                          </h2>
                        </div>

                        <p className="text-capitalize font-size-16">
                          Accurately tracking cryptocurrency investment
                          performance and taxes are hard. We make it easy and
                          help you save money.
                        </p>
                      </div>
                      <div className=" col-md-10 mb-md-5 mt-md-5 show_desktop">
                        <img
                          src="https://rowthtech.s3.amazonaws.com/oyoss.png"
                          className="custom_text"
                          alt="rowthtech_img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-5 col-5 align-self-center ps-0 ">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/4+7.png"
                      className="crypto_image "
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div className=" col-md-12 pt-md-3 show_mobile">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/oyoss.png"
                      className="mob_width_cus"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fuid  bgcoloroyo1 is_hidden d-lg-block d-none">
              <div className="containerFor1450px  margin_bottom2 ">
                <div className="row mx-auto d-block d-md-none pt-1">
                  <div className="col-12 d-flex justify-content-end px-md-0 mt-0">
                    <div className="col-3 col-md-1 mt-2 mt-md-0 absolute">
                      <img
                        src="https://rowthtech.s3.amazonaws.com/image+6.png"
                        className="mob_width"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="row bgcolor position-relative d-flex justify-content-aroud pt-xl-5 mx-auto">
                  <div className="col-md-7 inner_ChildFont col-5 px-0 ">
                    {/* <div className="row mx-auto d-none d-md-block ">
                      <div className="col-12 d-flex  justify-content-start">
                        <div className="col-2 col-md-2">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/image+6.png"
                            className="custom_width_for_protfolio_logos3"
                            alt="rowthtech_img"
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row mx-auto">
                      <div className="col-md-11 col-12 px-md-2 px-0">
                        {/* <h2 className="text-uppercase fw-bold   pt-md-3 pb-md-2">
                          OKSHAN
                        </h2> */}
                        <div className="row d-md-block d-none mb-4 mt-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6 d-flex align-items-center ">
                                <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                                  OKSHAN{" "}
                                </h2>
                              </div>
                              <div className="col-3  d-flex align-items-center justify-content-end col-md-6 mt-3 mt-xl-0 mt-md-0 absolute">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/image+6.png"
                                  className="custom_width_for_protfolio_logos3"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-capitalize mb-4 mb-md-3 font-size-16">
                          Okshan connects used car buyers and sellers on a
                          transparent platform. All cars transacted on the
                          platform are verified by Okshan and detail inspection
                          report is made available, so you can transact with
                          complete trust and peace of mind.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-auto mt-md-5 ms-md-2  justify-content-between ">
                      <div className="col-md-12 col-12 content_div px-0">
                        <div className="row mx-auto d-flex">
                          <div className="col-md-2 col-5 px-0 pe-md-5">
                            <span>5k+</span>
                            <h6>Downloads</h6>
                          </div>
                          <div className=" col-md-5 col-7 px-md-5 text-center px-0">
                            <div
                              className="star-div d-flex align-items-center
                                             justify-content-center img1-1 "
                            >
                              <span className="">4.0</span>
                              <img
                                className="star_image_custom ms-2 mb-lg-2"
                                src="https://rowthtech.s3.amazonaws.com/star-img.png"
                                alt="rowthtech_img"
                                loading="lazy"
                              />
                            </div>
                            <h6 className="mt-1 mt-md-0 mb-0">
                              Average Rating
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-4 col-6 align-self-end d-none d-md-block image_HeightDiv1">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/okshan+2.png"
                      className="Okshan_image"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-md-none d-block col-md-5 col-5 align-self-end position-relative ">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/okshan+2.png"
                      className="mob_width oyosimgg1"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fuid bgcoloroyo is_hidden d-lg-block d-none mb-md-4 pt-md-5">
              <div className="containerFor1450px ">
                {/* <div className="row mx-auto d-none d-md-block">
                  <div className="col-12 d-flex  justify-content-md-start justify-content-end mt-md-3 pt-md-3 ">
                    <div className="col-3 col-md-3 mt-md-0 absolute">
                      <img
                        src="https://rowthtech.s3.amazonaws.com/4+9.png"
                        className="custom_width_for_protfolio_logos2"
                        alt="rowthtech_img"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="row mx-auto bgcolor position-relative d-flex justify-content-around pb-md-4 ms-xl-2">
                  <div className="col-md-7 inner_ChildFont col-12 px-0 ">
                    {/* <div className="row mx-auto d-block d-md-none ">
                      <div className="col-12 d-flex  justify-content-md-start justify-content-end">
                        <div className="col-4 col-md-4 mt-2 mt-md-0 absolute">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/4+9.png"
                            className="width"
                            alt="rowthtech_img"
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row mx-auto">
                      <div className="col-md-11 col-12 ">
                        {/* <h2 className="text-uppercase fw-bold pt-0 pt-md-3 pbs-md-2 mb-0">
                          Care 4 Parents
                        </h2> */}
                        <div className="row d-md-block d-none mb-4 mt-3">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-8 d-flex align-items-center ">
                                <h2 className="text-uppercase fw-bold pt-xl-1 pt-3 d-none d-lg-block pb-0 mb-0">
                                  Care 4 Parents
                                </h2>
                              </div>
                              <div className="col-3  d-flex align-items-center justify-content-end col-md-4 mt-3 mt-xl-0 mt-md-0 absolute">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/4+9.png"
                                  className="width"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-capitalize font-size-16 ">
                          Care4Parents is a platform and a concept to make home
                          health care for seniors easy and effective. We become
                          the link between you and your parents so that you can
                          take care of their health from a distance as
                          effectively as you would in person. We are there for
                          you parents in times of illness and ensure they
                          maintain a healthy lifestyle, postponing or altogether
                          avoiding diseases.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-auto  py-md-5 justify-content-between ">
                      <div className="col-md-12 col-5  content_div32 ">
                        <div className="row mx-auto d-flex ">
                          <div className="col-md-3 col-12 px-0  ">
                            <span>200+</span>
                            <h6>Services Given</h6>
                          </div>
                          <div className=" col-md-5 col-12 text-center pe-md-5">
                            <div>
                              <span>4M+</span>
                            </div>
                            <h6 className="text-start text-md-center">
                              Trusted Customers
                            </h6>
                          </div>
                          <div className=" col-md-4 col-11 text-center  px-0">
                            <div className="d-flex align-items-star img1-1 ">
                              <span>41+</span>
                              <h6 className="text-start ms-2  ">
                                Cities Served <br />
                                in India
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-7 px-0">
                        <div className=" col-md-5 col-12 show_mobile pt-4">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/4+10.png"
                            className="width"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-5 col-2 show_desktop px-0">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/4+10.png"
                      className="custom_wdth_of_portfo_images8 width_img"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container d-flex justify-content-around loadbtn pb-4">
          <button
            type="button21"
            className=" d-block rounded-pill btn-outline-secondary  px-4 py-2 "
            onClick={() => setShow(!show)}
          >
            {show ? "Load Less -" : " Load More +"}
          </button>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
