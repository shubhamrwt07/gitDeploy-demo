import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ToastHandle from "../helpers/handleToastify";
import "./home.css";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/aos/dist/aos.css";
// import { useForm } from 'react-hook-form';
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper.min.css";
import axios from "axios";
import Globalmap from "./Globalmap";
import OwlCarousel from "react-owl-carousel";
import { fifthblogs, firstblogs, fourthblogs, sixthblogs } from "../../Assets/image";
import { secondblogs } from "../../Assets/image";
import { thirdblogs } from "../../Assets/image";
import { deliveryApp, edureka, homeimg1, homeimg2, homeimg21, homeimg22, homeimg3, homeimg52, imgHome, imgHome13, imgHome14, imgHome233, imgHome5, imgHome6, imgHome8, imgHome9, imghome23, iphone14, leranPanda, modernImg, mooverImg } from "../../static content/images";


// SwiperCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

function HomePage() {
  const slider_img = [
    // { image: "https://rowthtech.s3.amazonaws.com/iPhone+14+-+14.webp" },
    { image: imgHome },

    { image: mooverImg },
    { image: imgHome5 },
    // { image: "https://rowthtech.s3.amazonaws.com/moover.webp" },
    { image: imgHome6 },

    { image: modernImg },

    { image: deliveryApp },
    { image: iphone14 },
    { image: leranPanda },
    { image: edureka },
  ];

  const industries = [
    {
      image: imghome23,
      heading: "Retail & E-Commerce",
      path: "/retail",
    },
    {
      image: imgHome8,
      heading: "Food & Beverages",
      path: "/food",
    },
    {
      image: imgHome9,
      heading: "Finance & Insurance",
      path: "/finance",
    },
    {
      image: imgHome233,
      heading: "Real Estate",
      path: "/realestate",
    },
    {
      image: imgHome14,
      heading: "Automotive",
      path: "/automotive",
    },
    {
      image: imgHome13,
      heading: "Banking",
      path: "/banking",
    },
  ];
  const Techtrans1 = [
    {
      heading: "Frameworks",
      para: "We help SMEs to Enterprise with our framework services. They easily grow their business.",
    },
    {
      heading: "API Development",
      para: "Our experts use the latest technology in API development. We provide services to every sector.",
    },
    {
      heading: "Responsiveness",
      para: "We give importance to responsive website and app development. It helps to engage more traffic.",
    },
    {
      heading: "Devops",
      para: "It is a crucial part of web & app development. We provide these services to grow your business.",
    },
  ];
  const Techtrans2 = [
    {
      heading: "Android",
      para: "We provide fully customized apps for Android. We have a team of expert developers.",
    },
    {
      heading: "IOS",
      para: "Our professionals provide all solutions for IOS developers at cost effective prices.",
    },
    {
      heading: "Hybrid",
      para: "We provide hybrid solutions for websites & apps at affordable prices.Our team completes projects according to your niche.",
    },
    {
      heading: "Native",
      para: "We have a team of Native developers that are experts in making websites for any genre.",
    },
  ];
  const Techtrans3 = [
    {
      heading: "Technology Consulting",
      para: "Technology consulting advises businesses on how to use technology and software to benefit their operations, including design, development, implementation, and management of new technology.",
    },
    {
      heading: "Businesses need for Tech consulting",
      para: "RowthTech Tech consulting experts help businesses leverage technology to reduce costs, streamline processes, drive strategy, develop talent, inspire innovation, and boost productivity, preparing them for digital transformation.",
    },
    {
      heading: "Value of Technology Consultant",
      para: "RowthTech consultants bring valuable skills to businesses of all sizes, such as improving products, retaining top talent, and driving business growth. With the right mix of skills, knowledge, and determination, you can thrive in this industry.",
    },
    {
      heading: "Experience",
      para: "Being successful in technology consulting, a strong passion for building solutions and a solid foundation in coding are essential. our tech consulting team is well-equipped to provide our clients with the best guidance to transform their businesses.",
    },
  ];

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    navText: false,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      600: {
        items: 4,
      },
      700: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
  };
  // form validation
  const [apiResponse, setApiResponse] = useState("");
  const [showHide, setShowHide] = useState(true);
  const [lorder, setLorder] = useState(true);
  const formDataResponseStatus = apiResponse?.status;
  const formDataResponseMessage = apiResponse?.data?.message;
  const {
    register,
    handleSubmit,
    // unregister,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const handleReset = () => {
    reset({
      email: "",
      name: "",
      msg: "",
      phone: "",
      place: "",
    });
  };
  //blogs

  const submitDataHandle = async (data) => {
    setLorder(false);
    try {
      const response = await axios.post(
        // process.env.REACT_APP_DEV_MODE + "/api/sendmail",
        // "http://localhost:8080/api/sendmail",
        "https://rowthtech.com/api/sendmail",

        data
      );
      setApiResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  // end form validation

  useEffect(() => {
    if (formDataResponseStatus === 200) {
      ToastHandle("success", formDataResponseMessage);
      handleReset();
      setLorder(true);
      setApiResponse(null);
    } else if (formDataResponseStatus === 400) {
      ToastHandle("error", formDataResponseMessage);
    }
  }, [formDataResponseStatus]);

  useEffect(() => {
    if (window.innerWidth >= 280 && window.innerWidth <= 768) {
      setShowHide(false);
    }
  }, [window.innerWidth]);

  return (
    <>
      <div className="main-body">
        <div className="section2 my-4 p-0 py-0 mx-md-4 ">
          <div classNa me=" position-relative row p-0 mx-md-0 mx-3">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={fifthblogs} className="d-block w-100 main-carsousel " loading="lazy" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={sixthblogs} className="d-block w-100 main-carsousel " loading="lazy" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={fourthblogs} className="d-block w-100 main-carsousel " loading="lazy" alt="..." />
                </div>
              </div>
            </div>


            {/* <video
              loop="true"
              autoplay="autoplay"
              muted
              defaultmuted
              preload="auto"
              playsinline
              className=" video_Work px-0"
            >
              <source
                src="https://rowthtech.s3.amazonaws.com/homeVideo.mp4"
                type="video/mp4"
              />
               https://rowthtech.s3.amazonaws.com/homeVideo.mp4
               <source
                src="https://rowthtech.s3.amazonaws.com/MP-Xmas 2.ogv"
                type="video/ogv"
              />
              <source
                type="video/webm"
                src="https://rowthtech.s3.amazonaws.com/MP-Xmas.webm"
              /> 
            </video>  */}

          </div>
        </div>

        <div className="row custom-container mt-3 mt-md-5 mb-5 mx-auto">
          <div className="col-12">
            <div className="row  mx-lg-0 px-lg-0">
              <div className="col-6 px-0 px-md-2 col-md-4 p-md-0">
                <div className="row d-flex align-items-center height communication_textParent  mx-auto left_sideImgParent position-relative">
                  <img
                    className="width_heigth"
                    src={homeimg1}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                  <div className="col-12 d-flex position-absolute  top-0 bottom-0 p-md-0  ">
                    <div className="row height mx-auto px-3 px-md-5 py-3 py-md-5 add_scroll_height">
                      <div className="col-12 p-0 add_heigh">
                        <h2 className=" about_heading m-0 fw-bold text-white text-uppercase ">
                          Experts
                        </h2>
                        <h2 className=" about_heading m-0 fw-bold text-white text-uppercase">
                          <span className="about_para">With</span> Industry
                        </h2>
                        <h2 className=" about_heading m-0 fw-bold text-white text-uppercase">
                          Experience,
                        </h2>
                        <h2 className=" about_para m-0 text-white text-uppercase">
                          On-Demand
                        </h2>
                      </div>
                      <div className="col-12 py-2 px-0 px-md-0 p-md-0 about_content">
                        <p className="m-0 p-0 pt-0 pt-md-2 text-white">
                          Whether you need help with strategy development,
                          virtual assistant support, or other business
                          solutions, our team of industry experts are here to
                          help. With flexible, on-demand access and the ability
                          to modify our solutions to fit your needs, we're your
                          go-to source for business success.
                        </p>
                      </div>
                      <div className="col-12 d-flex align-items-center justify-content-end d-none">
                        <div className="row">
                          <div
                            className="col-12 border_team_over px-md-3 py-1
                          "
                          >
                            <p className="m-0 p-0 over_team_data">
                              <span className="m-0 p-0 low_font-weight">
                                TEAM
                              </span>
                              <br />
                              OVER <br />
                              105+
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-8 p-0">
                <div className="row pb-0 pb-md-4 mx-auto">
                  <div className="col-12 col-md-5 right_sideImgParent d-flex align-items-end position-relative  ps-0 ps-md-2">
                    <img
                      className="width_heigth"
                      src={homeimg2}
                      alt="rowthtech_img"
                      loading="lazy"

                    />
                    <div className="col-12 position-absolute communication_textParentright top-0 end-0 start-0 bottom-0  text-white add_scroll_height">
                      <div className=" about_content px-2 px-md-5 ">
                        <h2 className="m-0 pt-3 pt-md-4 ps-1 px-2 px-md-0">
                          COMMUNICATION
                        </h2>
                        <p className=" py-2 pt-2 px-2 ps-1 pe-3 px-md-0">
                          We communicate with a client to exchange our views. We
                          discuss plans. Once clients approve the plans, we
                          begin or work on them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 mt-2 mt-md-0  right_sideImgParent d-flex align-items-end position-relative  ps-0 ps-md-2">
                    <img
                      className="width_heigth"
                      src={homeimg3}
                      alt=" "
                      loading="lazy"

                    />

                    <div className="col-12 position-absolute communication_textParentright top-0 end-0 start-0 bottom-0  text-white add_scroll_height">
                      <div className="about_content px-3 ps-1 px-md-5 ">
                        <h2 className="m-0 pt-3 pt-md-4 px-2 px-md-0">
                          FEEDBACK
                        </h2>
                        <p className="m-0 py-2 pt-2 px-2 px-md-0 pb-3 ">
                          We provide regular updates to the client & discuss all
                          details with clients. We listen and exchange views to
                          provide an engaging platform. It helps to take
                          projects to the next level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-auto mt-2 mt-md-0 mobile_flex">
                  <div className="col-6 col-md-7 right_sideImgParent position-relative">
                    <img
                      className="width_heigth"
                      src={homeimg52}
                      alt="rowthtech_img"
                      loading="lazy"

                    />
                    <div className="col-12  add_scroll_height position-absolute communication_textParentright top-0 end-0 start-0 bottom-0  text-white">
                      <div className="about_content px-3 px-md-5 pt-md-4 ">
                        <div className="row m-0">
                          <div className="col-12 mb-md-0 mb-0 col-4 m-0 p-0 ">
                            <h2 className="m-0 pt-3 pt-md-0 px-md-3 px-2 px-md-0">
                              FLEXIBLE BUSINESS MODEL
                            </h2>
                          </div>
                          <div className="col p-md-0 pb-3 px-0 pt-0">
                            <p className="m-0 px-md-3 px-2 pt-2 px-md-0">
                              Our professionals help you engage more customer
                              with our flexible business strategies. Our virtual
                              assistants assist in every area. You can also ask
                              us for modifications at any point.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-5 right_sideImgParent position-relative ps-0 ps-md-2">
                    <img
                      className="width_heigth"
                      src={homeimg21}
                      alt="rowthtech_img"
                      loading="lazy"

                    />

                    <div className="col-12 position-absolute communication_textParentright top-0 end-0 start-0 bottom-0  text-white add_scroll_height">
                      <div className="about_content mb-3 ps-1 px-3 px-md-5 pt-md-4 ">
                        <div className="row m-0 ">
                          <div className="col-12 mb-md-0 mb-0 m-0 p-0">
                            <h2 className="m-0 pt-3 pt-md-0 px-2 px-md-0">
                              SOURCE CODE
                            </h2>
                          </div>
                          <div className="col p-0">
                            <p className="m-0 px-2 pt-2 px-md-0">
                              We offer you an engaging agreement. You are the
                              exclusive proprietor of source code & intellectual
                              proprietor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Globalmap />
        <div
          className="X-grapics custom-container technical_section position-relative overflow-hidde mb-0 mb-md-4 mt-md-0 aos-init aos-animate"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <div className="containerFor1600px">
            <div className="row mx-auto">
              <div className="col-md-12 position-relative mx-auto text-center mt-lg-0 mt-md-5">
                <div className="Content-Heading services-section sub_headingParentText">
                  <h4>
                    Technical
                    <span className="Transformation ms-1">Transformation </span>
                    Services
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mx-auto pt-md-0 pt-3 techinal_tabConta">
              <div className="forTabs col-12 align-items-start py-4 mt-md-3 mb-3 ">
                <div className="row mx-auto add_height_transformation">
                  <div className="col-auto">
                    <div
                      className="nav col-lg-12 mt-3 mb-md-0 mb-4 tabs nav-pills text-center d-flex d-md-block flex-row flex-nowrap me-md-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link fw-bold pe-md-3 py-1 pe-xl-5 pe-lg-3 px-2 py-xl-2 py-lg-2 py-md-2 d-flex align-items-center justify-content-center py-0 position-relative active ms-md-auto mt-md-0 nav_data"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                        href
                      >
                        Web Development
                      </a>
                      <a
                        className="nav-link fw-bold pe-md-3 py-1 pe-xl-5 pe-lg-3 px-2 py-xl-2 py-lg-2 py-md-2 d-flex align-items-center justify-content-center py-0 position-relative ms-md-auto my-md-5 nav_data"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                        href
                      >
                        Mobile Development
                      </a>
                      <a
                        className="nav-link fw-bold pe-md-3 py-1 pe-xl-5 pe-lg-3 px-2 py-xl-2 py-lg-2 py-md-2 d-flex align-items-center justify-content-center py-0 position-relative ms-md-auto nav_data"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                        href
                      >
                        Technology Consulting
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-xl col-lg col-md">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <div className="col mt-md-0 mt-4">
                          <div className="row mx-auto  justify-content-around">
                            {Techtrans1.map((tech) => {
                              const { heading, para } = tech;
                              return (
                                <div className="col-md-6 mt-md-3">
                                  <div className="row mx-auto mb-md-0 mb-4 col-12 py-2 API-Development">
                                    <div className="col-12">
                                      <h6 className="fw-bold">{heading}</h6>
                                      <p className="para-text-forReveiw mb-0 ">
                                        {para}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <div className="col mt-4 mt-md-0">
                          <div className="row mx-auto justify-content-around">
                            {Techtrans2.map((tech) => {
                              const { heading, para } = tech;
                              return (
                                <div className="col-md-6 mt-md-3">
                                  <div className="row mx-auto mb-md-0 mb-4 col-12 py-2 API-Development">
                                    <div className="col-12">
                                      <h6 className="fw-bold">{heading}</h6>
                                      <p className="para-text-forReveiw mb-0 ">
                                        {para}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        <div className="col mt-4 mt-md-0">
                          <div className="row mx-auto justify-content-around">
                            {Techtrans3.map((tech) => {
                              const { heading, para } = tech;
                              return (
                                <div className="col-md-6 mt-md-3">
                                  <div className="row mx-auto mb-md-0 mb-4 col-12 py-2 API-Development">
                                    <div className="col-12">
                                      <h6 className="fw-bold">{heading}</h6>
                                      <p className="para-text-forReveiw mb-0 ">
                                        {para}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container services-section sub_headingParentText mb-4">
          <h4 className="text-center m-0">
            Actions<span className="Transformation"> Speaks Louder </span> Than
            Words
          </h4>
        </div>
        <div className="main-swiper d-md-flex mt-md-5 overflow-hidden mb-md-5 position-relative  mt-0 mb-0">
          <div className=" swiperheight custom_padding w-100  position-absolute">
            <div className="swipercenterimg"></div>
            <Swiper
              effect={"coverflow"}
              grabCursor={!1}
              centeredSlides={!0}
              speed={2e3}
              loop={true}
              autoplay={true}
              spaceBetween={40}
              autoHeight={false}
              allowTouchMove={true}
              preloadImages={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 1,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: false }}
              className="mySwiper"
              breakpoints={{
                1024: {
                  spaceBetween: 20,
                },
                500: {
                  spaceBetween: 12,
                },
                400: {
                  spaceBetween: 12,
                },
                300: {
                  spaceBetween: 8,
                },
              }}
            >
              {slider_img.map((elem) => {
                return (
                  <div className="swiper-slide">
                    <SwiperSlide>
                      <img className="imgheight" src={elem.image} alt="rowthtech_img"
                        loading="lazy" />
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className=" carouselWork container-fluid  mx-auto retail_section ">
          <div className="row mx-auto">
            <div className="col-12 ms-1 ps-md-2 ">
              <div className="container row mx-auto services-section sub_headingParentText mt-4 mt-md-0">
                <h4 className="text-center  ">
                  <span className="Transformation "> INDUSTRIES </span> WE SERVE
                </h4>
              </div>
            </div>
            <div className=" overflow-visible mb-3 mt-5 my-md-5 px-0">
              <OwlCarousel
                className="owl-theme"
                {...options}
                loop
                margin={10}
                nav
              >
                {industries.map((ind) => {
                  const { image, heading, path } = ind;
                  return (
                    <div className="col  mx-md-3 mx-1">
                      <div className="row mx-auto position-relative">
                        <div className="col-12 text-center  p-0">
                          <img
                            className="width radius_for_width"
                            src={image}
                            alt="rowthtech_img"
                            loading="lazy"

                          />
                        </div>
                        <div className="col-12 px-0 retail_section1 mx-auto text-center text-white text-uppercase position-absolute bottom-0 top-0 d-flex">
                          <div className="row height mx-auto  d-flex align-items-center">
                            <div className="col-12 mt-auto mb-3 mx-auto">
                              <h5>{heading}</h5>
                            </div>
                            <div className="col mx-auto viewMore_btn mt-auto mb-3 d-none">
                              <Link
                                className="carousel_btnParent mx-auto "
                                to={path}
                              >
                                <button
                                  type="button "
                                  className="btn btn-transparent carousel_btn width text-white"
                                >
                                  View More
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>

        {/* new blogs show */}
        <div className="container-fluid mb-0 mt-4 p-lg-5" style={{ background: 'linear-gradient(#b1b1b1, #646464)', fontFamily: "Poppins" }}>
          <div className="row mx-auto">
            <h4 className="text-center mt-3">
              <span className="Transformation">ROWTHTECH </span> BLOGS
            </h4>
            <div className="col-12 col-sm-12 mt-3 col-md-6 col-lg-6 d-lg-flex justify-content-lg-end">

              <div className="">
                <h2 className="fw-bold">Stay Ahead with</h2>
                <h2 className="fw-bold">Technology Insights</h2>
                <p className="" style={{ fontSize: "15px" }}>Discover cutting-edge insights and industry expertise on our <br />blog, where we share the latest trends, technologies, and <br /> solutions in the IT world.Stay informed and ahead with our  <br />expert analyses and practical advice.
                </p>
                <Link to={"/blog"} style={{ textDecorationLine: "none" }}>
                  <div className="d-lg-flex justify-content-lg-end">
                    <div className="card card-main bg-white shadow text-center border-white px-3 mb-0 mt-5 " >
                      <img src={thirdblogs} className="card-img-top rounded-4 m-0 mt-3" alt="..." />
                      <div className="card-body m-0 mt-0 text-start">
                        <h5 className="card-title fw-bold">Architect</h5>
                        <p className="card-text" style={{ fontSize: "14px" }}>Maximize performance and enchance operational efficiency through precise engineering.</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 mt-lg-3 col-lg-6">
              <Link to={"/blog"} style={{ textDecorationLine: "none" }}>
                <div className="card-card  ">
                  <div className="card  card-main bg-white shadow text-center border-white px-3  mb-0 mt-5 ">
                    <img src={firstblogs} className="card-img-top rounded-4 m-0 mt-3  " alt="..." />
                    <div className="card-body m-0 mt-0 text-start">
                      <h5 className="card-title fw-bold">Adapt</h5>
                      <p className="card-text" style={{ fontSize: "14px" }}>Adapt strategically to stay ahead in the ever-changing digital landscape.</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/blog"} style={{ textDecorationLine: "none" }}>
                <div className="card-card  ">
                  <div className="card card-main bg-white shadow text-center border-white px-3  mb-3 mt-5 " >
                    <img src={secondblogs} className="card-img-top rounded-4 m-0 mt-3  " alt="..." />
                    <div className="card-body m-0 mt-0 text-start">
                      <h5 className="card-title fw-bold">Transform</h5>
                      <p className="card-text" style={{ fontSize: "14px" }}>Unleash advanced creativity to develop breakthrough solutions that lead the market.</p>
                    </div>
                  </div>
                </div>
              </Link>

            </div>

          </div>
        </div>


        <div className="container-fluid bg_color" id="contact">
          <div className=" Homepage custom-container last_section">
            <div className="row mx-auto ms-lg-5">
              <div className="col-12 px-0">
                <div className="row mx-auto">
                  <div className="col-md-4 my-3 my-md-auto col-12">
                    <div className="row Engage_textParent ps-lg-5 ps-xl-5 ps-md-5 px-0 mt-4 mx-auto">
                      <div className="col-md-12 col-6 col-lg-12  text-capitalize">
                        <h4 className="show_desktop Engage_textchild fw-bold">
                          <span className="d-block text-dark ">
                            <span className=" d-inline-block position-relative text-dark upr_img_text">
                              Engage In
                              <img
                                className="Desktopthree_line show_desktop"
                                src="https://rowthtech.s3.amazonaws.com/orangeline.png"
                                alt="rowthtech_img"
                                loading="lazy"

                              />
                            </span>
                          </span>
                          <span className=" d-inline-block position-relative text-dark me-1">
                            Conversation,
                          </span>
                          <span className="d-block"> Lets Talk</span>
                        </h4>
                        <h4 className="show_mobile mb-0">
                          <span className="show_mobile text-dark">
                            Engage i
                            <span className=" d-inline-block position-relative">
                              n
                              <img
                                className=" Mobilethree_line show_mobile"
                                src={homeimg22}
                                alt="rowthtech_img"
                                loading="lazy"

                              />
                            </span>
                            conversation,
                          </span>
                          Lets Talk
                        </h4>
                      </div>
                      <div className="col-md-12 col-6 ps-lg-2 ps-xl-2 d-flex ps-5 mt-md-0 ms-md-0 mb-0 flex-column justify-content-center text-start proftxt text-capitalize ">
                        <p className="mb-0   Engage_textchild2 d-flex">
                          Our professionals
                          <span className="show_desktop ps-2">will</span>
                        </p>
                        <p className="mb-0 Engage_textchild2 d-flex">
                          <span className="show_mobile">will</span>contact you
                          <span className="show_desktop ms-1">Promptly!</span>
                        </p>
                        <p className="mb-0 show_mobile">Promptly!</p>
                      </div>
                    </div>
                  </div>
                  {showHide === true ? (
                    <div className="col-8 mt-2 mt-md-4 pt-md-4 position-relative  show_desktop">
                      <form
                        onSubmit={handleSubmit(
                          (data) => {
                            submitDataHandle(data);
                          },
                          (err) => {
                            console.log(err);
                          }
                        )}
                      >
                        <div className="row mx-auto position-relative  background_grd ">
                          <div className="col-12 mx-auto p-4  form_container border-backgroundd">
                            <div className="row inner_frmDiv position-relative p-3">
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-6">
                                    <input
                                      type="tel"
                                      {...register("phone", {
                                        required: true,
                                        pattern: {
                                          value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                          pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                                        },
                                        maxLength: 10,
                                        minLength: 10,
                                      })}
                                      x
                                      className="form-controll px-3 w-100"
                                      placeholder="Mobile No"
                                    />
                                    {errors?.phone?.type === "required" && (
                                      <span className="text-danger">
                                        Please enter your Mobile No
                                      </span>
                                    )}
                                    {errors?.phone?.type === "pattern" && (
                                      <span className="text-danger">
                                        only numbers allowed.
                                      </span>
                                    )}
                                    {errors?.phone?.type === "minLength" && (
                                      <span className="text-danger">
                                        Min Length 10
                                      </span>
                                    )}
                                    {errors?.phone?.type === "maxLength" && (
                                      <span className="text-danger">
                                        Max Length 10
                                      </span>
                                    )}
                                  </div>
                                  <div className="col-6">
                                    <input
                                      type="text"
                                      {...register("place", {
                                        required: true,
                                      })}
                                      className="form-controll px-3 w-100"
                                      placeholder="Organization"
                                    />
                                    {errors?.place?.type === "required" && (
                                      <span className="text-danger">
                                        Please enter Organization
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 py-4">
                                <div className="row">
                                  <div className="col-6">
                                    <input
                                      type="text"
                                      {...register("name", {
                                        required: true,
                                      })}
                                      className="form-controll px-3 w-100"
                                      placeholder="Full Name"
                                      aria-label="Username"
                                    />
                                    {errors?.name?.type === "required" && (
                                      <span className="text-danger">
                                        Please enter your Full Name
                                      </span>
                                    )}
                                  </div>
                                  <div className="col-6">
                                    <input
                                      type="text"
                                      {...register("email", {
                                        required: true,
                                        pattern: {
                                          value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          message: "invalid email address",
                                        },
                                      })}
                                      className="form-controll px-3 w-100"
                                      placeholder="Email"
                                      aria-label="Username"
                                    />
                                    {errors?.email?.type === "required" && (
                                      <span className="text-danger">
                                        Please enter your email address
                                      </span>
                                    )}
                                    {errors?.email?.type === "pattern" && (
                                      <span className="text-danger">
                                        invalid email address
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="row pb-4">
                                  <div className="col-12">
                                    <textarea
                                      {...register("msg", {
                                        required: true,
                                      })}
                                      className="form-controll p-3 widthh"
                                      placeholder="Leave Your Message"
                                      cols="12"
                                      rows="3"
                                    ></textarea>
                                    {errors?.msg?.type === "required" && (
                                      <span className="text-danger">
                                        Please enter Message
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="col-12 d-md-flex align-items-end justify-content-center pb-4">
                                  <button className="button w-25 hover">
                                    {lorder === false ? (
                                      <div className="d-flex justify-content-center">
                                        <div
                                          className="spinner-border my-2"
                                          role="status"
                                        >
                                          <span className="visually-hidden ">
                                            Loading...
                                          </span>
                                        </div>
                                      </div>
                                    ) : (
                                      <span>Submit</span>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="col-md-8 mt-md-2 px-0 show_mobile ">
                      <form
                        onSubmit={handleSubmit(
                          (data) => {
                            submitDataHandle(data);
                          },
                          (err) => {
                            console.log(err);
                          }
                        )}
                      >
                        <div className="row mx-auto d-md-flex flex-md-column justify-content-md-between ">
                          <div className="col-12 mx-auto p-2 border form_container border-backgroundd">
                            <div className="row inner_frmDiv position-relative p-3">
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-6">
                                    <input
                                      type="tel"
                                      {...register("phone", {
                                        required: true,
                                        pattern: {
                                          value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                        },
                                        maxLength: 10,
                                        minLength: 10,
                                      })}
                                      isInvalid={errors.firstName}
                                      className={
                                        errors?.phone?.type === "required" ||
                                          errors?.phone?.type === "pattern" ||
                                          errors?.phone?.type ||
                                          errors?.phone?.type === "maxLength"
                                          ? "form-controll py-2 input_errors px-3 w-100"
                                          : "form-controll px-3 w-100"
                                      }
                                      placeholder="Mobile No"
                                    />
                                  </div>
                                  <div className="col-6">
                                    <input
                                      type="text"
                                      {...register("name", {
                                        required: true,
                                      })}
                                      className={
                                        errors?.name?.type === "required"
                                          ? "form-controll input_errors py-2 px-3 w-100"
                                          : "form-controll  px-3 w-100"
                                      }
                                      placeholder="Organization"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 py-2">
                                <div className="row">
                                  <div className="col-6">
                                    <input
                                      type="text"
                                      {...register("mName", {
                                        required: true,
                                      })}
                                      className={
                                        errors?.mName?.type === "required"
                                          ? "form-controll input_errors py-2 px-3 w-100"
                                          : "form-controll px-3 w-100"
                                      }
                                      placeholder="Full Name"
                                      aria-label="Username"
                                    />
                                  </div>
                                  <div className="col-6">
                                    <input
                                      type="text"
                                      {...register("email", {
                                        required: true,
                                        pattern: {
                                          value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          message: "invalid email address",
                                        },
                                      })}
                                      className={
                                        errors?.email?.type === "required" ||
                                          errors?.email?.type === "pattern"
                                          ? "form-controll input_errors py-2 px-3 w-100"
                                          : "form-controll  px-3 w-100"
                                      }
                                      placeholder="Email"
                                      aria-label="Username"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="row mx-auto">
                                  <div className="col-12 px-0">
                                    <textarea
                                      className={
                                        errors?.place?.type === "required"
                                          ? "form-controll w-100  input_errors textarea  p-3 widthh"
                                          : "form-controll w-100 textarea  p-3 widthh"
                                      }
                                      placeholder="Leave Your Message"
                                      {...register("place", {
                                        required: true,
                                      })}
                                      cols="12"
                                      rows="3"
                                    ></textarea>
                                  </div>
                                </div>

                                <div className="col-12 mt-2 d-flex align-itmes-center justify-content-center pb-3 pb-md-5">
                                  <button className="buttonphn ">
                                    {lorder === false ? (
                                      <div className="d-flex justify-content-center">
                                        <div
                                          className="spinner-border my-2"
                                          role="status"
                                        >
                                          <span className="visually-hidden ">
                                            Loading...
                                          </span>
                                        </div>
                                      </div>
                                    ) : (
                                      <span>Submit</span>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
