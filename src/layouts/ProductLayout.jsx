import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <dialog>
      <Outlet />
    </dialog>
  );
};

export default ProductLayout;
