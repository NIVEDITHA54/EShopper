import {
  CART_ADD_ITEM,
} from "../constants/cartConstants";

export const addToCart = (product, qty) => {
return {
    type: CART_ADD_ITEM,
    payload: {
      id:product.id,
      name:product.name,
      image:product.image ,
      classification:product.classification,
      details:product.details,
      price:product.price,
      color:product.color,
      size:product.size,
      qty,
    },
  }
};
