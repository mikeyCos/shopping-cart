import PropTypes from "prop-types";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "../styles/Categories.module.css";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <article>
      {categories ? (
        <ul className="product-categories">
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
