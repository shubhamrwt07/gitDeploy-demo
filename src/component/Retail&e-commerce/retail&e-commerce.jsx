import React from "react";
import "../Retail&e-commerce/retail&e-commerce.css";
import { Group963, MaskGroup4, howEcommerceWorksImg, image313, retailnewimg } from "../../static content/images";
function Retail() {
  const custRetail = [
    {
      id: 1,
      image: "https://rowthtech.s3.amazonaws.com/E-+Commerce.svg",
      heading: "E- Commerce",
    },
    {
      id: 2,
      image: "https://rowthtech.s3.amazonaws.com/C-+Store+%26+Grocery.svg",
      heading: "C- Store & Grocery",
    },
    {
      id: 3,
      image: "https://rowthtech.s3.amazonaws.com/Loyalty+App.svg",
      heading: "Loyalty App",
    },
  ];
  const custRetail2 = [
    {
      id: 1,
      image: "https://rowthtech.s3.amazonaws.com/Shopping+Cart.svg",
      heading: "Shopping Cart",
    },
    {
      id: 2,
      image: "https://rowthtech.s3.amazonaws.com/Big+Commerce.svg",
      heading: "Big Commerce",
    },
  ];

  return (
    <>
      <div className="main_retail overflow-hidden">
        <section className="banner_section ">
          <div className="row mx-auto">
            <div div className="col px-md-0 ">
              <div className="row mx-auto ">
                <div className="col-12 d-block d-md-none ">
                  <h1 className=" text-start mb-0 mobile_headText my-4   text-dark text-uppercase fw-bold">
                    Retail & e-Commerce
                    <br /> Software Solutions
                  </h1>
                  <h4 className="sub-banner-heading mobile_ParaText my-3 mb-0 text-capitalize">
                    Digital Strategy Custom-built for Your <br />
                    Business Get Developers
                  </h4>
                </div>
              </div>
              <div className="row mx-auto mt-md-4 pt-md-4 mx-md-3 position-relative">
                <div className=" d-none d-md-block col-12 hero-img px-md-3 px-0 min_hieght_aviod">
                  <img
                    className="width"
                    src={MaskGroup4}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="d-block d-md-none col-12  px-md-3 px-0 my-2">
                  <img
                    className="width"
                    src={retailnewimg}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-12  content_outer_box top-0 d-md-flex bottom-0  position-absolute">
                  <div className="content_inner_row  heigth width   row -auto">
                    <div className="col-7  d-none d-md-block  my-md-auto ">
                      <div className="content  mx-md-5 px-md-5 row  font_headingText_retail flex-column position-relative">
                        <div className="col-12 my-md-3 col-md-12 ">
                          <h1 className="banner-heading text-uppercase fw-bold border-0 text-md-start">
                            Retail & e-Commerce <br />
                            Software Solutions
                          </h1>
                        </div>
                        <div className="col-8 col-md-11 mb-md-3 py-md-3 ">
                          <h4 className="sub-banner-heading text-white text-capitalize">
                            Digital Strategy Custom-built for <br></br>Your
                            Business Get Developers
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec_1  custom-container ">
          <div className="container">
            <div className="row mx-auto   px-md-0 mb-md-0 mt-md-5">
              <div className=" d-none d-md-block custom-container  font_headingText_retail heading text-center col-12 ">
                <h2 className="mb-0 d-flex align-items-center justify-content-center">
                  <span className="mx-md-3  ">
                    ROWTHTECH SOLUTIONS APPROACH
                  </span>
                  Custom Retail Software Solutions
                </h2>
              </div>
              <div
                className=" d-block d-md-none heading ps-md-0 mt-3
             col-12 "
              >
                <h2>
                  <span className="px-1 mx-2 ">
                    ROWTHTECH SOLUTIONS APPROACH
                  </span>
                </h2>
                <div className="headings fw_600 mx-1 text-truncate mobile_headText py-0">
                  Custom Retail Software Solutions
                </div>
              </div>
              <div className="col-12  d-md-block d-none font_headingText_retail  ">
                <p className="mt-md-3 mb-0 para_HeadingText text-capitalize text-md-center">
                  To achieve business success in the ultra-competitive, strictly
                  regulated food and beverage industry, leading-edge technology
                  must be on the menu. For more than two decades, we’ve provided
                  world-class software development services for all types of
                  businesses, from restaurants to distributors.
                </p>
              </div>
              <div className="col-12 d-md-none d-block mb-2 mt-1  mx-1 ">
                <p className="mt-md-3 mb-0 para_HeadingText_retail ">
                  To Achieve Business Success In The Ultra-Competitive, Strictly
                  Regulated Food And Beverage Industry, Leading-Edge Technology
                  Must Be On The Menu. For More Than Two Decades, We’ve Provided
                  World-Class Software Development Services For All Types Of
                  Businesses, From Restaurants To Distributors.
                </p>
              </div>
            </div>
          </div>

          <div className="row mx-auto row align-items-center py-md-0 px-md-5">
            <div className="col-md-10 col-12 mx-auto ">
              <div className="row mx-auto py-4 mobile_bgColor font_headingText_retail">
                <div className="financial_services col-12 mb-md-0 text-justify col-md-6 position-relative">
                  <div className="row d-flex ">
                    {custRetail.map((elem) => {
                      const { image, heading } = elem;
                      return (
                        <div className="col-5 mx-auto col-md-12">
                          <div className="col-12 col-md-12 pt-md-4 pt-2 text-center text-md-start d-block d-md-flex align-items-center">
                            <img
                              src={image}
                              className="width22 ms-md-3 ps-md-2"
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                            <h6 className="ms-md-5 ps-md-3 ms-0 pt-md-0 pt-2">
                              {heading}
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row d-flex ">
                    {custRetail2.map((elem) => {
                      const { image, heading } = elem;
                      return (
                        <div className="col-5 mx-auto col-md-12">
                          <div className="col-12 col-md-12 pt-md-4 pt-2 text-center text-md-start d-block d-md-flex align-items-center">
                            <img
                              src={image}
                              className="width22 ms-md-3 ps-md-2"
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                            <h6 className="ms-md-5 ps-md-3 ms-0 pt-md-0 pt-2">
                              {heading}
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 col-12 img1-10 mb-md-5  position-relative">
                  <img
                    className=" width  "
                    src={howEcommerceWorksImg}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row mx-auto">
          <div className="col-12 px-md-5 px-0 my-3 my-md-2">
            <div
              className="col-12 mx-auto  show_desktop"
              style={{ border: "1px solid black " }}
            ></div>
            <div
              className=" col-11  mx-auto my-4 show_mobile"
              style={{ border: "1px solid #888888" }}
            ></div>
          </div>
        </div>
        <section className=" sec_2 pb-md-3 containerFor1600  container-xl">
          <div className="row mx-auto  custom-container font_headingText_retail py-0 my-md-3">
            <div className="heading text-md-center text-start col-12 ps-2">
              <h2 className="m-0">
                Our Software Developers Own Retail Industry Experience
              </h2>
            </div>
            <div className="col-md-8 col-12 mx-auto px-md-3 px-2 ps-2">
              <p className="mt-3 mt-md-2 text-capitalize para_HeadingTex text-md-center">
                RowthTech develops custom retail software solutions for brick
                and mortar, e-commerce, c-stores, groceries, dealerships,
                shopping carts & mobile applications.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-around mx-auto pt-md-3 retailIndustry_container pt-4 d-block d-md-none">
            <div className="col-md-3 col-5 retailFeat_box  d-flex flex-column justify-content-center align-items-center ">
              <img
                src="https://rowthtech.s3.amazonaws.com/Retail+Software+.svg"
                className="mobile_width bg-white rounded-pill"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="text-center mt-2  mt-md-4 pt-2 mb-0 ">
                Retail Software <br />
                Development
              </h6>
            </div>
            <div className="col-md-3 col-5 retailFeat_box position-relative  d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/POS+Systems+.svg"
                className="mobile_width bg-white rounded-pill"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="text-center  mt-2  mt-md-4 pt-2 mb-0 ">
                POS Systems <br />& Billing
              </h6>
            </div>
          </div>
          <div className="row d-flex justify-content-around mx-auto pt-md-3 retailFeat_box retailIndustry_container pt-0 d-block d-md-none">
            <div className="d-block d-md-none my-5 col-5 text-center  mt-md-4 ">
              <img
                src="https://rowthtech.s3.amazonaws.com/Commercial.svg"
                className="mobile_width"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="pt-md-5 pt-3">
                Commercial <br />
                Operations
              </h6>
            </div>
            <div className=" d-block d-md-none retailFeat_box my-5 pt-1 col-5 text-center mt-md-4">
              <img
                src="https://rowthtech.s3.amazonaws.com/Inventory+.svg"
                className="mobile_width"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="pt-md-5 pt-3">
                Inventory <br />
                Management
              </h6>
            </div>
          </div>
          <div className="row mx-auto pt-md-4  font_headingText_retail custom-container retailIndustry_container pt-0">
            <div className="d-none d-md-flex col-md-3 col-5 retailFeat_box  d-flex flex-column justify-content-center align-items-center ">
              <img
                src="https://rowthtech.s3.amazonaws.com/Retail+Software+.svg"
                className="mobile_width"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="text-center mt-2  mt-md-3 pt-2 mb-0 ">
                Retail Software <br />
                Development
              </h6>
            </div>
            <div className=" d-none d-md-flex col-md-3 col-5 retailFeat_box position-relative  d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/POS+Systems+.svg"
                className="mobile_width"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="text-center  mt-2  mt-md-3 pt-2 mb-0 ">
                POS Systems <br />& Billing
              </h6>
            </div>
            <div className="col-md-4 col-5 position-relative retailFeat_box d-none d-md-flex  d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/Commercial.svg"
                className="bg-white rounded-pill"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className="text-center  mt-2  mt-md-3 pt-2 mb-0 ">
                Commercial
                <br /> Operations
              </h6>
            </div>
          </div>

          <div className="d-none  custom-container font_headingText_retail d-md-flex row mx-auto pt-md-5 retailIndustry_containerSec pb-5">
            <div className="d-none d-md-flex position-relative retailFeat_box ms-auto flex-column align-items-center justify-content-center col-4 text-end img1-11 ">
              <img
                src="https://rowthtech.s3.amazonaws.com/Inventory+.svg"
                alt="rowthtech_img"
                loading="lazy"
                className="bg-white rounded-pill"
              />
              <h6 className=" mt-2  mt-md-3 pt-2 mb-0 text-center">
                Inventory <br />
                Management
              </h6>
            </div>
            <div className="col-md-3 col-5 retailFeat_box position-relative text-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/Order.svg"
                className="mobile_width "
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className=" mt-2  mt-md-3 pt-2 mb-0 text-center">
                Order
                <br /> Management
              </h6>
            </div>

            <div className="col-md-3 retailFeat_box col-5 d-flex flex-column align-items-center justify-content-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/Supply+Chain+%26.svg"
                className="mobile_width"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className=" mt-2  mt-md-3 pt-2 mb-0 text-center">
                Supply Chain &<br /> Logistics Management
              </h6>
            </div>
          </div>
          <div className=" d-block d-md-none row  d-flex justify-content-around mx-auto pt-md-5 retailIndustry_containerSec pb-5">
            <div className="col-md-3 col-5 retailFeat_box position-relative text-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/Order.svg"
                className="mobile_width bg-white rounded-pill"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className=" mt-2  mt-md-3 pt-2 mb-0 text-center">
                Order
                <br /> Management
              </h6>
            </div>

            <div className="col-md-3 col-5 d-flex flex-column retailFeat_box align-items-center justify-content-center">
              <img
                src="https://rowthtech.s3.amazonaws.com/Supply+Chain+%26.svg"
                className="mobile_width bg-white rounded-pill"
                alt="rowthtech_img"
                loading="lazy"
              />
              <h6 className=" mt-2  mt-md-3 pt-2 mb-0 text-center">
                Supply Chain &<br /> Logistics Management
              </h6>
            </div>
          </div>
        </section>

        <div className="container-fluid">
          <div className="col-12">
            <div
              className=" col-11 mx-auto show_desktop mt-5 my-md-0 "
              style={{ border: "1px solid black " }}
            ></div>
            <div
              className=" col-12  mx-auto  show_mobile"
              style={{ border: "1px solid #888888" }}
            ></div>
          </div>
        </div>

        <section className="section_3 last_section containerFor1600p custom-container pt-md-3 pt-2 ">
          <div className="section_9 row  mx-auto font_headingText_retail pt-md-2 pt-3 mt-md-0 pb-md-0">
            <div className="heading mx-2 d-md-flex  mx-md-auto  align-items-center justify-content-center col-md-5 .img1-12 img">
              <h2 className="m-0  d-none     d-md-block ps-md-0 ps-1">
                We Have Software Developers <br></br>with Retail
                Industry-Experience
              </h2>
              <h2 className=" d-block d-md-none mx-0 ">
                We Have Software Developers <br></br>with Retail
                Industry-Experience
              </h2>
            </div>
            <div className="col-md-6 col-12 mx-md-auto mt-3 mt-md-1 img1-12">
              <p className="text-capitalize  para_HeadingTex mb-0 ps-2 ms-1">
                We deliver custom e-commerce software solutions, leveraging
                industry-leading tools to create the ideal shopping experience.
              </p>
              <img
                className=" d-block d-md-none ps-3 "
                src={Group963}
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="bordr_btm row mx-auto my-md-5  font_headingText_retail   pb-4 mb-2 align-items-center border-0">
            <div className=" d-flex position-relative col-12   mx-auto col-md-5 align-items-baseline ">
              <img
                className=" d-none curve_img  mx-md-auto  position-absolute d-md-block"
                src={Group963}
                alt="rowthtech_img"
                loading="lazy"
              />
              <img
                className="width_h mx-auto"
                src={image313}
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
            <div className=" col-md-6   col-12 mx-auto ">
              <div className="row mx-auto ">
                <div className="col-12 pt-md-0 pt-5">
                  <div className="row  mb-md-2 mb-2 align-md-items-center">
                    <div className="col-md-2 col-3 mx-md-auto">
                      <img
                        className="custom_width_retail "
                        src="https://rowthtech.s3.amazonaws.com/Virtual+Storefronts.svg"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-9 my-md-3 paraGrap_heading">
                      <h3 className="Portfolio-headings mb-0">
                        Virtual Storefronts
                      </h3>
                      <p className="text-capitalize text-start paraGrap_text pt-2 pt-md-2 ">
                        Integrated payment and order handling systems enable us
                        to automate billing and reliable transaction processing
                        for your virtual storefronts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 my-0 my-md-3 ">
                  <div className="row mb-4 align-md-items-center  pt-0">
                    <div className="col-md-2 col-3 mx-md-auto ">
                      <img
                        className="custom_width_retail "
                        src="https://rowthtech.s3.amazonaws.com/b2B.svg"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-9 col-md-9 my-md-3 paraGrap_heading">
                      <h3 className="Portfolio-headings mb-0">
                        B2C & B2B Marketplaces
                      </h3>
                      <p className="text-capitalize paraGrap_text text-start pt-2">
                        A consolidated platform serves vendors, distributors,
                        and customers collectively to take part in a
                        feature-rich, cultivated B2B & B2C marketplace.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row mb-md-4 md-0 align-md-items-center  pt-0">
                    <div className="col-md-2 col-3 mx-md-auto ">
                      <img
                        className="custom_width_retail "
                        src="https://rowthtech.s3.amazonaws.com/E-+Commerce.svg"
                        alt="rowthtech_img"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-9 col-md-9 my-md-3 paraGrap_heading">
                      <h3 className="Portfolio-headings mb-0">
                        Web Designs for E-Commerce
                      </h3>
                      <p className=" text-capitalize paraGrap_text  text-start pt-2 pt-md-2">
                        Creating mobile-friendly e-commerce websites and apps
                        that provide the eventual shopping experience for
                        customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Retail;
