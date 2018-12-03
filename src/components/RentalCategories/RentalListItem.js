import React from "react";
import truncate from "lodash/truncate";
import "./index.css";

const RentalListItem = props => {
  const {
    leadPhoto,
    url,
    title,
    stock,
    rentPrice,
    salePrice,
    locationName,
    city
  } = props;
  console.log(props);
  const name = truncate(title, {
    length: 30,
    separator: ""
  });
  const price = ((rentPrice || salePrice) + '$') || "Call For Price";
  const location =
    city.value === "."
      ? locationName.replace(".", "").replace(",", "")
      : locationName;

  return (
    <div
      className="RentalListItem"
      onClick={() => window.open(`https://lead.equipment${url}`, "_blank")}
    >
      <img src={leadPhoto.url} alt="" />
      <div className="details">
        <div className="title">{name}</div>
        <div className="stock-price">
          <small>{stock} / </small>
          <span>{price}</span>
        </div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
};

export default RentalListItem;
