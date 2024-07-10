import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";
import CloseIcon from "../assets/icons/close.svg?react";
import styles from "../styles/Modal.module.css";
import iconStyles from "../styles/icons.module.css";

const Modal = () => {
  const refDefault = useRef(null);
  const { state } = useLocation();
  console.log(useLocation());
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(state.previousLocation, {
      preventScrollReset: true,
    });
  };

  useEffect(() => {
    if (state) {
      adjustModalYPosition(refDefault.current, state.id);
      refDefault.current?.showModal();
      refDefault.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      console.log("state in useEffect");
    } else {
      refDefault.current?.close();
    }
    console.log("useEffect");
    // Prevent scroll when modal is open
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
    setTimeout(() => {
      document.body.classList.toggle("modal-open", !!state);
    }, 500);
  }, [state]);

  return (
    <>
      {state?.product && (
        <dialog
          ref={refDefault}
          onClick={(e) => e.target.tagName === "DIALOG" && closeModal()}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
          className={styles["modal"]}
        >
          <button
            type="button"
            onClick={() => closeModal()}
            aria-labelledby="close"
            className={styles["close-btn"]}
            autoFocus
          >
            <CloseIcon className={iconStyles["icon-close"]} />
          </button>
          <section>
            <Product />
          </section>
        </dialog>
      )}
    </>
  );
};

const adjustModalYPosition = (modal, id) => {
  const productCard = document.querySelector(`[data-id='${id}']`).parentElement;
  const { bottom, top, height } = productCard.getBoundingClientRect();
  const newYPosition = top + window.scrollY;
  console.log(modal.getBoundingClientRect());
  console.log(document.body.getBoundingClientRect());
  modal.style.transform = `translateY(${newYPosition}px)`;
};

export default Modal;
