import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return <section id="home">Home section</section>;
};

export default Home;
