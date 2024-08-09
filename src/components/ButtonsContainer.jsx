import "../CSS/ButtonsContainer.css";

export default function ButtonsContainer({ onButtonClicked }) {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className="buttonsContainer">
        {buttonNames.map((elt) => (
          <button onClick={() => onButtonClicked(elt)} className="button">
            {elt}
          </button>
        ))}
      </div>
    </>
  );
}
