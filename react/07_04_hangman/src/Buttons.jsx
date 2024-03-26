const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

/**
 *
 * @param {{tips: string[], handleClick: Function, isOver: boolean}} param0
 * @returns
 */
const Buttons = ({ tips, handleClick, isOver }) => {
  return (
    <div id="betuk">
      {buttonText.split("").map((letter) => (
        <button onClick={() => handleClick(letter)} key={letter} disabled={tips.includes(letter) || isOver}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
