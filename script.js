document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("applicationForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting the usual way

        // Validate the form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
        } else if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Application submitted successfully!";
            formMessage.style.color = "green";
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
