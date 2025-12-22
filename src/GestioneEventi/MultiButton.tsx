import { BaseSyntheticEvent } from "react";

export function MultiButton() {
  function handleClickButton(event: BaseSyntheticEvent) {
    console.log(event.target.name);
  }
  return (
    <div>
      <button name="one" onClick={handleClickButton}>
        One
      </button>
      <button name="two" onClick={handleClickButton}>
        Two
      </button>
      <button name="three" onClick={handleClickButton}>
        Three
      </button>
    </div>
  );
}

export default MultiButton;
