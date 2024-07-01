import { defer } from "react-router-dom";
import parseProducts from "../utilities/parseProducts";

const loader = async () => {
  const data = await Promise.all([
    fetch("https://fakestoreapi.com/products/categories", { mode: "cors" }),
    fetch("https://fakestoreapi.com/products", { mode: "cors" }),
  ])
    .then(([resCategories, resProducts]) => {
      // How to mock response status codes >= 400?
      if (resCategories.status >= 400) throw new Error("ERROR");
      return Promise.all([resCategories.json(), resProducts.json()]);
    })
    .then(([dataCategories, dataProducts]) => {
      const parsedProducts = parseProducts(dataProducts);
      return {
        categories: ["all", ...dataCategories],
        products: parsedProducts,
      };
    })
    .catch((error) => error);
  return data;
};

// const loader = async () => {
//   const data = Promise.all([
//     fetch("https://fakestoreapi.com/products/categories", { mode: "cors" }),
//     fetch("https://fakestoreapi.com/products", { mode: "cors" }),
//   ])
//     .then(([resCategories, resProducts]) => {
//       // How to mock response status codes >= 400?
//       if (resCategories.status >= 400) throw new Error("ERROR");
//       return Promise.all([resCategories.json(), resProducts.json()]);
//     })
//     .then(([dataCategories, dataProducts]) => {
//       const parsedProducts = parseProducts(dataProducts);
//       return {
//         categories: ["all", ...dataCategories],
//         products: parsedProducts,
//       };
//     })
//     .catch((error) => error);
//   return defer({ data });
// };

export default loader;
