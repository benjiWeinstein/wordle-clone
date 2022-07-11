import { useEffect, useState } from "react";
import "./index.css";

const WORD_LENGTH = 5;
const SOLUTION = "KOITL";

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleType);

    function handleType(event) {
      const letter = event.key;

      setCurrentGuess((oldGuess) => {
        if (letter === "Enter") {

          if (oldGuess.length === WORD_LENGTH) {
            const currentIndex = guesses.findIndex((g) => g === null);
            const newGuesses = [...guesses];
            newGuesses[currentIndex] = oldGuess;
            setGuesses(newGuesses);
            return oldGuess.length === WORD_LENGTH ? "" : oldGuess + letter;
          }
          return oldGuess;
        }
        if (letter === "Backspace") {
          return oldGuess.slice(0, -1);
        }
        return oldGuess.length === WORD_LENGTH ? oldGuess : oldGuess + letter;
      });
    }

    return () => window.removeEventListener("keydown", handleType);
  }, [guesses]);

  return (
    <div className="board">
      {guesses.map((guess, ind) => {
        const currentIndex = guesses.findIndex((g) => g === null);
        return (
          <Line
            key={ind}
            index={ind}
            solution={SOLUTION}
            guess={ind === currentIndex ? currentGuess : guess ?? ""}
            currentIndex={currentIndex}
          />
        );
      })}
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
