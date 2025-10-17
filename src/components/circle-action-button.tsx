// @ts-nocheck
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

export default function ActionButtonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMainClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleAction = (action: "call" | "telegram" | "whats_app") => {
    switch (action) {
      case "call":
        navigate("/book");
        break;

      default:
        break;
    }
    setIsOpen(false);
  };

  const actionButtons = [
    {
      icon: Icons.customer_care,
      //   icon: Icons.phone,
      label: "Like",
      //   color: "bg-white  border",
      color: "bg-transperent bodrder",
      id: "call",
      action: "call",
      position: "-left-14 top-9 -translate-y-1/2",
      //   position: "-left-14 top-1/2 -translate-y-1/2",
    },
    {
      icon: Icons.telegram,
      label: "Share",
      id: "telegram",
      //   color: "bg-transperent bodrder",
      color: "bg-white ",
      action: "share",
      position: "-left-14 translate-x-4 -top-12",
      //   position: "left-1/2 -translate-x-1/2 -top-14",
    },
    {
      icon: Icons.whatsApp,
      id: "whats_app",
      label: "Whats app",
      color: "bg-white  border",

      //   color: "bg-transperent bodrder",
      action: "favorite",
      position: "-left-13 top-22 -translate-y-1/2",
      //   position: "-left-14 top-1/2 -translate-y-1/2",
    },
  ];

  return (
    <div
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      className=" size-16 md:size-40  flex justify-center items-center"
    >
      <div
        className=" relative"
        // onMouseEnter={() => !isMobile && setIsOpen(true)}
        // onMouseLeave={() => !isMobile && setIsOpen(false)}
        onBlur={() => setIsOpen(false)}
      >
        {/* Main Button */}
        <motion.button
          onClick={handleMainClick}
          className="relative z-10 size-20 md:size-24 rounded-full shadow-lg flex items-center justify-center text-white transition-transform"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            // animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <img
              src="/media/images/owner/owner.png"
              className="rounded-full size-20 md:size-24 object-cover object-bottom "
            />

            {/* <Plus size={28} /> */}
          </motion.div>
          {/* "conic-gradient(from 90deg at 50% 50%, #fbd4c1 0%, #ff5f14 50%, #fbd4c1 100%)", */}

          {/* "conic-gradient(from 90deg at 50% 50%, #cdcdcd 0%, #4D5659 50%, #cdcdcd 100%)", */}
          <span
            style={{
              background:
                "conic-gradient(from 90deg at 50% 50%, #dcecf3 0%, #019FE8 50%, #dcecf3 100%)",
            }}
            className="absolute -inset-[3.5px]  rounded-full  s-z-1 animate-[spin_2s_linear_infinite]    bsg-[conic-gradient(from_90deg_at_50%_50%,#ff5f14_0%,#ff5f1499_50%,#ff5f14_100%)]"
          />
          <AnimatePresence>
            {isOpen &&
              actionButtons.map((btn, index) => {
                const Icon = btn.icon;

                return (
                  <motion.button
                    key={btn.action}
                    onClick={() => handleAction(btn.action)}
                    className={`absolute ${btn.position} size-9 ${btn.color} rounded-full cursor-pointer shadsow-lg flex items-center -z-1 justify-center text-white`}
                    initial={{
                      x: 40,
                      //   x: index === 0 ? 20 : index === 2 ? -20 : 0,
                      //   y: index === 1 ? 8 : 0,

                      //   opacity: 0,
                      //   scale: 0,
                      display: "hidden",
                    }}
                    animate={{
                      x: index === 0 ? -10 : index === 2 ? 10 : 0,
                      //   x: index === 0 ? -10 : index === 2 ? 10 : 0,
                      y: index === 1 ? 8 : 0,
                      //   opacity: 1,
                      //   scale: 1,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    exit={{
                      x: 43,
                      //   x: index === 0 ? 20 : index === 2 ? -20 : 0,
                      y: index === 1 ? 8 : 0,
                      opacity: 0,
                      scale: 0.8,
                      rotate: [0, 10, -10, 10, 0],
                    }}
                    // exit={
                    //   {
                    //     //   opacity: 0,
                    //     //   scale: 0,
                    //   }
                    // }
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      //   delay: index * 0.1,
                      rotate: {
                        duration: 0.5,
                        delay: 0.2,
                        // delay: index * 0.1 + 0.2,
                      },
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="">
                      <Icon
                        size={20}
                        className={cn(
                          btn.id === "whats_app" &&
                            "fill-blasck/80 fill-green-500 size-10",
                          btn.id === "telegram" &&
                            "fill-[#0088cc] fssill-black/80 size-10",
                          btn.id === "call" &&
                            "size-9.5 fill-black/80 fisll-black"
                        )}
                      />
                    </div>
                  </motion.button>
                );
              })}
          </AnimatePresence>
        </motion.button>

        {/* Action Buttons */}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Plus, Heart, Share2, Star } from "lucide-react";
// import { Icons } from "./icons";
// import { cn } from "@/lib/utils";

