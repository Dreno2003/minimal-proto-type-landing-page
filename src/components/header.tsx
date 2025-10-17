import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import ContainerWrapper from "./container-wrapper";
import type { HeaderNavigation } from "@/types/nav-type";
import React from "react";
import { Link, useNavigate } from "react-router";
import Bars from "@/assets/icons/bars";
import { cn } from "@/lib/utils";
import Close from "@/assets/icons/x";
import Logo from "./logo";
import { AnimatePresence, motion } from "motion/react";
import ShimmerButton from "./shimmer-button";
import { FaUserClock } from "react-icons/fa6";
import GlowButton from "./glow-button";

const routesData = [
  { title: "Our Services", route: "#services" },
  { title: "Pricing", route: "#pricing" },
  { title: "FAQ", route: "#faq" },
  // { title: "The How", route: "#work-flow" },
  { title: "Testimonials", route: "#testimonials" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 230); // change 100px threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (route: string) => {
    if (route.startsWith("#")) {
      if (window.location.pathname === "/") {
        // already on homepage → just scroll
        const id = route.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // navigate to homepage with hash in state
        navigate("/", { state: { hash: route } });
      }
    } else {
      navigate(route);
    }
  };

  function RenderCTAButton() {
    return (
      <>
        <Link to={"/book"}>
          <ShimmerButton>
            <div className="px-3.5 flex  items-center gap-x-1">
              <span className="text-lg">Got an idea?</span>
              <FaUserClock className="size-5" />
            </div>
          </ShimmerButton>
        </Link>
      </>
    );
  }

  return (
    <>
      <header
        style={{
          zIndex: "999999999999999",
        }}
        className={cn(" top-3  w-full")}
      >
        <ContainerWrapper>
          <nav
            aria-label="Global"
            className={cn(
              " flex  w-full     items-center  justify-between p-2 py-5 "
            )}
          >
            <div className="flex w-32">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">clanefy</span>
                <Logo />
              </a>
            </div>

            <div className="flex  lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                <Bars />
              </button>
            </div>

            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              <Navlist
                onRoute={(x) => {
                  handleClick(x);
                }}
                data={routesData}
              />
            </PopoverGroup>

            <div className="hidden lg:flex lg:fslex-1 lg:justify-ends">
              {RenderCTAButton()}
            </div>
          </nav>
        </ContainerWrapper>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-[99]" />
          <DialogPanel className="fixed inset-y-0 right-0 z-[99999999999999] w-full overflow-y-auto bg-background p-6  sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="logo"
                  src="/media/images/logo.svg"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <Close />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <Navlist
                    onRoute={(x) => {
                      handleClick(x);
                      setMobileMenuOpen(false);
                    }}
                    data={routesData}
                  />
                </div>

                <div>
                  <p className="text-8xl font-semibold opacity-20 fixed -bottom-10">
                    CLANEFY
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <AnimatePresence>
        <motion.header
          style={{
            zIndex: "999999999999999",
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: isSticky ? 0 : -100, opacity: isSticky ? 1 : 0 }}
          // exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("fixed top-6  w-full", isSticky && "fixed")}
        >
          <ContainerWrapper>
            <nav
              aria-label="Global"
              className={cn(
                " flex  bg-white mx-auto max-w-[59rem] border-gray-100   border    rounded-3xl   items-center justify-between p-4 px-6",
                isSticky && "shadow-xl border-none"
              )}
            >
              <div className="flex lg:w-20s">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Logo />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars />
                </button>
              </div>
              <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Navlist
                  onRoute={(x) => {
                    handleClick(x);
                  }}
                  data={routesData}
                />
              </PopoverGroup>
              <div className="hidden lg:flex  lg:justify-end">
                {RenderCTAButton()}
              </div>
            </nav>
          </ContainerWrapper>

          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="logo"
                    src="/media/images/logo.svg"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <Close />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    <Navlist
                      onRoute={(x) => {
                        handleClick(x);
                        setMobileMenuOpen(false);
                      }}
                      data={routesData}
                    />
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </motion.header>
      </AnimatePresence>
    </>
  );
}

function Navlist({
  data,
  className,
  onRoute,
}: {
  data: HeaderNavigation[];
  className?: string;
  onRoute: (x: string) => void;
}) {
  return (
    <div
      className={cn(
        className,
        "flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-start md:gap-x-11"
      )}
    >
      {data.map((data) => (
        <React.Fragment key={data.title}>
          <button
            onClick={() => onRoute(data.route)}
            role="link"
            className="nav-link cursor-pointer ease-linear duration-500 text-lg"
            // className="relative font-medium cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            {data.title}
          </button>
        </React.Fragment>
      ))}

      <Link to={"/book"} className="lg:hidden">
        <GlowButton size={"sm"}>Book a 15-min call</GlowButton>
      </Link>
    </div>
  );
}
