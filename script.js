let contact = document.getElementById("contact");

contact.addEventListener("click", sayHello);

function sayHello() {
  let email = document.getElementById("email");

  if (email.style.display === "block") {
    email.style.display = "none";
    contact.textContent = "Say Hello!";
  } else {
    email.textContent = "📧 ptcarroll1@gmail.com";
    email.style.display = "block";
    email.style.backgroundColor = "yellow";
    contact.textContent = "Hide!";
  }
}
