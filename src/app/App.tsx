import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "./components/ui/use-mobile";
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
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
          className="absolute h-4 w-4 text-rose-300 sm:h-6 sm:w-6"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26h6.79l-5.5 4h2.18l-5.56 4.37L12 13.74l-5.56 4.37 2.18-1.37-5.5-4h6.79L12 2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

type Page =
  | {
      type: "cover";
      content: {
        title: string;
        subtitle: string;
      };
    }
  | {
      type: "text";
      content: {
        text: string;
      };
    }
  | {
      type: "photo";
      content: {
        url: string;
      };
    };

const pages: Page[] = [
  {
    type: "cover",
    content: {
      title: "Para a Melhor Mãe do Mundo",
      subtitle: "Um álbum feito com amor",
    },
  },
  {
    type: "text",
    content: {
      text: "Mãe, mesmo estando longe, você está sempre presente no meu coração. Este álbum é uma pequena homenagem a tudo que você representa para mim.",
    },
  },
  {
    type: "photo",
    content: {
      url: foto1,
    },
  },
  {
    type: "photo",
    content: {
      url: foto2,
    },
  },
  {
    type: "text",
    content: {
      text: "Obrigado por cada ensinamento, cada abraço, cada palavra de carinho. Você é minha inspiração e meu porto seguro.",
    },
  },
  {
    type: "photo",
    content: {
      url: foto3,
    },
  },
  {
    type: "photo",
    content: {
      url: foto4,
    },
  },
  {
    type: "text",
    content: {
      text: "A distância é só física, porque no coração você está sempre aqui comigo. Sinto sua presença em cada conquista, em cada momento.",
    },
  },
  {
    type: "photo",
    content: {
      url: foto5,
    },
  },
  {
    type: "photo",
    content: {
      url: foto6,
    },
  },
  {
    type: "text",
    content: {
      text: "Te amo infinitamente, mãe! Obrigado por ser minha maior torcedora, minha melhor amiga e meu exemplo de vida. Você é incrível!",
    },
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const isMobile = useIsMobile();

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((page) => page + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((page) => page - 1);
    }
  };

  const pageVariants = {
    enter: (pageDirection: number) => ({
      x: isMobile ? (pageDirection > 0 ? 40 : -40) : 0,
      rotateY: isMobile ? 0 : pageDirection > 0 ? -90 : 90,
      opacity: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
    },
    exit: (pageDirection: number) => ({
      x: isMobile ? (pageDirection > 0 ? -40 : 40) : 0,
      rotateY: isMobile ? 0 : pageDirection > 0 ? 90 : -90,
      opacity: 0,
    }),
  };

  const renderPageContent = (page: Page) => {
    if (page.type === "cover") {
      return (
        <div className="flex h-full flex-col items-center justify-center px-6 py-10 text-center sm:p-12">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mb-6 sm:mb-8"
          >
            <Heart className="h-14 w-14 fill-rose-400 text-rose-400 sm:h-20 sm:w-20" />
          </motion.div>
          <h1 className="max-w-[12ch] text-3xl leading-tight text-rose-900 sm:text-4xl md:text-5xl">
            {page.content.title}
          </h1>
          <p className="mt-4 text-base text-rose-600 sm:mt-6 sm:text-xl">
            {page.content.subtitle}
          </p>
        </div>
      );
    }

    if (page.type === "text") {
      return (
        <div className="flex h-full items-center justify-center px-6 py-8 sm:p-12">
          <p className="max-w-[26ch] text-center text-lg leading-relaxed text-rose-900 sm:max-w-[24ch] sm:text-2xl md:text-3xl">
            {page.content.text}
          </p>
        </div>
      );
    }

    return (
      <div className="flex h-full items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl">
          <img
            src={page.content.url}
            alt={`Memória ${currentPage + 1}`}
            className="h-[320px] w-full rounded-2xl object-cover shadow-lg sm:h-96"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-rose-100 to-pink-100">
      <FallingPetals />

      <div className="relative z-10 flex min-h-screen flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-4 pb-6 pt-10 text-center sm:px-6 sm:pb-8 sm:pt-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mb-3 inline-block sm:mb-4"
          >
            <Heart className="h-12 w-12 fill-rose-400 text-rose-400 sm:h-16 sm:w-16" />
          </motion.div>
          <h1 className="text-3xl leading-tight text-rose-900 sm:text-5xl md:text-6xl">
            Feliz Dia das Mães!
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-rose-700 sm:text-xl">
            Seu cartão virtual finalmente chegou!
          </p>
        </motion.div>

        <div className="flex flex-1 items-center justify-center px-3 pb-8 sm:px-6">
          <div className="w-full max-w-6xl">
            <div className="relative mx-auto">
              <div
                className={[
                  "relative mx-auto overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(120,53,15,0.22)]",
                  isMobile
                    ? "w-full max-w-md"
                    : "w-[90vw] max-w-4xl aspect-[2/1] perspective-[2000px]",
                ].join(" ")}
              >
                <div className="absolute inset-x-6 bottom-0 top-6 rounded-full bg-black/15 blur-3xl sm:inset-x-10 sm:top-10" />

                {isMobile ? (
                  <div className="relative min-h-[540px] border border-rose-100/80 bg-white/95 backdrop-blur">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.16),_transparent_55%)]" />
                    <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-rose-200/0 via-rose-300/80 to-rose-200/0" />

                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 220, damping: 24 },
                          opacity: { duration: 0.2 },
                        }}
                        className="absolute inset-0"
                      >
                        {renderPageContent(pages[currentPage])}
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-5 right-5 rounded-full bg-rose-100/90 px-3 py-1 text-xs font-medium tracking-[0.2em] text-rose-500 uppercase">
                      {currentPage + 1} / {pages.length}
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full">
                    <div className="h-full w-1/2 rounded-l-[2rem] border-r-2 border-amber-200/50 bg-gradient-to-r from-amber-50 to-white shadow-2xl" />

                    <div className="relative h-full w-1/2 overflow-hidden rounded-r-[2rem] bg-white shadow-2xl">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent" />

                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                          key={currentPage}
                          custom={direction}
                          variants={pageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            rotateY: {
                              type: "spring",
                              stiffness: 100,
                              damping: 20,
                            },
                            opacity: { duration: 0.3 },
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "left center",
                          }}
                          className="absolute inset-0"
                        >
                          {renderPageContent(pages[currentPage])}
                        </motion.div>
                      </AnimatePresence>

                      <div className="absolute bottom-8 right-8 text-sm text-rose-400">
                        {currentPage + 1} / {pages.length}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 flex items-center justify-center gap-3 sm:absolute sm:inset-y-0 sm:left-0 sm:right-0 sm:mt-0 sm:pointer-events-none">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  aria-label="Página anterior"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-rose-600 shadow-lg transition-colors hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-30 sm:pointer-events-auto sm:absolute sm:left-3 sm:top-1/2 sm:-translate-y-1/2 sm:h-14 sm:w-14 lg:-translate-x-1/2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={nextPage}
                  disabled={currentPage === pages.length - 1}
                  aria-label="Próxima página"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-rose-600 shadow-lg transition-colors hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-30 sm:pointer-events-auto sm:absolute sm:right-3 sm:top-1/2 sm:-translate-y-1/2 sm:h-14 sm:w-14 lg:translate-x-1/2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="mx-auto mt-8 w-full max-w-md rounded-[1.75rem] border border-white/60 bg-white/70 p-3 shadow-xl backdrop-blur sm:fixed sm:bottom-6 sm:right-6 sm:z-40 sm:mt-0 sm:w-[min(22rem,calc(100vw-3rem))]">
              <div className="overflow-hidden rounded-[1.25rem]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UxE27eHJ9Dg?autoplay=1&controls=0&loop=1&playlist=UxE27eHJ9Dg&modestbranding=1&rel=0"
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 py-5 sm:py-8">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap text-lg font-medium text-white sm:text-2xl"
          >
            <span className="inline-block px-6 sm:px-8">
              ♥ Você é incrível ♥ Obrigado por tudo ♥ Te amo muito ♥ Você é a
              melhor ♥ Saudades infinitas ♥ Meu coração está com você ♥ Você é
              minha inspiração ♥ Gratidão eterna ♥ Você é incrível ♥ Obrigado
              por tudo ♥ Te amo muito ♥ Você é a melhor ♥ Saudades infinitas ♥
              Meu coração está com você ♥ Você é minha inspiração ♥ Gratidão
              eterna ♥
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
