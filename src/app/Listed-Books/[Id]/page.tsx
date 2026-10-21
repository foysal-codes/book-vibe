import { IBook } from "@/types/book.type";
import Image from "next/image";
import React from "react";
interface IBookDetailPageProps {
  params: Promise<{
    Id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  return res.json();
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { Id } = await params;
  const booksData = await getBooks();
  const Book = booksData.find(
    (book: IBook) => String(book.bookId) === String(Id),
  ) as IBook;
  console.log(Book);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card card-side flex-col overflow-hidden border border-base-300 bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl md:flex-row">
        {/* Book Cover */}
        <figure className="relative shrink-0 bg-base-200 p-6 md:w-2/5">
          <Image
            src={Book.image}
            alt={`Cover of ${Book.bookName}`}
            width={500}
            height={650}
            className="h-80 w-auto max-w-full rounded-lg object-contain shadow-lg transition-transform duration-300 hover:scale-105 md:h-[450px]"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body gap-4 md:w-3/5">
          {/* Category and Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-primary badge-outline px-4 py-3 font-semibold">
              {Book.category}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2 text-sm font-bold text-warning">
              <span className="text-lg">★</span>
              {Book.rating.toFixed(1)} / 5
            </span>
          </div>

          {/* Title and Author */}
          <div>
            <h2 className="card-title text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              {Book.bookName}
            </h2>

            <p className="mt-2 text-base text-base-content/70">
              Written by{" "}
              <span className="font-semibold text-primary">{Book.author}</span>
            </p>
          </div>

          <div className="divider my-0" />

          {/* Book Metadata */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/60">Total Pages</p>
              <p className="mt-1 font-bold">{Book.totalPages}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/60">Published</p>
              <p className="mt-1 font-bold">{Book.yearOfPublishing}</p>
            </div>

            <div className="col-span-2 rounded-xl bg-base-200 p-3 sm:col-span-1">
              <p className="text-xs text-base-content/60">Publisher</p>
              <p className="mt-1 font-bold">{Book.publisher}</p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-base-content/70">
              Genres & Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {Book.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-secondary badge-outline px-3 py-3"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Review */}
          <div>
            <h3 className="mb-2 text-lg font-bold">About This Book</h3>

            <p className="text-sm leading-7 text-base-content/75 sm:text-base">
              {Book.review}
            </p>
          </div>

          {/* Actions */}
          <div className="card-actions mt-2 flex-wrap justify-start">
            <button className="btn btn-primary">Read Book Details</button>

            <button className="btn btn-outline btn-primary">
              Add to Wishlist ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
