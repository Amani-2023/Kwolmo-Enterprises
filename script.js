// Contact form submission alert
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you for contacting us! Your message has been sent successfully.");
        form.reset();
    });
});

// Only initialize donate modal if the modal exists
const modal = document.getElementById("donateModal");
if (modal) {
    const mpesaBtn = document.getElementById("mpesaBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const modalContent = document.getElementById("donateInstructions");
    const spanClose = document.getElementsByClassName("close")[0];

    mpesaBtn.addEventListener("click", () => {
        modal.style.display = "block";
        modalContent.innerHTML = `
            <h3>M-Pesa Donation Instructions:</h3>
            <ol>
                <li>Go to your M-Pesa menu on your phone.</li>
                <li>Select 'Lipa na M-Pesa'.</li>
                <li>Choose 'Paybill' and enter business number: <strong>891300</strong>.</li>
                <li>Enter account number: <strong>62527</strong>.</li>
                <li>Enter amount and confirm.</li>
                <li>Receive confirmation from M-Pesa.</li>
            </ol>
        `;
    });

    paypalBtn.addEventListener("click", () => {
        modal.style.display = "block";
        modalContent.innerHTML = `
            <h3>PayPal Donation Instructions:</h3>
            <ol>
                <li>Send your donation to: <strong>kwolmoinitiative@gmail.com</strong></li>
                <li>Enter the amount to donate.</li>
                <li>Confirm payment.</li>
                <li>Receive confirmation email from PayPal.</li>
            </ol>
        `;
    });

    // Close modal
    spanClose.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target == modal) modal.style.display = "none";
    });
}