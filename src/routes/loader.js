import parseProducts from "../utilities/parseProducts";

const loader = async () => {
  const data = await Promise.all([
    fetch("https://fakestoreapi.com/products/categories", { mode: "cors" }),
    fetch("https://fakestoreapi.com/products", { mode: "cors" }),
    // Promise.reject(new Error("error")),
    // Promise.reject(new Error("error")),
    // Promise.resolve({
    //   status: 400,
    //   message: "Something broke",
    // }),
    // Promise.resolve({
    //   status: 500,
    // }),
    // fetch(""),
    // fetch(""),
  ])
    .then((responses) => {
      // How to mock response status codes >= 400?
      // How to refactor the if blocks for status codes?
      const invalidResponse = responses.find((res) => res.status >= 400);
      invalidResponse && throwException(invalidResponse);
      const [resCategories, resProducts] = responses;
      return Promise.all([resCategories.json(), resProducts.json()]);
    })
    .then(([dataCategories, dataProducts]) => {
      const parsedProducts = parseProducts(dataProducts);
      return {
        categories: ["all", ...dataCategories],
        products: parsedProducts,
      };
    })
    .catch((error) => {
      throw {
        ...error,
        error: new Error(error.message || error),
        // ...(error.status && { status: error.status }),
      };
    });
  // .catch((error) => ({ error: { cause: error } }));

  return data;
};

const throwException = (invalidResponse) => {
  throw invalidResponse;
};

export default loader;
