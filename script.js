const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    try {
        const response = await fetch("https://portfolio-p72w.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error sending message");
        }

    } catch (error) {
        alert("Server error");
        console.error(error);
    }
});