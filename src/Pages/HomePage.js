import React from "react";
import Specifications from "../components/Specifications";
import WorkWithUs from "../components/WhyChooseUs";
import EverythingYouNeed from "../components/EverythingYouNeed";
import CustomerStories from "../components/CustomerStories";
import DescriptionPage from "../components/DescriptionPage";

function HomePage() {
  return (
    <div>
      <DescriptionPage />
      <Specifications />
      <WorkWithUs />
      <EverythingYouNeed />
      <CustomerStories />
    </div>
  );
}

export default HomePage;
