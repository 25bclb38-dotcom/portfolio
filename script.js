const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("http://localhost:5000/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Error sending message");
  });
});