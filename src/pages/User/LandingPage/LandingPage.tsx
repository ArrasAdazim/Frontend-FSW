import React from "react";
import Header from "../../../components/Header.tsx";
//
import PopularPlaces from "../../../components/PopularPlaces.tsx";
import Footer from "../../../components/Footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
const LandingPage: React.FC = () => {
  const sectionStyle = { marginBottom: "2rem" };

  return (
    <div>
      <Header />
      <div style={sectionStyle}>
        <PopularPlaces />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
