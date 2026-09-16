import Icon from "../components/Icon";
import { founderStats } from "../data/content";
import founderPhoto from "../assets/founder.png";

export default function Founder() {
  return (
    <section id="founder" className="bg-[#181530] text-white px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#d9a441] mb-2">
            THE VISIONARY
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Meet Our <span className="text-[#d9a441]">Founder</span>
          </h2>
          <span className="block w-16 h-1 bg-[#b5123c] mx-auto mt-4 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/10 max-w-md mx-auto w-full">
            <div className="aspect-[4/5]">
              <img src={founderPhoto} alt="Sri Debasis Ganguly" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#d9a441] text-[#1a1730] text-center font-semibold py-3">
              Sri Debasis Ganguly
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold">Sri Debasis Ganguly</h3>
            <p className="text-[#d9a441] mb-6">Founder &amp; Managing Director</p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-2xl text-[#d9a441] mb-2 leading-none">&ldquo;</p>
              <p className="italic text-neutral-200 leading-relaxed">
                Sanskriti Samsad is not only a publishing house but also a
                social organisation. We believe in building communities
                through quality education and preserving our rich cultural
                heritage.
              </p>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-4">
              Sri Debasis Ganguly founded Sanskriti Samsad in 1990 with a
              vision to provide quality educational content to young minds
              while staying true to social commitments.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              His family has deep cultural roots &mdash; his grandfather,{" "}
              <strong className="text-[#d9a441]">Dr. Chandi Charan Ganguly</strong>,
              was the house physician to the legendary poet{" "}
              <strong className="text-[#d9a441]">Rabindranath Tagore</strong>{" "}
              in Santiniketan.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-8">
              Under his leadership, Sanskriti Samsad has published over 400
              prestigious titles and built a network of 250+ distribution
              agents across India.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-sm">
              {founderStats.map((s) => (
                <div
                  key={s.value}
                  className="bg-white/5 border border-white/10 rounded-xl text-center py-5"
                >
                  <Icon name={s.icon as never} className="w-5 h-5 mx-auto text-[#d9a441] mb-2" />
                  <div className="font-bold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
