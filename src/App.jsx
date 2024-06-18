import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./component/Home/home";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import OurServices from "./component/OurServices/MobileDevelopment";

// import MobileDevelopment from "./component/OurServices/MobileDevelopment";
const Carrers = React.lazy(() => import("./component/Carrers/Carrers"));
const MobileDevelopment = React.lazy(() =>
  import("./component/OurServices/MobileDevelopment")
);
const Finance = React.lazy(() => import("./component/Finance/finance"));

const Services = React.lazy(() => import("./component/Services/services"));
const PrivacyPolicy = React.lazy(() =>
  import("./component/PrivacyPolicy/PrivacyPolicy")
);
const Cookies = React.lazy(() => import("./component/Cookies/Cookies"));
const Portfolio = React.lazy(() => import("./component/Portfolio/portfolio"));

const Retail = React.lazy(() =>
  import("./component/Retail&e-commerce/retail&e-commerce")
);

const Food = React.lazy(() =>
  import("./component/Food&Beverages/food&beverages")
);

const Realestate = React.lazy(() =>
  import("./component/Realestate/realestate")
);

const Automotive = React.lazy(() =>
  import("./component/Automotive/automotive")
);

const Banking = React.lazy(() => import("./component/Banking/banking"));

const About = React.lazy(() => import("./component/About/about"));

const Wedding = React.lazy(() => import("./component/Wedding_event /Wedding"));
const Blog = React.lazy(() => import("./component/Blogs/Blog"));
const ReadMore = React.lazy(() =>
  import("./component/Blogs/ReadMore/ReadMore")
);

// const Unsubscribe = React.lazy(() =>
//   import("./component/Unsubscribe/unsubscribe")
// );

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense
          fallback={
            <>
              <div>
                <div className="cenerter">
                  <div className="loader"></div>
                </div>
              </div>
              {/* <p>
                this is loading...
              </p> */}
            </>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/careers" element={<Carrers />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/mobiledevelopment"
              exact
              element={<MobileDevelopment />}
            />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/food" element={<Food />} />
            <Route path="/about" element={<About />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/mobiledevelopment" element={<MobileDevelopment />} />

            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/realestate" element={<Realestate />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/banking" element={<Banking />} />
            {/* <Route
              path="/wedding-privacy-policy"
              element={<WeddingPrivacyPolicy />}
            /> */}

            <Route path="/wedding" element={<Wedding />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:url" element={<ReadMore />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
