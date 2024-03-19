import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState("");
  const [error, setError] = useState(null);

  const sendData = async (e) => {
    e.preventDefault();
    const data = { product };
    const response = await fetch("http://localhost:9000/products/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      alert("product added..!");
      setProduct("");
      setError(null);
    } else {
      setError(json.error);
    }
  };

  return (
    <form
      className="w-1/5 bg-green-500 p-5 rounded space-y-2 h-32"
      onSubmit={sendData}
    >
      <div>
        <label className="block font-poppins">Product Name</label>
        <input
          type="text"
          className="outline-none rounded px-3 py-1"
          name="productName"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        />
      </div>
      <button className="bg-gray-950 text-white px-3 py-1 rounded">
        Add Product
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
export default Form;
