
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import styles from "../components/styles/Books.module.css";

const Books = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["book-filter-container"]}>
        <div className={styles["filter-component"]}>
          <SideBar />
        </div>
        <div className={styles["book-list"]}>
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default Books;
