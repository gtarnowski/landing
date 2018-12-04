import React from "react";
import faAllergies from "@fortawesome/fontawesome-free-solid/faAllergies";
import faMapMarker from "@fortawesome/fontawesome-free-solid/faMapMarker";
import faAddressBook from "@fortawesome/fontawesome-free-solid/faAddressBook";
import faWifi from "@fortawesome/fontawesome-free-solid/faWifi";

// Components
import Title from "../Title";
import Pictogram from "../Pictogram";
import "./index.css";

const AboutUs = () => (
  <div className="AboutUs">
    <Title title="About Us" />
    <div className="pictograms">
      <Pictogram icon={faAllergies} title="Title1" subtitle="Subtitle" />
      <Pictogram icon={faMapMarker} title="Title2" subtitle="Subtitle" />
      <Pictogram icon={faAddressBook} title="Title3" subtitle="Subtitle" />
      <Pictogram icon={faWifi} title="Title4" subtitle="Subtitle" />
    </div>
  </div>
);

export default AboutUs;
