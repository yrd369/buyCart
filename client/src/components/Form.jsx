import { useState } from "react";

const Form = () => {
  const [data, setData] = useState();
  const sendData = async (e) => {
    e.preventDefault();
    const product = e.target.productName.value;
    setData({ product });
    await fetch("http://localhost:9000/products/create", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form
      className="w-[30%] bg-green-500 p-5 rounded space-y-2"
      onSubmit={sendData}
    >
      <div>
        <label className="block font-poppins">Product Name</label>
        <input
          type="text"
          className="outline-none rounded px-3 py-1"
          name="productName"
        />
      </div>
      <button className="bg-gray-950 text-white px-3 py-1 rounded">
        Add Product
      </button>
    </form>
  );
};
export default Form;
