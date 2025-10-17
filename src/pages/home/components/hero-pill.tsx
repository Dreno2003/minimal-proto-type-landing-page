import type { FC } from "react";

interface HeroPillProps {
  className?: string;
}
const testimonialAvatars = [
  "/media/images/3d-avatars/1.jpg",
  "/media/images/3d-avatars/2.jpg",
  "/media/images/3d-avatars/3.jpeg",
];

const HeroPill: FC<HeroPillProps> = () => {
  return (
    <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-lg mb-12 animate-fade-in">
      <div className="flex -space-x-2">
        {testimonialAvatars.map((avatar, i) => (
          <img
            key={i}
            className="shrink-0 hidden size-7 md:size-10 rounded-full  sm:flex items-center justify-center border-2 border-card text-sm"
            src={avatar}
          />
        ))}
      </div>
      <span className="text-[13px] md:text-[17.5px] text-muted-foreground">
        20+ startups & founders chose clanefy.com
      </span>
    </div>
  );
};

export default HeroPill;
