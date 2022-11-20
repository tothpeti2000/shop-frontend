import NavItem from "./NavItem";

const NavLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/products">Shop</NavItem>
      <NavItem to="/about">About</NavItem>
    </>
  );
};

export default NavLinks;
