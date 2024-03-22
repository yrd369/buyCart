import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Form from "../components/Form";
import productUpdateHook from "../hooks/productUpdateHook";

const HomePage = () => {
  const { product, dispatch } = productUpdateHook();

  // getting data
  useEffect(() => {
    const getData = async () => {
      const products = await fetch("http://localhost:9000/products");
      const productJson = await products.json();

      if (products.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: productJson });
      }
    };
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <div className="md:flex space-x-5 ml-20">
        <div className="space-y-3 w-3/5">
          {product &&
            product.map((val) => {
              return <Card value={val} key={val._id} />;
            })}
        </div>
        <Form />
      </div>
    </>
  );
};
export default HomePage;
