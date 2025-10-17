import { useEffect, useState, type FC } from "react";
import HeroSection from "./components/hero-section";
import { useLocation } from "react-router";
import AmimatedLoader from "@/components/animated-loader-page";
import ImpactStats from "./components/stats-section";
import SelectedWorks from "./components/selected-works";
import BlogSection from "./components/blog-section";
import CtaSection from "./components/cta-section";
import Footer, { AnimatedText } from "@/components/footer";
import StickyNavigation from "./components/sticky-navigation";
import { motion, AnimatePresence } from "motion/react";
interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [isAssetLoading, setIsAssetLoading] = useState(true);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [_isNavAnimationComplte, setIsMobileAnimationComplete] = useState(false);
  const [isAnimationLoaded, setisAnimationLoaded] = useState(false);
  const res = isAssetLoading && isAnimationLoaded;
  const location = useLocation();
  const [isExitAnimationCompleted, setIsExitAnimationCompleted] =
    useState(false);
  useEffect(() => {
    if (location.state?.hash) {
      const id = location.state.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // small timeout ensures DOM is ready
        // setTimeout(() => {
        if (document.readyState === "complete") {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // }, 120);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleLoad = () => setIsAssetLoading(true);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isOpenNav) {
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflowY = "hidden";
    } else {
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflowY = "";
      // Restore previous scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflowY = "";
    };
  }, [isOpenNav]);

  useEffect(() => {
    const body = document.body;
    let scrollY = 0;
    return;
    if (isOpenNav) {
      // Lock scroll immediately before animation starts
      scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflowY = "hidden";
    } else {
      // Delay restoring scroll until animation finishes (≈ duration of exit motion)
      if (isExitAnimationCompleted) {
        // const y = body.style.top;
        body.style.position = "";
        body.style.top = "";
        body.style.width = "";
        body.style.overflowY = "";
        body.style.overflowX = "hidden";
        const timeout = setTimeout(() => {
          body.style.overflowX = "";
          // window.scrollTo(0, parseInt(y || "0") * -1);
        }, 9000);

        return () => clearTimeout(timeout);
        // <-- match your exit animation duration (ms)
      }
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflowY = "";
    };
  }, [isOpenNav, isExitAnimationCompleted]);

  const navLinks = [
    { route: "", title: "Home" },
    { route: "", title: "Services" },
    { route: "", title: "Blog" },
    { route: "", title: "Contact" },
  ];
  return (
    <>
      {!res && (
        <AmimatedLoader
          onAnimationComplete={(val) => {
            setTimeout(() => {
              setisAnimationLoaded(val);
            }, 515);
          }}
        />
      )}
      {res && (
        <main className="relative">
          <AnimatePresence
            onExitComplete={() => {
              setIsExitAnimationCompleted(true);
            }}
          >
            {isOpenNav && (
              <motion.div
                onAnimationStart={() => {
                  setIsExitAnimationCompleted(false);
                }}
                // ={() => {
                //   setIsExitAnimationCompleted(true);
                // }}
                initial={{
                  translateY: "-100%",
                  // rotate: "3deg",
                  // opacity: 0,
                  transition: {
                    ease: "easeIn",
                    duration: 1,
                  },
                  // borderTopLeftRadius: "40rem",
                }}
                animate={{
                  translateY: "0%",
                  // y: "0%",
                  opacity: 1,
                  borderTopLeftRadius: "0rem",
                  transition: {
                    ease: "linear",
                    duration: 0.6,
                  },
                }}
                exit={{
                  y: "-100%",
                  transition: {
                    ease: "linear",
                    duration: 0.6,
                  },
                }}
                onAnimationComplete={() => {
                  setTimeout(() => {
                    // alert("ok");
                    setIsMobileAnimationComplete(true);
                  }, 5000);
                }}
                className="absolutse relative min-h-screen insset-0 overflow-hidden bg-black z-52"
                style={{
                  backgroundImage: "url('/media/images/new-works/bg.png')",
                }}
              >
                <div className="absolute inset-0 bg-black/80" />

                <div className="flex relative z-20 flex-col justify-center gap-y-3 md:gap-y-6 h-screen ml-32">
                  <>
                    {navLinks.map((_, idx) => (
                      <motion.p
                        key={idx}
                        initial={{
                          opacity: 0,
                          // translateY: 0,
                        }}
                        animate={{
                          opacity: 1, // translateY:
                          transition: {
                            delay: 0.5 * idx,
                            duration: 0.25 * idx,
                            ease: "easeInOut",
                          },
                        }}
                        // transition={{
                        //   delay: 0.3 * idx,
                        //   duration: 0.2,
                        //   // ease: [0.76, 0, 0.24, 1],
                        // }}
                        exit={{
                          opacity: 0,
                        }}
                        whileHover={{
                          translateX: 9,
                        }}
                        className="relative hover:before:absolute before:-left-13    before:content-[' '] before:w-9 before:top-1/4  before:h-1/2 before:bg-white  font-bold text-white text-xl w-max cursor-pointer md:text-3xl lg:text-7xl "
                      >
                        {_.title}
                      </motion.p>
                    ))}
                  </>
                  <motion.h3 className="text-[5rem] fixed   sm:text-[6rem] md:text-[10rem] lg:text-[12rem] w-full -bottom-2 -z-1 font-bold opacity-5 left-1/2 -translate-x-1/2 tracking-[3rem] ">
                    <center >ALCHEMA</center>
                  </motion.h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <HeroSection />
          <ImpactStats />
          <SelectedWorks />
          <BlogSection />
          <CtaSection />
          <Footer />
          <AnimatedText />
          <StickyNavigation
            isNavOpen={isOpenNav}
            onclick={() => setIsOpenNav((prev) => !prev)}
          />
        </main>
      )}
    </>
  );
};

export default Home;

// initial={{
//                 rotate: "3deg",
//                 opacity: 0,
//                 borderTopLeftRadius: "40rem",
//               }}
//               animate={{
//                 rotate: "0deg",
//                 opacity: 1,
//                 borderTopLeftRadius: "0rem",
//                 transition: {
//                   ease: "backIn",
//                   duration: 0.3,
//                 },
//               }}
//               exit={{
//                 rotate: "8deg",
//                 opacity: 0,
//                 borderTopLeftRadius: "40rem",

//               }}
