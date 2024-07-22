import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

const BasicLayout = () => {
  return (
    <>
      <ScrollRestoration
      // getKey={(location, matches) => {
      //   const { state } = location;
      //   if (state?.id) {
      //     const element = document.querySelector(`[data-id='${state.id}']`);
      //     element.scrollIntoView();
      //   }
      // }}
      />
      {/* <ScrollRestoration
        getKey={(location, matches) => {
          const { state } = location;
          if (state?.id) {
              const element = document.querySelector(`[data-id='${state.id}']`);
              element.scrollIntoView();
            // return state.id;
          }
          // return location.pathname;
        }}
      /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default BasicLayout;
