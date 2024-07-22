import { useRouteError } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section id={styles["error-section"]} role="region">
      {status && <h1>{status}</h1>}
      <p>{error.message}</p>
    </section>
  );
};

export default ErrorPage;
