import { IBook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10">
      {/* Book cover */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50 p-5">
        <span className="absolute left-3 top-3 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-teal-800 shadow-sm">
          {book.category}
        </span>

        <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
          <span className="text-amber-500">★</span>
          {Number(book.rating).toFixed(1)}
        </span>

        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={200}
          height={260}
          className="relative h-full w-auto max-w-full rounded-md object-contain shadow-lg transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Book information */}
      <div className="flex flex-1 flex-col px-1 pt-5">
        <h2 className="line-clamp-2 text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-teal-700">
          {book.bookName}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Written by{" "}
          <span className="font-semibold text-slate-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800 ring-1 ring-inset ring-teal-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3">
          <div>
            <p className="text-xs text-slate-400">Total pages</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Details button */}
        <Link
          href={`/Listed-Books/${book.bookId}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          Explore book
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
