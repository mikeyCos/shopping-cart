import { useEffect, useState } from "react";
import ArrowUpwardIcon from "../assets/icons/arrow_upward_alt.svg?react";
import ArrowDownwardIcon from "../assets/icons/arrow_downward_alt.svg?react";
import styles from "../styles/ScrollButtons.module.css";
import iconStyles from "../styles/icons.module.css";
import { useLocation } from "react-router-dom";

const ScrollButtons = () => {
  const location = useLocation();
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [showScrollToBottomBtn, setShowScrollToBottomBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollbarExists =
      document.documentElement.scrollHeight !== window.innerHeight;
    setShowScrollToBottomBtn(scrollbarExists);
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const documentHeight = document.body.scrollHeight;
      // If scrolled === 0
      // Hide the top button
      const isScrolledZero = scrolled !== 0;
      setShowScrollToTopBtn(isScrolledZero);
      // If scrolled document height === document body scroll height
      // Hide bottom button
      const isScrolledDocumentHeight =
        scrolled + window.innerHeight !== documentHeight;
      setShowScrollToBottomBtn(isScrolledDocumentHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToTopBtnClassNames =
    createScrollBtnClassNames(showScrollToTopBtn);

  const scrollToBottomBtnClassNames = createScrollBtnClassNames(
    showScrollToBottomBtn
  );

  return (
    <div className={styles["scroll-btns-wrapper"]}>
      <div className={styles["scroll-btns-container"]}>
        <button
          onClick={scrollToTop}
          className={`${styles["scroll-btn-top"]} ${scrollToTopBtnClassNames}`}
        >
          <ArrowUpwardIcon className={iconStyles["icon"]} />
        </button>
        <button
          onClick={scrollToBottom}
          className={`${styles["scroll-btn-bottom"]} ${scrollToBottomBtnClassNames}`}
        >
          <ArrowDownwardIcon className={iconStyles["icon"]} />
        </button>
      </div>
    </div>
  );
};

const createScrollBtnClassNames = (show) => {
  return styles[`${show ? "show" : "hide"}-scroll-btn`];
};

export default ScrollButtons;
