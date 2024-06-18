import PropTypes from "prop-types";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "../styles/Categories.module.css";

const categoriesPlaceholder = [
  "electronics",
  "jewelery",
  "men_clothing",
  "women_clothing",
];

const Categories = ({ categories }) => {
  // const [categories, setCategories] = useState(null);
  // const [error, setError] = useState(null);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products/categories")
    //   .then((response) => {
    //     // How to mock response status codes >= 400?
    //     if (response.status >= 400) throw new Error("ERROR");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setCategories(data);
    //   })
    //   .catch((error) => setError(error.message));
  }, []);

  // if (error) return <article>{error}</article>;
  return (
    <article>
      {categories ? (
        <ul>
          {categories.map((category) => {
            return (
              <li key={category}>
                <Link to={`category/${category.replaceAll(" ", "-")}`}>
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <Loading />
      )}
    </article>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;

/*
(
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )
*/
