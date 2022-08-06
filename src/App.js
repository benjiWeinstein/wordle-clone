import { useEffect, useState } from "react";
import "./index.css";
import { Keyboard } from "./Keyboard";
import Line from "./Line";

const WORD_LENGTH = 5;

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isOver, setIsOver] = useState(false);
  const [solution, setSolution] = useState("")

  function dispatchKeyPress(e, key) {
  

    window.dispatchEvent(new KeyboardEvent('keydown', {
      'key': key,
      'code': `Key${key.toUpperCase()}`
  }));

  }

  useEffect(() => {

    fetch('https://emmanyel368.api.stdlib.com/wordle-api@1.0.1/wordle/')
      .then(response => response.json())
      .then(response => {
        setSolution(response.word[0].toUpperCase())
        console.log(response.word[0])
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleType);

    function handleType(event) {

      if (isOver) {
        return;
      }
      const letter = event.key;

      // check that keypressed is only a letter or backspace or enter
      if (
        (letter.match(/^[a-z]$/) === null) &&
        letter !== "Enter" &&
        letter !== "Backspace"
      )
        return;

      setCurrentGuess((oldGuess) => {
        if (letter === "Enter") {
          // click enter with full word entered
          if (oldGuess.length === WORD_LENGTH) {
            if (oldGuess.toUpperCase() === solution) {
              setIsOver(true);
            }
            const currentIndex = guesses.findIndex((g) => g === null);
            const newGuesses = [...guesses];
            newGuesses[currentIndex] = oldGuess;
            setGuesses(newGuesses);
            return oldGuess.length === WORD_LENGTH ? "" : oldGuess + letter;
          } else return oldGuess;
        }

        if (letter === "Backspace") return oldGuess.slice(0, -1);

        return oldGuess.length === WORD_LENGTH ? oldGuess : oldGuess + letter;
      });
    }

    return () => window.removeEventListener("keydown", handleType);
  }, [guesses, isOver, solution]);

  return (
    <div className="App">
      <div className="board">
        <div className="title">Benji's Wordle</div>
        {guesses.map((guess, ind) => {
          const currentIndex = guesses.findIndex((g) => g === null);
          return (
            <Line
              key={ind}
              index={ind}
              solution={solution}
              guess={ind === currentIndex ? currentGuess : guess ?? ""}
              currentIndex={currentIndex}
            />
          );
        })}
      </div>
      <Keyboard dispatch={dispatchKeyPress}></Keyboard>
    </div>
  );
}


export default App;
