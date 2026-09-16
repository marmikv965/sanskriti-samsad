import { useState } from "react";
import Icon from "../components/Icon";
import Button from "../components/Button";

const BASE = "https://sanskritisamsad.in/wp-content/uploads";
const CAT_PREFIX = "SS_CATALOGUE__2024-32pgs_compressed-1-2-2_page-";

const catalogueImages = Array.from({ length: 32 }, (_, i) => {
  const n = String(i + 1).padStart(4, "0");
  const suffix = n === "0016" ? "-1" : "";
  return `${BASE}/2026/06/${CAT_PREFIX}${n}${suffix}.jpg`;
});

export default function BooksCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + catalogueImages.length) % catalogueImages.length);
  const next = () => setIndex((i) => (i + 1) % catalogueImages.length);

  return (
    <section id="books" className="px-4 md:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#b5123c] mb-2">
            OUR CATALOGUE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Our <span className="text-[#b5123c]">Books</span>
          </h2>
          <span className="block w-16 h-1 bg-[#d9a441] mx-auto mt-4 rounded" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <img
            src={catalogueImages[index]}
            alt={`Catalogue page ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg border border-neutral-200"
          />

          <button
            aria-label="Previous page"
            onClick={prev}
            className="absolute top-1/2 -left-3 md:-left-14 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-neutral-100"
          >
            <Icon name="chevronLeft" className="w-6 h-6 text-neutral-700" />
          </button>
          <button
            aria-label="Next page"
            onClick={next}
            className="absolute top-1/2 -right-3 md:-right-14 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-neutral-100"
          >
            <Icon name="chevronRight" className="w-6 h-6 text-neutral-700" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-2xl mx-auto">
          {catalogueImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-[#b5123c]" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-4">
          Page {index + 1} of {catalogueImages.length}
        </p>

        <div className="flex justify-center mt-8">
          <Button href={`mailto:samsadsanskriti@gmail.com?subject=Book%20Inquiry`}>
            <Icon name="mail" className="w-4 h-4" />
            Enquire About Our Books
          </Button>
        </div>
      </div>
    </section>
  );
}
