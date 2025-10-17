import { RouterProvider } from "react-router";
import "./styles/index.css";
import { routes } from "./routes/routes";
import ObserverProvider from "./provider/observer-provider";
import { Toaster } from "react-hot-toast";
import Lenis from "lenis";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const lenis = new Lenis();

  useEffect(() => {
    // @ts-ignore
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence>
        {
          <ObserverProvider>
            <motion.div>
              <Toaster position="top-left" reverseOrder={false} />
              <RouterProvider router={routes} />
            </motion.div>
          </ObserverProvider>
        }
      </AnimatePresence>
    </>
  );
}

export default App;
