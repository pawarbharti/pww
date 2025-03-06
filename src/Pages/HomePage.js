import React from "react";
import { Helmet } from "react-helmet";
import Specifications from "../components/Specifications";
import WorkWithUs from "../components/WhyChooseUs";
import EverythingYouNeed from "../components/EverythingYouNeed";
import CustomerStories from "../components/CustomerStories";
import DescriptionPage from "../components/DescriptionPage";
import Comparison from "../components/Comparison";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Best Aluminium & uPVC Doors and Windows | High-Quality & Durable
        </title>
        <meta
          name="description"
          content="Explore premium aluminum and uPVC doors and windows. Energy-efficient, stylish, and durable solutions for modern homes and offices."
        />
        <meta
          name="keywords"
          content="Aluminium doors, uPVC windows, sliding doors, modern windows, energy-efficient windows, durable doors"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        <DescriptionPage />
        <Comparison />
        <Specifications />
        <WorkWithUs />
        <EverythingYouNeed />
        <CustomerStories />
      </main>
    </>
  );
}

export default HomePage;
