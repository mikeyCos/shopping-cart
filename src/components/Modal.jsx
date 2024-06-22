import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// How to render the dialog element as an overlay?
const Modal = () => {
  const refDefault = useRef(null);
  const [openModal, setOpenModal] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const closeModal = () => {
    setOpenModal(false);
    navigate(state.previousLocation);
  };

  useEffect(() => {
    if (openModal) {
      refDefault.current?.showModal();
    } else {
      refDefault.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={refDefault}
      onClick={(e) => e.target.tagName === "DIALOG" && closeModal()}
      onKeyDown={(e) => e.key === "Escape" && closeModal()}
    >
      {/* Is it overkill to use an Outlet component */}
      <section>
        <button
          type="button"
          onClick={() => closeModal()}
          aria-labelledby="close"
        >
          x
        </button>
        <Outlet />
      </section>
    </dialog>
  );
};

export default Modal;
