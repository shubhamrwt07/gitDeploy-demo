import React, { useState, useEffect } from "react";
import "./rtgit.css";
import { useForm } from "react-hook-form";
import ToastHandle from "../helpers/handleToastify";
import axios from "axios";
import { dropusbanner1, Last_div } from "../../static content/images";
function Rtgit() {
  // form validation
  const [apiResponse, setApiResponse] = useState("");
  const [lorder, setLorder] = useState(true);
  // const formDataResponseStatus = apiResponse?.status;
  // const formDataResponseMessage = apiResponse?.data?.message;
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

  const submitData = async (data) => {
    setLorder(false);
    try {
      const response = await axios.post(
        // process.env.REACT_APP_DEV_MODE + "/api/sendmail",
        // "/api/sendmail",
        "http://localhost:8080/api/sendmail",
        data
      );
      setApiResponse(response);
    } catch (error) {
      console.error("error================", error);
    }
  };

  // end form validation

  // useEffect(() => {
  //   if (formDataResponseStatus === 200) {
  //     ToastHandle("success", formDataResponseMessage);
  //     handleReset();
  //     setLorder(true);
  //     setApiResponse(null);
  //   } else if (formDataResponseStatus === 400) {
  //     ToastHandle("error", formDataResponseMessage);
  //   }
  // });

  // end form validation

  return (
    <>
      <div className="main_contact">
        <section className=" custom-container px-0">
          <div className="row mx-auto">
            <div className=" dropus col-12 ">
              <div className="img-sec row my-md-5 py-3 mx-auto position-relative">
                <div className="col-4 d-flex d-block d-md-none w-100">
                  <h1 className="banner-heading">
                    <span className="head_drop"> Drop us a Line </span>
                  </h1>
                </div>
                <div className="col-12 img-height px-md-0 px-2">
                  <img src={dropusbanner1} alt="rowthtech_img" loading="lazy"/>
                </div>
                <div className="col-12 position-absolute bottom-0">
                  <div className="row ms-5 mb-5 pb-3   mx-auto">
                    <div className="col-3 d-none d-md-block">
                      <h1 className="banner-heading ">
                        <span className="ms-4">
                          Drop us a <span className="fw-bold">Line</span>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="curve_waveImg1 position-relative px-0">
              <div className="row mx-auto ">
                <div className="col-11 mx-auto">
                  <div className="container-x">
                    <div className="row mx-auto d-flex align-items-center">
                      <div className=" col-md-6 col-12 ">
                        <div className="row">
                          <div className="col-md-9 col pt-md-5 mt-md-4 text_rtgit ">
                            <h1 className="heading-a ">
                              <span className="org-txt1-1">To Touch Base</span>
                            </h1>
                            <h1 className=" heading-b pt-md-3 Head_text d-none d-md-block">
                              CONTINUE THE
                              <span className="org-txt1-1"> CONVERSATION</span>
                            </h1>
                            <h1 className="heading-c pt-4 pt-md-3  d-none d-md-block">
                              We promise to get back <br></br> to you ASAP !
                            </h1>
                          </div>
                          <div className="container-fluid d-block d-md-none d-flex">
                            <div className="col-8 pb-3">
                              <h1 className=" heading-b py-md-4 pb-2 position-relative ">
                                CONTINUE THE
                                <span className="org-txt1-10">
                                  CONVERSATION
                                </span>
                              </h1>
                            </div>
                            <div className="col-4 ps-2">
                              <h1 className="heading-c pt-md-3 px-md-0 ">
                                We promise to
                                <span className="textbold border-bottom-0">
                                  <br />
                                  get back to you
                                </span>
                                <br />
                                <span className="textbold border-bottom-0">
                                  ASAP !
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-5 col-12 mx-auto p-md-0 border-background tablecontents mt-md-0 pt-md-0 px-md-0">
                        <form
                          onSubmit={handleSubmit(
                            (data) => {
                              submitData(data);
                            },
                            (err) => {
                              console.log(err);
                            }
                          )}
                        >
                          <div className="row inner_div py-3 border-backgroundd position-relative">
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <input
                                    type="text"
                                    {...register("name", {
                                      required: true,
                                    })}
                                    className="form-control py-2 px-3 w-100"
                                    placeholder="FullName"
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
                                    type="number"
                                    {...register("phone", {
                                      required: true,
                                      pattern: {
                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                      },
                                      maxLength: 10,
                                      minLength: 10,
                                    })}
                                    className="form-control py-2 px-3 w-100"
                                    placeholder="Contact No."
                                    aria-label="Username"
                                  />
                                  {errors?.phone?.type === "required" && (
                                    <span className="text-danger">
                                      Please entery your Mobile No
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
                              </div>
                            </div>
                            <div className="col-12 py-md-3">
                              <div className="row">
                                <div className="col-12 py-md-0 py-3">
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
                                    className="form-control py-2 px-3 w-100"
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
                            <div className="col-12 mb-md-3">
                              <div className="row">
                                <div className="col-12">
                                  <input
                                    type="text"
                                    {...register("place", {
                                      required: true,
                                    })}
                                    className="form-control py-2 px-3 w-100"
                                    placeholder="Organization"
                                    aria-label="Username"
                                  />
                                  {errors?.place?.type === "required" && (
                                    <span className="text-danger">
                                      Please enter Organization is Required
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mb-md-3">
                              <div className="row  position-relative curvingline">
                                <div className="col-12 py-md-0 py-3">
                                  <textarea
                                    className="form-control p-3 widthh"
                                    {...register("msg", {
                                      required: true,
                                    })}
                                    placeholder="Message"
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
                            </div>
                            <div className="col-11  px-md-0 px-4 d-flex align-items-end justify-content-center mx-auto btnpadding">
                              <button className="button w-50">
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
                                  <span>Send</span>
                                )}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-12  text-center text-md-start pt-md-5 mt-md-0">
                        <div className="row ">
                          <div className="col-md-12 mt-md-5 col-12 text-center">
                            <h1 className="clients-heading  mt-md-5 pb-xl-3">
                              Clients
                              <span className="testimonials">Testimonials</span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="about6 mt-5 custom-container  pb-md-5 pt-4  pt-md-0 contains1-1 position-relative">
          <div className="row profile_cont mx-auto my-md-1">
            <div className=" d-none d-md-block col card_div brdr sameProfile_div position-relative border-bottom-0 mt-3 custom-color-gray">
              <div className="row ">
                <div className="col-12 d-flex justify-content-center py-4 ">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/demo.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-10 pb-5 mx-auto">
                  <p className="para-1">
                    The technical skills of developers at Powth he are hest.
                    They complete projects according to our niche and given
                    time. I am impressed by their work
                  </p>
                </div>
                <div className="img_section col-12 d-flex justify-content-center position-relative">
                  <div className="col-md-3 image-position position-absolute">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/Ellipse95.webp"
                      className="width"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                    <h1 className="names card_names py-3">Suchita ahuja</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col brdr sameProfile_div11 position-relative  orange_card">
              <div className="row">
                <div className="col-12 d-flex justify-content-center py-md-4 mt-md-0 mt-2 comma1">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/aa.png"
                    className="comma1-1"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-11 col-12 pb-5 mx-auto">
                  <p className="para-2-1">
                    I appreciated working process of Rowthtech. They understand
                    all our needs regarding the project & also deliver on time
                  </p>
                </div>
                <div className="img_section col-12 d-flex justify-content-center position-absolute mt-md-0 mt-0">
                  <div className="col-md-5 col-4 image-position position-absolute mt-md-0 mt-4 ps-md-0">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/image+137.webp"
                      alt="rowthtech_img"
                      loading="lazy"
                      className="mob_width robertradius custom_width_robert_img"
                    />

                    <h1 className="name-bold pt-md-3 card_names pt-2">
                      Robert Sharma
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-none d-md-block col card_div brdr sameProfile_div position-relative border-bottom-0 mt-3 custom-color-gray">
              <div className="row">
                <div className="col-12 d-flex justify-content-center py-4">
                  <img
                    src="https://rowthtech.s3.amazonaws.com/demo.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-10 pb-5 mx-auto">
                  <p className="para-1">
                    The packages for software development are affordable. I hire
                    Rowthtech for software development for my startup They
                    complete projects on time.
                  </p>
                </div>
                <div className="img_section col-12 d-flex justify-content-center position-absolute">
                  <div className=" col-md-3 image-position position-absolute">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/Ellipse+96.webp"
                      className="width"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                    <h1 className="names  card_names py-3">Sachin Verma</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container">
          <div className="row mx-auto">
            <div className="col-12 pt-md-5">
              <div className="row mx-autox">
                <div className="col-md-4 col-5 mx-auto pt-md-5 mt-md-3 pb-md-3 mt-3 mt-xl-0 py-xl-1  text-center">
                  <h1 className="clients1-1 pt-md-5 mt-md-4 mb-3">
                    OUR <span className="our_clients_span">CLIENTS</span>
                  </h1>
                </div>
              </div>
                  <div className="row mx-auto d-flex mt-md-0 mt-4">
                    <div className="col-12 pb-5 mb-3 mb-md-0 pt-3 pt-md-0">
                      <div className="row mx-auto justify-content-evenly">
                        <div className="col-12">
                          <img src={Last_div} className="width1" loading="lazy"/>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rtgit;
