import { cn } from "@/lib/utils";
import { type FC } from "react";
import HeroPill from "../home/components/hero-pill";
import Logo from "@/components/logo";
import { Link } from "react-router";

interface BookCallProps {}

const BookCall: FC<BookCallProps> = ({}) => {
  return (
    <>
      <div className="min-h-screen py-20 md:py-32 ">
        <center className="space-y-6">
          <div>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <HeroPill />
        </center>

        <header
          className={cn("text-center max-w-[400px] md:max-w-[900px] mx-auto")}
        >
          <h3
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(65 64 64) 0%, rgb(141, 141, 141) 100%)",
              WebkitBackgroundClip: "text", // for Safari/Chrome
              backgroundClip: "text", // for other browsers
              color: "transparent",
            }}
            className="text-4xl lg:leading-28 lg:text-[104px] font-bold "
          >
            Book a 15-min call
          </h3>
          <p
            className={cn(
              "mt-3 md:mt-4 lg:mt-6 md:text-[25px] text-2xl  font-medium"
            )}
          >
            Please select the time that fits you or <br />
            just text me in{" "}
            <a href="#" className="hover:underline">
              Telegram
            </a>{" "}
            /{" "}
            <a href="#" className="hover:underline ease-in-out duration-300">
              WhatsApp
            </a>
          </p>
        </header>

        <main>
          <div style={{ height: "700px" }}>
            <iframe
              src="https://calendly.com/drenoaka2003/30min"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
};

export default BookCall;
