import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import QuickActions from "./QuickActions";
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

  return (
    <section id="category">
      {products && (
        <>
          <section role="region" className={styles["products"]}>
            {products[productKey].map((product) => (
              <ProductCard key={product.id} className={styles["product-card"]}>
                <Link
                  to={`${pathname}/product/view/modal/${encodeURIComponent(
                    product.title
                  )}`}
                  state={{
                    product,
                    previousLocation: pathname,
                    id: product.id,
                  }}
                  preventScrollReset={true}
                  data-id={product.id}
                >
                  <ProductCard.Picture
                    src={product.image}
                    alt="#"
                    className={styles["product-picture"]}
                  />
                  <ProductCard.Info
                    title={product.title}
                    price={product.price}
                    className={styles["product-card-info"]}
                  />
                </Link>

                <QuickActions product={product} />
              </ProductCard>
            ))}
          </section>
          <Modal />
        </>
      )}
    </section>
  );
};

export default Category;
