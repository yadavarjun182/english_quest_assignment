import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/actions"
import BookCard from "./BookCard";
import styles from "../components/styles/BookList.module.css";
import { useLocation, useSearchParams } from "react-router-dom";

const BookList = () => {
  const books = useSelector((store) => store.bookReducer.books);
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch();

  console.log(location.search)

  useEffect(() => {
    const order = searchParams.get("order")
    let paramsobj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && "release_year",
        _order: order && order,
      },
    }
    dispatch(getBooks(paramsobj));
  }, [location.search]);

  return (
    <div className={styles.container}>
      {books.length > 0 &&
        books.map((el) => {
          return <BookCard key={el.id} book={el} />
        })
      }
    </div>
  );
};

export default BookList;
