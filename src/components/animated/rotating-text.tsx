import { useCallback, useEffect, useState, type FC } from "react";
import { motion } from "motion/react";
interface RotatingTextProps {
  duration?: number;
  words?: string[];
}
// list of words
//

// const  = ;
const RotatingText: FC<RotatingTextProps> = ({
  duration,
  words = ["Solomon", "Olomon", "Lomon"],
}) => {
  const [currentWords, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWords) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWords, words]);
  //   useEffect to start animation

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);
  return (
    <>
      {/*split text since we animating letter by letter  */}
      {currentWords.split(" ").map((word, index) => (
        <motion.p initial={{ y: -4 }} animate={{ y: 6 * index }} key={index}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={word + letterIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.3 + letterIndex * 0.05,
                //   delay: wordIndex * 0.3 + letterIndex * 0.05,
                duration: 0.2,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </>
  );
};

export default RotatingText;
