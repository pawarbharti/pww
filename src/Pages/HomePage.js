import React from "react";
import Specifications from "../components/Specifications";
import WorkWithUs from "../components/WorkWithUs";
import EverythingYouNeed from "../components/EverythingYouNeed";
import Footer from "../components/Footer";
import CustomerStories from "../components/CustomerStories";


function HomePage() {
  return (
    <div >
      <Specifications />
      <WorkWithUs />
      <EverythingYouNeed />
      <CustomerStories/>
      <Footer />
      
    </div>
  );
}

export default HomePage;
