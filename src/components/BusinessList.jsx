import React from "react";
import { Business } from "./Business";

export const BusinessList = () => {
  const restaurants = [
    {
      name: "O Padeiro",
      address: "Rua Principal Ponte D Sor",
      city: "Ponte D Sor",
      state: "Alentejo",
      category: "Comida Portuguesa",
      rating: 3,
      zipcode: "7010-102",
    },
    {
        name: "Dom Pedro",
        address: "Ramada",
        city: "Odivelasr",
        state: "Lisboa",
        category: "Comida Portuguesa",
        rating: 5,
        zipcode: "1027-090",
      },
  ];

  return (
    <div className="grid-container">
      {restaurants.map((restaurant) => (
        <Business
          name={restaurant.name}
          address={restaurant.address}
          city={restaurant.city}
          category={restaurant.category}
          rating={restaurant.rating}
          zipcode={restaurant.zipcode}
        />
      ))}
    </div>
  );
};
