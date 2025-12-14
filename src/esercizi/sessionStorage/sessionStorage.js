const $span = document.querySelector(".title-name");

const $btn = document.querySelector(".btn");

function setEmail(useremail) {
  const $userEmail = document.querySelector(".email");

  $userEmail.value = useremail;

  sessionStorage.setItem("email", useremail);
}

function setUserName(firstname) {
  const $userName = document.querySelector(".firstname");

  $userName.value = firstname;

  sessionStorage.setItem("firstname", firstname);

  $span.innerText = firstname;
}

function setUserSurName(surname) {
  const $userSurName = document.querySelector(".lastname");

  $userSurName.value = surname;

  sessionStorage.setItem("lastname", surname);
}

$btn.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  const firstname = document.querySelector(".firstname").value;
  const lastname = document.querySelector(".lastname").value;

  setEmail(email);
  setUserName(firstname);
  setUserSurName(lastname);
});

const email = sessionStorage.getItem("email");
const firstname = sessionStorage.getItem("firstname");
const lastname = sessionStorage.getItem("lastname");

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
