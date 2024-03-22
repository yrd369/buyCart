import { createContext, useReducer } from "react";

export const productContext = createContext();

export const productsReducer = (product, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        product: action.payload,
      };
    case "CREATE_PRODUCT":
      return {
        product: [action.payload, ...product.product],
      };
    default:
      return product;
  }
};

export const productContextProvider = ({ children }) => {
  const [product, dispatch] = useReducer(productsReducer, {
    product: null,
  });
  return (
    <productContext.Provider value={{ ...product, dispatch }}>
      {children}
    </productContext.Provider>
  );
};
