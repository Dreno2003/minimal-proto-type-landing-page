import ContainerWrapper from "@/components/container-wrapper";
import CallToActionBg from "./cta-bg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

export default function CallToActionSection() {
  
  return (
    <div className="relative bg-grady-900">
      <ContainerWrapper containerClass="py-10 md:py-12">
        <div className="rounded-2xl relative ">
          <>
            <div className="absolute z-20 ">
              <img
                className="motion-translate-y-loop-25 motion-duration-[3s] motion-ease-spring-smooth absolute z-50 isolate size-24 left-10 md:-left-10 -top-10 md:top-4"
                src="/media/images/jira.svg"
              />

              <Slack className=" invisible mt-20" />
              <Notion className="motion-translate-y-loop-25 motion-duration-[5s] motion-ease-spring-snappy mt-44 md:mt-20  md:-ml-10" />
            </div>

            <div className="absolute right-0 z-20 ">
              <img
                className="absolute z-50 hidden md:block isolate left-8 top-4"
                src="/media/images/jira.svg"
              />

              <Slack className="motion-translate-y-loop-25 motion-duration-[6s] motion-ease-spring-snappy relative hiddsen md:block md:top-24" />
              <Notion className="motion-translate-y-loop-25 motion-duration-[5s] motion-ease-spring-snappy top-48 hidden md:block relative left-10" />
            </div>
          </>
          <div className="relative overflow-hidden  flex items-center h-[25rem] rounded-3xl md:rounded-2xl">
            {/* <div className="relative isolate overflow-hidden bg-[#eeedff] border px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"> */}

            <CallToActionBg />

            <div className="relative z-20 mx-auto max-w-2xl text-center lg:msx-0 lg:flex-auto lg:py-20 lg:text-center">
              <h2 className="text-3xl font-semibold tracking-tighst text-sbalance text-white sm:text-4xl">
                Boost your sales & conversion. <br />
                Start using our app today.
              </h2>

              <center>
                <div className="pt-4  max-w-[20rem] md:max-w-lg mx-auto md:pt-6">
                 <Link to={'/waitlist'} >
                  <Button size={'lg'} className="bg-white text-foreground" >Join Waitlist</Button>
                 </Link>
                 
                </div>
              </center>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}

function Slack({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "bg-white border-[2.5px] border-hero size-fit rounded-full",
          className
        )}
      >
        <img src="/media/images/slack.svg" width={70} />
      </div>
    </>
  );
}

function Notion({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "bg-white border-[2.5px] border-hero size-fit rounded-full",
          className
        )}
      >
        <img src="/media/images/notion.png" width={70} />
      </div>
    </>
  );
}
