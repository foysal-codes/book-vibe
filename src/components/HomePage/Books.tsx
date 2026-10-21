import Image from "next/image";
import Link from "next/link";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/book.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  return res.json();
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="page-container container mx-auto py-10 sm:py-14">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book: IBook, indx: number) => (
          <BookCard key={indx} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
