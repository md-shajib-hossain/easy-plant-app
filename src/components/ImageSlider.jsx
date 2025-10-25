import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icons
import img1 from "../assets/slider (1).jpg";
import img2 from "../assets/slider (2).jpg";
import img3 from "../assets/slider (3).jpg";
import img4 from "../assets/slider (4).jpg";
import img5 from "../assets/slider (5).jpg";
import img6 from "../assets/slider (2).jpg";
import img7 from "../assets/slider-3.jpg";

const images = [
  {
    img: img1,
    title: "Bring Nature Home 🌿",
    subtitle: "Fresh, healthy plants for your living space",
  },
  {
    img: img2,
    title: "Grow Green, Live Clean 🌱",
    subtitle: "Indoor plants that purify your air",
  },
  {
    img: img3,
    title: "Your Space, Greener ✨",
    subtitle: "Beautify your home with our eco decor",
  },
  {
    img: img4,
    title: "Refresh Your World 🌼",
    subtitle: "Add peace to your home with greenery",
  },
  {
    img: img5,
    title: "Eco-Friendly Living 🌳",
    subtitle: "Sustainable plants for every corner",
  },
  {
    img: img6,
    title: "Let’s Go Green 🌸",
    subtitle: "Turn your home into a natural paradise",
  },
  {
    img: img7,
    title: "Breathe Fresh, Live Better 🌾",
    subtitle: "Indoor plants that make a difference",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // 🕒 Auto slide (every 4 seconds)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60%] md:h-[80vh] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].img}
          src={images[index].img}
          alt="plant"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* 🪴 Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 ">
        <motion.h1
          key={images[index].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg"
        >
          {images[index].title}
        </motion.h1>
        <p className="text-sm md:text-2xl mb-6 drop-shadow-md">
          {images[index].subtitle}
        </p>
      </div>

      {/* Left & Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 rounded-full p-3 text-black transition"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 rounded-full p-3 text-black transition"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
