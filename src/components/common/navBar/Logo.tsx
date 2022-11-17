import AppImage from "../../utils/AppImage";

const Logo = () => {
  const logo = `${process.env.PUBLIC_URL}/assets/Skillet.jpg`;

  return <AppImage src={logo} alt="Logo" h="50px" />;
};

export default Logo;
