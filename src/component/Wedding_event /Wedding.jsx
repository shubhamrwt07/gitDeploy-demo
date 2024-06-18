import React, { useState, useEffect } from "react";
import {
  WeddingTwo,
  wedding0ne,
  logwedding,
} from "../../static content/images";
import "./wedding.css";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const Wedding = () => {
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

  const submitDataHandle = async (data) => {
    setLorder(false);
    try {
      const response = await axios.post(
        // process.env.REACT_APP_DEV_MODE + "/api/sendmail",
        // "http://localhost:8080/api/sendmail",
        "https://rowthtech.com/api/sendmail",

        data
      );
      setApiResponse((response) => {
        setLorder(true);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-body p-4">
      <div className="about container-fluid my-lg-3 mt-lg-4">
        <div className="row  mx-auto container">
          <div className="col-12 ps-md-4 ps-md-3 ms-1 ms-md-0 mt-3 mt-md-0  ">
            <div className="col-12 d-md-flex heading_ParentText_about   align-items-center ">
              <div className="col-md-12 col-12  d-flex ">
                <div className="col-3 col-md-1">
                  {" "}
                  <img src={logwedding} alt="rowthtech_img" className="w-100" loading="lazy" />
                </div>
                <div className="col-12 col-md-11">
                  <h2 className="banner-heading text-uppercase m-0">
                    WEDDING EVENT
                  </h2>
                  <h2 className="banner-heading text-uppercase">
                    <span className="org_text65 border-bottom-0">
                      OPERATION MANAGEMENT
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Banner custom-container my-md-0">
          <div className="row mx-auto">
            <div className="col-12 px-md-0 px-3 min_hieght_aviod">
              <img className="width radius-15" src={wedding0ne} alt="rowthtech_img" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="container my-5" style={{ textAlign: "justify" }}>
          <p>
            The app's purpose is to streamline wedding operations for planners
            and enhance the experience for invited guests. Developed by Rowth
            Technologies, the app is dedicated to facilitating smooth wedding
            coordination and offering personalized support to planners. Our goal
            is to provide a warm and personalized experience exclusively to
            invited guests. While we make efforts to maintain the accuracy and
            reliability of presented information, we do not make any express or
            implied representations or warranties regarding completeness,
            accuracy, reliability, suitability, or availability of information,
            products, services, or related graphics on our app or in our
            communications for any purpose.
          </p>
        </div>
        <div className="row mx-auto heading_ParentText_about custom-container ">
          <div className="  col-12 my-md-4 my-3  ">
            <h2 className="text-center  dreamsize mb-0">
              SERVICES AND{" "}
              <span className="beyondbrdr webuild">SUBSCRIPTION PLANS</span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col p-4 m-1 border-1 border-dark border rounded-4">
              <div className="text-center">
                <h3 className="my-4">BASIC</h3>
                <div className="d-flex justify-content-center my-4">
                  <p>₹</p>
                  <h1 className="amount">12k</h1>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <button type="button" class="btn btn-danger">
                    START BASIC TRIAL
                  </button>
                </div>
              </div>
              <div className="mt-4 list_height">
                <ul>
                  <li className="custom_whiteSpace">
                    Access to web admin panel for guest data management.
                  </li>
                  <li className="custom_whiteSpace">
                    {" "}
                    3 wedding (Plan valid for 3 Months)
                  </li>
                  <li className="custom_whiteSpace">
                    Historical data of wedding in app for 3 months from the
                    wedding date
                  </li>
                  <li className="custom_whiteSpace">500 user per wedding</li>
                  <li className="custom_whiteSpace">
                    Standards Wedding glimpses
                  </li>
                  <li className="custom_whiteSpace">
                    Hotel booking, Event detail & Navigation
                  </li>
                  <li className="custom_whiteSpace">Up to 10GB </li>
                </ul>
              </div>
              <div className="text-center my-3 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="col p-4 m-1 border-1 border-dark border rounded-4">
              <div className="text-center">
                <h3 className="mt-4"> PREMIUM</h3>
                <div className="d-flex justify-content-center my-4">
                  <p>₹</p>
                  <h1 className="amount">30k</h1>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <button type="button" class="btn btn-danger">
                    START PREMIUM TRIAL
                  </button>
                </div>
              </div>
              <div className="mt-4 list_height">
                <ul>
                  <li className="custom_whiteSpace">
                    Access to web admin panel for guest data management.
                  </li>
                  <li className="custom_whiteSpace">
                    10 wedding (valid for 1 year)
                  </li>
                  <li className="custom_whiteSpace">
                    Historical data of wedding in app for 6 months from the
                    wedding date
                  </li>
                  <li className="custom_whiteSpace">1500 user per wedding </li>
                  <li className="custom_whiteSpace">
                    Personalised Wedding glimpses
                  </li>
                  <li className="custom_whiteSpace">
                    Hotel booking, Event detail & Navigation{" "}
                  </li>
                  <li className="custom_whiteSpace">Up to 50GB</li>
                </ul>
              </div>
              <div className="text-center my-3 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="col p-4 m-1 border-1 border-dark border rounded-4">
              <div className="text-center">
                <h3 className="my-4">ENTER PRISE</h3>
                <div className="d-flex justify-content-center my-4">
                  <p>₹</p>
                  <h1 className="amount">50k</h1>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <button type="button" class="btn btn-danger">
                    START ENTER PRISE TRIAL
                  </button>
                </div>
              </div>
              <div className="mt-4 list_height">
                <ul>
                  <li className="custom_whiteSpace">
                    Access to web admin panel for guest data management.
                  </li>
                  <li className="custom_whiteSpace">50 Wedding No validity</li>
                  <li className="custom_whiteSpace">
                    Historical data of wedding in app for 1 Year from the
                    wedding date{" "}
                  </li>
                  <li className="custom_whiteSpace">
                    Unlimited User per wedding
                  </li>
                  <li className="custom_whiteSpace">
                    Custom Personalised Wedding glimpses
                  </li>
                  <li className="custom_whiteSpace">
                    Hotel booking, Event detail & Navigation
                  </li>
                  <li className="custom_whiteSpace">
                    Unlimited Photo/Video upload
                  </li>
                </ul>
              </div>
              <div className="text-center my-3 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  BUY NOW
                </button>
              </div>
            </div>

            <div
              class="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg rounded-4 ">
                <div class="modal-content org_text652">
                  <div class="modal-header ">
                    <h1
                      class="modal-title fs-5 col-11 text-center"
                      id="exampleModalLabel"
                    >
                      Subscription{" "}
                      <span className="beyondbrdr webuild">Plan</span>{" "}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body p-0">
                    {/* <div className="row mx-auto position-relative  background_grd ">
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
                    </div> */}
                    <div className="col-12   position-relative ">
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
                        <div className="row mx-auto position-relative  ">
                          <div className="col-12 mx-auto p-4  form_container ">
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

                                <div className="col-12 d-md-flex text-center align-items-end justify-content-center pb-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;