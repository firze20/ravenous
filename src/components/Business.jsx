import React from "react";
import {Stars} from '../custom'

export const Business = (props) => {
  const {
    image,
    name,
    address,
    city,
    state,
    zipcode,
    category,
    rating,
    review,
  } = props;

  return (
    <div className="grid-item">
        <h2>{name}</h2>
        {/* <img alt={name} src={image} /> */}
        <ul>
            <li>Adress: {address}</li>
            <li>City: {city}</li>
            <li>State: {state}</li>
            <li>Zipcode: {zipcode}</li>
            <li>Category: {category}</li>
            <li>Rating: <Stars rating={rating} /></li>
        </ul>
    </div>
  );
};
