import {
  ChevronDown,
  Clock,
  Droplets,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const WA_BASE = "https://wa.me/916398948080";

const products = [
  {
    id: 1,
    name: "Kashmiri Oudh Attar",
    nameHi: "कश्मीरी ऊद अत्तर",
    descHi: "असली कश्मीरी ऊद अत्तर – लंबे समय तक खुशबू",
    descEn: "Long-lasting, pure Kashmiri oudh",
    price: "₹800",
    image: "/assets/generated/attar-oudh.dim_400x400.jpg",
    waText: "I%20want%20to%20order%20Kashmiri%20Oudh%20Attar",
    badge: null,
  },
  {
    id: 2,
    name: "Rose Noor Attar",
    nameHi: "रोज़ नूर अत्तर",
    descHi: "ताज़ा गुलाब की खुशबू – रोज़ नूर अत्तर",
    descEn: "Classic gulab scent, pure and natural",
    price: "₹500",
    image: "/assets/generated/attar-rose.dim_400x400.jpg",
    waText: "I%20want%20to%20order%20Rose%20Noor%20Attar",
    badge: null,
  },
  {
    id: 3,
    name: "Jasmine Floral Ittar",
    nameHi: "जैस्मिन फ्लोरल इत्तर",
    descHi: "चमेली के फूलों की मनमोहक खुशबू",
    descEn: "Fresh floral jasmine fragrance",
    price: "₹400",
    image: "/assets/generated/attar-jasmine.dim_400x400.jpg",
    waText: "I%20want%20to%20order%20Jasmine%20Floral%20Ittar",
    badge: null,
  },
  {
    id: 4,
    name: "Musk Amber Attar",
    nameHi: "मस्क अम्बर अत्तर",
    descHi: "मस्क और अम्बर का अनोखा मिश्रण",
    descEn: "Rich musk and warm amber blend",
    price: "₹600",
    image: "/assets/generated/attar-musk-amber.dim_400x400.jpg",
    waText: "I%20want%20to%20order%20Musk%20Amber%20Attar",
    badge: null,
  },
  {
    id: 5,
    name: "Combo Gift Pack (3 bottles)",
    nameHi: "कॉम्बो गिफ्ट पैक",
    descHi: "3 खूबसूरत बोतलों का उपहार सेट – किसी को भी दें",
    descEn: "Perfect gift set with 3 premium attars",
    price: "₹1200",
    image: "/assets/generated/attar-combo-gift.dim_400x400.jpg",
    waText: "I%20want%20to%20order%20Combo%20Gift%20Pack",
    badge: "Best Value",
  },
];

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    titleEn: "100% Pure & Natural",
    titleHi: "शुद्ध और प्राकृतिक",
    desc: "Sourced directly from the finest gardens of Kashmir, Kannauj, and the Middle East.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    titleEn: "Alcohol-Free",
    titleHi: "अल्कोहल मुक्त",
    desc: "All our attars are completely alcohol-free, gentle on skin and suitable for all.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    titleEn: "Long-Lasting Fragrance",
    titleHi: "लंबे समय तक खुशबू",
    desc: "Our attars last 8–12 hours, keeping you fresh and fragrant all day long.",
  },
];

