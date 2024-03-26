import cn from "classnames";
import Letter from "./Letter";

/**
 *
 * @param {{won: boolean, word: string, tips: string[], isOver: boolean}} props
 * @returns
 */
const Word = ({ won, word, tips, isOver }) => {
  return (
    <div id="szo" className={cn({ nyer: won })}>
      {word.split("").map((letter, index) => (
        <Letter key={index} visible={tips.includes(letter) || isOver} missing={isOver && !tips.includes(letter)}>
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default Word;
