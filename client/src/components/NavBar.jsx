const NavBar = () => {
  return (
    <header className="flex justify-between container mx-auto m-5">
      <h1 className="text-xl font-poppins font-semibold">BuyCart</h1>
      <ul className="flex space-x-3">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};
export default NavBar;
