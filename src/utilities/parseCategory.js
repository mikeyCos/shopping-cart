const regExpDefault = /(')|(\s|-)+([^\s])/g;
const replacer = (match, p1, p2, p3) => {
  return p3 ? p3.toUpperCase() : "";
};

/* Parses category string by removing spaces and apostrophes
 * Returns a parsed string
 * For example, "men's clothing" => "mensClothing"
 */
const parseCategory = (category) => {
  return category.replace(regExpDefault, replacer);
};

export default parseCategory;
