//ADD ITEM TO CART
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//Delete ITEM TO CART
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
