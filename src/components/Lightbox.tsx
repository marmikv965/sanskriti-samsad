import { useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ src, alt, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-4 right-5 text-white text-4xl leading-none hover:opacity-70"
        onClick={onClose}
      >
        &times;
      </button>
      <button
        aria-label="Previous"
        className="absolute left-2 md:left-6 text-white text-4xl px-2 hover:opacity-70"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        &#8249;
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        aria-label="Next"
        className="absolute right-2 md:right-6 text-white text-4xl px-2 hover:opacity-70"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        &#8250;
      </button>
    </div>
  );
}
