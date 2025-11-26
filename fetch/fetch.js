async function fetchData() {
  const url = "https://ringsdb.com/api/public/cards/";

  try {
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    const mycard = response[0];

    const $characterName = mycard.name;
    const h1 = document.querySelector("#character-name");
    h1.innerText = $characterName;

    const image = document.querySelector("#character-image");
    if (mycard.imagesrc) {
      image.setAttribute("src", "https://ringsdb.com" + mycard.imagesrc);
    } else {
      image.alt = "Immagine non disponibile";
    }

    console.log(mycard);
  } catch (error) {
    console.error("Errore:", error);
  }
}

fetchData();
