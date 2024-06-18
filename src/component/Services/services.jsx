import React from "react";
import "../Services/services.css";
import { CAD, Execution, Group1060, Group877, Group878, Group880, Group881, Group883, Group886, Group887, image134, image135, image136, image138, image5911, webservices } from "../../static content/images";

function Services() {
  const item = [
    {
      id: 1,
      image: "https://rowthtech.s3.amazonaws.com/image+152.png",
      heading: "Quality Assurance (QA) Testing",
      description:
        "To Present High-Value-Added & Agile-Aligned Software Apps And Solutions, We Offer Thorough Quality Assurance (QA) Testing Services. Performing Quality Assurance Tests Can Reduce The Chances Of App Crashes And Glitches, Which In Turn Reduces The Likelihood Of Users Deleting The App.",
    },
    {
      id: 2,
      image: image134,
      heading: "Data Migrations & Upgrades",
      description:
        "The Execution And Management Of Cloud-Based Data Migrations, System Upgrades, And Crucial Software Modernization While Prioritizing System Uptime & Data Integrity. With Our Help Move Data To New Database Platforms And Versions Without Business Interruption.",
    },
    {
      id: 3,
      image:image135,
      heading: "SLA Support Services",
      description:
        "Service Level Agreements (SLA), Effective Monitoring, Reporting, And Technical Support For Your Projects. SLAs In Customer Support Are Vital For Maintaining A Successful Relationship Between A Company And Its Customers, Outlining Service Obligations And Goals, And Ensuring That Promises Are Kept Through Tracking And Management.",
    },
    {
      id: 4,
      image: image136,
      heading: "IT Security Services",
      description:
        "Take Measures To Safeguard Your Business Processes, Technology, And People. The Services We Provide To Our Clients Are Extensive Including IT Security. It Helps Operate High-End Services For Software, Apps, Web Apps, And Many More. ",
    },
    {
      id: 5,
      image: image5911,
      heading: "Data Backup & Recovery",
      description:
        "Providing World-Class Data Backup And Recovery Services To Our Customers Around The World. Our Solutions Include Data Protection, Cybersecurity, Disaster Recovery, And Customised Software Integrations With Leading Backup Systems.",
    },
    {
      id: 6,
      image: image138,
      heading: "Infrastructure Support Services",
      description:
        "We Offer Top IT Infrastructure Support Services, Including Cross-Platform Support For Cloud-Based And On-Premise Databases, Expert Database Design And Implementation, Advanced Performance Tuning, And Storage Disaster Recovery Solutions Worldwide. ",
    },
  ];

  const customcontent = [
    {
      id: 1,
      image: Group886,
      heading: "Custom Web Development Services",
      description:
        "Our personalized web development solutions help in expanding business operations, workflows from concept-to-code & outcome to formation.",
    },
    {
      id: 2,
      image: Execution,
      heading: "Execution & Formation",
      description:
        "To execute & deploy software effectively, we develop thorough strategies and access the needs of our clients to provide them with enhanced technologies",
    },
    {
      id: 3,
      image: Group881,
      heading: "API Development",
      description:
        "We create stable, easy-to-use, user-friendly APIs to promote adaptable integrations and personalization of existing software products",
    },
    {
      id: 4,
      image: Group887,
      heading: "System Integrations",
      description:
        "Our team uses the latest technologies to overwhelm The problems related to design, testing and execution. This process helps to get better results",
    },
    {
      id: 5,
      image: CAD,
      heading: "Custom App Development",
      description:
        "Highly scalable, flexible, & interoperable web, mobile, desktop, and hybrid apps, we prefer Industry-specific technology",
    },
    {
      id: 6,
      image: Group883,
      heading: "App Maintenance",
      description:
        "To Bring Scalability, Functionality, And Stability To Your Entire Software Framework, We Provide Best App Maintenance And Modernization Services",
    },
    {
      id: 7,
      image: Group880,
      heading: "API Integrations",
      description:
        "For all breeds of apps, functions of software systems, we develop custom APIs. It facilitates better communication between your apps and other structures",
    },
    {
      id: 8,
      image: Group878,
      heading: "UX/UI Design",
      description:
        "Responsive and scalable apps that transform the customer experience across multiple channels with the use of latest UI/UX technologies, architectures, and trends.",
    },
  ];

  return (
    <>
      <div className="main-body">
        <div className="about container-fluid my-lg-3 mt-lg-4">
          <div className="row  mx-auto custom-container">
            <div className="col-12 ps-md-4 ps-md-3 ms-1 ms-md-0 mt-3 mt-md-0 ">
              <div className="col-12 d-md-flex heading_ParentText_about   align-items-center justify-content-md-around mx-auto">
                <div className="col-md-7 col-9 mx-md-auto  ">
                  <h2 className="banner-heading text-uppercase m-0">
                    Tailor-made software
                  </h2>
                  <h2 className="banner-heading text-uppercase">
                    <span className="org_text65 border-bottom-0">
                      development services
                    </span>
                  </h2>
                </div>
                <div className="col-md-4 d-none d-md-block ">
                  <p className="sub_banner_heading text-capitalize  ps-md-5 mb-0 ms-md-5">
                    Dedicated Services
                    <br /> For Your Products
                    <br className="d-none d-md-block" />
                    <span className="sub_banner_heading_since">Since 2018</span>
                  </p>
                </div>
                <div className=" col-12 d-block d-md-none  ">
                  <p className="sub_banner_heading text-capitalize mb-3">
                    Leading Software Development Services <br />
                    <br className="d-none d-md-block" />
                    <span className="sub_banner_heading_since">Since 2018</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Banner custom-container my-md-0">
          <div className="row mx-auto">
            <div className="col-12 px-0">
              <div className="row mx-auto">
                <div className="col-12 px-md-0 px-3 bgheight min_hieght_aviod">
                  <img
                    className="width show_desktop radius-15"
                    src={Group1060}
                    alt="rowthtech_img"
                    loading="lazy"

                  />
                  <img
                    className="width show_mobile"
                    src={Group1060}
                    alt="rowthtech_img"
                    loading="lazy"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container-fluid custom-container d-none d-md-block ">
          <div className="row mx-auto service-section-row2  align-items-center">
            <div className="col-12">
              <div className="row mt-5 mb-md-3 ">
                <div className="col-6 ms-md-3 mb-5">
                  <img
                    className="serv1"
                    src={Group877}
                    alt="rowthtech_img"
                    loading="lazy"

                  />
                </div>
                <div className="col-5  Custom_texthead service-content2 d-flex align-items-center ">
                  <div className="row w-100 mx-auto">
                    <div className="col-12 ">
                      <h2 className="text-uppercase">
                        Custom Software <br />
                        <span className="orange-heading2 border-bottom-0">
                          Development Services
                        </span>
                      </h2>
                    </div>
                    <div className="col-12 text pt-2">
                      <p className="">
                        From Enthusiastic, Industry-Experienced Developers As a
                        provider of custom software development services, We're
                        a trusted tech partner in your digital transformation
                        journey. we cater to startups, small and mid-size (SMEs)
                        & large enterprises.
                        <br /> Leveraging the power in New Age Technologies such
                        as OpenAI, ChatGPT, Blockchain, PWA, AR/VR, IoT we
                        provide full end-to-end software development services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="line_services_breaks mx-md-5  d-md-block d-none"></div>
        <section className="container-fluid px-md-5 d-block d-md-none">
          <div className="row service-section-row2  mx-auto align-items-center">
            <div className="col-11 mx-auto">
              <div className="row text">
                <div className="col-12 text-center">
                  <h2 className="text pt-4 text  border-bottom-0 m-0">
                    CUSTOM SOFTWARE
                  </h2>
                  <span className="orange-heading2 border-bottom-0 ">
                    DEVELOPEMENT SERVICES
                  </span>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <img
                    src={Group877}
                    className="customimg pt-4"
                    alt="rowthtech_img"
                    loading="lazy"

                  />
                </div>
                <div className="col-12 px-0 service-content2 d-flex align-items-center ">
                  <p className="  px-3 border-btm pb-4 pt-4">
                    From Enthusiastic, Industry-Experienced Developers As a
                    provider of custom software development services, we cater
                    to startups, small and mid-size (SMEs) & large enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="  custom-container company_services px-lg-5 py-md-5 py-2">
          <div className="row mx-auto grey-line position-relative">
            {customcontent.map((cust, index) => {
              const { image, heading, description } = cust;
              if (index % 2 === 0) {
                return (
                  <div className="col-md-12 col-11 mx-auto ">
                    <div className=" row mx-auto align-items-md-cente zick_zackBoxParent company_services_row zick_zackBoxParent d-flex ">
                      <div className="col-3 col-md-auto img_box p-md-3 p-3 d-flex py-3 align-items-center justify-content-center ">
                        <img
                          src={image}
                          alt="rowthtech_img"
                          loading="lazy"

                          className="imgwidth service_img_mlti"
                        />
                      </div>
                      <div className="col-8 col-md-5 ps-md-4 ms-md-2 ps-1 align-self-center">
                        <h4 className="mb-0  pe-md-0 pt-md-0 pt-1">
                          {heading}
                        </h4>
                        <p className="text-start mb-md-0 mb-1 pt-md-3 pt-1">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col-md-12 col-11 mx-auto">
                    <div className=" row mx-auto align-items-md-center company_services_row zick_zackBoxParent d-flex flex-md-row-reverse my-md-0 py-md-2 my-4">
                      <div className="col-3 col-md-auto img_box p-md-3 p-3 d-flex py-3 align-items-center justify-content-center">
                        <img
                          src={image}
                          alt="rowthtech_img"
                          loading="lazy"

                          className="imgwidth service_img_mlti"
                        />
                      </div>
                      <div className="col-8 col-md-5 pe-md-4 me-md-2  ps-1 text-md-end align-self-center">
                        <h4 className="mb-0 pt-md-0 pt-1">{heading}</h4>
                        <p className="text-md-end mb-md-0 mb-1 pt-md-3 pt-1">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>

        <div className="line_services_breaks mx-md-5  d-md-block d-none"></div>
        <div className="row mx-auto management_BoxParentFont">
          <div className="col-12 px-md-5">
            <div
              className=" col-11 line_color mx-auto my-4  show_mobile  d-md-none d-block"
              style={{ border: "1px solid black " }}
            ></div>
          </div>
        </div>
        <section className=" product_section containerFor1600 custom-container">
          <div className="row  my-md-0 my-0 m2-auto ">
            <div className="col-12">
              <div className="row">
                <div className="col-12 sub_HeadingText">
                  <h2 className="text-uppercase text-center mb-md-4 mt-md-5 orangetext ">
                    Product Process
                    <span className="orange_border2-1 ms-2">Management</span>
                  </h2>
                </div>
                {item.map((elem) => {
                  const { image, heading, description } = elem;
                  return (
                    <div className="col-md-4 px-md-3">
                      <div className="row mx-auto management_BoxParentFont">
                        <div className="col-12 col-md-11 mx-md-auto">
                          <div className="product_img p-md-2 p-2 ms-md-1 mx-2 mx-md-0">
                            <img src={image} alt="rowthtech_img" loading="lazy" />
                          </div>
                        </div>
                        <div className="col-11 col-md-10  mb-3 mb-md-0  mx-auto  pt-md-2 qualitystyle2-1">
                          <h5 className="text-center  text-capitalize  my-2">
                            {heading}
                          </h5>
                          <p className="text-justify mx-md-2 text-capitalize">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="containerFor1600  custom-container  ps-md-5 devloper_section ">
        <div className="row mx-auto management_BoxParentFont">
          <div className="col-12 col-md-6">
            <div className="row align-items-center mt-md-5">
              <div className="col-md-12">
                <div className="row d-none d-md-block">
                  <div className="col-12">
                    <h2 className="text-uppercase">
                      <span className="d-flex position-relative align-items-start">
                        Hire proffesional developer
                        <span>
                          s
                          <img
                            src="https://rowthtech.s3.amazonaws.com/Group+870.png"
                            alt="rowthtech_img"
                            loading="lazy"

                            className="position-absolute three_dot threeLine_img2-1"
                          />
                        </span>
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row d-block d-md-none">
                  <div className="col-6 text-center mx-auto">
                    <h2
                      className="text-uppercase hire_imgs mb-0 position-relative "
                      id="hires"
                    >
                      <span> hire</span>
                    </h2>
                    <h2 className="text-uppercase proff mb-0 mt-1">
                      <span className="border-bottom-0">Professional</span>
                    </h2>
                    <h2 className="devlops">
                      <span className="developer border-bottom-0">
                        DEVELOPERS
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="col-12 ">
                  <p className=" para-11-1 text-center text-md-start mb-0">
                    Dedicated Services for Your Products
                  </p>
                </div>
              </div>
              <div className="col-12 ">
                <div className="row mx-auto management_BoxParentFont">
                  <div className="col-12 col-md-12 px-md-0 py-md-3 py-2">
                    <p className="para-22-1 px-md-0  ps-md-0 text-md-start ">
                      To create the optimal solution for your business, our
                      highly professional software developers use top
                      programming languages, frameworks, and multiple software
                      development tools.
                    </p>
                  </div>
                </div>
                <div className="imgg d-block d-md-none">
                  <img
                    src={webservices}
                    alt="rowthtech_img"
                    loading="lazy"

                  />
                </div>
              </div>
            </div>
            <div
              className="col-12 pb-md-2 d-none d-md-block mt-4 remove_margin_top_all_lang 
                    "
            >
              <div className="row">
                <div className="col-12 pb-md-2">
                  <div className="row mx-auto languages_divParent">
                    <div className="row mb-3 ">
                      <div className="col-10 py-5 px-4 tabelcontent">
                        <div className="row">
                          <div className="col-12 pb-0 padding_add_front">
                            <div className="row mx-auto">
                              <div className="col-5 ps-5">
                                <h5 className="text-uppercase border-top-0 front_end_size">
                                  Front End
                                </h5>
                                <ul className="">
                                  <li className="add_all_launguage">Angular</li>
                                  <li className="add_all_launguage"> CSS</li>
                                  <li className="add_all_launguage">HTML</li>
                                  <li className="add_all_launguage">jQuery</li>
                                  <li className="add_all_launguage">
                                    JavaScript
                                  </li>
                                  <li className="add_all_launguage">ReactJs</li>
                                </ul>
                              </div>
                              <div className="col-2 d-flex align-items-center justify-content-center">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/Ellipse0.png"
                                  alt="rowthtech_img"
                                  loading="lazy"

                                />
                              </div>
                              <div className="col-5 ps-5 remove_padding_12_15">
                                <h5 className="text-uppercase front_end_size">
                                  Back End
                                </h5>
                                <ul className="">
                                  <li className="add_all_launguage">
                                    Java/J2ee
                                  </li>
                                  <li className="add_all_launguage">
                                    Microsoft.Net
                                  </li>
                                  <li className="add_all_launguage">Node.js</li>
                                  <li className="add_all_launguage">PHP</li>
                                  <li className="add_all_launguage"> Python</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pb-0 padding_add_front">
                            <div className="row mx-auto">
                              <div className="col-5 ps-5">
                                <h5 className="text-uppercase border-top-0 front_end_size">
                                  MOBILE
                                </h5>
                                <ul className="">
                                  <li className="add_all_launguage">IOS</li>
                                  <li className="add_all_launguage">Android</li>
                                  <li className="add_all_launguage">Flutter</li>
                                  <li className="add_all_launguage">
                                    React Native
                                  </li>
                                </ul>
                              </div>
                              <div className="col-2 d-flex align-items-center justify-content-center">
                                <img
                                  src="https://rowthtech.s3.amazonaws.com/Ellipse0.png"
                                  alt="rowthtech_img"
                                  loading="lazy"

                                />
                              </div>
                              <div className="col-5 ps-5 remove_padding_12_15">
                                <h5 className="text-uppercase front_end_size">
                                  Full Stack
                                </h5>
                                <ul className="">
                                  <li className="add_all_launguage">
                                    LAMP
                                    <p className="m-0 p-0 multiple_test">
                                      (Linux, Apache, MySQL, PHP/Perl/Python)
                                    </p>
                                  </li>
                                  <li className="add_all_launguage">
                                    MEAN
                                    <p className="m-0 p-0 multiple_test">
                                      (MongoDB, Express.js, AngularJS, and
                                      Node.js)
                                    </p>
                                  </li>
                                </ul>
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
          <div className="col-12 col-md-6 d-none d-md-block mt-5">
            <img
              src={webservices}
              alt="rowthtech_img"
              loading="lazy"
              className="width"
            />
          </div>
        </div>

        <div className="row text-center d-block d-md-none pt-4 pb-4 mb-3 mx-4">
          <div className="col-12 py-3 px-2 tabelcontent">
            <div className="row">
              <div className="col-12 pb-0 padding_add_front">
                <div className="row mx-auto">
                  <div className="col-5">
                    <h5 className="text-uppercase border-top-0 front_end_size">
                      Front End
                    </h5>
                    <ul className="">
                      <li className="add_all_launguage">Angular</li>
                      <li className="add_all_launguage"> CSS</li>
                      <li className="add_all_launguage">HTML</li>
                      <li className="add_all_launguage">jQuery</li>
                      <li className="add_all_launguage">JavaScript</li>
                      <li className="add_all_launguage">ReactJs</li>
                    </ul>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/Ellipse0.png"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-5">
                    <h5 className="text-uppercase front_end_size">Back End</h5>
                    <ul className="">
                      <li className="add_all_launguage">Java/J2ee</li>
                      <li className="add_all_launguage">Microsoft.Net</li>
                      <li className="add_all_launguage">Node.js</li>
                      <li className="add_all_launguage">PHP</li>
                      <li className="add_all_launguage"> Python</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 pb-0 padding_add_front">
                <div className="row mx-auto">
                  <div className="col-5">
                    <h5 className="text-uppercase border-top-0 front_end_size">
                      MOBILE
                    </h5>
                    <ul className="">
                      <li className="add_all_launguage">IOS</li>
                      <li className="add_all_launguage">Android</li>
                      <li className="add_all_launguage">Flutter</li>
                      <li className="add_all_launguage">React Native</li>
                    </ul>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/Ellipse0.png"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-5">
                    <h5 className="text-uppercase front_end_size">
                      Full Stack
                    </h5>
                    <ul className="">
                      <li className="add_all_launguage">
                        LAMP
                        <p className="m-0 p-0 multiple_test">
                          (Linux, Apache, MySQL, PHP/Perl/Python)
                        </p>
                      </li>
                      <li className="add_all_launguage">
                        MEAN
                        <p className="m-0 p-0 multiple_test">
                          (MongoDB, Express.js, AngularJS, and Node.js)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
