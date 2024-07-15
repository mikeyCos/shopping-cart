import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section id={styles["home"]}>
      <article>
        <h2>Welcome</h2>
        <p>
          Fusce vitae dui non dolor sollicitudin rhoncus aliquam ut est. Nunc in
          semper dui. Duis nisi neque, laoreet eu felis at, imperdiet placerat
          leo. Fusce finibus mauris non dolor commodo, sit amet facilisis turpis
          ullamcorper. Maecenas quis placerat arcu. Phasellus interdum velit
          quam, sit amet sodales est dapibus ut. Nullam sagittis, nulla sed
          scelerisque aliquam, tellus quam laoreet tortor, id vehicula ipsum
          massa ac mi. Morbi arcu lorem, mattis eu purus vel, egestas eleifend
          ipsum. Duis pellentesque tristique eros sit amet porttitor.
        </p>
      </article>

      <article>
        <h2>Placeholder</h2>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          vitae erat leo. Morbi finibus fermentum orci, at luctus odio elementum
          et. Donec in nisl nec nunc elementum egestas porta id sapien. Proin
          vel bibendum diam, id volutpat sapien. Donec feugiat venenatis eros in
          cursus. Praesent imperdiet vulputate lacus tempus tristique.
        </p>
      </article>
    </section>
  );
};

export default Home;
