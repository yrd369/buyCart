const Card = ({ value }) => {
  return (
    <div className="bg-[#fff] shadow-lg w-[70%] p-5 rounded">
      <h1 className="text-xl font-poppins font-semibold">{value.product}</h1>
    </div>
  );
};

export default Card;
