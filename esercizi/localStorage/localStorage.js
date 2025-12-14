const $span = document.querySelector(".title-name");

const $btn = document.querySelector(".btn");

function setEmail(useremail) {
  const $userEmail = document.querySelector(".email");

  $userEmail.value = useremail;

  localStorage.setItem("email", useremail);
}

function setUserName(firstname) {
  const $userName = document.querySelector(".firstname");

  $userName.value = firstname;

  localStorage.setItem("firstname", firstname);

  $span.innerText = firstname;
}

function setUserSurName(surname) {
  const $userSurName = document.querySelector(".lastname");

  $userSurName.value = surname;

  localStorage.setItem("lastname", surname);
}

$btn.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  const firstname = document.querySelector(".firstname").value;
  const lastname = document.querySelector(".lastname").value;

  setEmail(email);
  setUserName(firstname);
  setUserSurName(lastname);
});

const email = localStorage.getItem("email");
const firstname = localStorage.getItem("firstname");
const lastname = localStorage.getItem("lastname");

if (email) {
  document.querySelector(".email").value = email;
}
if (firstname) {
  document.querySelector(".firstname").value = firstname;
  $span.innerText = firstname; // nome nel titolo
}
if (lastname) {
  document.querySelector(".lastname").value = lastname;
}
