import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";

const Modal = () => {
  const refDefault = useRef(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(state.previousLocation);
  };

  useEffect(() => {
    if (state) {
      refDefault.current?.showModal();
    } else {
      refDefault.current?.close();
    }
  }, [state]);

  return (
    <>
      {state && (
        <dialog
          ref={refDefault}
          onClick={(e) => e.target.tagName === "DIALOG" && closeModal()}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
        >
          <section>
            <button
              type="button"
              onClick={() => closeModal()}
              aria-labelledby="close"
            >
              x
            </button>
            <Product />
          </section>
        </dialog>
      )}
    </>
  );
};

export default Modal;
