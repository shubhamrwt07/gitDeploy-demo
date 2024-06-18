import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../OurServices/mobiledevelopment.css";
import { Carousel } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import axios from "axios";

import { Link } from "react-router-dom";

const MobileDevelopment = () => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });
  const onSubmit = async (data) => {

    try {
      data.phone = value;
      const response = await axios.post(
        "https://rowthtech.com/api/sendrequirementmail",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Send successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        reset();
        setValue("+91");
      } else {
        console.error("Error sending email:", response.data.message);
        toast.error("Error sending email", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error("Error sending email:", error, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("Error sending email:", error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
      setValue("+91");
    }
  };
  const [value, setValue] = useState('+91');

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [counts, setCounts] = useState({
    appDeveloped: 0,
    appDevelopers: 0,
    industriesServed: 0,
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const updateCounts = () => {
      // Update counts gradually
      const interval = setInterval(() => {
        setCounts((prevCounts) => ({
          appDeveloped:
            prevCounts.appDeveloped < 5000
              ? prevCounts.appDeveloped + 50
              : 5000,
          appDevelopers:
            prevCounts.appDevelopers < 7000
              ? prevCounts.appDevelopers + 70
              : 7000,
          industriesServed:
            prevCounts.industriesServed < 350
              ? prevCounts.industriesServed + 15
              : 350,
        }));
      }, 200); // Adjust the interval as per your preference

      return () => clearInterval(interval);
    };

    updateCounts();
  }, []);
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
    toast.error("please fill the form and contact us..", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const data = [
    { img: "https://rowthtech.s3.amazonaws.com/first.png", title: "On Demand", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/second.png", title: "Ecommerce", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/third.png", title: "Food", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/fourth.png", title: "Pickup", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/fifth.png", title: "Blockchain", subtitle: "Mobile Development" },
  ];
  const data2 = [
    { img: "https://rowthtech.s3.amazonaws.com/sixth.png", title: "Laundry", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/seventh.png", title: "Banking", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/eight.png", title: "Healthcare", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/ninth.png", title: "Education", subtitle: "Mobile Development" },
    { img: "https://rowthtech.s3.amazonaws.com/tenth.png", title: "Realstate", subtitle: "SMobile Development" },
  ];
  const [activeCarousel, setActiveCarousel] = useState(null);

  const handleButtonClick = (carousel) => {
    setActiveCarousel(carousel);
  };

  return (
    <>
    <div className="main">
      <section>
        {/* main header with form */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 bg-main-img px-0 w-100 rounded-5 mt-5"
              ref={formRef}
            >
              <div className="bg-op">
                <div className="row mx-auto top_zero d-flex justify-content-evenly px-lg-5 px-md-3 px-2 mb-lg-5">
                  <div className="col-lg-7 col-md-7 col-sm-12 pe-lg-5">
                    <div className="mt-5">
                      <p className="text-white fw-medium fs-1 m-0 mt-lg-5 mt-md-0 opacity-100">
                        We Are #1
                      </p>
                      <div className="main-header">
                        <p className="px-lg-2 py-lg-3 px-md-2  m-0">
                          Mobile App Development
                        </p>
                      </div>
                      <p className="fs-1 text-white fw-medium">Company Dubai</p>
                      <p className="text-white m-0 text-size-paragraph p-0 mt-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                  {/* desktop form  */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-5 mt-md-5 header-form">
                    <form
                      className="border shadow rounded-3 bg-white mx-auto"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="p-3">
                        <p className="fs-3 fw-bold text-size-header">Get Free Quote!</p>
                        <div className="form-floating">
                          <input
                            type="text"
                            id="floatingInputName"
                            className={`w-100 p-2 inputs form-control bg-none px-0 m-0 border-bottom border-0 ${errors.name ? "is-invalid" : ""
                              }`}
                            placeholder="Your Name*"
                            {...register("name", { required: true })}
                          />
                          <label htmlFor="floatingInputName">Your Name*</label>
                          {errors.name && (
                            <span className="invalid-feedback">Name is required.</span>
                          )}
                        </div>

                        <div className="form-floating">
                          <input
                            type="email"
                            id="floatingInputEmail"
                            className={`w-100 p-2 inputs form-control bg-none px-0 m-0 border-bottom border-0 ${errors.email ? "is-invalid" : ""
                              }`}
                            placeholder="Email*"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                          />
                          <label htmlFor="floatingInputEmail">Email*</label>
                          {errors.email && (
                            <span className="invalid-feedback">
                              Invalid email address.
                            </span>
                          )}
                        </div>

                        <div className="form-floating mt-3">
                          {/* <label htmlFor="floatingInputPhone" style={{ marginBottom: '5px' }}>Phone No*</label> */}
                          <PhoneInput
                            id="floatingInputPhone"
                            country={"in"} // Set default country to India
                            inputClass={`w-100 p-2 d-flex phone-input inputs form-control bg-none px-0 m-0 border-none outline-none ${errors.phone ? "is-invalid" : ""}`}
                            placeholder="Phone No*"
                            {...register("phone", {
                              required: "Phone number is required",
                              validate: {
                                validLength: (value) => value?.replace(/\D/g, '').length === 12 || 'Phone number must be exactly 12 digits',
                              },
                            })}
                            value={value}
                            onChange={setValue}
                          />
                          {errors.phone && (
                            <span className="invalid-feedback">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>

                        <div className="form-floating mb-3">
                          <textarea
                            className={`w-100 form-control inputs-2 mb-0 bg-none border-bottom border-0 ${errors.description ? "is-invalid" : ""
                              }`}
                            placeholder="What’s Your Project about*"
                            id="floatingInputDescription"
                            {...register("description", { required: true })}
                          ></textarea>
                          <label htmlFor="floatingInputDescription">
                            What’s Your Project about*
                          </label>
                          {errors.description && (
                            <span className="invalid-feedback">
                              Project description is required.
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="btn button-back mt-4 fw-bold d-block"
                        >
                          <i className="bi bi-circle-fill me-2"></i> Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* number  */}
        <div className="container mt-5">
          <div className="row mx-auto">
            <div className="col-12 col-md-4 col-lg-4 col-sm-12 text-center mb-4">
              <p
                className="fw-bolder m-0 mb-0"
                style={{ fontSize: "42px" }}
              >
                {counts.appDeveloped}+
              </p>
              <div className="d-flex justify-content-center">
                <div className="only"></div>
                <p className="mt-1 ms-3 m-0 text-size-paragraph">
                  App Developed
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-sm-12 text-center mb-4">
              <p
                className="fw-bolder m-0 mb-0 px-0"
                style={{ fontSize: "42px" }}
              >
                {counts.appDevelopers}+
              </p>
              <div className="d-flex justify-content-center m-0">
                <div className="only"></div>
                <p className="mt-1 ms-3 m-0 text-size-paragraph">
                  App Developers
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-sm-12 text-center mb-4">
              <p
                className="fw-bolder m-0 mb-0 px-0"
                style={{ fontSize: "42px" }}
              >
                {counts.industriesServed}+
              </p>
              <div className="d-flex justify-content-center m-0">
                <div className="only"></div>
                <p className="mt-1 ms-3 m-0 text-size-paragraph">
                  Industries Served
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* leading paragraph */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-5">
              <div className="row mx-auto">
                <div className="col-12 col-md-6 col-lg-6 col-sm-6 d-flex justify-content-center align-items-center text-sm-center ">
                  <div className="">
                    <p className="m-0 text-size-header fw-bold">
                      Leading Mobile App Development
                    </p>
                    <p className="text-size-header fw-bold ">
                      Company in Dubai For A Reason
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg -6 col-sm-6 text-sm-center">
                  <div className="">
                    <p className="text-size-paragraph">
                      As a top mobile app development company in Dubai, we
                      deliver highly engaging Android and iPhone mobile app
                      solutions. Our experienced iOS, Iphone apps developers,
                      and Android Apps developers team in Dubai makes it
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* big image */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 p-0 mt-5 m-0  py-0 ">
              <img src={"https://rowthtech.s3.amazonaws.com/img2.png"} className="m-0 printimg" alt="rowthtech_img" loading="lazy"/>
            </div>
          </div>
        </div>

        {/* paragraph with some content or button*/}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-3">
              <div className="row mx-auto">
                <div className="col-12 col-md-9 col-lg-9 col-sm-12">
                  <p className="m-0 fw-bolder text-size-header">
                    Choose A Renowned App Development Company Dubai
                  </p>
                  <p className="fw-bolder text-size-header mt-1">
                    To Take Your Business To The Next-Level
                  </p>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-sm-12 mt-3">
                  <button
                    onClick={handleScrollToForm}
                    className="btn btn-warning text-size-paragraph fw-bolder p-lg-2"
                  >
                    <i className="fa-sharp fa-solid fa-circle-dot input border-2 me-2 border-dark"></i>
                    Let’s Build Together
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* one glass guy with paragraph */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 bg2-image mt-5">
              <div className="row mx-auto">
                <div className="col-12 col-md-3 col-lg-3 col-sm-12  text-center d-flex align-items-center justify-content-center">
                  <img src={"https://rowthtech.s3.amazonaws.com/img4.png"} className="w-25 white-div" alt="rowthtech_img" loading="lazy" />
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-sm-12  text-center mt-3 text-white d-flex justify-content-center flex-column">
                  <p className="text-size-header">
                    Trusted By The Ruler Of Dubai
                  </p>
                  <p className="text-size-paragraph">
                    Online trading platform to buy and sell endurance horses
                    worldwide.
                  </p>
                </div>
                <div className="col-12 col-md-5 col-lg-5 col-sm-12 text-center d-flex align-items-center justify-content-center">
                  <img src={"https://rowthtech.s3.amazonaws.com/img5.png"} className="w-100 ms-5" alt="rowthtech_img" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 10 content */}
        <div className="container mt-lg-5">
          <div className="row mx-auto">
            {data?.map((data, index) => (
              <div
                className={`col-lg col-md-5 col-sm-12 m-1 hover-container`}
                key={index}
              >
                <div className="hover-content" onMouseEnter={handleHover}>
                  <img src={data.img} className="w-100" alt="rowthtech_img" loading="lazy"/>
                  <div className="d-flex justify-content-evenly border shadow rounded-2 mt-3 p-2">
                    <div className="">
                      <p className="m-0 fw-bold text-size-paragraph">
                        {data.title}
                      </p>
                      <p className="text-size  mb-0">{data.subtitle}</p>
                    </div>
                    <div className="ms-4">
                      <i className="bi bi-arrow-right-circle-fill text-warning fs-5"></i>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="text-center py-2 rounded-2 mt-5">
                      <div className="p-2 text-white">
                        <p className="m-0 fw-bold">{data.title}</p>
                        <p className="text-size">{data.subtitle}</p>
                      </div>
                      <div className="mt-2 text-center">
                        <button className="btn shadow rounded-5 fw-bold text-white">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mx-auto">
            {data2?.map((data, index) => (
              <div
                className={`col-lg col-md-5 col-sm-12  m-1 hover-container`}
                key={index}
              >
                <div className="hover-content" onMouseEnter={handleHover}>
                  <img src={data.img} className="w-100" alt="rowthtech_img" loading="lazy" />
                  <div className="d-flex justify-content-evenly border shadow rounded-2 mt-3 p-2">
                    <div className="">
                      <p className="m-0 fw-bold">{data.title}</p>
                      <p className="text-size mb-0">{data.subtitle}</p>
                    </div>
                    <div className="ms-4">
                      <i className="bi bi-arrow-right-circle-fill text-warning fs-5"></i>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div className="text-center py-2 rounded-2 mt-5">
                      <div className="p-2 text-white">
                        <p className="m-0 fw-bold">{data.title}</p>
                        <p className="text-size">{data.subtitle}</p>
                      </div>
                      <div className="mt-2 text-center">
                        <button className="btn shadow rounded-5 fw-bold text-white">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* big heading */}
        <div class="container mt-5">
          <div class="row mx-auto">
            <div class="col-12">
              <p class="fw-bold m-0 text-size-header">
                We’re A Super-Loved
              </p>
              <p class="fw-bold text-size-header">
                Mobile App Development Company UAE
              </p>
            </div>
          </div>
        </div>
      </section >
      {/* flip photo or content */}
      <section>
        <div className="container mt-5">
          <div className=" row mx-auto justify-content-center">
            {/* Testimonial 1 */}
            <div className="col-12 col-lg-5 mb-5">
              <div className="flip-box w-100">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="p-2 bg-secondary rounded-4 m-1 testimonial-item">
                      <div className="bg-images text-start p-4">
                        <img src="https://rowthtech.s3.amazonaws.com/dot.png" className="img-fluid" alt="rowthtech_img" loading="lazy"/>
                        <p className="text-white mt-3 text-size-paragraph">
                          “Serial entrepreneur and Founder of RowthTech a global technology and analytics services company. At RTL, we go beyond helping businesses transform through technology. We help them make a meaningful difference. Translating their aspiration into reality.

                          I believe every business is born out of belief, the belief that you can make an impact, and that you have an Idea that matters. Drop us a line to talk more about the next big revolution.”
                        </p>
                        <div className="d-flex align-items-center mt-3">
                          <img src="https://rowthtech.s3.amazonaws.com/Raavish-sir.webp" className="w-25 h-25 rounded-circle" alt="rowthtech_img" loading="lazy"/>
                          <div className="title text-white text-size-paragraph ms-4 ">
                            <p className="m-0 mt-3">RAAVISH DAHUJA</p>
                            <p>FOUNDER & CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <img
                      className="position-relative w-100 h-100 img-fluid"
                      src="https://rowthtech.s3.amazonaws.com/Raavish-sir.webp"
                      alt="Raavish Dahujha"
                      loading="lazy"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-evenly">
                        <img src="https://rowthtech.s3.amazonaws.com/Raavish-sir.webp" className="w-25 h-25 rounded-circle" alt="rowthtech_img" loading="lazy"/>
                        <div className="title text-white text-size-paragraph fw-bold">
                          <p className="m-0 mt-5">RAAVISH DAHUJA</p>
                          <p className="">FOUNDER & CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-12 col-lg-5 mb-5">
              <div className="flip-box w-100">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="p-2 bg-secondary rounded-4 m-1 testimonial-item">
                      <div className="bg-images text-start p-4">
                        <img src="https://rowthtech.s3.amazonaws.com/dot.png" className="img-fluid" alt="rowthtech_img" loading="lazy" />
                        <p className="text-white mt-3 text-size-paragraph">
                          I have 13+ years of rich experience in Product development, I am an expert in technology forecasting, strategic planning, and implementing business requirements with technology. Our processes are easy to understand and follow, and we do not let them hinder us when developing applications. We have experience in both Waterfall and DevOps methodologies and can provide secure infrastructure to serve global customers.
                        </p>
                        <div className="d-flex align-items-center mt-3">
                          <img src="https://rowthtech.s3.amazonaws.com/mukeshsir2.webp" className="w-25 h-25 rounded-circle" alt="rowthtech_img" loading="lazy"/>
                          <div className="title text-white ms-4 text-size-paragraph ">
                            <p className="m-0 mt-3">MUKESH BHANDARI</p>
                            <p>HEAD OF DEPARTMENT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <img
                      className="position-relative w-100 h-100 img-fluid"
                      src="https://rowthtech.s3.amazonaws.com/mukeshsir2.webp"
                      alt="Mukesh Bhandari"
                      loading="lazy"
                    />
                    <div className="position-absolute bottom-0 w-100">
                      <div className="d-flex justify-content-evenly">
                        <img src="https://rowthtech.s3.amazonaws.com/mukeshsir2.webp" className="w-25 h-25 rounded-circle" alt="rowthtech_img" loading="lazy"/>
                        <div className="title text-white text-size-paragraph fw-bold">
                          <p className="m-0 mt-5">MUKESH BHANDARI</p>
                          <p className="">HEAD OF DEPARTMENT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* big image and paragraph */}
        <div class="container">
          <div class="row mx-auto">
            <div class="col-12 mt-5 bg-imageses">
              <div class="study-class card1 bg-white px-4 ms-lg-3 py-3 animate-left-to-right">
                <p class="fw-bold text-size-header">
                  Need Best Mobile App Development Company Dubai For Another
                  Industry?
                </p>
                <p class="text-size-paragraph">
                  Our trusted and experienced team of mobile app developers
                  in Dubai delivers highly specialized app development
                  services for all business
                </p>
                <button
                  onClick={handleScrollToForm}
                  class="btn btn-warning text-size-paragraph fw-bolder p-lg-2"
                >
                  <i class="fa-sharp fa-solid fa-circle-dot input me-2 border-2 border-dark"></i>
                  Let’s Build Together
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* two paragraph */}
        <div className="container mt-5">
          <div className="row mx-auto">
            <div className="col-12">
              <div className="row mx-auto">
                <div className="col-12 col-md-6 col-lg-6 ">
                  <p className=" fw-bold text-size-header">
                    Explore Our Incredible App Development Portfolio Across UAE
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-md-6 ">
                  <p className="text-size-paragraph">
                    Having the team of top app developers in dubai, we tend to
                    make a difference from even those in the list of top mobile
                    app development companies as per the Clutch platform. Have a
                    look…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mover bg and paragraph */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-5 mooovers">
              <Carousel>
                <Carousel.Item>
                  <div className="row mx-auto bg-movers p-4" >
                    <div className="col-12 col-md-6 col-lg-5 mt-lg-5">
                      <img src={"https://rowthtech.s3.amazonaws.com/moverimg.png"} className="w-100" alt="rowthtech_img" loading="lazy" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 text-white mt-lg-5">
                      <img src="https://rowthtech.s3.amazonaws.com/mooverlogo.png" alt="rowthtech_img" loading="lazy" className="w-25" />
                      <p className="mt-lg-3 text-size-paragraph">
                        “Online Selling Platform For Pre-Hospital Medical
                        Supplies” Leading medical equipment supplier within the
                        UAE, GCC, Middle East & Africa, selling over 5000+
                        products from leading international brands with the
                        highest quality of products.
                      </p>
                      <p>
                        Available on
                        <a
                          href="https://play.google.com/store"
                          className="text-white"
                        >
                          <i className="fab fa-app-store-ios fs-2 ms-3"></i>
                        </a>
                        <a
                          href="https://www.apple.com/in/app-store"
                          className="text-white"
                        >
                          <i className="fab fa-google-play fs-2 ms-3"></i>
                        </a>
                      </p>
                      <div className="d-flex flex-wrap">
                        <div className="me-lg-4 mb-3 border-end">
                          <p className="fs-3 m-0 fw-medium me-5">4.2/5 </p>
                          <p className="text-size-paragraph">Rating</p>
                        </div>
                        <div className="me-lg-4 mb-3 border-end">
                          <p className="fs-3 m-0 fw-medium me-5">$ 6.8M </p>
                          <p className="text-size-paragraph">Revenue</p>
                        </div>
                        <div className="me-lg-4 mb-3">
                          <p className="fs-3 m-0 fw-medium">5+</p>
                          <p className="text-size-paragraph">
                            Years of Services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row mx-auto bg-endoorphin p-4">
                    <div className="col-12 col-md-6 col-lg-5 mt-lg-5">
                      <img src="https://rowthtech.s3.amazonaws.com/edmain.png" className="w-100 " alt="rowthtech_img" loading="lazy"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 text-black mt-lg-5">
                      <img src="https://rowthtech.s3.amazonaws.com/edlogo.png" alt="rowthtech_img" loading="lazy" className="w-25" />
                      <p className=" mt-lg-3 text-size-paragraph">
                        “Online Selling Platform For Pre-Hospital Medical
                        Supplies” Leading medical equipment supplier within the
                        UAE, GCC, Middle East & Africa, selling over 5000+
                        products from leading international brands with the
                        highest quality of products.
                      </p>
                      <p>
                        Available on
                        <a
                          href="https://play.google.com/store"
                          className="text-white"
                        >
                          <i className="fab fa-app-store-ios fs-2 ms-3"></i>
                        </a>
                        <a
                          href="https://www.apple.com/in/app-store"
                          className="text-white"
                        >
                          <i className="fab fa-google-play fs-2 ms-3"></i>
                        </a>
                      </p>
                      <div className="d-flex flex-wrap">
                        <div className="me-lg-4 mb-3 border-end">
                          <p className="fs-3 m-0 fw-medium me-5">4.5/5 </p>
                          <p className="text-size-paragraph">Rating</p>
                        </div>
                        <div className="me-lg-4 mb-3 border-end">
                          <p className="fs-3 m-0 fw-medium me-5">$ 3.4M </p>
                          <p className="text-size-paragraph">Revenue</p>
                        </div>
                        <div className="me-lg-4 mb-3">
                          <p className="fs-3 m-0 fw-medium">3+</p>
                          <p className="text-size-paragraph">
                            Years of Services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row mx-auto bg-teletek p-4">
                    <div className="col-12 col-md-6 col-lg-5 mt-lg-5">
                      <img src="https://rowthtech.s3.amazonaws.com/tele.png" className="tele_hieght" alt="rowthtech_img" loading="lazy"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 text-black mt-lg-5">
                      <img src="https://rowthtech.s3.amazonaws.com/teleteklogo.png" alt="rowthtech_img" loading="lazy" className="teleteklogo" />
                      <p className="mt-lg-3 text-size-paragraph">
                        “Online Selling Platform For Pre-Hospital Medical
                        Supplies” Leading medical equipment supplier within the
                        UAE, GCC, Middle East & Africa, selling over 5000+
                        products from leading international brands with the
                        highest quality of products.
                      </p>
                      <p>
                        Available on
                        <a
                          href="https://play.google.com/store"
                          className="text-white"
                        >
                          <i className="fab fa-app-store-ios fs-2 ms-3"></i>
                        </a>
                        <a
                          href="https://www.apple.com/in/app-store"
                          className="text-white"
                        >
                          <i className="fab fa-google-play fs-2 ms-3"></i>
                        </a>
                      </p>
                      <div className="d-flex flex-wrap">
                        <div className="me-lg-4 mb-3 border-end">
                          <p className="fs-3 m-0 fw-medium me-5">4.6/5 </p>
                          <p className="text-size-paragraph">Rating</p>
                        </div>
                        <div className="me-lg-4 mb-3 border-end">
                          <p className="fs-3 m-0 fw-medium me-5">$ 2.9M </p>
                          <p className="text-size-paragraph">Revenue</p>
                        </div>
                        <div className="me-lg-4 mb-3">
                          <p className="fs-3 m-0 fw-medium">2.5+</p>
                          <p className="text-size-paragraph">
                            Years of Services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>


        {/* laptop man with paragraph */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-5">
              <div className="row mx-auto">
                <div className="col-12 col-md-6 col-lg-6">
                  <img src={"https://rowthtech.s3.amazonaws.com/laptop.png"} className="w-100" alt="rowthtech_img" loading="lazy"/>
                </div>
                <div className="col-12 col-md-5 col-lg-5 col-sm-12 ms-lg-4">
                  <p className="fs-4 fw-bold text-size-header">
                    Top Mobile App Developers in Dubai UAE 2023 - RowthTech
                  </p>
                  <p className="text-size-paragraph">
                    Hire from our list of the Top United Arab Emirates Mobile
                    App Developers 2023 working with RowthTech Dubai. We Build
                    Innovative Mobile App Software and Solutions. Our App
                    Developers in Dubai provides:
                  </p>
                  <p className="m-0 text-size-paragraph">
                    1. Android Application Development Services
                  </p>
                  <p className="m-0 text-size-paragraph">
                    2. Flutter Application Development Services
                  </p>
                  <p className="m-0 text-size-paragraph">
                    3. React Native Application Development Services
                  </p>
                  <p className="m-0 text-size-paragraph">
                    4. iOS App Development Services Dubai
                  </p>
                  <p className="m-0 text-size-paragraph">
                    5. Web App Development Services in UAE
                  </p>
                  <button
                    onClick={handleScrollToForm}
                    className="btn btn-warning text-size-paragraph mt-3 fw-bolder p-lg-2"
                  >
                    <i class="fa-sharp fa-solid fa-circle-dot input me-2 border-2 border-dark"></i>
                    Let’s Build Together
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* data and paragraph */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-5">
              <div className="row mx-auto d-flex justify-content-between">
                <div className="col-12 col-md-6 col-lg-6">
                  <p className="fw-bold text-size-header">
                    Our Holistic Mobile App Development Process Guarantees
                    Success
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <p className="text-size-paragraph">
                    Rowthtech process for custom mobile app development Dubai
                    believes in offering everything under one roof. From
                    validating your app ideas to finally launching your app, our
                    expert mobile app developers Dubai diligently conduct the
                    entire process with an innovative approach to deliver a
                    seamless app development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* vailaditing */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-5">
              <div className="row mx-auto">
                <div className="col-12 col-md-4 col-lg-3 col-sm-12 position-absolute Consultations hidden-sm"
                  style={{ zIndex: "98", animation: "slideDown 7s forwards" }}
                >
                  <div className="border d-flex align-items-center justify-content-center rounded-3 hover-effect">
                    <img src={"https://rowthtech.s3.amazonaws.com/icon5.png"} className="iconsmall" alt="rowthtech_img" loading="lazy"/>
                    <p className="ms-3 mt-3 fw-bold">Consultations</p>
                    <p className="text-transparent mt-3 ms-lg-3">01</p>
                  </div>
                  <div className="border d-flex align-items-center justify-content-center rounded-3 hover-effect my-3">
                    <img src={"https://rowthtech.s3.amazonaws.com/icon9.png"} className="iconsmall" alt="rowthtech_img" loading="lazy"/>
                    <p className="ms-3 mt-3 fw-bold">Strategy</p>
                    <p className="text-transparent mt-3 ms-lg-5">02</p>
                  </div>
                  <div className="border d-flex align-items-center justify-content-center rounded-3 hover-effect my-3">
                    <img src={"https://rowthtech.s3.amazonaws.com/icon8.png"} className="iconsmall" alt="rowthtech_img" loading="lazy"/>
                    <p className="ms-3 mt-3 fw-bold">Designing</p>
                    <p className="text-transparent mt-3 ms-lg-5">03</p>
                  </div>
                  <div className="border d-flex align-items-center justify-content-center rounded-3 hover-effect my-3">
                    <img src={"https://rowthtech.s3.amazonaws.com/icon6.png"} className="iconsmall" alt="rowthtech_img" loading="lazy"/>
                    <p className="ms-3 mt-3 fw-bold">Development</p>
                    <p className="text-transparent mt-3 ms-lg-3">04</p>
                  </div>
                  <div className="border d-flex align-items-center justify-content-center rounded-3 hover-effect my-3">
                    <img src={"https://rowthtech.s3.amazonaws.com/icon7.png"} className="iconsmall" alt="rowthtech_img" loading="lazy"/>
                    <p className="ms-3 mt-3 fw-bold">Deployment</p>
                    <p className="text-transparent mt-3 ms-lg-3">05</p>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-9 col-sm-12 mt-4 validating position-relative ">
                  <div className="rounded-4 m-lg-1 me-auto ">
                    <div className="bg-images p-lg-5 ms-lg-5 p-0 px-0  ">
                      <p className="text-white px-5 text-size-header">
                        Validating Your App Ideas To Put The First Step Right
                      </p>
                      <p className="text-white px-5 text-size-paragraph">
                        You have an app idea? Get it validated by experts who
                        have hands-on experience in the mobile app development
                        dubai industry. At RowthTech, our journey to mobile app
                        development service starts with in-depth industry
                        research. We're the best android & iOS app development
                        company ensuring your app stand-out among the
                        competitors. We undertake a rigorous analysis of user
                        needs as well as other factors like market, competition,
                        or operations to create a business plan which keeps you
                        ahead of time.
                      </p>
                      <button
                        onClick={handleScrollToForm}
                        className="btn btn-warning text-size-paragraph ms-5 fw-bolder p-lg-2"
                      >
                        <i class="fa-sharp fa-solid fa-circle-dot input border-2 me-2 border-dark"></i>
                        Let’s Build Together
                      </button>
                      <div className="px-5 d-flex justify-content-between mt-5 row mx-auto animated-icons">
                        <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                          <img src={"https://rowthtech.s3.amazonaws.com/icon1.png"} alt="rowthtech_img" loading="lazy" />
                          <p className="text-white text-size-paragraph">
                            Requirement <br />
                            Analysis
                          </p>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                          <img src={"https://rowthtech.s3.amazonaws.com/icon2.png"} alt="rowthtech_img" loading="lazy" />
                          <p className="text-white text-size-paragraph">
                            Market <br /> Evaluation
                          </p>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                          <img src={"https://rowthtech.s3.amazonaws.com/icon3.png"} alt="rowthtech_img" loading="lazy"/>
                          <p className="text-white text-size-paragraph">
                            Feasibility <br /> Analysis
                          </p>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-6 col-md-3">
                          <img src={"https://rowthtech.s3.amazonaws.com/icon4.png"} alt="rowthtech_img" loading="lazy"/>
                          <p className="text-white text-size-paragraph">
                            Project Scope <br /> Assessment
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
        {/* paragraph */}
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 mt-5">
              <p className="text-center fs-3 fw-bold text-size-header mt-5">
                Emerging Tools & Technologies <br />
                To Offer Next-Gen Mobile App Development Services
              </p>
              <p className="text-center text-size-paragraph">
                Have a look at some of the amazing technology solutions, powered
                by our app development services.
              </p>
            </div>
            {/* buttons */}
            <div>
              <div className="col-12 text-center mt-5">
                <div className="d-flex flex-wrap justify-content-center">
                  <button
                    type="button"
                    className="btn px-5 py-3 my-2 border shadow my-md-0 mx-2 mx-md-0 button-brd"
                    onClick={() => handleButtonClick("language")}
                  >
                    <b>Languages</b>
                  </button>
                  <button
                    type="button"
                    className="btn px-5 py-3 my-2 my-md-0  border shadow mx-2 mx-md-0 button-brd"
                    onClick={() => handleButtonClick("database")}
                  >
                    <b>Database</b>
                  </button>
                  <button
                    type="button"
                    className="btn px-5 py-3 my-2 my-md-0 mx-2 border shadow mx-md-0 button-brd"
                    onClick={() => handleButtonClick("tools")}
                  >
                    <b>Tools</b>
                  </button>
                  <button
                    type="button"
                    className="btn px-5 py-3 my-2 my-md-0 mx-2 border shadow mx-md-0 button-brd"
                    onClick={() => handleButtonClick("ide")}
                  >
                    <b>IDE</b>
                  </button>
                </div>
              </div>

              {/* languages */}
              {/* <div className="col-12 mt-5">
              <div className="row mx-auto justify-content-center">
                <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                  <div className="language-card p-3 w-75 text-center">
                    <img src={"https://rowthtech.s3.amazonaws.com/java.png"} className="w-50" alt="rowthtech_img" />
                    <p className="button-brd mt-3 text-center fw-bold text">
                      JAVA
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                  <div className="p-3 w-75 h-100 text-center  language-card">
                    <img src={"https://rowthtech.s3.amazonaws.com/js.png"} className="w-50 mt-3" alt="rowthtech_img" />
                    <p className="button-brd mt-3 text-center fw-bold text">
                      SCRIPT
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                  <div className="p-3 w-75 h-100 text-center language-card">
                    <img src={"https://rowthtech.s3.amazonaws.com/xml.png"} className="w-50 mt-3" alt="rowthtech_img" />
                    <p className="button-brd mt-3 text-center fw-bold text">
                      XML
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0 ">
                  <div className="p-3 w-75 h-100 text-center language-card">
                    <img src={"https://rowthtech.s3.amazonaws.com/obj.png"} className="w-50 mt-3" alt="rowthtech_img" />
                    <p className="button-brd mt-3 text-center fw-bold text">
                      KOTLIN
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                  <div className="p-3 w-75 h-100 text-center  language-card">
                    <img src={"https://rowthtech.s3.amazonaws.com/objective.png"} className="w-50 mt-3" alt="rowthtech_img" />
                    <p className="button-brd mt-3 text-center fw-bold text">
                      OBJECT
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                  <div className="p-3 w-75 h-100 text-center language-card">
                    <img src={"https://rowthtech.s3.amazonaws.com/swift.png"} className="w-50 mt-3" alt="rowthtech_img" />
                    <p className="button-brd mt-3 text-center fw-bold text">
                      SWIFT
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
              {activeCarousel === "language" && (
                <div className="col-12 mt-5">
                  <div className="row mx-auto justify-content-center">
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="language-card p-3 w-75 text-center">
                        <img src={"https://rowthtech.s3.amazonaws.com/java.png"} className="w-50" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          JAVA
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src={"https://rowthtech.s3.amazonaws.com/js.png"} className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          SCRIPT
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src={"https://rowthtech.s3.amazonaws.com/xml.png"} className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          XML
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0 ">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src={"https://rowthtech.s3.amazonaws.com/obj.png"} className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          KOTLIN
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src={"https://rowthtech.s3.amazonaws.com/objective.png"} className="w-50 mt-3" alt="rowthtech_img" loading="lazy" />
                        <p className="button-brd mt-3 text-center fw-bold text">
                          OBJECT
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src={"https://rowthtech.s3.amazonaws.com/swift.png"} className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          SWIFT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeCarousel === "database" && (
                <div className="col-12 mt-5">
                  <div className="row mx-auto justify-content-center">
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="language-card p-3 w-75  h-100 text-center">
                        <img src="https://rowthtech.s3.amazonaws.com/mongodb.png" className="w-75 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          MONGO DB
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/mySQL.png" className="w-50 h-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          MYSQL DB
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/postgredb.png" className="w-50 h-50 mt-3" alt="rowthtech_img" loading="lazy" />
                        <p className="button-brd mt-3 text-center fw-bold text">
                          POSTGRES DB
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0 ">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/oracledb.png" className="w-50 h-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          ORACLE DB
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/graphdb.png" className="w-50 h-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          GRAPH DB
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/firebasedb.png" className="w-50 h-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          FIREBASE DB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeCarousel === "tools" && (
                <div className="col-12 mt-5">
                  {/* Tools carousel content */}
                  <div className="row mx-auto justify-content-center">
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="language-card p-3 w-75 text-center">
                        <img src="https://rowthtech.s3.amazonaws.com/terminaltools.png" className="w-50 mt-4" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-4  text-center fw-bold text">
                          TERMINAL
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/git.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy" />
                        <p className="button-brd mt-3 text-center fw-bold text">
                          GITHUB
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/pgide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          PG ADMIN
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0 ">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/vside.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          VS TOOLS
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/xcodeide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          XCODE
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/datagripide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          DATAGRIP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeCarousel === "ide" && (
                <div className="col-12 mt-5">
                  {/* IDE carousel content */}
                  <div className="row mx-auto justify-content-center">
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="language-card p-3 w-75 h-100 text-center">
                        <img src="https://rowthtech.s3.amazonaws.com/vside.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          VS CODE
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/piecharmide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          PIE CHARM
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/pgide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          POSTGRES
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0 ">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/datagripide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          DATA GRIP
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center  language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/sublimeide.png" className="w-50 mt-4" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          SUBLIME
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-2 col-md-4 col-sm-6 p-0">
                      <div className="p-3 w-75 h-100 text-center language-card">
                        <img src="https://rowthtech.s3.amazonaws.com/xcodeide.png" className="w-50 mt-3" alt="rowthtech_img" loading="lazy"/>
                        <p className="button-brd mt-3 text-center fw-bold text">
                          XCODE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* phoneman with text */}
            <div className="col-12 bg-phoneman  mt-5">
              <div className=" p-lg-5 ">
                <p className="fs-4 fw-bold text-size-header">
                  Ready to Build Your Dream App?
                </p>
                <p className="text-size-paragraph">
                  Get A Pioneering Mobile App Development Company Dubai Onboard
                  To Transform It Real.
                </p>
                <button
                  onClick={handleScrollToForm}
                  className="btn btn-warning text-size-paragraph fw-bolder p-lg-2"
                >
                  <i class="fa-sharp fa-solid fa-circle-dot input border-2 me-2 border-dark"></i>
                  Let’s Build Together
                </button>
              </div>
            </div>

            {/* paragraph with heading */}
            <div className="col-12 mt-5 border-bottom">
              <div className="row mx-auto">
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <p className="fs-3 fw-bold text-size-header">
                    Our Premium Enterprise Solution
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <p className="text-size-paragraph">
                    Rowthtech is a reputed mobile app development company in
                    Dubai that has a decade of hands-on experience in developing
                    future-ready custom app solutions. We have successfully
                    launched 5,000+ mobile app solutions solely in UAE.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 same paragraph or content */}
            {/* first paragraph */}
            <div className="col-12 mt-5">
              <div className="row mx-auto d-flex justify-content-around border-bottom">
                <div className="col-12 col-md-6 col-lg-6 col-sm-6">
                  <div className="d-flex">
                    <img src={"https://rowthtech.s3.amazonaws.com/lastimage1.png"} className="icons-soft mt-lg-3" alt="rowthtech_img" loading="lazy" />
                    <p className="fw-bold text-size-header px-4">
                      Software Development <br /> Services in Dubai
                    </p>
                  </div>
                  <p className="text-size-paragraph">
                    With almost a decade of experience in app development, we
                    handle your business requirements with utmost perfection
                    pertaining to software development. As a leading software
                    development company, we have experience in delivering
                    high-end projects of diverse complexity levels. We analyze
                    your business-centric needs, conceptualize software
                    implementation, and choose the best tech stack. Our team of
                    software app developers Dubai works with a full-cycle
                    software development strategy to cater end-to-end product
                    development services.
                  </p>

                  <button
                    onClick={handleScrollToForm}
                    className="btn btn-warning  text-size-paragraph mb-lg-5 fw-bolder p-lg-2"
                  >
                    <i class="fa-sharp fa-solid fa-circle-dot input me-2 border-2 border-dark"></i>{" "}
                    Let’s Build Together
                  </button>
                </div>
                <div className="col-12 col-md-5 col-lg-5 col-sm-5">
                  <div className="p-2 rounded-4 m-1 ">
                    <div className="bg-images p-4">
                      <p className="text-white fs-3">What do We offer?</p>
                      <div className="row mx-auto d-flex justify-content-around">
                        <div className="col-12 col-md-6 col-lg-6 text-white">
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Software Consulting Services
                            </p>
                          </div>
                          <div className="d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Custom Software Development Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Enterprise Software Development Services
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-white">
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Software Development Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Software Integration Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Custom CRM Development Services
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second paragraph */}
            <div className="col-12 mt-5">
              <div className="row d-flex justify-content-around border-bottom">
                <div className="col-12 col-md-6 col-lg-6 col-sm-6">
                  <div className="d-flex">
                    <img src={"https://rowthtech.s3.amazonaws.com/lastimage2.png"} className="icons-soft mt-lg-3" alt="rowthtech_img" loading="lazy"/>
                    <p className="fw-bold text-size-header px-4">
                      Blockchain Development <br /> Services in Dubai
                    </p>
                  </div>

                  <p className="text-size-paragraph">
                    RowthTech has proven to be the best blockchain development
                    company Dubai. We have helped wide-ranging businesses across
                    diverse industries to enter a new age of the
                    Blockchain-powered world. Our expert team of Blockchain
                    developers, designers, and project managers create and
                    develop a decentralized ecosystem for your brands such as
                    Ethereum, Solidity, Hyperledger, Stellar, and more.
                  </p>

                  <button
                    onClick={handleScrollToForm}
                    className="btn btn-warning text-size-paragraph mb-lg-5 fw-bolder p-lg-2"
                  >
                    <i class="fa-sharp fa-solid fa-circle-dot input border-2 me-2 border-dark"></i>{" "}
                    Let’s Build Together
                  </button>
                </div>
                <div className="col-12 col-md-5 col-lg-5 col-sm-5">
                  <div className="p-2 rounded-4 m-1 ">
                    <div className="bg-images p-4">
                      <p className="text-white fs-3">What do We offer?</p>
                      <div className="row d-flex justify-content-around">
                        <div className="col-12 col-md-6 col-lg-6 text-white">
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Software Consulting Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Custom Software Development Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Enterprise Software Development Services
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-white">
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Face & Gesture recognition platforms
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              AR & VR app support and maintenance
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Data visualization & computer vision Apps
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third paragraph */}
            <div className="col-12 mt-5 mb-5">
              <div className="row d-flex justify-content-around">
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                  <div className="d-flex">
                    <img src={"https://rowthtech.s3.amazonaws.com/lastimage3.png"} className="icons-soft mt-lg-3" alt="rowthtech_img" loading="lazy" />
                    <p className="fw-bold text-size-header px-4">
                      AR VR App Development <br /> Services in Dubai
                    </p>
                  </div>
                  <p className="text-size-paragraph">
                    Looking for AR/VR app development services to build
                    exceptional customer experience & satisfy next-generation
                    users? We are a renowned AR & VR development company Dubai
                    using best-of-breed tools and techniques to craft delightful
                    experiences. Now you can create a virtual environment
                    similar to that of the physical world and drive better
                    outcomes for your brand. Partnering with the top VR and AR
                    development company Dubai you get a myriad of benefits.
                  </p>

                  <button
                    onClick={handleScrollToForm}
                    className="btn btn-warning text-size-paragraph mb-lg-5 fw-bolder p-lg-2"
                  >
                    <i class="fa-sharp fa-solid fa-circle-dot input border-2 me-2 text-size-paragraph border-dark"></i>
                    Let’s Build Together
                  </button>
                </div>
                <div className="col-12 col-md-5 col-lg-5 col-sm-5">
                  <div className="p-2 rounded-4 m-lg-1">
                    <div className="bg-images p-4">
                      <p className="text-white fs-3">What do We offer?</p>
                      <div className="row d-flex justify-content-around">
                        <div className="col-12 col-md-6 col-lg-6 text-white">
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Software Consulting Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Custom Software Development Services
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Enterprise Software Development Services
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 text-white">
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Face & Gesture recognition platforms
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              AR & VR app support and maintenance
                            </p>
                          </div>
                          <div className=" d-flex">
                            <span>
                              <i class="fa-regular fa-circle-check text-warning mt-3"></i>
                            </span>
                            <p className="ms-3 button-brd mt-2">
                              Data visualization & computer vision Apps
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
        </div >
      </section >
      </div>
    </>
  );
};

export default MobileDevelopment;