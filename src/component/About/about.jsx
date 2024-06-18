import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { GROUP959, IMAGE21, MukeshSir, Raavishsir, aa, baymetal, bmglogo, dddd, demo, dr_audin, easyGovLogo, footshoes, groupwq, imgHome111, imgHome4, imgSdLifeCycle, mainaboutimg, mooverLogo, muditMathur, pplgos, signologo, spiffLogo, vineetVerma, vishalGupta, vivaLifeStyle, washiAbout } from "../../static content/images";

function About() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: false,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 3,
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
        items: 10,
      },
    },
  };

  const clientimg = [
    {
      image: washiAbout,
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/tipstartabout.svg",
    },
    {
      image: easyGovLogo,
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/seekhabout.svg",
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/edurekaabout.svg",
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/kshamabout.svg",
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/careabout.svg",
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/turnsImage.svg",
    },
    {
      image: mooverLogo,
    },
    {
      image: dr_audin,
    },
    {
      image: "https://rowthtech.s3.amazonaws.com/accpro.png",
    },
    {
      image: baymetal,
    },
    {
      image: bmglogo,
    },
    {
      image: footshoes,
    },
    {
      image: signologo,
    },
    {
      image: vivaLifeStyle,
    },
    // {
    //   image: "https://rowthtech.s3.amazonaws.com/PP-white-logo.svg",
    // },
    {
      image: spiffLogo,
    },
    {
      image: pplgos,
    },
  ];
  const ourhead = [
    {
      image: Raavishsir,
      fname: "RAAVISH",
      lname: "DAHUJA",
      linkedin:
        "https://www.linkedin.com/in/raavish-dahuja-cbap%C2%AE%EF%B8%8F-aa9999158",
      heading: "FOUNDER & CEO",
      para1:
        "Serial entrepreneur and Founder of RowthTech a global technology and analytics services company. At RTL, we go beyond helping businesses transform through technology. We help them make a meaningful difference. Translating their aspiration into reality.",
      para2:
        "I believe every business is born out of belief, the belief that you can make an impact, and that you have an Idea that matters. Drop us a line to talk more about the next big revolution.",
    },
    {
      image: MukeshSir,
      fname: "MUKESH",
      lname: "BHANDARI",
      linkedin: "https://www.linkedin.com/in/mukesh-bhandari-31200217",
      heading: "HEAD OF DEPARTMENT",
      para1:
        "I have 13+ years of rich experience in Product development, I am an expert in technology forecasting, strategic planning, and implementing business requirements with technology. Our processes are easy to understand and follow, and we do not let them hinder us when developing applications. We have experience in both Waterfall and DevOps methodologies and can provide secure infrastructure to serve global customers. Our focus is on helping businesses transform their products into digital applications with a positive user experience. We have already assisted over 200 customers with this process, and we are eager to work with you too.",
      para2:
        "I am Mukesh, and I am committed to delivering the highest quality of development consistently with a great pleasant experience with us.",
    },
  ];
  const rowthtech = [
    {
      heading: "WHO ARE WE",
      para: "RowthTech is a leading company that builds digital solutions for startups, SMEs, Enterprises. We use emerging technologies to complete projects. It is a family of technical experienced people who serve various needs from 2017. For us, the meaning of success is to transform the creative concepts of people into reality with the help of our tech professionals.",
    },
    {
      heading: "WHAT WE DO",
      para: "RowthTech believes in making long-lasting relationships with clients. Our team follows a process that makes your digital products effective. Firstly ,we listen to client requirements and do complete research and development so that we can provide the best solutions.",
    },
  ];

  const excellence = [
    {
      heading: "105 Strong",
      image: "https://rowthtech.s3.amazonaws.com/abouteclips.png",
      para: "Our company is composed of highly enthusiastic and experienced engineers and is fully equipped with the latest technology ready to satisfy your needs.",
    },
    {
      heading: "220+ Products Built",
      image: "https://rowthtech.s3.amazonaws.com/abouteclips.png",
      para: "RowthTech encourages its employees to experiment, innovate, and learn from failure, with the aim of improving processes and customer experiences. We also use data and analytics extensively to identify areas for improvement and measure the impact of its initiatives.",
      className: "show_desktop",
    },
    {
      heading: "220+ Products Built",
      image: "https://rowthtech.s3.amazonaws.com/abouteclips.png",
      para: "Years Of Experience, And Those Who Are Worthy Of The Flattery Of The Present.",
      className: "show_mobile",
      reverse: "flex-row-reverse",
    },
    {
      heading: "25+ Combined Experience",
      image: "https://rowthtech.s3.amazonaws.com/abouteclips.png",
      para: "The industry is known for its fast-paced and rapidly changing nature, and an individual who has stayed relevant and adaptable for over two decades is highly respected. Having a vast experience brings with it a range of benefits, including expertise, adaptability, leadership skills, a vast network, and increased credibility.",
    },
  ];
  const values = [
    {
      heading: "BOOST OR ENHANCE CLIENT SATISFACTION",
      para: "With years of experience behind us, we work with the people who have brought us success. This helps us to maintain client satisfaction at the heart of our ecosystem. To gain remarkable insights, we do not shy away from collaboration. Receiving praise from clients makes our day. It's a passion within us that keeps us going.",
    },
    {
      heading: "HONESTY IS EVERYTHING",
      para: "Business relations always depend on honesty. Anything else in the absence of trust is just a waste of time, and working without transparency is nothing that matters to us. It’s about producing commitments with honesty and decency, both in our businesses and in our lives. We value teamwork and cultivate it.",
    },
    {
      heading: "PROFESSIONAL APPROACH",
      para: "The foundation of our success is our vision and execution of it. We engage experienced minds who are passionate about their companies' missions. It creates a positive effect on their clients. Our team of smart workers have earned success on both a financial and professional level.",
    },
  ];

  const mobilecarousel = [
    {
      img1: aa,
      para: "Our engagement faced several challenges, but the RowthTech team managed them effectively without compromising the project's timelines or quality. The team exhibited exceptional leadership skills, working tirelessly behind the scenes to ensure the success of our marquee project. The instrumental role played by RowthTech team members contributed significantly to the achievements we have made in the past months.",
      profile: vineetVerma,
      name: "Vineet verma",
      position: "(CTO Edureka)",
      active: "active",
    },
    {
      img1: aa,
      para: "The technical skills of developers at Rowth he are hest. They complete projects according to our niche and given time. I am impressed by their work.The instrumental role played by RowthTech team members contributed significantly to the achievements we have made in the past months. The work produced was of excellent quality, and we would contemplate collaborating with them again in the future and endorse their services to others.",
      profile: vishalGupta,
      name: " Vishal Gupta",
      position: "(CTO Turns)",
    },
    {
      img1: aa,
      para: "Rowthtech proactively fulfilled our requirements satisfactorily. They stuck to the agreed schedule and provided detailed responses. The work produced was of excellent quality, and we would contemplate collaborating with them again in the future and endorse their services to others. The Rowthtech team acted as an exceptional partner, and we perceive them as more than a mere service provider; they are a crucial part of the Easygov family.",
      profile: muditMathur,
      name: "Mudit Mathur",
      position: "(Head of Government Business at EasyGov)",
    },
  ];

  return (
    <>
      <div className="main-body">
        <div className="about container-fluid my-lg-3 mt-lg-4">
          <div className="row  mx-auto custom-container">
            <div className="col-12 ps-md-4 ps-md-3 ms-1 ms-md-0 mt-3 mt-md-0  ">
              <div className="col-12 d-md-flex heading_ParentText_about align-items-center justify-content-md-around mx-auto">
                <div className="col-md-7 col-9 mx-md-auto  ">
                  <h2 className="banner-heading text-uppercase m-0">
                    Customize Solutions
                  </h2>
                  <h2 className="banner-heading text-uppercase">
                    <span className="org_text65 border-bottom-0">
                      By Professionals
                    </span>
                  </h2>
                </div>
                <div className="col-md-4 d-none d-md-block ">
                  <p className="sub_banner_heading text-capitalize  ps-md-5 mb-0 ms-md-5">
                    Leading Software <br /> Development Services
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
                <div className="col-12 px-md-0 px-3 min_hieght_aviod">
                  <img
                    className="width show_desktop radius-15"
                    src={imgHome111}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                  <img
                    className="width show_mobile"
                    src={mainaboutimg}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-auto heading_ParentText_about custom-container d-none d-md-block ">
          <div className="  col-12 my-md-4 my-3  ">
            <h1 className="text-center  dreamsize mb-0">
              YOU DREAM IT, <span className="webuild">WE BUILD IT,</span>
              <span className="beyondbrdr webuild">BEYOND EXCELLENCE</span>
            </h1>
          </div>
        </div>
        <div className="row mx-auto d-block d-md-none">
          <div className=" dreamsize col-12 my-md-5 my-3 ">
            <h1 className="text-center fw-bold dreamsize mb-0">
              YOU DREAM IT, WE BUILD IT,
            </h1>
            <h1 className="text-center fw-bold dreamsize mb-0">
              <span className="beyondbrdr">BEYOND EXCELLENCE</span>
            </h1>
          </div>
        </div>
        <div
          className=" col-12 mx-auto mb-md-3  custom-container show_desktop "
          style={{ border: "1px solid black " }}
        ></div>
        <div
          className=" col-11 mx-auto mb-md-3 show_mobile "
          style={{ border: " 1px solid black " }}
        ></div>

        <div className=" about2 container1600 main_cont my-md-0 pt-3">
          <div className="row mx-auto  custom-container ">
            {rowthtech.map((who) => {
              const { heading, para } = who;
              return (
                <div  className="col-12 col-md-11 mx-auto">
                  <div className="row mx-auto heading_ParentText_about">
                    <div className="col-md-4 mx-auto ">
                      <h2 className="heading-3 mt-md-1">
                        <span>{heading}</span>
                      </h2>
                    </div>
                    <div className="col-md-8 mx-auto  mt-1 mt-md-0">
                      <p className="para-2 ">
                        {para}
                        {/* <span className="org-txt"> read more+</span> */}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className=" col-12 mt-md-1 mt-4  custom-container   show_desktop "
            style={{ border: " 1px solid black " }}
          ></div>

          <div className=" col-11 line_color mx-auto my-2 show_mobile  "></div>

          <div className="about3 row  align-items-center my-md-3  custom-container  mb-4 mx-auto">
            <div className="col-md-11 col-12  mx-auto my-md-1">
              {excellence.map((exc) => {
                const { heading, image, para, className, reverse } = exc;
                return (
                  <div className={className}>
                    <div
                      className={`row align-items-center numberbg  mx-auto d-flex justify-content-evenly my-4 py-2 ${reverse}`}
                    >
                      <div className="col-3 heading_ParentText_about sizeabout ">
                        <h1 className="mb-0">{heading}</h1>
                      </div>
                      <div className="col-auto ">
                        <img src={image} alt="rowthtech_img" loading="lazy"/>
                      </div>
                      <div className="col-md-8 heading_ParentText_about col-8">
                        <h6 className="sizeabout m-0 p-0">{para}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row mx-auto my-md-4  custom-container ">
            <div className="col-12 sub_headingParentText_about title ">
              <h1 className=" personal text-center ">
                <img
                  className="orngimg me-md-4 pe-md-4"
                  src="https://rowthtech.s3.amazonaws.com/Rectangle+805.png"
                  alt="rowthtech_img"
                  loading="lazy"
                />
                PERSONAL NOTE FROM <span className="fw-bold">OUR HEAD</span>
                <img
                  className="orngimg  ms-md-4 ps-md-4"
                  src="https://rowthtech.s3.amazonaws.com/Rectangle+805.png"
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </h1>
            </div>
          </div>

          <div className=" about4 container-fluid  custom-container  heading_ParentText_about my-md-3 mt-4 mb-0 pt-md-0 ">
            {ourhead.map((elem) => {
              const { image, fname, lname, linkedin, heading, para1, para2 } =
                elem;
              return (
                <div className="row pb-5 ">
                  <div className="col-md-12 mx-auto">
                    <div className="row mx-auto d-flex justify-content-evenly">
                      <div className="col-md-3 col-4 m-0 ravii align-self-start d-md-flex justify-content-md-center px-md-2 px-0">
                        <img className="width" src={image} alt="rowthtech_img" />
                      </div>
                      <div className="   col-md-7 col-6 px-md-0 align-self-center  mt-2 px-md-2 px-0">
                        <div className="row d-flex align-items-center justify-content-start">
                          <div className="col-md-6 col-10">
                            <h2 className="inner_phara_headings m-0 ">
                              {fname} <span className="surname">{lname} </span>
                            </h2>
                          </div>
                          <div className="col-md-6 col-2 d-flex align-items-center justify-content-md-end">
                            <p className="p-0 m-0">
                              <Link
                                to={linkedin}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i
                                  className="fa fa-linkedin linkiconlinked"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </p>
                          </div>
                        </div>
                        <span className="d-none d-md-block imgblock">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/brderimg.png"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </span>
                        <span className="d-block d-md-none lineheight21">
                          <img
                            src="https://rowthtech.s3.amazonaws.com/brderimg.png"
                            className="width1"
                            alt="rowthtech_img"
                            loading="lazy"
                          />
                        </span>
                        <h6 className="inner_phara_headingss pt-md-2 pt-0 ">
                          {heading}
                        </h6>
                        <h3 className="inner_phara_content  pt-md-1 d-md-block d-none">
                          “{para1}
                          <br />
                          <br />
                          {para2}”
                        </h3>
                      </div>
                      <div className="col-12 d-block d-md-none mt-3">
                        <div className="row mx-auto">
                          <h3 className="inner_phara_content  pt-md-1">
                            “{para1}
                            <br />
                            <br />
                            {para2}”
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row show_mobile mt-0 mt-md-0 mb-3 mx-auto d-md-none d-block">
            <div className="col-10 mx-auto">
              <h1 className="facilities1 text-center">
                WE FACILIATE SOFTWARE
                <span className="facilities2 m-0 text-center ms-1">
                  DEVELOPEMENT
                </span>
                <br />
                <span className="facilities2 m-0 text-center ms-1">
                  PROCESS
                </span>
              </h1>
            </div>
            <div className="row mx-auto px-0 ">
              <div className="col-md-12 my-md-5 py-md-5 py-3 px-0 d-md-none d-block ">
                <img
                  src={groupwq}
                  className="width show_mobile"
                  alt="rowthtech_img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="about11 col-md-12 col-8 my-md-5 mx-0 ">
            <img
              src={imgSdLifeCycle}
              className="width show_desktop"
              alt="rowthtech_img"
              loading="lazy"
            />
          </div>

          <div className="row mx-auto">
            <div className="col-10 mx-auto px-0">
              <img
                src={dddd}
                className="show_mobile width"
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="container-fluid  custom-container  mt-3  show_desktop ">
            <div className="row mx-md-5">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2">
                    <h2 className="Core-values-desktop_heading">
                      OUR <span className="core-weight"> Core VALUES</span>
                    </h2>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 core-lower-line">
                    <p className="circle-coreval"></p>
                  </div>
                </div>

                <div className="row d-flex flex-column">
                  {values.map((elem, index, values) => {
                    const { heading, para } = elem;
                    return (
                      <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 background_cols  py-3 px-5">
                          <h3 className="core-val-h3">{heading}</h3>
                          <p className="core-para m-0 p-0">{para} </p>
                        </div>
                        {index !== values.length - 1 && (
                          <div className="col-10 core-first-line"></div>
                        )}
                      </>
                    );
                  })}
                </div>

                <div className="col-10 core-bottom-line ">
                  <p className="circle-coreval2 "></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="banner custom-container col-md-12  px-md-auto  py-md-2  pt-md-5">
          <div className="row  mx-auto">
            <div className="col px-0 rectglehorizontal">
              <div className="row mx-auto ">
                <div className="col-12  heading_ParentText_about  hire-images position-relative">
                  <img
                    className="width show_desktop "
                    src={IMAGE21}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                  <img
                    className="width show_mobile height_custom-86 mt-3"
                    src={IMAGE21}
                    alt="rowthtech_img"
                    loading="lazy"
                    style={{ height: " 10rem" }}
                  />
                  <div className="row d-flex   ">
                    <div className="col-9 position-absolute CONTENTTOP ">
                      <div className="row mx-auto d-flex  align-items-center ">
                        <div className="col-md-9  col-8 ">
                          <h1 className="outer2_contnet m-0">
                            HIRE PROFFESSIONAL
                          </h1>
                          <h1 className="outer3_contnet">
                            WEB & MOBILE DEVELOPERS
                          </h1>
                        </div>
                        <div className="col-8 show_desktop">
                          <p className="inner_phara1_content  mb-md-3 ">
                            RowthTech is a leading web development company that
                            makes product growth effective. We have a large pool
                            of software developers that is available for fixed
                            prices or hourly packages/cost projects. Our
                            seasoned executives mentored them. We provide
                            multiple services to clients with solutions for
                            setting up their market websites, consulting, web
                            design, or even developing applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-11 mx-auto show_mobile">
                  <p className="inner_phara1_content pt-3">
                    RowthTech is a leading web development company that makes
                    product growth effective. We have a large pool of software
                    developers that is available for fixed prices or hourly
                    packages/cost projects. Our seasoned executives mentored
                    them. We provide multiple services to clients with solutions
                    for setting up their market websites, consulting, web
                    design, or even developing applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="custom-container d-block d-md-none">
          <div className="row mx-auto pb-md-1">
            <div className="col-md-11 col-11 px-2 px-md-0  d-flex align-items-center justify-content-center mx-auto p-0 circleimg">
              <img
                className="show_mobile mt-4 "
                src={GROUP959}
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="custom-container d-none d-lg-block">
          <div className="row my-3 my-lg-5 mx-lg-5 px-lg-5  ">
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-6  d-flex  align-items-center
               mb-md-0 mb-5 "
            >
              <h1 className="fw-2 text-black  border_bottom_what_we_do pb-md-4  what-we-do-fs  pb-2">
                WHAT <br />
                <span className="fw-bold">
                  WE DO <br /> FOR YOU
                </span>
              </h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <img
                className="what-wedo-img"
                src={imgHome4}
                alt="rowthtech_img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="row mx-auto mt-md-0 mt-4">
          <div className="col-12 my-2 px-md-0">
            <h1 className="text-center fw-bold mb-2">
              <span className="testmonials">
                CLIENTS <span className="testmonils">TESTIMONIALS</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="about6 mt-5  d-lg-block d-none custom-contain main-container  pt-md-4 pt-4 contains1-1 position-relative ">
          <div className="row profile_cont mx-auto">
            <div className=" d-none d-lg-block col-4 brdr sameProfile_div position-relative border-bottom-0 mt-3">
              <div className="row ">
                <div className="col-12 d-flex justify-content-center py-4 ">
                  <img
                    className="img_comma"
                    src={demo}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-10 paraText-about  pb-4 mx-auto">
                  <p className="para-1">
                    The technical skills of developers at Rowth he are hest.
                    They complete projects according to our niche and given
                    time. I am impressed by their work.The instrumental role
                    played by RowthTech team members contributed significantly
                    to the achievements we have made in the past months. The
                    work produced was of excellent quality, and we would
                    contemplate collaborating with them again in the future and
                    endorse their services to others.
                  </p>
                </div>
                <div className="img_section col-12 ">
                  <div className=" imageposition d-flex">
                    <img
                      src={vishalGupta}
    
                      className="img_size br50 rounded-pill mx-auto"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className=" all_other_testimonial mt-3
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-column"
                  >
                    <h1 className="name-bold mt-md-0 pt-2 m-0">Vishal Gupta</h1>
                    <p className="m-0 p-0 multiple_test mt-1"> (CEO Turns)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 brdr pt-md-2 sameProfile_div11 position-relative ">
              <div className="row">
                <div className="col-12 d-flex justify-content-center py-md-1 pt-3 pb-1 ">
                  <img
                    className="img_comma"
                    src={aa}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-11  paraText-about col-12 pb-5 mx-auto">
                  <p className="para-1  text-white">
                    Our engagement faced several challenges, but the RowthTech
                    team managed them effectively without compromising the
                    project's timelines or quality. The team exhibited
                    exceptional leadership skills, with some working tirelessly
                    behind the scenes to ensure the success of our marquee
                    project. The instrumental role played by RowthTech team
                    members contributed significantly to the achievements we
                    have made in the past months.
                  </p>
                </div>
                {/* <div className="img_section col-12 d-flex justify-content-center position- mt-md-0 mt-3">
                  <div className=" image-position mt-md-0 mt-4 ps-md-0 pt-2">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/vineetVerma.webp"
                      alt="rowthtech_img"
                      className="mob_width robertradius"
                    />
                  </div>
                  <div
                    className=" all_other_testimonial
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-column"
                  >
                    <h1 className="name-bold mt-md-0 pt-2 m-0">Vineet verma</h1>
                    <p className="m-0 p-0 multiple_test mt-1"> (CTO Edureka)</p>
                  </div>
                </div> */}
                <div className="img_section col-12 ">
                  <div className=" imageposition d-flex">
                    <img
                      src={vineetVerma}
                      className="img_size br50 rounded-pill mx-auto margin_center"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className=" all_other_testimonial mt-3
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-column"
                  >
                    <h1 className="name-bold mt-md-0 pt-2 m-0">Vineet verma</h1>
                    <p className="m-0 p-0 multiple_test mt-1"> (CTO Edureka)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" d-none d-lg-block col-4 brdr sameProfile_div position-relative border-bottom-0 mt-3">
              <div className="row">
                <div className="col-12 d-flex justify-content-center py-4">
                  <img
                    className="img_comma"
                    src={demo}
                    alt="rowthtech_img"
                    loading="lazy"
                  />
                </div>
                <div className="col-10  paraText-about pb-4 mx-auto">
                  <p className="para-1 ">
                    Rowthtech proactively fulfilled our requirements
                    satisfactorily. They stuck to the agreed schedule and
                    provided detailed responses. The work produced was of
                    excellent quality, and we would contemplate collaborating
                    with them again in the future and endorse their services to
                    others. The Rowthtech team acted as an exceptional partner,
                    and we perceive them as more than a mere service provider;
                    they are a crucial part of the Easygov family.
                  </p>
                </div>
                {/* <div className="img_section col-12 d-flex justify-content-center position-absolute">
                  <div className=" col-md-3 image-position position-absolute">
                    <img
                      src="https://rowthtech.s3.amazonaws.com/muditMathur.webp"
                      className="width sachinwidth"
                      alt="rowthtech_img"
                    />
                  </div>
                  <div
                    className=" col-md-12 all_other_testimonial
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-column"
                  >
                    <h1 className="name-bold mt-md-0 pt-2 m-0">Mudit Mathur</h1>
                    <p className="m-0 p-0 multiple_test mt-1">
                      (Head of Government Business at EasyGov)
                    </p>
                  </div>
                </div> */}
                <div className="img_section col-12 ">
                  <div className=" imageposition d-flex">
                    <img
                      src={muditMathur}
                      className="img_size br50 rounded-pill mx-auto"
                      alt="rowthtech_img"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className=" all_other_testimonial mt-3
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-column"
                  >
                    <h1 className="name-bold mt-md-0 pt-2 m-0">Mudit Mathur</h1>
                    <p className="m-0 p-0 multiple_test mt-1">
                      (Head of Government Business at EasyGov)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleInterval"
          className="carousel slide d-lg-none mt-2 px-1 mx-4 "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            {mobilecarousel.map((elem) => {
              const { img1, para, profile, name, position, active } = elem;
              return (
                <div className={`carousel-item ${active}`}>
                  <div className="background_color_testimonial d-flex flex-column justify-content-center align-items-center">
                    <div className="row   px-4   ">
                      <div className="col-12 text-center pb-2 ">
                        <img className="img_comma_test" src={img1} alt="rowthtech_img" />
                      </div>
                      <div className="col-12 mx-auto">
                        <p className="crousel_testimonial_paras ">{para} </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-column justify-content-center align-items-center ">
                    <div className="transform_testimonial_image d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={profile}
                        alt="rowthtech_img"
                        loading="lazy"
                        className=" border_testimonial_images "
                      />

                      <h1 className="testimonial_names pt-2 text-center">
                        {name}
                        <br />
                        <p className="testimonial_names text-center text-black">
                          {position}
                        </p>
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            className="carousel-control-prev "
            data-bs-target="#carouselExampleInterval"
            type="button"
            data-bs-slide="prev"
          >
            <span
              className=" fa fa-angle-left transfom_pre bg-dark bg-dark_testimonial  "
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next "
            data-bs-target="#carouselExampleInterval"
            type="button"
            data-bs-slide="next"
          >
            <span
              className="fa fa-angle-right transfor_next bg-dark bg-dark_testimonial   "
              aria-hidden="true"
            ></span>
            <span className="sr-only ">Next</span>
          </Link>
        </div>

        <div className="container-fluid   my-md-2 py-md-2 pb-lg-3 mt-md-4 pb-2 pt-3">
          <div className="col-12  text-center text-md-start pt-md-5 mt-md-0">
            <div className="row ">
              <div className="col-md-12 mt-5 col-12 text-center">
                <h1 className="clients-heading fw-semibold p-0 m-0">
                  Our <span className="testimonials fw-semibold">Clients</span>
                </h1>
              </div>
            </div>
          </div>
          <div className=" col-md-12 col-12 mx-auto my-md-4">
            <div className="row mx-auto  d-flex align-items-center ">
              <div className=" overflow-visible ">
                <OwlCarousel
                  className="owl-theme"
                  {...options}
                  loop
                  margin={10}
                  nav
                >
                  {clientimg.map((img) => {
                    const { image } = img;
                    return (
                      <div className="col  mx-md-3 mx-1">
                        <div className="row mx-auto position-relative">
                          <div className="col d-flex align-items-center justify-content-center">
                            <img
                              className="all_testimonial"
                              src={image}
                              alt="rowthtech_img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
