import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <section id="error-section" role="region">
      {error.message}
    </section>
  );
};

export default ErrorPage;
