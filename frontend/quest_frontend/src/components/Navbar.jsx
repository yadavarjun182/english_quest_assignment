
import { Link } from "react-router-dom";
import styles from "../components/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
      <h2>Library App</h2>
      <Link to="/"> Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
