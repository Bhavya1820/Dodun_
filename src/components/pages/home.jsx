import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import Picture from "./home/picture";
import About from "./home/about";
import Service from "./home/service";
import News from "./home/news";
import Ques from "./home/ques";
import Client from "./home/client";
import Touch from "./home/touch";
import Cards from "./home/cards";

const home = () => {
  return (
    <>
     <div className="manrope">
     <Navbar />
      <Picture />
      <About />
      <Cards />
      <Service />
      <News />
      <Ques />
      <Client />
      <Touch />
      <Footer />
     </div>
    </>
  );
};

export default home;
