import React, { Suspense, lazy } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import AppStreamCam from "../Components/Test/Test";

import Loader from "../util/Loader/Loader";
import "./scrollbar.css";

const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));
const AboutUsPage = lazy(() => import("../Components/AboutUsPage/AboutUsPage"));
const FaqPage = lazy(() => import("../Components/FaqPage/FaqPage"));
const CaseStudy = lazy(() => import("../Components/CaseStudy/Casestudy"));

const ContactUsPage = lazy(() =>
  import("../Components/ContactUsPage/ContactUsPage")
);
const Host = lazy(() => import("../ExtraPages/Host"));
const Overstay = lazy(() => import("../ExtraPages/Overstay"));
const Privacy = lazy(() => import("../ExtraPages/Privacy"));

const Innovations = lazy(() => import("../Components/Innovations/Innovations"));
const SmartCity = lazy(() => import("../Components/SmartCity/SmartCity"));
// const OurSolutions = lazy(() =>
//   import("../Components/OurSolutions/OurSolutions")
// );

const NotFound = lazy(() => import("../util/NotFound/NotFound"));

export const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/aboutUs" component={AboutUsPage} />
          <Route exact path="/faq" component={FaqPage} />
          <Route exact path="/caseStudy" component={CaseStudy} />
          <Route exact path="/contactUs" component={ContactUsPage} />
          {/* <Route exact path="/appstream" component={AppStreamCam} /> */}
          <Route exact path="/host" component={Host} />
          <Route exact path="/overstay" component={Overstay} />
          <Route exact path="/privacy" component={Privacy} />

          <Route exact path="/ourInnovations" component={Innovations} />
          <Route exact path="/smartCity" component={SmartCity} />
          {/* <Route exact path="/ourSolutions" component={OurSolutions} /> */}

          <Route exact path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

// black = #1D2B44
// yellow = #FFC738
