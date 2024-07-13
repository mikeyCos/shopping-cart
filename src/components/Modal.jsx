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
    const observer = new ResizeObserver((entries) =>
      callBack(entries, refDefault.current, state.id)
    );
    document.body.classList.toggle("modal-open", !!state); // testing
    if (state) {
      // adjustModalYPosition(refDefault.current, state.id);
      const categorySection = document.querySelector("#category");
      observer.observe(categorySection);
      refDefault.current?.showModal();
    } else {
      refDefault.current?.close();
    }
    // Prevent scroll when modal is open
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/

    return () => {
      observer.disconnect();
    };
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

const callBack = (entries, modal, id) => {
  if (modal) {
    for (let entry of entries) {
      if (entry.contentBoxSize) {
        if (entry.contentBoxSize[0]) {
          const productCard = document.querySelector(
            `[data-id='${id}']`
          ).parentElement;
          const productCardBounds = productCard.getBoundingClientRect();
          const modalBounds = modal.getBoundingClientRect();
          const newPosition = adjustModalYPosition(
            productCardBounds,
            modalBounds
          );
          // modal.style.top = `${newPosition}px`;
          modal.style.transform = `translateY(${newPosition}px)`;
        }
      }
    }
  }
};

const adjustModalYPosition = (productCardBounds, modalBounds) => {
  const productCardMiddle =
    productCardBounds.top + Math.round(productCardBounds.height / 2);

  // If modal top is a negative number
  // Modal will vertically centered on the viewport
  // (window.innerHeight - modal height) / 2
  // If modal height plus product card middle is greater than the viewport's height
  //  Modal will be above the productCard
  // Else
  //  Modal will be below the productCard
  if (modalBounds.y <= 0) {
    // if (modalBounds.y >= window.innerHeight) {
    return (window.innerHeight - modalBounds.height) / 2;
  } else if (modalBounds.height + productCardMiddle > window.innerHeight) {
    return productCardMiddle - modalBounds.height;
  } else {
    return productCardMiddle;
  }
};

export default Modal;
