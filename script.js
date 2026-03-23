const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({ name, email, message });

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message saved successfully!");

  form.reset();
});