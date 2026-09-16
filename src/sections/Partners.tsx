import Icon from "../components/Icon";
import Button from "../components/Button";
import { distributionStats, distributors } from "../data/content";

export default function Partners() {
  return (
    <section id="partners" className="px-4 md:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#b5123c] mb-2">
            OUR NETWORK
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Distribution <span className="text-[#b5123c]">Partners</span>
          </h2>
          <span className="block w-16 h-1 bg-[#d9a441] mx-auto mt-4 rounded" />
          <p className="text-neutral-600 max-w-2xl mx-auto mt-5 leading-relaxed">
            Our trusted distribution network spans across India with 250+
            agents, ensuring our educational books reach every corner of the
            country.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-14">
          {distributionStats.map((s) => (
            <div
              key={s.label}
              className="bg-neutral-50 rounded-xl text-center py-8 border border-neutral-100"
            >
              <div className="text-3xl font-serif font-bold text-[#b5123c]">
                {s.value}
              </div>
              <div className="text-sm text-neutral-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-bold text-center mb-8">
          Key Distributors &amp; Institutional Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
          {distributors.map((d) => (
            <div
              key={d}
              className="bg-neutral-50 rounded-xl text-center py-7 px-3 border border-neutral-100"
            >
              <Icon name="book" className="w-6 h-6 mx-auto text-[#b5123c] mb-3" />
              <div className="font-serif font-semibold text-sm">{d}</div>
              <div className="text-xs text-[#d9a441] font-medium mt-1">
                Distributor
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#181530] to-[#2b1730] rounded-2xl px-6 md:px-10 py-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
            Become a Distribution Partner
          </h3>
          <p className="text-neutral-300 max-w-xl mx-auto mb-8">
            Join our nationwide network of 250+ distribution agents. We offer
            competitive margins and support to our partners.
          </p>
          <Button href="#contact" variant="gold">
            Become a Partner
            <Icon name="arrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
