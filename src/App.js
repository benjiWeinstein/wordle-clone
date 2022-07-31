import { useEffect, useState } from "react";
import "./index.css";

const WORD_LENGTH = 5;
const SOLUTION = "KOITL";

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isOver, setIsOver] = useState(false);
  const [solution, setSolution] = useState("")

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
      const code = event.keyCode;

      // check that keypressed is only a letter or backspace or enter
      if (
        (code < 65 || code > 90) &&
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
    </div>
  );
}

function Line({ guess, solution, currentIndex, index }) {
  const getColor = (letter, ind, solution) => {
    if (solution.charAt(ind) === letter) {
      return " correct";
    } else if (solution.includes(letter)) {
      return " close";
    } else {
      return " wrong";
    }
  };

  return (
    <div className="line">
      {Array(5)
        .fill(null)
        .map((_, ind) => {
          const letter = guess[ind] ?? "";
          const classname =
            index < currentIndex
              ? getColor(letter.toUpperCase(), ind, solution)
              : "";
          return (
            <div key={ind} className={`box ${classname}`}>
              {letter}
            </div>
          );
        })}
    </div>
  );
}

export default App;
