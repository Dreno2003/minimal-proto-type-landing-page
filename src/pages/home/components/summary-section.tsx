import ContainerWrapper from "@/components/container-wrapper";
import type { FC } from "react";

interface SummarySectonProps {}

const SummarySecton: FC<SummarySectonProps> = ({}) => {
  return (
    <>
      <ContainerWrapper containerClass="md:mt-14 mt-12">
        <div className="flex flex-col items-start gap-x-6 md:flex-row justify-center m">
          <img
            className="intersect:motion-preset-pop  motion-delay-75 intersect-once"
            src="/media/images/manual_work_kills_growth.png"
            width={420}
          />
          <img className="intersect:motion-preset-pop   intersect-once motion-delay-200" src="/media/images/pt-2.svg" />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default SummarySecton;
