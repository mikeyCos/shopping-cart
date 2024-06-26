import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import parseCategory from "../utilities/parseCategory";
import styles from "../styles/Category.module.css";

/* Renders products based on the useParams category value
 * useParams category value will fallback to 'all'
 */
const Category = () => {
  const { category = "all" } = useParams();
  const [products] = useOutletContext();
  const { pathname } = useLocation();
  const productKey = parseCategory(category);
  const headingCategory = category.replaceAll("-", " ");
  // console.log(products);
  // console.log("category", category);
  // console.log("productKey", productKey);
  return (
    <section>
      <h2>Category</h2>
      <h3>{headingCategory}</h3>
      {products && (
        <section className={styles.products} role="region">
          {products[productKey].map((product) => (
            <article className={styles["product-card"]} key={product.id}>
              <Link
                to={`product/${encodeURIComponent(product.title)}`}
                state={{ product, previousLocation: pathname }}
              >
                <picture>
                  <img
                    className={styles["product-img"]}
                    src={product.image}
                    loading="lazy"
                    alt="#"
                  />
                </picture>
              </Link>

              <div className="info">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </section>
  );
};

export default Category;
