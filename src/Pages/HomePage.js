import React from "react";
import Specifications from "../components/Specifications";
import WorkWithUs from "../components/WhyChooseUs";
import EverythingYouNeed from "../components/EverythingYouNeed";
import CustomerStories from "../components/CustomerStories";
import DescriptionPage from "../components/DescriptionPage";
import Comparison from "../components/Comparison";

function HomePage() {
  return (
    <div>
      <DescriptionPage />
      <Comparison />
      <Specifications />
      <WorkWithUs />
      <EverythingYouNeed />
      <CustomerStories />
    </div>
  );
}

export default HomePage;
