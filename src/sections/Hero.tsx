import Icon from "../components/Icon";
import Button from "../components/Button";
import { heroStats } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-br from-[#fdf5ee] via-[#fdf7f7] to-[#f3f6fb] px-4 md:px-8 py-14 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#b5123c] bg-white border border-[#f3d3da] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5123c]" />
            Established 1990 &bull; Kolkata
          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 leading-tight">
            Sanskriti Samsad
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-[#b5123c] mt-2">
            A Publisher with Social Commitment
          </p>

          <p className="text-neutral-600 mt-6 max-w-lg leading-relaxed">
            Empower young minds through quality education and Bengali
            literature for over three decades. More than a publishing house
            &mdash; a social organisation dedicated to building communities.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button href="#books" variant="solid">
              <Icon name="book" className="w-5 h-5" />
              Explore Our Books
              <Icon name="arrowRight" className="w-4 h-4" />
            </Button>
            <Button href="#partners" variant="outline">
              Become a Partner
            </Button>
          </div>

          <div className="mt-8 border-l-4 border-[#b5123c] bg-white rounded-r-lg px-5 py-4 max-w-lg shadow-sm">
            <p className="italic text-neutral-700">
              &ldquo;Our journey began with a blessing from Mother Teresa, who
              wrote the introduction to our very first publication.&rdquo;
            </p>
            <p className="text-[#b5123c] font-semibold text-sm mt-2">
              &mdash; Our Heritage
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-4 max-w-md mx-auto shadow-sm">
            <img
              src="https://sanskritisamsad.in/wp-content/uploads/2026/06/SS8.png"
              alt="Sanskriti Samsad logo"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl px-5 py-5 text-center shadow-sm"
              >
                <Icon
                  name={s.icon as never}
                  className="w-6 h-6 mx-auto text-[#b5123c] mb-2"
                />
                <div className="text-2xl font-bold text-neutral-900">
                  {s.value}
                </div>
                <div className="text-xs text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
