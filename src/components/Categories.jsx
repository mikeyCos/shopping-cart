import PropTypes from "prop-types";
import NavAnchor from "./NavAnchor";
import styles from "../styles/Categories.module.css";

const Categories = ({ categories }) => {
  return (
    <article>
      <ul className={styles["categories"]}>
        {categories.map((category) => {
          return (
            <li key={category}>
              <NavAnchor
                pathname={`category/${category.replaceAll(" ", "-")}`}
                text={category}
              />
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
