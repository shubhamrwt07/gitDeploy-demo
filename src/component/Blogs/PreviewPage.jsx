import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import HtmlContent from './texttohtml';
import { useForm } from "react-hook-form";
import '../Blogs/PreviewPage.css';



const PreviewPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
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
        "https://rowthtech.com/api/sendmail",
        data
      );
      setApiResponse(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rowthtech.com/api/getBlog/${id}`);
        setBlogs([response.data.response]);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>

      <div className="">
        <div className="single-content-main-in">
          <div className="container">
            <div className="row ">
              <div className="col-2 mt-4">
                <Link to="/blog">
                  <button className="btn btn-warning">
                    <i class="bi bi-arrow-left-short"></i>
                  </button>
                </Link>

              </div>
              <div className="col-12 col-md-12">
                {blogs.map(blog => (
                  <React.Fragment key={blog._id}>
                    <div className="mt-5 fw-bold">
                      <h1 className="fw-bold">
                        <HtmlContent content={blog.mainHeading} className="bold-text" />
                      </h1>
                    </div>
                    <div className="blogImgWrap">
                      <div className="post-thumbnail mt-3 ">
                        <img width="100%" height="350" className="rounded-4 mt-4" src={blog.image} alt="rowthtech_img"  loading="lazy"/>
                      </div>
                    </div>
                    <div className="entry-content mt-5 mb-5">
                      <HtmlContent content={blog.content} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div>
                <section className="article-share-wrap">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="article-share-wrap-in text-center my-5 py-5">
                          <h2>Like the blog? Spread the word</h2>

                          <ul
                            className="blogHeadSocial d-flex align-items-center justify-content-center mb-0 pb-0 pt-4"
                            style={{ listStyle: "none", gap: "15px" }}
                          >
                            <li>
                              <a
                                //   style="background:none;"
                                href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p[title]=Key Takeaways from Dynamics 365 Finance &amp; Operations 10.0.39 Updates and How Testing Can Help?&amp;p[summary]=In Enterprise Resource Planning (ERP) systems, Microsoft’s Dynamics 365 Finance &amp; Operations (F&amp;O) remains a stalwart choice for businesses seeking robust solutions. The recent release of version 10.0.39 brings a host of updates, enhancements, and new features to empower organizations in their quest for efficiency and innovation. Let’s delve into the key takeaways from the […]&amp;p[url]=https://www.crestechsoftware.com/key-takeaways-from-dynamics-365-finance-operations-10-0-39-updates-and-how-testing-can-help/"
                                className="js-hover-setup share-popup"
                              >
                                <svg
                                  // style="fill:#350ea1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                                    name="Facebook"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                //   style="background:none;"
                                href="http://twitter.com/share?text=Key Takeaways from Dynamics 365 Finance &amp; Operations 10.0.39 Updates and How Testing Can Help?&amp;url=https://www.crestechsoftware.com/key-takeaways-from-dynamics-365-finance-operations-10-0-39-updates-and-how-testing-can-help/"
                                className="js-hover-setup share-popup"
                              >
                                <svg
                                  // style="fill:#350ea1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                                    name="Twitter"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                //   style="background:none;"
                                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.crestechsoftware.com/key-takeaways-from-dynamics-365-finance-operations-10-0-39-updates-and-how-testing-can-help/&amp;title=Key Takeaways from Dynamics 365 Finance &amp; Operations 10.0.39 Updates and How Testing Can Help?&amp;summary=In Enterprise Resource Planning (ERP) systems, Microsoft’s Dynamics 365 Finance &amp; Operations (F&amp;O) remains a stalwart choice for businesses seeking robust solutions. The recent release of version 10.0.39 brings a host of updates, enhancements, and new features to empower organizations in their quest for efficiency and innovation. Let’s delve into the key takeaways from the […]"
                                class="js-hover-setup share-popup"
                              >
                                <svg
                                  // style="fill:#350ea1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                                    name="Linkedin"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="featured-article">
                  <div className="container">
                    <div className="row mb-5">
                      <div className="col-12 col-xl-12 ">
                        <div className="row">
                          <div className="col me-3 border rounded-3">
                            <div className="row p-4">
                              <div className="blog-grid-item-thumb col-3 ps-0">
                                <img
                                  width="100%"
                                  height="50%"
                                  src="https://rowthtech.s3.amazonaws.com/imgHome11.webp"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                  className="rounded-3"
                                />{" "}
                              </div>
                              <div className="blog-grid-item-content col-9 pe-0">
                                <h3>
                                  Key Takeaways from Dynamics 365 Finance &amp; Operations
                                  10.0.39 Updates?
                                </h3>
                                <p>
                                  In Enterprise Resource Planning (ERP) systems,
                                  Microsoft’s Dynamics 365 Finance &amp; Operations
                                  (F&amp;O) remains a stalwart choice for businesses
                                  seeking robust solutions. The recent release of version
                                  10.0.39 brings...
                                </p>
                                <div className="blog-grid-item-foot">
                                  <span className="textlink">Read More &gt;&gt;</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col ms-3 border rounded-3">
                            <div className="row p-4">
                              <div className="blog-grid-item-thumb col-3 ps-0">
                                <img
                                  width="100%"
                                  height="50%"
                                  src="https://rowthtech.s3.amazonaws.com/imgHome11.webp"
                                  alt="rowthtech_img"
                                  loading="lazy"
                                  className="rounded-3"
                                />{" "}
                              </div>
                              <div className="blog-grid-item-content col-9 pe-0">
                                <h3>
                                  Key Takeaways from Dynamics 365 Finance &amp; Operations
                                  10.0.39 Updates?
                                </h3>
                                <p>
                                  In Enterprise Resource Planning (ERP) systems,
                                  Microsoft’s Dynamics 365 Finance &amp; Operations
                                  (F&amp;O) remains a stalwart choice for businesses
                                  seeking robust solutions. The recent release of version
                                  10.0.39 brings...
                                </p>
                                <div className="blog-grid-item-foot">
                                  <span className="textlink">Read More &gt;&gt;</span>
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
          </div>
        </div>
      </div>
    </>

  );
};

export default PreviewPage;
