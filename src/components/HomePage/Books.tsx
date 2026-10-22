import BookCard from "../shared/BookCard";
import { IBook } from "@/types/book.type";
import booksData from "../../../public/booksData.json";

const Books = () => {
  return (
    <section className="page-container container mx-auto py-10 sm:py-14">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book: IBook, indx: number) => (
          <BookCard key={indx} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
