import PropTypes from "prop-types";

const ErrorPage = ({ errorMessage = "Error" }) => {
  return (
    <section id="error-section" role="region">
      {errorMessage}
    </section>
  );
};

ErrorPage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorPage;
