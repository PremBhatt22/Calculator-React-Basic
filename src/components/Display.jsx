import "../CSS/Display.css";

export default function Display({ displayValue }) {
  return (
    <>
      <input type="text" className="display" value={displayValue} readOnly />
    </>
  );
}
