import LoadingIcon from "../assets/icons/progress_activity.svg?react";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["loading"]}>
      <div className={styles["loading-wrapper"]}>
        <LoadingIcon className={styles["loading-icon"]} />
        {/* <p>Application loading</p> */}
      </div>
    </div>
  );
};

export default Loading;
