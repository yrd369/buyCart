import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Form from "../components/Form";

const HomePage = () => {
  const [data, setData] = useState();

  // getting data
  useEffect(() => {
    const getData = async () => {
      const products = await fetch("/products");
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
      <div className="container mx-auto flex space-x-3">
        {data &&
          data.map((val) => {
            return <Card value={val} key={val._id} />;
          })}
          <Form />
      </div>
    </>
  );
};
export default HomePage;
