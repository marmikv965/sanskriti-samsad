import { useState, type FormEvent } from "react";
import Icon from "../components/Icon";
import { contact } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      form.subject || "Website Inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="px-4 md:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#b5123c] mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Contact <span className="text-[#b5123c]">Us</span>
          </h2>
          <span className="block w-16 h-1 bg-[#d9a441] mx-auto mt-4 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-2">
              We'd Love to <span className="text-[#b5123c]">Hear From You</span>
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Whether you have questions about our books, want to discuss
              distribution opportunities, or need assistance with bulk
              orders, our team is here to help.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-[#fdf1f3] flex items-center justify-center">
                  <Icon name="pin" className="w-5 h-5 text-[#b5123c]" />
                </span>
                <div>
                  <div className="font-serif font-semibold">Head Office</div>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      contact.headOffice
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-[#b5123c] block"
                  >
                    {contact.headOffice}
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">
                    <strong>Sales Counter:</strong> {contact.salesCounter}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-[#fdf1f3] flex items-center justify-center">
                  <Icon name="phone" className="w-5 h-5 text-[#b5123c]" />
                </span>
                <div>
                  <div className="font-serif font-semibold">Phone</div>
                  {contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="text-sm text-neutral-600 hover:text-[#b5123c] block"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-[#fdf1f3] flex items-center justify-center">
                  <Icon name="mail" className="w-5 h-5 text-[#b5123c]" />
                </span>
                <div>
                  <div className="font-serif font-semibold">Email</div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-neutral-600 hover:text-[#b5123c]"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-[#fdf1f3] flex items-center justify-center">
                  <Icon name="clock" className="w-5 h-5 text-[#b5123c]" />
                </span>
                <div>
                  <div className="font-serif font-semibold">Business Hours</div>
                  <p className="text-sm text-neutral-600">{contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100"
          >
            <h3 className="font-serif font-bold text-lg mb-5">
              Send Us a Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Full Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b5123c]"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b5123c]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Phone Number
                </label>
                <input
                  value={form.phone}
                  onChange={update("phone")}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b5123c]"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Subject *
                </label>
                <input
                  required
                  value={form.subject}
                  onChange={update("subject")}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b5123c]"
                />
              </div>
            </div>

            <label className="text-sm font-medium block mb-1">Message *</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-[#b5123c]"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#b5123c] text-white font-semibold rounded-lg py-3 hover:bg-[#93102f] transition-colors"
            >
              <Icon name="send" className="w-4 h-4" />
              Send Message
            </button>

            {sent && (
              <p className="text-sm text-green-700 mt-3 text-center">
                Opening your email client to send this message&hellip;
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
