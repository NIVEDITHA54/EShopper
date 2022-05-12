import React, { useState, useEffect } from "react";
import productDetailsData from "../../data";

const HorizontalProductCard = () => {
  const { name, image, classification, details, price, color,size } = productDetailsData;

  return (
    <div className="flex max-w-md mx-auto  bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-5">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')`,
        }}
      ></div>
      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-gray-900 text-xl title-font font-medium mb-1">
          {name}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {classification}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          color : {color}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"> Maat : {size}</p>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
