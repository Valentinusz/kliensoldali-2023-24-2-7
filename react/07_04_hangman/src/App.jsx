import { useState } from "react";
import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import { wordList } from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

function generateWord() {
  return wordList[random(0, wordList.length)];
}

function getMaxTips() {
  return 9;
}

const App = () => {
  // Application state (data)
  const [maxTips, setMaxTips] = useState(getMaxTips());
  const [word, setWord] = useState(generateWord());
  const [tips, setTips] = useState([]);

  // Event handlers
  const makeTip = (letter) => {
    console.log(letter);
    // tips.push(letter);

    setTips([...tips, letter]);
  };

  const newGame = () => {
    setWord(generateWord());
    setTips([]);
    setMaxTips(getMaxTips());
  };

  // Computed values
  const won = () => word.split("").every((letter) => tips.includes(letter));
  const wrongCount = tips.filter((letter) => !word.includes(letter)).length;
  const isOver = won || wrongCount >= maxTips;

  console.log(isOver);

  return (
    <>
      <h1>Hangman</h1>

      <Word won={won} word={word} tips={tips} isOver={isOver} />

      {isOver ? (
        <button onClick={newGame}>New game</button>
      ) : (
        <Buttons tips={tips} handleClick={makeTip} isOver={isOver} />
      )}

      <Result wrong={wrongCount} maxTips={maxTips} />

      <Hangman wrong={wrongCount} />
    </>
  );
};

export default App;