function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-gold/30 shadow-lg"
      data-ocid="nav.panel"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <div className="font-display text-gold text-xl font-bold leading-tight">
            Al Hussain Attar Point
          </div>
          <div className="text-gold/60 text-xs font-body tracking-wide">
            Pure Attars & Ittars since generations
          </div>
        </div>
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Primary navigation"
        >
          {["Home", "Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gold/80 hover:text-light-gold font-body text-sm tracking-wider uppercase transition-colors duration-200"
              data-ocid={`nav.${item.toLowerCase()}.link`}
            >
              {item}
            </a>
          ))}
          <a
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-4 py-2 rounded-full text-sm font-body font-bold flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            data-ocid="nav.whatsapp.button"
          >
            <MessageCircle className="w-4 h-4" />
            Order Now
          </a>
        </nav>
        {/* Mobile WhatsApp button */}
        <a
          href={WA_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-whatsapp text-white p-2 rounded-full"
          data-ocid="nav.whatsapp.button"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/generated/attar-hero.dim_1200x600.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-bg/75" />
      {/* Gold ornamental overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, oklch(0.18 0.07 148) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Ornamental top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gold text-4xl mb-4"
        >
          ✦
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gold/70 font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Al Hussain Attar Point
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl text-gold font-bold leading-tight mb-6"
        >
          Pure Luxury,
          <br />
          <span className="italic text-light-gold">Timeless Fragrance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gold/80 font-body text-lg md:text-xl mb-3"
        >
          शुद्ध और प्राकृतिक अत्तर — सीधे आपके दिल तक
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-cream/60 font-body text-base mb-10"
        >
          100% Natural · Alcohol-Free · Handcrafted
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-deep-green font-body font-bold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl"
            style={{ color: "oklch(0.18 0.07 148)" }}
            data-ocid="hero.whatsapp.button"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </a>
          <a
            href="#products"
            className="border border-gold/60 text-gold font-body font-bold px-8 py-4 rounded-full text-base flex items-center justify-center gap-2 hover:bg-gold/10 transition-all duration-200"
            data-ocid="hero.products.link"
          >
            View Products
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-gold/40">
            <span className="text-xs font-body tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl border-2 border-gold/30 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
      data-ocid={`products.item.${index + 1}`}
    >
      {product.badge && (
        <div
          className="absolute top-3 right-3 z-10 gold-gradient text-xs font-body font-bold px-3 py-1 rounded-full shadow-md"
          style={{ color: "oklch(0.18 0.07 148)" }}
        >
          ⭐ {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Name & Price */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              className="font-display text-deep-green text-lg font-bold leading-tight"
              style={{ color: "oklch(0.27 0.08 148)" }}
            >
              {product.name}
            </h3>
            <p className="text-xs font-body text-muted-foreground mt-0.5">
              {product.nameHi}
            </p>
          </div>
          <div
            className="gold-gradient text-sm font-body font-bold px-3 py-1.5 rounded-xl shrink-0"
            style={{ color: "oklch(0.18 0.07 148)" }}
          >
            {product.price}
          </div>
        </div>

        {/* Hindi Description */}
        <p
          className="font-body text-sm italic text-muted-foreground"
          style={{ fontStyle: "italic" }}
        >
          {product.descHi}
        </p>

        {/* English Description */}
        <p className="font-body text-sm text-gray-600">{product.descEn}</p>

        {/* Stars */}
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href={`${WA_BASE}?text=${product.waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-whatsapp text-white font-body font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-md"
          data-ocid={`products.item.${index + 1}.button`}
        >
          <MessageCircle className="w-4 h-4" />
          Order Now
        </a>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.72 0.12 80)" }}
          >
            Our Collection
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "oklch(0.27 0.08 148)" }}
          >
            Our Finest Attars
          </h2>
          <p
            className="font-body text-xl"
            style={{ color: "oklch(0.65 0.10 80)" }}
          >
            हमारे बेहतरीन अत्तर
          </p>
          <div className="ornament-divider mt-6 max-w-xs mx-auto">
            <span
              className="text-gold text-lg"
              style={{ color: "oklch(0.72 0.12 80)" }}
            >
              ✦
            </span>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-body text-muted-foreground mb-4">
            Looking for something special? Ask us for custom orders.
          </p>
          <a
            href={`${WA_BASE}?text=I%20want%20to%20enquire%20about%20attars`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-deep-green text-gold font-body font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            style={{
              backgroundColor: "oklch(0.27 0.08 148)",
              color: "oklch(0.72 0.12 80)",
            }}
            data-ocid="products.whatsapp.button"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-deep-green"
      style={{ backgroundColor: "oklch(0.27 0.08 148)" }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="text-light-gold text-4xl mb-6"
            style={{ color: "oklch(0.82 0.15 85)" }}
          >
            ✦
          </div>
          <h2
            className="font-display text-4xl md:text-5xl text-gold font-bold mb-8"
            style={{ color: "oklch(0.72 0.12 80)" }}
          >
            About Al Hussain Attar Point
          </h2>
          <div
            className="space-y-5 text-cream/80 font-body text-lg leading-relaxed"
            style={{ color: "oklch(0.93 0.01 90 / 0.8)" }}
          >
            <p>
              We bring you the finest handcrafted attars sourced from the
              valleys of Kashmir, gardens of Kannauj, and the fragrant lands of
              the Middle East. Our attars are 100% alcohol-free, natural, and
              long-lasting.
            </p>
            <p
              className="text-base italic"
              style={{ color: "oklch(0.80 0.10 80)" }}
            >
              हम आपके लिए सबसे उत्कृष्ट और प्राकृतिक अत्तर लाते हैं — कश्मीर, कन्नौज और अरब
              की खुशबुओं से सजे।
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              "Kannauj, UP",
              "Kashmir Oud",
              "Arabian Musk",
              "Pure & Natural",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-gold/40 text-gold/80 font-body text-sm px-4 py-2 rounded-full"
                style={{
                  borderColor: "oklch(0.72 0.12 80 / 0.4)",
                  color: "oklch(0.72 0.12 80 / 0.8)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "oklch(0.27 0.08 148)" }}
          >
            Why Choose Us?
          </h2>
          <p
            className="font-body text-xl"
            style={{ color: "oklch(0.65 0.10 80)" }}
          >
            हमें क्यों चुनें?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border-2 border-gold/20 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 gold-gradient"
                style={{ color: "oklch(0.18 0.07 148)" }}
              >
                {feat.icon}
              </div>
              <h3
                className="font-display text-xl font-bold mb-1"
                style={{ color: "oklch(0.27 0.08 148)" }}
              >
                {feat.titleEn}
              </h3>
              <p
                className="text-sm font-body italic mb-3"
                style={{ color: "oklch(0.65 0.10 80)" }}
              >
                {feat.titleHi}
              </p>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: "oklch(0.18 0.07 148)" }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="text-gold text-4xl mb-6"
            style={{ color: "oklch(0.72 0.12 80)" }}
          >
            ✦
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.72 0.12 80)" }}
          >
            Get In Touch
          </h2>
          <p
            className="font-body text-lg mb-10"
            style={{ color: "oklch(0.80 0.05 90)" }}
          >
            हमसे संपर्क करें — आपकी खुशबू की यात्रा यहाँ से शुरू होती है
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white font-body font-bold px-8 py-4 rounded-full flex items-center gap-3 hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl text-lg"
              data-ocid="contact.whatsapp.button"
            >
              <MessageCircle className="w-6 h-6" />
              Order via WhatsApp: +91 63989 48080
            </a>
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center gap-8 text-sm font-body"
            style={{ color: "oklch(0.80 0.05 90)" }}
          >
            <div className="flex items-center gap-2 justify-center">
              <Phone
                className="w-4 h-4"
                style={{ color: "oklch(0.72 0.12 80)" }}
              />
              <span>+91 63989 48080</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin
                className="w-4 h-4"
                style={{ color: "oklch(0.72 0.12 80)" }}
              />
              <span>India — Kashmir · Kannauj · Local</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: "oklch(0.14 0.06 148)",
        borderColor: "oklch(0.72 0.12 80 / 0.2)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div
              className="font-display font-bold text-lg"
              style={{ color: "oklch(0.72 0.12 80)" }}
            >
              Al Hussain Attar Point
            </div>
            <p
              className="font-body text-xs mt-1"
              style={{ color: "oklch(0.60 0.04 90)" }}
            >
              Pure Attars & Ittars since generations
            </p>
          </div>

          <div
            className="font-body text-xs text-center"
            style={{ color: "oklch(0.55 0.04 90)" }}
          >
            © {year} Al Hussain Attar Point. All rights reserved.
          </div>

          <div
            className="font-body text-xs"
            style={{ color: "oklch(0.55 0.04 90)" }}
          >
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: "oklch(0.72 0.12 80)" }}
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
