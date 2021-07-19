import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Daniel Marcotrigiano
      <small className={Styles.byline}></small>
    </footer>
  );
}
export default Footer;
