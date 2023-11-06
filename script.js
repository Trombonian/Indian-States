// JavaScript code for adding flashcards dynamically
document.addEventListener("DOMContentLoaded", function () {
    const stateList = document.getElementById("state-list");
    const stateInfo = document.getElementById("state-info");

    stateList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const selectedState = event.target.getAttribute("data-state");
            // You can replace the following text with real information about each state.
            stateInfo.textContent = `You selected ${selectedState}. Information about ${selectedState} goes here.`;
        }
    });
});

