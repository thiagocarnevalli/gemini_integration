import { generateText } from "./api_client.js"

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const submitButton = document.getElementById('submit-button');
    const outputDisplay = document.getElementById('output-text');


    submitButton.addEventListener('click', async () => {
        const inputText = textInput.value;
        if (inputText.trim() !== "") {
            outputDisplay.textContent = await generateText(inputText);
            textInput.value = '';
        } else {
            outputDisplay.textContent = "Please enter some text to display.";
        }
    });

    textInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitButton.click();
        }
    });
});