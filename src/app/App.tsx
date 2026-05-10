import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import foto1 from "./public/foto1.jpeg";
import foto2 from "./public/foto2.jpeg";
import foto3 from "./public/foto3.jpeg";
import foto4 from "./public/foto4.jpeg";
import foto5 from "./public/foto5.jpeg";
import foto6 from "./public/foto6.jpeg";

const FallingPetals = () => {
  const petals = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 0.8,
            rotate: 0
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: 0
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
          className="absolute w-6 h-6 text-rose-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26h6.79l-5.5 4h2.18l-5.56 4.37L12 13.74l-5.56 4.37 2.18-1.37-5.5-4h6.79L12 2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const pages = [
    {
      type: "cover",
      content: {
        title: "Para a Melhor Mãe do Mundo",
        subtitle: "Um álbum feito com amor"
      }
    },
    {
      type: "text",
      content: {
        text: "Mãe, mesmo estando longe, você está sempre presente no meu coração. Este álbum é uma pequena homenagem a tudo que você representa para mim."
      }
    },
    {
      type: "photo",
      content: {
        url: foto1,
      }
    },
    {
      type: "photo",
      content: {
        url: foto2,
      }
    },
    {
      type: "text",
      content: {
        text: "Obrigado por cada ensinamento, cada abraço, cada palavra de carinho. Você é minha inspiração e meu porto seguro."
      }
    },
    {
      type: "photo",
      content: {
        url: foto3,
      }
    },
    {
      type: "photo",
      content: {
        url: foto4,
      }
    },
    {
      type: "text",
      content: {
        text: "A distância é só física, porque no coração você está sempre aqui comigo. Sinto sua presença em cada conquista, em cada momento."
      }
    },
    {
      type: "photo",
      content: {
        url: foto5,
      }
    },
    {
      type: "photo",
      content: {
        url: foto6,
      }
    },
    {
      type: "text",
      content: {
        text: "Te amo infinitamente, mãe! Obrigado por ser minha maior torcedora, minha melhor amiga e meu exemplo de vida. Você é incrível! 💕"
      }
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
  };

  const renderPageContent = (page: typeof pages[0]) => {
    if (page.type === "cover") {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-12">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mb-8"
          >
            <Heart className="w-20 h-20 text-rose-400 fill-rose-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl mb-6 text-rose-900">
            {page.content.title}
          </h1>
          <p className="text-xl text-rose-600">
            {page.content.subtitle}
          </p>
        </div>
      );
    }

    if (page.type === "text") {
      return (
        <div className="flex items-center justify-center h-full p-12">
          <p className="text-2xl md:text-3xl leading-relaxed text-rose-900 text-center">
            {page.content.text}
          </p>
        </div>
      );
    }

    if (page.type === "photo") {
      return (
        <div className="flex items-center justify-center h-full p-8">
          <div className="w-full max-w-2xl">
            <img
              src={page.content.url}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-rose-100 to-pink-100 flex flex-col">
      <FallingPetals />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-12 pb-6 px-4"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-4"
        >
          <Heart className="w-16 h-16 text-rose-400 fill-rose-400" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl mb-2 text-rose-900">
          Feliz Dia das Mães!
        </h1>
        <p className="text-xl text-rose-700">
          Seu cartão virtual finalmente chegou!
        </p>
      </motion.div>

      {/* Book Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative">
          {/* Book Container */}
          <div className="relative w-[90vw] max-w-4xl aspect-[2/1] perspective-[2000px]">
            {/* Book Shadow */}
            <div className="absolute inset-0 bg-black/20 blur-2xl transform translate-y-8"></div>

            {/* Book Pages */}
            <div className="relative w-full h-full flex">
              {/* Left Page (binding) */}
              <div className="w-1/2 h-full bg-gradient-to-r from-amber-50 to-white rounded-l-2xl shadow-2xl border-r-2 border-amber-200/50"></div>

              {/* Right Page (content) */}
              <div className="relative w-1/2 h-full bg-white rounded-r-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent pointer-events-none"></div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      rotateY: { type: "spring", stiffness: 100, damping: 20 },
                      opacity: { duration: 0.3 }
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "left center"
                    }}
                    className="absolute inset-0"
                  >
                    {renderPageContent(pages[currentPage])}
                  </motion.div>
                </AnimatePresence>

                {/* Page Number */}
                <div className="absolute bottom-8 right-8 text-rose-400 text-sm">
                  {currentPage + 1} / {pages.length}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Floating Video Player */}
      <div className="fixed bottom-24 right-6 w-80 h-56 rounded-lg overflow-hidden shadow-2xl z-40">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UxE27eHJ9Dg?autoplay=1&controls=0&loop=1&playlist=UxE27eHJ9Dg&modestbranding=1&rel=0"
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>

      {/* Scrolling Text Banner */}
      <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 py-8 overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="whitespace-nowrap text-white text-2xl font-medium"
        >
          <span className="inline-block px-8">
            ❤️ Você é incrível ❤️ Obrigado por tudo ❤️ Te amo muito ❤️ Você é a melhor ❤️ Saudades infinitas ❤️ Meu coração está com você ❤️ Você é minha inspiração ❤️ Gratidão eterna ❤️ Você é incrível ❤️ Obrigado por tudo ❤️ Te amo muito ❤️ Você é a melhor ❤️ Saudades infinitas ❤️ Meu coração está com você ❤️ Você é minha inspiração ❤️ Gratidão eterna ❤️
          </span>
        </motion.div>
      </div>
    </div>
  );
}