// JavaScript code for adding flashcards dynamically
const flashcardContainer = document.getElementById("flashcard-container");

// Sample data (replace with your own data)
const states = [
    { name: "Andhra Pradesh", capital: "Amaravati" },
    { name: "Karnataka", capital: "Bangalore" },
    // Add more state data as needed
];

states.forEach(state => {
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");
    flashcard.innerHTML = `
        <h2>${state.name}</h2>
        <p>Capital: ${state.capital}</p>
    `;
    flashcardContainer.appendChild(flashcard);
});
