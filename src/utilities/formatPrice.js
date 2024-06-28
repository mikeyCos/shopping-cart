/* Formats price, a number
 * For example, 3.5 => '$3.50'
 * new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(currentProduct.price)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 * What if I want to separate the currency symbol and number?
 *  Return an object with symbol and price properties
 */

const options = { style: "currency", currency: "USD" };

const formatPrice = (price) => {
  const isNumber = isNaN(price);
  if (isNumber) return;

  return new Intl.NumberFormat("en-US", options).format(price);
};

export default formatPrice;
