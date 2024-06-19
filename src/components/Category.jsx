import { useOutletContext, useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const [products] = useOutletContext();
  console.log(products);
  console.log(category);
  return (
    <section>
      <h2>Category</h2>
    </section>
  );
};

export default Category;
