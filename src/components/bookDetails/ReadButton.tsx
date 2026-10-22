"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    console.log("Read book btn triggered", book);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read  "${book.bookName}" book`);
  };

  return (
    <button className="btn btn-primary" onClick={() => handleReadBook()}>
      Read Book Details
    </button>
  );
};

export default ReadButton;
