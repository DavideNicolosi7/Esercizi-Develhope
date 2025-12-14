// selezionare i campi input tramite id
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");

// creare l'oggetto persona
const person = {
  firstName: firstName.value,
  lastName: lastName.value,
  age: Number(age.value), // Number per assicurarci che age sia un numero
};

// recuperare il form
const form = document.querySelector("form");

//inserire l'attributo con oggetto JSON
form.setAttribute("data-person", JSON.stringify(person));
