"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**how long it will take for each phrase to enter and exit (in seconds) */
const wait = 4;

/** The list of phrases */
const words = ["Web developer", "Graphic designer"];

/**
 * Renders a component that animates the display of phrases from an array.
 *
 * @param {Array<string>} words - An array of phrases to be displayed.
 * @return {JSX.Element} The rendered component.
 */

export default function FloatWriter() {
  /** used to store and change the current phrase that will come in from the [words] array */
  const [currentIndex, setIndex] = useState(0);

  // useEffect to start the animation when this component is loaded
  useEffect(
    () => {
      const int = setInterval(
        () => {
          /** the index of the next phrase to come in from the [words] array */
          const nextIndex = currentIndex + 1;

          // check if the next index is a valid index in the [words] array
          if (nextIndex >= words.length) {
            // if [nextIndex] is >= the length of [words] array, set index back to 0
            // this will set the current phrase back to the first item in the [words] array
            setIndex(0);
          } else {
            // add one to the [currentIndex]
            // this will cause the next phrase to come in
            setIndex(nextIndex);
          }
        },
        wait * 1000 // thenumber of seconds to wait multiplied by 1000 to convert to milliseconds
      );

      return () => clearInterval(int);
    },
    [currentIndex]
  );

  return (
    <div className="relative">
      <h1 className="relative invisible">
        {words[0]}
      </h1>
      <AnimatePresence>
        {words.map((word, index) => {
          return (
            index == currentIndex &&
            <h1
              className="absolute flex top-0 [letter-spacing:2px] font-semibold text-2xl"
              key={index}
            >
              {word.split("").map((char, i) =>
                <motion.span
                  className="inline-block relative"
                  // rules that apply before in view
                  initial={{
                    opacity: 0,
                    translateY: -40
                  }}
                  // rules that apply when in view
                  animate={{
                    opacity: 1,
                    translateY: 0
                  }}
                  // rules that apply on view exit
                  exit={{
                    opacity: 0,
                    translateY: 15
                  }}
                  // transition configuration
                  transition={{
                    delay: i * 0.15, // every character waits for (0.15 * its index) to come in and exit
                    type: "spring", // for bouncy effect
                    stiffness: 200,
                    damping: 10
                  }}
                  key={char + i}
                >
                  {char}
                </motion.span>
              )}
            </h1>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
