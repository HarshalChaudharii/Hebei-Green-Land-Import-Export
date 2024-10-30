import { lazy } from "react";
const HomePage = lazy(() => import("@/Pages/home/index"));
const AboutUsPage = lazy(() => import("@/Pages/about/index"));
const ContactUsPage = lazy(() => import("@/Pages/contact-us/index"));

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/about",
    component: <AboutUsPage />,
  },
  {
    path: "/contact-us",
    component: <ContactUsPage />,
  },
];
