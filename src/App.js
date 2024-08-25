import React from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";


export default function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-10">
      <Navbar style={{position: "sticky"}}/>
      <div className="max-w-screen-2xl mx-auto px-16 -mt-10">

        <Banner/>
        <Features/>
        <Projects/>
        <Education/>
        <Contact/>
        <FooterBottom/>
      </div>
    </div>
  )
}