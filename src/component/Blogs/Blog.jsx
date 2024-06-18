import React, { useState, useEffect } from "react";
import "./Blog.css";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import HtmlContent from "./texttohtml";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom"
import { erroeImg } from "../../static content/images"
import config from "../../config";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [data, setData] = useState("Category");
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [totalItems, setTotalItems] = useState(0);
  const baseUrl = config.REACT_APP_API_URL;
  const [loadMore, setLoadMore] = useState(false);


  const fetchBlogs = async (page = 1) => {
    try {
      const response = await axios.get(`${baseUrl}getAllBlogs?user=true`, {
        params: {
          status: true,
          page,
          search,
          limit: itemsPerPage,
          categorys: category,
        },
      });
      setBlogs(response.data.response);
      setTotalItems(response.data.totalItems);
      if (response.data.response.length < 1) {
        setLoading(true);
      }

    } catch (error) {
      setError("Failed to fetch blogs");
      setLoading(true);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}getCategory?status=true`);
      setCategories(response.data.response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const changeCaterogy = (item) => {
    if (item._id) {
      setCategory(item._id)
    } else {
      setCategory('');
    }
    setData(item.name);

  }

  const loadMoreContent = () => {
    setLoadMore(true);
    if (totalItems > blogs?.length) {
      setItemsPerPage(itemsPerPage + 7);
      setLoadMore(false);
    } else {
      setItemsPerPage(7);
      setLoadMore(false);
    }

  }

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, [search, category, itemsPerPage]);

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center mt-md-3 mx-auto">
        <Col xl={11} className="px-md-5 mt-md-4 mt-3 min_hieght_aviod">
          <img
            src="https://rowthtech.s3.amazonaws.com/Mask+group.webp"
            className="headerImage"
            alt="Wallpaper"
            loading="lazy"

          />
        </Col>
      </Row>
      <Container className="mt-md-5 mt-3 container_main mb-md-5">
        <Row className="mx-auto d-flex justify-content-center align-items-center">
          <Col xs={12} className="px-md-5">
            <div className="px-md-3">
              <Dropdown as={ButtonGroup} style={{ minWidth: '12%' }} className="dropDown_category">
                <Button variant="dark">{data}</Button>
                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeCaterogy({ name: 'Category' })} >All</Dropdown.Item>
                  {
                    categories.map(item => {
                      return (
                        <>
                          <Dropdown.Item onClick={() => changeCaterogy(item)} >{item.name}</Dropdown.Item>
                        </>
                      )
                    })
                  }

                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          {loading ? (
            <Col xs={12} className="h-100 w-100 d-flex flex-column justify-content-center align-items-center mt-md-5">
              <img src={erroeImg} alt="Error" loading="lazy" className="w-25" />
              <p className="fs-6 fw-semibold">We currently don't have any blog posts available. Please check back later for updates!</p>
            </Col>
          ) : (
            <></>
          )}

          <Col
            sm={11}
            xs={12}
            className="mt-md-3 mt-2 px-3"
          >
            <Row>
              {blogs?.length > 0 ? (
                <Col xl={12} className="mb-md-5 mb-3">
                  <Row className="d-flex justify-content-between align-items-start card_top px-md-3 py-md-4 px-2 py-2">
                    <Col xl={6} sm={4} xs={4} className="background_main_card">
                      {" "}
                      <img src={blogs[0]?.image} alt="rowthtech_img" loading="lazy" />
                    </Col>
                    <Col xl={6} sm={8} xs={8} className="ps-md-5">
                      <Row className="d-flex flex-column justify-content-between align-items-center height_Card_main">
                        <Col xl={12} className="head_main">
                          <HtmlContent
                            words={20} status={true}
                            content={blogs[0]?.mainHeading}
                          ></HtmlContent>
                        </Col>
                        <Col xl={12} className="content_main">
                          <HtmlContent
                            content={blogs[0]?.content}
                            status={true}
                            words={window.innerWidth>1000?70:8}
                          ></HtmlContent>
                        </Col>
                        <Col xl={12}>
                          <span className="textlink">
                            <Link
                              to={`/blog/${blogs[0]?.url}`}
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
              ) : (
                <>
                  {!loading ? (
                    <Col xs={12} className="h-100 w-100 d-flex flex-column justify-content-center align-items-center mt-5">
                      <Spinner size="lg" animation="border" role="status" className="mt-5 pt-4">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner></Col>
                  ) : (
                    <></>
                  )}

                </>
              )}
              {blogs?.map((item, index) => {
                if (index > 0) {
                  return (
                    <Col lg={6} className="mb-3 px-md-4" key={index}>
                      <Row className="d-flex justify-content-start align-items-start card_top px-md-3 py-md-4 px-2 py-2">
                        <Col
                          lg={4}
                          sm={4}
                          xs={4}
                          className="background_main_card_colsix"
                        >
                          <img src={item?.image} alt="rowthtech_img" loading="lazy"/>
                        </Col>
                        <Col lg={8} sm={8} xs={8} className="ps-md-5">
                          <Row className="d-flex flex-column justify-content-between align-items-center height_Card_main">
                            <Col lg={12} className="head_main px-md-0">
                              <HtmlContent
                                words={10} status={true}
                                content={item?.mainHeading}
                              ></HtmlContent>
                            </Col>
                            <Col lg={12} className="content_main px-md-0">
                              <HtmlContent
                                content={item?.content}
                                status={true}
                                words={window.innerWidth>1000?25:8}
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
                  );
                } else {
                  return null;
                }
              })}
            </Row>
          </Col>
          {
            blogs?.length > 6 && (
              <Col md={2} xs={6} className="mt-md-4 mt-3 mb-md-auto mb-3 d-flex justify-content-center align-items-center" onClick={loadMoreContent}>
                <Button variant="dark">
                  {loadMore ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    totalItems > blogs.length ? ' Load More ' : ' Load Less '
                  )}
                </Button>
              </Col>
            )
          } 
        </Row>
      </Container>
    </>
  );
};

export default Blog;
