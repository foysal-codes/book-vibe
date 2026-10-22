"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishList } = useContext(BooksContext);
  const handleWishList = () => {
    console.log(wishlist, "Wishlist added");
    setWishList([...wishlist, book]);
    toast.success(`You have wished to read "${book.bookName}" book`);
  };

  return (
    <button
      className="btn btn-outline btn-primary"
      onClick={() => handleWishList()}
    >
      Add to Wishlist ♡
    </button>
  );
};

export default WishButton;
