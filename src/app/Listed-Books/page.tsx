"use client";
import BookCard from "@/components/shared/BookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/book.type";
import React, { useContext } from "react";

const ListedBookPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log("Listed Books:", readBooks);
  console.log("Wished Books:", wishlist);
  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            readBooks.map((books: IBook) => (
              <BookCard key={books.bookId} book={books}></BookCard>
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              No Read Books Found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            wishlist.map((books: IBook) => (
              <BookCard key={books.bookId} book={books}></BookCard>
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              No Wishlist Books Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookPage;
