import { type FC } from "react";
import SectionHeader from "../section-header";
// import GrowthToggle from "./growth-toggle";
import ContainerWrapper from "../container-wrapper";
import { StepImage } from "./step-img";

interface WorkProcessSectionProps {}

const rootImgSrc = "/media/images/work-process";
const imgOne = `${rootImgSrc}/process-1.png`;
const imgTwo = `${rootImgSrc}/process-2.png`;
const imgThree = `${rootImgSrc}/process-3.png`;
const imgFour = `${rootImgSrc}/process-4.png`;
const imgFive = `${rootImgSrc}/process-5.png`;

const WorkProcessSection: FC<WorkProcessSectionProps> = ({}) => {
  // const ref = useRef(null);
  // const isMobile = useMobile();
  return (
    <div
      id="work-flow"
      className="mt-20  md:mt-38 py-20 md:spy-24 lg:py-28 md:rounded-[6rem] rounded-4xl bg-[#fs0f0f0]"
      style={{
        background: "linear-gradient(#efefef 0%, #f9f9f9 100%)",
      }}
    >
      <SectionHeader
        tagline="How we make you scale."
        containerClass="mb-20 md:mb-32 "
        title="Our Process to Scale You Faster"
        description="Turning strategy and creativity into impactful solutions."
      />
      {/* desktop */}
      <ContainerWrapper containerClass="hidden lg:!block lg:px-[100px]">
        <div className="mt-82 relative  md:h-[100rem]  max-w-[1440px]">
          <div
            style={{
              position: "absolute",
              borderRadius: "inherit",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="auto"
              loading="lazy"
              width="1440"
              height="2526"
              sizes="min(100vw, 1440px)"
              srcSet="https://framerusercontent.com/images/6k6TXmNiavD2kvwomWnu3oQDkjg.png?scale-down-to=1024&amp;width=1440&amp;height=2526 583w,https://framerusercontent.com/images/6k6TXmNiavD2kvwomWnu3oQDkjg.png?scale-down-to=2048&amp;width=1440&amp;height=2526 1167w,https://framerusercontent.com/images/6k6TXmNiavD2kvwomWnu3oQDkjg.png?width=1440&amp;height=2526 1440w"
              src="https://framerusercontent.com/images/6k6TXmNiavD2kvwomWnu3oQDkjg.png?width=1440&amp;height=2526"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="absolute z-42  rotate-10">
            {/* first process */}
            <div
              role="pin-1"
              style={{
                borderRadius: "40px",
                boxShadow:
                  "rgba(0, 7, 31, 0.1) 4px 14px 31px 0px, rgba(0, 8, 31, 0.09) 14px 54px 56px 0px",
                width: "100%",
                opacity: 1,
              }}
            >
              {/* <img
                alt="pin"
                width={160}
                className="absolute left-[51%] -translate-1/3 "
                src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png?width=313&height=395"
              /> */}

              <StepImage step={1} src={imgOne} />
            </div>
          </div>

          <div className="absolute z-20 right-0 -rotate-14 -top-38">
            {/* step 2 */}
            <div
              role="pin-2"
              style={{
                borderRadius: "40px",
                boxShadow:
                  "rgba(0, 7, 31, 0.1) 4px 14px 31px 0px, rgba(0, 8, 31, 0.09) 14px 54px 56px 0px",
                width: "100%",
                opacity: 1,
              }}
            >
              <StepImage step={2} src={imgTwo} />
            </div>
            <div className="absolute scale-125 top-[120px] w-full -left-[25rem] -z-2">
              <FirstArrowDirection />
            </div>
          </div>

          <div className="absolute z-32 right-0 -rotate-14 top-[35rem]">
            {/* step 3 */}
            <div
              role="pin-2"
              style={{
                borderRadius: "40px",
                boxShadow:
                  "rgba(0, 7, 31, 0.1) 4px 14px 31px 0px, rgba(0, 8, 31, 0.09) 14px 54px 56px 0px",
                width: "100%",
                opacity: 1,
              }}
            >
              <StepImage step={3} src={imgThree} />
            </div>
            <div className="absolute scale-125 -top-[300px] w-full -left-[16rem] -z-1">
              <SecondArrowDirection />
            </div>
          </div>

          <div className="absolute z-20 left-0 rotate-14 top-[50rem]">
            {/* step 4 */}
            <div
              role="pin-2"
              style={{
                borderRadius: "40px",
                boxShadow:
                  "rgba(0, 7, 31, 0.1) 4px 14px 31px 0px, rgba(0, 8, 31, 0.09) 14px 54px 56px 0px",
                width: "100%",
                opacity: 1,
              }}
            >
              {/* <img
                alt="pin"
                width={160}
                className="absolute left-[51%] -translate-1/3 "
                src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png?width=313&height=395"
              /> */}
              <StepImage step={4} src={imgFour} />
            </div>
            <div className="absolute scale-125 -rotate-20 -top-[210px] w-full left-[20rem] -z-2">
              <ThirdArrowDirection />
            </div>
          </div>

          <div className="absolute z-2s0 right-60 rotate-6 top-[80rem]">
            {/* step 5 */}
            <div
              role="pin-2"
              style={{
                borderRadius: "40px",
                boxShadow:
                  "rgba(0, 7, 31, 0.1) 4px 14px 31px 0px, rgba(0, 8, 31, 0.09) 14px 54px 56px 0px",
                width: "100%",
                opacity: 1,
              }}
            >
              {/* <img
                alt="pin"
                width={160}
                className="absolute left-[51%] -translate-1/3 "
                src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png?width=313&height=395"
              /> */}
              <StepImage step={5} src={imgFive} />
            </div>
            <div className="absolute scale-125 -rotate-20 -top-[210px] w-full -left-[20rem] -z-2">
              <FourthArrowDirection />
            </div>
          </div>

          {/* ending trail */}
        </div>
      </ContainerWrapper>

      {/* mobile work */}
      <ContainerWrapper containerClass="lg:hidden">
        <div className="relative mt-20  max-w-[1440px] mx-auto">
          {/* background */}
          <div
            className="absolute inset-0 rounded-[inherit]"
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="auto"
              loading="lazy"
              className="w-full h-full object-cover rounded-[inherit]"
              src="https://framerusercontent.com/images/6k6TXmNiavD2kvwomWnu3oQDkjg.png?width=1440&height=2526"
              alt=""
            />
          </div>

          {/* steps */}
          <div className="relative flex flex-col items-center gap-20 md:gap-32 py-10 px-4">
            {/* step 1 */}
            <div className="relative -rotate-5  max-w-[300px] sm:max-w-[380px] w-full">
              <div className="relative border-2 border-white rounded-[40px] shadow-xl">
                <StepImage step={1} src={imgOne} />

                {/* <img
                  alt="pin"
                  className="absolute left-1/2 -translate-x-1/2 w-16 sm:w-20"
                  src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                />
                <img
                  decoding="auto"
                  loading="lazy"
                  className="w-full h-auto rounded-[inherit]"
                  src="https://framerusercontent.com/images/i0kQ0EHMEO6o2GYq10FCpmkH1FI.png?width=707&height=756"
                  alt=""
                /> */}
              </div>
              {/* arrow always visible */}
              <div className="flex -rotatse-30 justify-center mt-6 absolute tosp-[20rem] -z-1   left-[8rem] md:mt-0 scale-200">
                <FirstArrowDirection />
              </div>
            </div>

            {/* step 2 */}
            <div className="relative -rotate-2  max-w-[300px] sm:max-w-[380px] w-full">
              <div className="relative border-2 border-white rounded-[40px] shadow-xl">
                <StepImage step={2} src={imgTwo} />
             
                {/* <img
                  alt="pin"
                  className="absolute left-1/2 -translate-x-1/2 w-16 sm:w-20"
                  src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                />
                <img
                  decoding="auto"
                  loading="lazy"
                  className="w-full h-auto rounded-[inherit]"
                  src="https://framerusercontent.com/images/i0kQ0EHMEO6o2GYq10FCpmkH1FI.png?width=707&height=756"
                  alt=""
                /> */}
              </div>

              <div className="flex -rotatse-30 justify-center mt-6 absolute top-[20srem] -z-1  md:tosp-[120px] left-[10rem] md:mt-0 scale-200">
                <SecondArrowDirection />
              </div>
              {/* <div className="flex justify-center mt-6 md:absolute md:-top-[250px] md:left-[-14rem] md:mt-0 scale-100 md:scale-110">
              </div> */}
            </div>

            {/* step 3 */}
            <div className="relative rotate-2  max-w-[300px] sm:max-w-[380px] w-full">
              <div className="relative border-2 border-white rounded-[40px] shadow-xl">
                <StepImage step={3} src={imgThree} />
              
                {/* <img
                  alt="pin"
                  className="absolute left-1/2 -translate-x-1/2 w-16 sm:w-20"
                  src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                />
                <img
                  decoding="auto"
                  loading="lazy"
                  className="w-full h-auto rounded-[inherit]"
                  src="https://framerusercontent.com/images/i0kQ0EHMEO6o2GYq10FCpmkH1FI.png?width=707&height=756"
                  alt=""
                /> */}
              </div>
              {/* <div className="flex justify-center mt-6 md:absolute md:-top-[210px] md:left-[12rem] md:mt-0 scale-100 md:scale-110 -rotate-6 md:rotate-0">
              </div> */}

              <div className="flex -rotatse-30 justify-center mt-6 absolute top-s[20rem] -z-1   left-[10rem] md:mt-0 scale-200">
                <ThirdArrowDirection />
              </div>
            </div>

            {/* step 4 */}
            <div className="  rotate-2 md:rotate-6 max-w-[300px] sm:max-w-[380px] w-full">
              <div className="relastive border-2 border-white rounded-[40px] shadow-xl">
                <StepImage step={4} src={imgFour} />
              
                {/* <img
                  alt="pin"
                  className="absolute left-1/2 -translate-x-1/2 w-16 sm:w-20"
                  src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                />
                <img
                  decoding="auto"
                  loading="lazy"
                  className="w-full h-auto rounded-[inherit]"
                  src="https://framerusercontent.com/images/i0kQ0EHMEO6o2GYq10FCpmkH1FI.png?width=707&height=756"
                  alt=""
                /> */}
              </div>
              <div className="flex -rotatse-30 justify-center mt-6 absolute top-[2s0rem] -z-1   left-[12rem] md:mt-0 scale-200">
                <FourthArrowDirection />
              </div>
            </div>

            {/* step 5 */}
            <div className="  rotate-2 md:rotate-6 max-w-[300px] sm:max-w-[380px] w-full">
              <div className="relastive border-2 border-white rounded-[40px] shadow-xl">
                <StepImage step={5} src={imgFive} />
               
                {/* <img
                  alt="pin"
                  className="absolute left-1/2 -translate-x-1/2 w-16 sm:w-20"
                  src="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                />
                <img
                  decoding="auto"
                  loading="lazy"
                  className="w-full h-auto rounded-[inherit]"
                  src="https://framerusercontent.com/images/i0kQ0EHMEO6o2GYq10FCpmkH1FI.png?width=707&height=756"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default WorkProcessSection;

function FirstArrowDirection() {
  return (
    <>
      <svg
        className="w-full h-full"
        // style="width:100%;height:100%;"
        viewBox="0 0 585 391"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <use href="#svg61334282_340" className="hidden lg:block"></use>
        <use href="#svg330111998_356" className="lg:hidden"></use>
      </svg>
    </>
  );
}

function SecondArrowDirection() {
  return (
    <>
      <svg
        className="w-full h-full"
        viewBox="0 0 612 421"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <use href="#svg137432375_338" className="hidden lg:block"></use>
        <use href="#svg1986929728_350" className="lg:hidden"></use>
      </svg>
    </>
  );
}

function ThirdArrowDirection() {
  return (
    <>
      <svg
        viewBox="0 0 585 186"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <use href="#svg1439490384_346" className="hidden lg:block"></use>
        <use href="#svg1099969821_350" className="lg:hidden"></use>
      </svg>
    </>
  );
}

function FourthArrowDirection() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 484 350"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <use href="#svg1674383199_340" className="hidden lg:block"></use>
      <use href="#svg1099969821_350" className="lg:hidden"></use>
    </svg>
  );
}

//
