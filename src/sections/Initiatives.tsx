import Icon from "../components/Icon";
import { initiatives } from "../data/content";

export default function Initiatives() {
  return (
    <section id="initiatives" className="px-4 md:px-8 py-16 md:py-24 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#b5123c] mb-2">
            BEYOND PUBLISHING
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Our <span className="text-[#b5123c]">Social Initiatives</span>
          </h2>
          <span className="block w-16 h-1 bg-[#d9a441] mx-auto mt-4 rounded" />
          <p className="text-neutral-600 max-w-2xl mx-auto mt-5 leading-relaxed">
            Sanskriti Samsad is not only a publishing house but also a social
            organisation. We believe in giving back to the community that has
            supported us for over three decades.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#181530] to-[#2b1730] rounded-2xl px-6 md:px-10 py-10 text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-2xl italic text-white leading-relaxed">
            &ldquo;Sanskriti Samsad is not only a publishing house but also a
            social organisation.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-8 h-px bg-[#d9a441]" />
            <span className="text-[#d9a441] text-sm font-semibold">
              Our Core Philosophy
            </span>
            <span className="w-8 h-px bg-[#d9a441]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-neutral-200 p-7"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
              >
                <Icon name={item.icon as never} className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b5123c] bg-[#fdf1f3] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5123c]" />
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
