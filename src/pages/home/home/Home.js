import React from "react";
import BestHosting from "../bestHosting/BestHosting";
import BestService from "../bestService/BestService";
import DomainSearch from "../domainSearch/DomainSearch";
import Header from "../header/Header";
import PricingPlan from "../pricingPlan/PricingPlan";

const Home = () => {
  return (
    <>
      <Header />
      <DomainSearch />
      <BestHosting />
      <PricingPlan />
      <BestService />
    </>
  );
};

export default Home;
