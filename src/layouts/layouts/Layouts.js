import React from "react";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Navigation from "../navber/Navigation";

const Layouts = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
