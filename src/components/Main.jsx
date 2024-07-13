import { Outlet } from "react-router-dom";
import styles from "../styles/Main.module.css";
import ScrollButtons from "./ScrollButtons";

const Main = () => {
  return (
    <main className={styles.main}>
      <Outlet context={ScrollButtons} />
      <ScrollButtons />
    </main>
  );
};

export default Main;
