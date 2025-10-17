import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";
import Mainlayout from "@/layout/MainLayout";
import About from "@/pages/about/about";
import Pricing from "@/pages/pricing/pricing";
import { ScrollToTop } from "@/components/scroll-to-top";
import BookCall from "@/pages/book-call/book-call";
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Mainlayout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/book",
    element: (
      <>
        <ScrollToTop />
        <BookCall />
      </>
    ),
  },
]);

export { routes };
