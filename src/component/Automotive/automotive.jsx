import React from "react";
import "./automotive.css";
import {
  autoMotiveBanner,
  image282,
  image2820,
  image286,
  image287,
  image288,
  image289,
  image290,
  image293,
  image294,
  image298,
  invoiceaccounting,
  mobileaccounting,
} from "../../static content/images";

function Automotive() {
  const custom = [
    {
      image1: image286,
      heading1: "Custom Accounting management",
      heading2: "Software Development",
      para: "Rowthtech Custom Accounting Software Development Services Include API Programming & Integrations, AIS Architecture, Bookkeeping App Development, And Much More.",
      sideimg1: "https://rowthtech.s3.amazonaws.com/accounting+information.png",
      sideheading1: "Accounting Information Systems",
      sidepara1:
        "Developers engineer online accounting software and AIS architectures integrated with ERP, CRM, asset tracking, vendor management & other financial management programs.",
      sideimg2: mobileaccounting,
      sideheading2: "Mobile Accounting Apps",
      sidepara2:
        "We offer responsive cross-platform and native development of mobile accounting apps programmed to provide full access to operational accounting workflows.",
      sideimg3: invoiceaccounting,
      sideheading3: "Invoicing & Accounts Receivable",
      sidepara3:
        "Accounts payable and receivable software modules automatically upload inventory spreadsheets, create downloadable purchase orders, generate reports, and more.",
    },
    {
      image1: image287,
      heading1: "Custom Portfolio management",
      heading2: "Software Development",
      para: "Rowthtech portfolio management software solutions encompass everything from risk analysis & investments to stock trading apps and fund management in a centralized platform.",
      sideimg1: image288,
      sideheading1: "Portfolio Management Dashboards",
      sidepara1:
        "Develop PM dashboards with built-in asset management modules and integrated ticker symbol databases, trade algorithms, historical data analysis tools, and more.",
      sideimg2: image289,
      sideheading2: "Investment Data Integrations",
      sidepara2:
        "Program data entry forms and tools for standard investment files QIF, OFX, QFX, and CSV, plus accounts from TD Ameritrade, E*Trade, Vanguard, and other major brokerages.",
      sideimg3: image290,
      sideheading3: "Risk Management & Analysis",
      sidepara3:
        "Offer third-party risk mitigation solutions that include multi-factor risk modeling and stress scenario testing to identify and assess high-risk financial investments and contingencies.",
    },
    {
      image1: image294,
      heading1: "Custom Financial Planning",
      heading2: "Software Development",
      para: "Rowthtech custom financial planning software solutions streamline day-to-day processes, including invoicing, payment processing, audit archiving, report generation & more.",
      sideimg1: "https://rowthtech.s3.amazonaws.com/image+291.png",
      sideheading1: "Financial Planning Software",
      sidepara1:
        "Develop scalable financial planning systems that implement the ability to share data and manage operations remotely as well as provide access to mission-critical information.",
      sideimg2: "https://rowthtech.s3.amazonaws.com/image+292.png",
      sideheading2: "Financial Dashboard Design",
      sidepara2:
        "Create functional and adaptable financial dashboards that give access to data insights in real-time, extensive budget control centers, quick-view behavior analysis, and more.",
      sideimg3: image293,
      sideheading3: "Financial Analysis Software",
      sidepara3:
        "Program financial analysis software to measure data like KPIs, payment and inventory turnovers, current and quick ratios, RoE, and profit margins and create automated reports.",
      order1: "order-md-1",
      order2: "order-md-2",
    },
    {
      image1: image298,
      heading1: "Custom Tax Preparation",
      heading2: "Software Development",
      para: "Rowthtech custom tax prep software solutions support the preparation, calculation, and reporting of personal & business taxes.",
      sideimg1: "https://rowthtech.s3.amazonaws.com/tax+calculator.png",
      sideheading1: "Tax Calculator Applications",
      sidepara1:
        "Engineer tax calculator apps equipped with the ability to estimate refunds in any jurisdiction, validate tax credits and exemptions & More.",
      sideimg2: "https://rowthtech.s3.amazonaws.com/tax+forms.png",
      sideheading2: "Tax Forms Software Integration",
      sidepara2:
        "Build entry income tax forms for 1040, 1040A, 1040EZ, 1041, 1099, 1065, 1120, and many more, integrated to communicate data to servers, enabling real-time information validation.",
      sideimg3: "https://rowthtech.s3.amazonaws.com/small+bussiness.png",
      sideheading3: "Small Business Tax Software",
      sidepara3:
        "Designed for freelancers, independent contractors & small business owners, built with e-commerce software, expense log importation, state-by-state tax guidelines, and more.",
    },
  ];
  const Rservice = [
    {
      img: "https://rowthtech.s3.amazonaws.com/accounting.png",
      text: "Accounting",
    },
    {
      img: "https://rowthtech.s3.amazonaws.com/insurance.png",
      text: "Insurance",
    },
    {
      img: "https://rowthtech.s3.amazonaws.com/portfolio+managment.png",
      text: "Portfolio Management",
    },
    {
      img: "https://rowthtech.s3.amazonaws.com/taxes.png",
      text: "Taxes",
    },
    {
      img: "https://rowthtech.s3.amazonaws.com/finanical+planning.png",
      text: "Financial Planning",
    },
  ];

  return (
    <>
      <div className="main_automotive ">
        <div className="Banner_section containerForFullWidth px-md-0   ">
          <div className="row  mx-auto ">
            <div className="automotive1 col-12 show_mobile mt-md-0 mt-3">
              <h1 className="banner-heading1 text-uppercase fw-bold mt-2  mt-lg-5 m-auto text-dark">
                Automotive
              </h1>
              <span className="org_text banner-heading1 text-uppercase">
                Software Solutions
              </span>
            </div>
            <div className="col-8 my-3 show_mobile">
              <h4 className="sub_banner_heading  text-dark text-capitalize">
                Digital Strategy Custom-built for Your Business Get Developers
              </h4>
            </div>
            <div className="col-12 px-3 d-block">
              <img
                className="width show_mobile custom_image_width1"
                src={autoMotiveBanner}
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="row mx-auto ">
            <div className="col mb-4 show_desktop">
              <div className="row mx-auto  position-relative">
                <div className="col-12 min_hieght_aviod">
                  <img
                    className="width mt-md-3"
                    src={autoMotiveBanner}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="automotive1 col-12  content_outer_box top-0  d-none d-md-flex bottom-0  custom-container position-absolute show_desktop">
                  <div className="content_inner_row  heigth width   row -auto">
                    <div className="col-7  d-flex p-5 mx-4">
                      <div className="content show_m row flex-column text_center_auto position-relative ps-2">
                        <div className="col-9 col-md-11 ">
                          <h1 className="banner-heading1_one text-uppercase    fw-bold  m-auto text-white">
                            Automotive <br />
                            Software Solutions
                          </h1>
                        </div>
                        <div className="col-8 mt-auto">
                          <h4 className="sub_banner_heading   text-white text-capitalize">
                            Digital Strategy Custom-built for Your Business Get
                            Developers
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" Automotive containerFor1600px  pt-3 custom-container">
          <div className="row mx-auto">
            <div className="col-12  mt-md-0 text-center d-block d-md-none">
              <div className="row ">
                <p className="m-0 ">
                  <span className="rowthtech_sol py-1 py-md-0 px-3 text-white backgroung-color-solutions">
                    ROWTHTECH SOLUTIONS APPROACH
                  </span>
                </p>
              </div>
            </div>

            <div className=" automotive2 col-12 mx-5 mx-auto mt-2 ">
              <div className="row financial_software">
                <div className="col-12 text-center mt-3 ">
                  <h2 className="box1_heading">
                    Rowthtech Financial Software Development Services
                  </h2>
                </div>
                <div className="col-12 text_center_auto text-center  ">
                  <p className="box1_subheading text-capitalize mt-md-2 text-center">
                    Rowthtech custom financial software development services
                    cater to the finance industry, providing custom-tailored
                    <br /> solutions for accounting, portfolio management,
                    financial planning, insurance & taxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="Automotive containerFor1600px custom-container my-5 section_3 show_desktop">
            <div className="row">
              <div className="col-12  mx-auto ">
                <div className="row d-flex justify-content-between  ">
                  <div className="col-md-5 mx-auto  order-2 order-md-1 ">
                    <img
                      className="width1 custom_image_width"
                      src={image282}
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>

                  <div className="col-md-6  order-1 order-md-2">
                    <div className="row mx-auto ">
                      {Rservice.map((elem) => {
                        const { img, text } = elem;
                        return (
                          <div className="col-4 col-md-6 my-4 ">
                            <div className="row d-flex justify-content-center">
                              <div className="col-md-3 grid_text">
                                <img
                                  className="image_sizes"
                                  src={img}
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                              <div className="col-md-6 ps-md-1 mt-3 mt-md-0">
                                <h6 className="box1_phara">{text}</h6>
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

          <div className="row  mx-auto d-sm-block d-lg-none">
            <div className="col-11 mx-auto">
              <div className="row mx-auto">
                <div className="col-4 text-center show_mobile ">
                  <img
                    className="image_sizes"
                    src="https://rowthtech.s3.amazonaws.com/accounting.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-4 text-center show_mobile">
                  <img
                    className="image_sizes"
                    src="https://rowthtech.s3.amazonaws.com/portfolio+managment.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-4 text-center  show_mobile">
                  <img
                    className="image_sizes"
                    src="https://rowthtech.s3.amazonaws.com/finanical+planning.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-11 mx-auto mt-3">
              <div className="row mx-auto">
                <div className="col text-center">
                  <h6 className="box1_phara mt-1 show_mobile ">Accounting</h6>
                </div>

                <div className="col text-center">
                  <h6 className="box1_phara show_mobile ">
                    Portfolio Management
                  </h6>
                </div>
                <div className="col text-center">
                  <h6 className="box1_phara  show_mobile ">
                    Financial Planning
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-11 mx-auto mt-3">
              <div className="row mx-auto">
                <div className="col-4  text-start">
                  <img
                    className="image_sizes show_mobile ms-lg-0 ms-0 ms-md-5 ps-lg-0 ps-0 ps-md-1 "
                    src="https://rowthtech.s3.amazonaws.com/insurance.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-4 ms-4 text-start">
                  <img
                    className="image_sizes show_mobile ms-lg-0 ms-0 ms-md-5 ps-lg-0 ps-0 ps-md-1"
                    src="https://rowthtech.s3.amazonaws.com/taxes.png"
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-11 mx-auto mt-3">
              <div className="row mx-auto">
                <div className="col-4 text-center show_mobile">
                  <h6 className="box1_phara ms-1">Insurance</h6>
                </div>
                <div className="col-4 text-center  show_mobile">
                  <h6 className="box1_phara">Taxes</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 mx-auto show_mobile my-2">
            <img
              className="width custom_image_width1"
              src={image2820}
              alt="rowthtech_img"
              loading="lazy"
            />
          </div>
        </section>

        {custom.map((elem) => {
          const {
            image1,
            heading1,
            heading2,
            para,
            sideimg1,
            sideimg2,
            sideimg3,
            sideheading1,
            sideheading2,
            sideheading3,
            sidepara1,
            sidepara2,
            sidepara3,
            order1,
            order2,
          } = elem;
          return (
            <>
              <div className=" container-fluid  paragraph_bottom_line  custom-container  ">
                <div className="row mx-auto d-block d-md-none"></div>
                <div
                  className=" col-12 mx-auto my-4 show_mobile "
                  style={{ border: "1px solid black" }}
                ></div>
              </div>

              <div className=" Automotive containerFor1600 custom-container  accounting  ">
                <div className="row mx-auto">
                  <div
                    className=" col-12  mx-auto show_desktop"
                    style={{ border: "1px solid black" }}
                  ></div>
                  <div className="col-12">
                    <div className="row ">
                      <div className="col-12  py-md-3  ">
                        <div className="row  ">
                          <div className="col-md-6">
                            <h1 className="text_heading_one text-center text-md-start">
                              {heading1} <br />
                              <span className="org_text">{heading2}</span>
                            </h1>
                          </div>
                          <div className="col-md-6">
                            <h2 className="text_heading_two  text-capitalize px-2 text-md-start pt-3 pt-md-2">
                              {para}
                            </h2>
                          </div>

                          <div
                            className={`col-6 mx-auto ps-md-5  d-flex d-none d-md-block ${order2}`}
                          >
                            <div className="row ">
                              <div className="col-12 mt-5 pt-5 show_desktop">
                                <img
                                  className="width1 custom_image_width"
                                  src={image1}
                                  alt="rowthtech_img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            className={`automotive3  col-lg-6 col-12 pe-lg-5 mx-auto  ${order1}`}
                          >
                            <div className="row mx-auto d-flex justify-content-center">
                              <div className="row  mx-auto d-sm-block d-lg-none">
                                <div className="col-12  mx-auto ">
                                  <img
                                    className="width custom_image_width1 pt-0"
                                    src={image1}
                                    alt="rowthtech_img"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 col-11 mt-md-5 mt-3 mx-auto">
                                <div className="row mx-auto">
                                  <div className="col-2 pt-2 p-0 mx-auto">
                                    <img
                                      className="image_sizes "
                                      src={sideimg1}
                                      alt="rowthtech_img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="col-md-10 col-9 text_center_auto ps-md-2">
                                    <h1 className="texted">{sideheading1}</h1>
                                    <p className=" text_heading_three ">
                                      {sidepara1}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 col-11 mt-md-5 mt-3 mx-auto">
                                <div className="row mx-2">
                                  <div className=" col-2 col-lg-2 col-md-2 pt-2 p-0 mx-0">
                                    <img
                                      className=" image_sizes "
                                      src={sideimg2}
                                      alt="rowthtech_img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="col-lg-9 col-8 col-md-8  text_center_auto  ms-lg-2 ms-3  ms-md-0 ps-md-0">
                                    <h1 className="texted">{sideheading2}</h1>
                                    <p className="  text_heading_three ">
                                      {sidepara2}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 col-11  mt-md-5  mx-auto ">
                                <div className="row mx-auto">
                                  <div className="col-2 mx-auto p-0 pt-2 ">
                                    <img
                                      className=" image_sizes "
                                      src={sideimg3}
                                      alt="rowthtech_img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="col-md-10 col-9  text_center_auto ps-md-2">
                                    <h1 className="texted">{sideheading3}</h1>
                                    <p className=" text_heading_three">
                                      {sidepara3}
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
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Automotive;
