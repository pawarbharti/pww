import React from "react";
import Specifications from "../components/Specifications";
import WorkWithUs from "../components/WhyChooseUs";
import EverythingYouNeed from "../components/EverythingYouNeed";
import Footer from "../components/Footer";
import CustomerStories from "../components/CustomerStories";
import DescriptionPage from "../components/DescriptionPage";


function HomePage() {
  return (
    <div >
    <DescriptionPage/>
      <Specifications />
      <WorkWithUs />
      <EverythingYouNeed />
      <CustomerStories/>
      <Footer />
      
    </div>
  );
}

export default HomePage;
