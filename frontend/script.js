const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        name,
        email,
        message
    };

    try {
        const response = await fetch(
            "http://localhost:5000/contact",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        alert(result.message);

        contactForm.reset();

    } catch (error) {
        console.error(error);
        alert("Error sending message");
    }
});
