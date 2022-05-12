import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillSuitHeartFill } from "react-icons/bs";
import productDetailsData from "../../data";
import { addToCart } from "../../actions/cartActions";

import Modal from "./AddToCartConfirmationModal";
import Button from "../atoms/Button";

const ProductDetails = () => {
  const { name, image, classification, details, price, color } =
    productDetailsData;

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    dispatch(addToCart(productDetailsData, 1));
    setShow(true);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={image.alt}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image.src}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 title-font mb-1">{name}</h1>
            <h2 className="title-font text-gray-500 tracking-widest">
              {`${classification} - ${color}`}
            </h2>
            <p className="leading-relaxed mt-5">{details}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {price}
              </span>
              <Button
                buttonData={{
                  className: "btn btn-blue",
                  onClick: () => handleClick(),
                  text: "Add to cart",
                }}
              />
              <Button
                buttonData={{
                  className:
                    "rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",
                }}
              >
                <div className="w-5 h-5">
                  <BsFillSuitHeartFill size={"1.2em"} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} handleClose={handleModalClose} />
    </section>
  );
};

export default ProductDetails;
