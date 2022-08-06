import React from 'react'

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
  
export default Line