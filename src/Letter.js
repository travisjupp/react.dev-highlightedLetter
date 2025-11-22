export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
  checkFocus,
}) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      // onMouseEnter={() => onHover(letter)}
      onFocus={() => {
        onHover(letter);
        checkFocus();
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button
        onClick={(e) => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
