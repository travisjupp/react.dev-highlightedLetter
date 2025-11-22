import { useState } from "react";
import { initialLetters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  // Unduplicate state, use letter.id instead of letter
  // const [highlightedLetter, setHighlightedLetter] = useState(null);
  const [highlightedLetterId, setHighlightedLetterId] = useState(null);

  function handleHover(letter) {
    // setHighlightedLetterId(letter);
    setHighlightedLetterId(letter.id);
    console.log("hovered");
  }

  function handleStar(starred) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            // isHighlighted={letter === highlightedLetter}
            isHighlighted={letter.id === highlightedLetterId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
