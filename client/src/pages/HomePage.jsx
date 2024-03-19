import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Form from "../components/Form";
import { productContext } from "../hooks/productContext";

const HomePage = () => {
  const [data, setData] = useState();

  // getting data
  useEffect(() => {
    const getData = async () => {
      const products = await fetch("http://localhost:9000/products");
      const productJson = await products.json();

      if (products.ok) {
        setData(productJson);
      }
    };
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <productContext.Provider value={data}>
        <div className="md:flex space-x-5 ml-20">
          <div className="space-y-3 w-3/5">
            {data &&
              data.map((val) => {
                return <Card value={val} key={val._id} />;
              })}
          </div>
          <Form />
        </div>
      </productContext.Provider>
    </>
  );
};
export default HomePage;
