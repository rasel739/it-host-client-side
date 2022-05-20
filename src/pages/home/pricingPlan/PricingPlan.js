import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import pricingStyle from "../../../assets/css/pricingPlans.module.css";
import HomeTitle from "../../../components/comonTitle/HomeTitle";
import usePricingPlan from "../../../helpers/hooks/usePricingPlan";
import PricingPlanItem from "./PricingPlanItem";

const PricingPlan = () => {
  const [key, setKey] = useState("Monthly");

  const [data] = usePricingPlan();

  const bestHostingObj = [
    {
      id: data[0]?._id,
      pricingStyle: pricingStyle.pricingStyleOne,
      priceTitle: "Cloud Hosting",
      priceText: "The High performance cloud platform ever",
      startingAt: "Starting at",
      price: 52,
      discount: "30% Discount",
      discountPrice: 60,
      buyNow: "Buy Now",
      priceImage: "https://i.ibb.co/cvfLznZ/hosting-price-img.png",
    },
    {
      id: data[1]?._id,
      pricingStyle: pricingStyle.pricingStyleTwo,
      priceTitle: "VPS Hosting",
      priceText: "The High performance cloud platform ever",
      startingAt: "Starting at",
      price: 45,
      discount: "30% Discount",
      discountPrice: 80.99,
      buyNow: "Buy Now",
      priceImage: "https://i.ibb.co/cvfLznZ/hosting-price-img.png",
    },
    {
      id: data[2]?._id,
      pricingStyle: pricingStyle.pricingStyleThree,
      priceTitle: "Shared Hosting",
      priceText: "The High performance cloud platform ever",
      startingAt: "Starting at",
      price: 20,
      discount: "30% Discount",
      discountPrice: 30.99,
      buyNow: "Buy Now",
      priceImage: "https://i.ibb.co/cvfLznZ/hosting-price-img.png",
    },
    {
      id: data[3]?._id,
      pricingStyle: pricingStyle.pricingStyleYearly,
      priceTitle: "Dedicated Server",
      priceText: "The High performance cloud platform ever",
      startingAt: "Starting at",
      price: 29.99,
      discount: "30% Discount",
      discountPrice: 35.99,
      buyNow: "Buy Now",
      priceImage: "https://i.ibb.co/cvfLznZ/hosting-price-img.png",
    },
    {
      id: data[4]?._id,
      pricingStyle: pricingStyle.pricingStyleYearly,
      priceTitle: "Reseller Hosting",
      priceText: "The High performance cloud platform ever",
      startingAt: "Starting at",
      price: 31.99,
      discount: "30% Discount",
      discountPrice: 38.99,
      buyNow: "Buy Now",
      priceImage: "https://i.ibb.co/cvfLznZ/hosting-price-img.png",
    },
    {
      id: data[5]?._id,
      pricingStyle: pricingStyle.pricingStyleYearly,
      priceTitle: "Shared Hosting",
      priceText: "The High performance cloud platform ever",
      startingAt: "Starting at",
      price: 33.99,
      discount: "30% Discount",
      discountPrice: 39.99,
      buyNow: "Buy Now",
      priceImage: "https://i.ibb.co/cvfLznZ/hosting-price-img.png",
    },
  ];

  return (
    <Container fluid className="pt-5 pb-5 bg-light">
      <Container>
        <HomeTitle
          title="Pricing Plans"
          singleWord="OUR"
          subTitle=" BEST PRICING"
        ></HomeTitle>
        <div>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className={pricingStyle.pricingTab}
            variant="pills"
          >
            <Tab eventKey="Monthly" title="Monthly">
              <Row xs={1} md={3} className="g-4">
                {bestHostingObj.slice(0, 3).map((pricingHostingArray) => (
                  <Col>
                    <PricingPlanItem
                      key={pricingHostingArray.id}
                      pricingHostingArray={pricingHostingArray}
                    ></PricingPlanItem>
                  </Col>
                ))}
              </Row>
            </Tab>

            <Tab eventKey="Yearly" title="Yearly">
              <Row xs={1} md={3} className="g-4">
                {bestHostingObj.slice(3, 6).map((pricingHostingArray) => (
                  <Col>
                    <PricingPlanItem
                      key={pricingHostingArray.id}
                      pricingHostingArray={pricingHostingArray}
                    ></PricingPlanItem>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </Container>
  );
};

export default PricingPlan;
