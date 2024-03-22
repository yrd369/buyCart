import { useContext } from "react";
import { productContext } from "../context/productContext";

const productUpdateHook = () => {
  const hook = useContext(productContext);
  if(!hook){
    throw Error("no data")
  }
  return hook
};

export default productUpdateHook;