// export default function ActionButtonMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   React.useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMainClick = () => {
//     if (isMobile) {
//       setIsOpen(!isOpen);
//     }
//   };

//   const handleAction = (action) => {
//     console.log(`Action clicked: ${action}`);
//     setIsOpen(false);
//   };

//   const actionButtons = [
//     {
//       icon: Icons.customer_care,
//       //   icon: Icons.phone,
//       label: "Like",
//       //   color: "bg-white  border",
//       color: "bg-transperent bodrder",
//       id: "call",
//       action: "like",
//       position: "-left-14 top-1/2 -translate-y-1/2",
//     },
//     {
//       icon: Icons.telegram,
//       label: "Share",
//       id: "telegram",
//       color: "bg-transperent bodrder",
//       //   color: "bg-white border",
//       action: "share",
//       position: "left-1/2 -translate-x-1/2 -top-14",
//     },
//     {
//       icon: Icons.whatsApp,
//       id: "whats_app",
//       label: "Whats app",
//       color: "bg-white  border",

//       //   color: "bg-transperent bodrder",
//       action: "favorite",
//       position: "-right-14 top-1/2 -translate-y-1/2",
//     },
//   ];

//   return (
//     <div
//       onMouseEnter={() => !isMobile && setIsOpen(true)}
//       onMouseLeave={() => !isMobile && setIsOpen(false)}
//       className=" size-20 md:size-40  flex justify-center items-center"
//     >
//       <div
//         className=" relative"
//         // onMouseEnter={() => !isMobile && setIsOpen(true)}
//         // onMouseLeave={() => !isMobile && setIsOpen(false)}
//         onBlur={() => setIsOpen(false)}
//       >
//         {/* Main Button */}
//         <motion.button
//           onClick={handleMainClick}
//           className="relative z-10 size-20 md:size-24 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform"
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             // animate={{ rotate: isOpen ? 45 : 0 }}
//             transition={{ duration: 0.2 }}
//             className="relative z-10"
//           >
//             <img
//               src="/media/images/owner/owner.png"
//               className="rounded-full size-20 md:size-24 object-cover object-bottom "
//             />

//             {/* <Plus size={28} /> */}
//           </motion.div>
//           <span
//             style={{
//               background:
//                 "conic-gradient(from 90deg at 50% 50%, #fbd4c1 0%, #ff5f14 50%, #fbd4c1 100%)",
//             }}
//             className="absolute -inset-[3.5px] bsg-[#fbd4c1] rounded-full  s-z-1 animate-[spin_2s_linear_infinite] bg-[csonic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)s]   bsg-[conic-gradient(from_90deg_at_50%_50%,#ff5f14_0%,#ff5f1499_50%,#ff5f14_100%)]"
//           />
//           <AnimatePresence>
//             {isOpen &&
//               actionButtons.map((btn, index) => {
//                 const Icon = btn.icon;

//                 return (
//                   <motion.button
//                     key={btn.action}
//                     onClick={() => handleAction(btn.action)}
//                     className={`absolute ${btn.position} w-12 h-12 ${btn.color} rounded-full cursor-pointer shadsow-lg flex items-center -z-1 justify-center text-white`}
//                     initial={{
//                       x: index === 0 ? 20 : index === 2 ? -20 : 0,
//                       //   x: index === 0 ? 20 : -20,
//                       y: index === 1 ? 8 : 0,

//                       //   opacity: 0,
//                       //   scale: 0,
//                       display: "hidden",
//                     }}
//                     animate={{
//                       x: index === 0 ? -10 : index === 2 ? 10 : 0,
//                       y: index === 1 ? -8 : 0,
//                       //   opacity: 1,
//                       //   scale: 1,
//                       rotate: [0, -10, 10, -10, 0],
//                     }}
//                     exit={{
//                       x: index === 0 ? 20 : index === 2 ? -20 : 0,
//                       y: index === 1 ? 8 : 0,
//                       opacity: 0,
//                       scale: 0.8,
//                       rotate: [0, 10, -10, 10, 0],
//                     }}
//                     // exit={
//                     //   {
//                     //     //   opacity: 0,
//                     //     //   scale: 0,
//                     //   }
//                     // }
//                     transition={{
//                       duration: 0.4,
//                       delay: 0.1,
//                       //   delay: index * 0.1,
//                       rotate: {
//                         duration: 0.5,
//                         delay: 0.2,
//                         // delay: index * 0.1 + 0.2,
//                       },
//                     }}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <div className="">
//                       <Icon
//                         size={20}
//                         className={cn(
//                           btn.id === "whats_app" &&
//                             "fill-blasck/80 fill-green-500 size-12",
//                           btn.id === "telegram" &&
//                             "fill-[#0088cc] fssill-black/80 size-12",
//                           btn.id === "call" &&
//                             "size-9.5 fill-black/80 fisll-black"
//                         )}
//                       />
//                     </div>
//                   </motion.button>
//                 );
//               })}
//           </AnimatePresence>
//         </motion.button>

//         {/* Action Buttons */}
//       </div>
//     </div>
//   );
// }
