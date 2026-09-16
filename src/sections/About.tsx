import Icon from "../components/Icon";
import { aboutStats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#b5123c] mb-2">
            WHO WE ARE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About <span className="text-[#b5123c]">Sanskriti Samsad</span>
          </h2>
          <span className="block w-16 h-1 bg-[#d9a441] mx-auto mt-4 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-[#fdf1ea] to-[#fdfbf3] rounded-2xl p-10 flex flex-col items-center">
            <img
              src="https://sanskritisamsad.in/wp-content/uploads/2026/06/SS8.png"
              alt="Sanskriti Samsad logo"
              className="w-56 h-56 object-contain bg-white rounded-lg p-2"
            />
            <span className="mt-6 bg-[#b5123c] text-white text-sm font-semibold px-6 py-2 rounded-full">
              Est. 1990 &bull; Kolkata
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              A Publisher with <span className="text-[#b5123c]">Social Commitment</span>
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              <strong>Sanskriti Samsad</strong> is not only a publishing
              house but also a <strong className="text-[#b5123c]">social organisation</strong>.
              For over 34 years, we have been dedicated to empowering young
              minds through quality education and preserving the rich
              heritage of Bengali literature.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our journey is woven into India's cultural fabric. The
              founder's family has deep cultural roots &mdash; his
              grandfather, <strong>Dr. Chandi Charan Ganguly</strong>, was the
              house physician to the great poet{" "}
              <strong>Rabindranath Tagore</strong> in Santiniketan.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              We operate with a hybrid business model combining in-house
              publishing with a robust distribution network, ensuring quality
              educational content reaches students across the nation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((s) => (
                <div
                  key={s.title}
                  className="bg-neutral-50 rounded-xl p-5 border border-neutral-100"
                >
                  <Icon name={s.icon as never} className="w-5 h-5 text-[#b5123c] mb-2" />
                  <div className="font-serif font-semibold text-sm">
                    {s.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
