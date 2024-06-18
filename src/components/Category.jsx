import { useOutletContext, useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const [products] = useOutletContext();
  console.log(products);
  console.log(category);
  return <section>Category</section>;
};

export default Category;
