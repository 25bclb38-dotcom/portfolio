const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (data.success) {
      alert("Message saved to database!");
      form.reset();
    } else {
      alert("Error saving message");
    }

  } catch (error) {
    alert("Server not running");
  }
});