import { useRouteError } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error);
  console.log(status);
  return (
    <section id={styles["error-section"]} role="region">
      <p>{error.message}</p>
    </section>
  );
};

export default ErrorPage;
