import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// How to render the dialog element as an overlay?
const ProductLayout = () => {
  const refDefault = useRef(null);
  const [openModal, setOpenModal] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const closeModal = (e) => {
    if ((e.target.tagName === "DIALOG") | (e.key === "Escape")) {
      setOpenModal(false);
      navigate(state.previousLocation);
    }
  };
  useEffect(() => {
    if (openModal) {
      refDefault.current?.showModal();
    } else {
      refDefault.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={refDefault} onClick={closeModal} onKeyDown={closeModal}>
      <Outlet />
    </dialog>
  );
};

export default ProductLayout;
