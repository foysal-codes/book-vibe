import Image from "next/image";
import banner from "@/assets/hero_img-removebg-preview.png";

const Banner = () => {
  return (
    <section className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 via-white to-slate-100 px-6 py-12 sm:px-10 md:py-16 lg:px-16">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-8">
        {/* Text content */}
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-teal-700">
            Your next great read
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Books to freshen up your{" "}
            <span className="text-teal-700">bookshelf.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 md:mx-0 md:text-lg">
            Discover captivating stories, explore new ideas, and find your next
            favorite book.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-teal-700 px-7 py-4 font-semibold text-white shadow-lg shadow-teal-900/15 transition duration-300 hover:-translate-y-1 hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
            View the list
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Hero image */}
        <div className="relative flex w-full max-w-sm items-center justify-center md:w-5/12">
          <div className="absolute h-56 w-56 rounded-full bg-teal-200/60 blur-3xl sm:h-72 sm:w-72" />

          <Image
            src={banner}
            alt="A featured collection of books"
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className="relative h-auto max-h-80 w-full object-contain drop-shadow-xl transition duration-500 hover:scale-105 sm:max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
