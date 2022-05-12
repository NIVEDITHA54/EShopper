import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import ProductDetailsModal from "./ProductDetailsModal";
import Button from "../atoms/Button";

const CardCarousel = ({ carouselData }) => {
  const { data, loading, error } = carouselData;
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const recomendedProducts = [];

  const handleModalClose = () => setIsOpen(false);

  const isAdded = (product) => {
    return cart.cartItems.filter((item) => item.id === product.id);
  };

  data.data.hits.map((item, index) => {
    const product = {
      id: item.attributes.product.id,
      name: item.attributes.product.attributes.name,
      image: {
        src: item.attributes.product.attributes.main_image.image_sizes.medium,
        alt: "nelson shoes",
      },
      classification: item.attributes.product.attributes.product_classification,
      details:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
      price: item.attributes.product.attributes.price.max_regular_price.amount,
    };

    recomendedProducts.push(
      <div className="inline-block px-3" key={`recommended-products-${index}`}>
        <div className="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="relative">
            <img
              className="object-cover object-center w-full h-48 mx-auto"
              src={
                item.attributes.product.attributes.main_image.image_sizes.medium
              }
              alt={item.attributes.product.attributes.name}
            />
            <Button
              buttonData={{
                className:
                  "absolute right-0 w-10 h-10 top-0 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red ml-4",
                onClick: () => {
                  setId(item.attributes.product.id);
                  setIsOpen(true);
                },
              }}
            >
              <div className="w-5 h-5">
                <FaPlus size={"1.2em"} />
              </div>
            </Button>
          </div>

          {isOpen && id === item.attributes.product.id && (
            <ProductDetailsModal
              show={isOpen}
              handleClose={handleModalClose}
              productDetailsData={product}
            />
          )}

          <div className="p-2">
            <h4 className="text-gray-900 title-font mb-1">
              {item.attributes.product.attributes.name}
            </h4>
            <p className="leading-relaxed mt-1 text-base">
              {item.attributes.product.attributes.product_classification}
            </p>
            <h4 className="text-gray-900 title-font mb-1">
              {
                item.attributes.product.attributes.price.max_regular_price
                  .amount
              }
            </h4>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-5">
      <div className="flex flex-nowrap">{recomendedProducts}</div>
    </div>
  );
};

export default CardCarousel;
