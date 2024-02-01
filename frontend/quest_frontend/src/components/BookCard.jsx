const BookCard = ({ book }) => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <ul>
        <img
          src="https://the-martyan-chronicles.com/wp-content/uploads/2020/06/book-cover-larger.jpg"
          alt={book.book_name}
          width="90%"

        />
        <li>{book.book_name}</li>
        <li>Author : {book.author}</li>
        <li>Category : {book.category}</li>
        <li>Release Year : {book.release_year}</li>
      </ul>
    </div>
  );
};

export default BookCard;
