const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({ name, email, message });

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message saved!");

  form.reset();
});

function checkPassword() {
  const password = document.getElementById("adminPass").value;

  if (password === "admin123") {
    document.getElementById("messagesSection").style.display = "block";
    loadMessages();
  } else {
    alert("Wrong password");
  }
}

function loadMessages() {
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  let table = document.getElementById("messageTable");

  table.innerHTML = "";

  messages.forEach(msg => {
    let row = `
      <tr>
        <td>${msg.name}</td>
        <td>${msg.email}</td>
        <td>${msg.message}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}