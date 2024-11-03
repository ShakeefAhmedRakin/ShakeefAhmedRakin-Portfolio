import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home/Home/Home";
import BloodBridge from "./pages/ProjectDetails/WebDev/BloodBridge/BloodBridge";
import CompHarbor from "./pages/ProjectDetails/WebDev/CompHarbor/CompHarbor";
import TopShelf from "./pages/ProjectDetails/WebDev/TopShelf/TopShelf";
import AllProjects from "./pages/AllProjects/AllProjects";
import Resume from "./pages/Resume/Resume";
import WebDev from "./pages/AllProjects/WebDev/WebDev";
import MachineLearning from "./pages/AllProjects/MachineLearning/MachineLearning";
import OffensiveTweetClassifier from "./pages/ProjectDetails/MachineLearning/OffensiveTweetClassifier/OffensiveTweetClassifier";
import LungCancerPrediction from "./pages/ProjectDetails/MachineLearning/LungCancerPrediction/LuncCancerPrediction";
import Error from "./Components/Error";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

const yourName = "Shakeef Ahmed Rakin";
const designation = "Software Engineer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>Your Site Title</title>
          <meta
            name="description"
            content="A brief description of your site."
          />
          <meta
            name="keywords"
            content="web development, projects, portfolio, personal website"
          />
          <meta name="author" content={yourName} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Root />
      </>
    ),
    errorElement: (
      <>
        <Helmet>
          <title>Page Not Found</title>
          <meta
            name="description"
            content="Page does not exist or is under construction."
          />
          <meta
            name="keywords"
            content={`404, page not found, error 404, under construction, under development, ${yourName}, ${designation}`}
          />
        </Helmet>
        <Error />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>{yourName}</title>
              <meta
                name="description"
                content="Welcome to the homepage of the portfolio website of Shakeef Ahmed Rakin, a Software Engineer."
              />
              <meta
                name="keywords"
                content={`homepage, welcome, introduction, ${yourName}, ${designation}, portfolio, personal website`}
              />
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/resume",
        element: (
          <>
            <Helmet>
              <title>Resume</title>
              <meta
                name="description"
                content="View my resume and professional experience."
              />
              <meta
                name="keywords"
                content={`resume, CV, professional experience, ${yourName}, ${designation}`}
              />
            </Helmet>
            <Resume />
          </>
        ),
      },
      {
        path: "/projects",
        element: (
          <>
            <Helmet>
              <title>All Projects</title>
              <meta
                name="description"
                content="Explore all my projects in one place."
              />
              <meta
                name="keywords"
                content={`projects, portfolio, web development, machine learning, ${yourName}, ${designation}`}
              />
            </Helmet>
            <AllProjects />
          </>
        ),
      },
      // PROJECT TYPE ROUTES
      {
        path: "/projects/webdev",
        element: (
          <>
            <Helmet>
              <title>Web Development Projects</title>
              <meta
                name="description"
                content="Browse my web development projects."
              />
              <meta
                name="keywords"
                content={`web development, projects, ${yourName}, ${designation}`}
              />
            </Helmet>
            <WebDev />
          </>
        ),
      },
      {
        path: "/projects/machinelearning",
        element: (
          <>
            <Helmet>
              <title>Machine Learning Projects</title>
              <meta
                name="description"
                content="Explore my machine learning projects."
              />
              <meta
                name="keywords"
                content={`machine learning, projects, ${yourName}, ${designation}`}
              />
            </Helmet>
            <MachineLearning />
          </>
        ),
      },
      // PROJECT DETAILS ROUTES (WEB DEVELOPMENT)
      {
        path: "/projects/webdev/bloodbridge",
        element: (
          <>
            <Helmet>
              <title>BloodBridge Project</title>
              <meta
                name="description"
                content="Details about the BloodBridge web development project."
              />
              <meta
                name="keywords"
                content={`BloodBridge, web development, project, ${yourName}, ${designation}`}
              />
            </Helmet>
            <BloodBridge />
          </>
        ),
      },
      {
        path: "/projects/webdev/compharbor",
        element: (
          <>
            <Helmet>
              <title>CompHarbor Project</title>
              <meta
                name="description"
                content="Details about the CompHarbor web development project."
              />
              <meta
                name="keywords"
                content={`CompHarbor, web development, project, ${yourName}, ${designation}`}
              />
            </Helmet>
            <CompHarbor />
          </>
        ),
      },
      {
        path: "/projects/webdev/topshelf",
        element: (
          <>
            <Helmet>
              <title>TopShelf Project</title>
              <meta
                name="description"
                content="Details about the TopShelf web development project."
              />
              <meta
                name="keywords"
                content={`TopShelf, web development, project, ${yourName}, ${designation}`}
              />
            </Helmet>
            <TopShelf />
          </>
        ),
      },
      // PROJECT DETAILS ROUTES (MACHINE LEARNING)
      {
        path: "/projects/machinelearning/offensive-tweet-classifier",
        element: (
          <>
            <Helmet>
              <title>Offensive Tweet Classifier Project</title>
              <meta
                name="description"
                content="Details about the Offensive Tweet Classifier machine learning project."
              />
              <meta
                name="keywords"
                content={`Offensive Tweet Classifier, machine learning, project, ${yourName}, ${designation}`}
              />
            </Helmet>
            <OffensiveTweetClassifier />
          </>
        ),
      },
      {
        path: "/projects/machinelearning/lung-cancer-prediction",
        element: (
          <>
            <Helmet>
              <title>Lung Cancer Prediction Project</title>
              <meta
                name="description"
                content="Details about the Lung Cancer Prediction machine learning project."
              />
              <meta
                name="keywords"
                content={`Lung Cancer Prediction, machine learning, project, ${yourName}, ${designation}`}
              />
            </Helmet>
            <LungCancerPrediction />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster richColors={true} />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
