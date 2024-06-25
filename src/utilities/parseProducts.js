import parseCategory from "./parseCategory";

/* Need to create an object with categories as keys and map respective products?
 * products = {
 *   electronics: [ ...objects of category "electronics" ],
 *   jewelry: [ ...objects of category "jewelry" ],
 *   mensClothing: [ ...objects of category "men's clothing" ],
 *   womensClothing: [ ...objects of category "women's clothing" ],
 * }
 */
const parseProducts = (data) => {
  const products = data.reduce(
    (accumulator, currentProduct) => {
      const key = parseCategory(currentProduct.category);
      // if (accumulator[key]) {
      //   return { ...accumulator, [key]: [...accumulator[key], currentProduct] };
      // }

      // return { ...accumulator, [key]: [currentProduct] };
      return {
        ...accumulator,
        [key]: [...(accumulator[key] ?? []), currentProduct],
      };
    },
    { all: [...data] }
  );

  return products;
};

export default parseProducts;
