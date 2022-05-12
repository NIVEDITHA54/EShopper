import React from "react";
import { useDispatch } from "react-redux";
import Button from "../atoms/Button";
import { MdClose } from "react-icons/md";
import { addToCart } from "../../actions/cartActions";

const ProductDetailsModal = ({ show, handleClose, productDetailsData }) => {
  const { name, image, classification, details, price } = productDetailsData;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(productDetailsData, 1));
    handleClose(false);
  };

  if (!show) {
    return null;
  } else {
    return (
      <>
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div className="relative w-full max-w-2xl h-full md:h-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="absolute top-0 right-0">
              <Button
                buttonData={{
                  className:
                    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                  onClick: () => handleClose(false),
                }}
              >
                <MdClose size={"2em"} />
              </Button>
            </div>
            <div className="px-5 py-5 mx-auto">
              <div className="w-full mx-auto flex flex-wrap">
                <img
                  alt={image.alt}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={image.src}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {name}
                  </h1>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {classification}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProductDetailsModal;
