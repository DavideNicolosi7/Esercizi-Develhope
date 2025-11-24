const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");

$button.addEventListener("click", () => {
  // prendere il valore dell'input
  const value = $input.value;

  // creazione degli elementi list
  const $li = document.createElement("li");

  // creazione della checkbox
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";

  // creazione del testo dopo la checkbox
  const $text = document.createTextNode(" " + value);

  $li.appendChild($checkbox); // aggiunge la checkbox all'interno del li
  $li.appendChild($text); // aggiunge il testo dopo la checkbox dentro li
  $ul.appendChild($li); // aggiunge li creato dentro ul
});
