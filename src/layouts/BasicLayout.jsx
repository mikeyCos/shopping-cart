import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const BasicLayout = () => {
  const [cart, setCart] = [];
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default BasicLayout;
