import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Categories.module.css";

const Categories = ({ categories }) => {
  return (
    <article>
      <ul className={styles["categories"]}>
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
    </article>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
