import React, { useEffect, useState } from "react";
import "./ReadMore.css";
import "../Blog.css"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../../config";
import { Container, Row, Col } from "react-bootstrap";
import HtmlContent from "../texttohtml";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";

const ReadMore = () => {
  const baseUrl = config.REACT_APP_API_URL;
  const { url } = useParams();
  const [data, setData] = useState();
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    fetchData();
    fetchRandomBlogs();
  }, [url]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}getBlogByUrl/${url}`);
      setData(response.data.response);
    } catch (error) {
    }
  };

  const fetchRandomBlogs = async () => {
    try {
      const response = await axios.get(`${baseUrl}blogs/next/${url}`);
      setRandomBlogs(response.data.response);
    } catch (error) {
    }
  };

  const extractPlainText = (html) => {
    const div = document.createElement('DIV');
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const trimToWords = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };
  const headingText = extractPlainText(data?.mainHeading || "");
  const trimmedHeading = trimToWords(headingText, 20);
  const paraText = extractPlainText(data?.content || "");
  const trimmedPara = trimToWords(paraText, 20);

  return (
    <Container fluid='sm' className="my-md-5 mt-3 maian_cotainer_shuffel">
      <div className="col-12 text-small">
        <a><Link to={'/'} className="text-small">Home</Link></a> &gt;
        <a><Link to={'/blog'} className="text-small">Blog</Link></a>
        &gt; {headingText} </div>
      <Row className="d-flex align-items-center justify-content-center mt-md-5 mt-3">
        <Col sm={10}>
          <HtmlContent content={data?.mainHeading}></HtmlContent>
          <div className="image_readmore mt-md-3 mt-2">
            <img className="w-100 rounded" src={data?.image} alt="rowthtech_img" />
          </div>
          <div className="mt-3 for_images">
            <HtmlContent content={data?.content}></HtmlContent>
          </div>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center py-md-4 py-2 mt-5 main_lines">
            <h4>Like the blog? Spread the word</h4>
            <ul className="blogHeadSocial d-flex flex-row gap-4 mt-3 mb-0">
              <li>
                <FacebookShareButton
                  className="share"
                  url={`https://www.rowthtech.com/blog/${url}`}
                  hashtag={`${trimmedHeading}---`}

                >
                  <FacebookIcon className="img" size={32} round={true} />
                </FacebookShareButton>
              </li>
              <li>
                <TwitterShareButton
                  className="share"
                  title={`${trimmedHeading} - ${trimmedPara}`}
                  url={`https://www.rowthtech.com/blog/${url}`}
                >
                  <TwitterIcon className="img" size={32} round={true} />
                </TwitterShareButton>
              </li>
              <li>
                <LinkedinShareButton
                  className="share"
                  title={headingText}
                  summary={headingText}
                  url={`https://www.rowthtech.com/blog/${url}`}
                >
                  <LinkedinIcon className="img" size={32} round={true} />
                </LinkedinShareButton>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={10} className="mt-md-5 mt-3 px-md-0 px-3" >
          <Row className="d-flex flex-row align-items-center justify-content-center">
            {randomBlogs?.map((item, index) => {
              return (
                <Col lg={6} className="mb-3 px-md-4" key={index}>
                  <Row className="d-flex justify-content-start align-items-start card_top px-md-3 py-md-4 px-2 py-2">
                    <Col
                      lg={4}
                      sm={4}
                      xs={4}
                      className="background_main_card_colsix"
                    >
                      <img src={item?.image} alt="rowthtech_img" />
                    </Col>
                    <Col lg={8} sm={8} xs={8} className="ps-md-5">
                      <Row className="d-flex flex-column justify-content-between align-items-center height_Card_main">
                        <Col lg={12} className="head_main px-md-0">
                          <HtmlContent
                            content={item?.mainHeading}
                          ></HtmlContent>
                        </Col>
                        <Col lg={12} className="content_main px-md-0">
                          <HtmlContent
                            content={item?.content}
                            status={true}
                            words={25}
                          ></HtmlContent>
                        </Col>
                        <Col lg={12} className="px-md-0">
                          <span className="textlink">
                            <Link
                              to={`/blog/${item?.url}`}
                              className="nav-link navlinkkk  text-dark"
                            >
                              Read More &gt;&gt;
                            </Link>
                          </span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ReadMore;
