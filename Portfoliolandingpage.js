const texts = [
    "FRONT-END WEB DEVELOPER", 
    "BACK-END WEB DEVELOPER", 
    "GRAPHIC DESIGNER"
]; // Array of texts to loop through
let textIndex = 0; // Track the current text
let charIndex = 0; // Track the current character in the text
const typingSpeed = 100; // Speed of typing
const eraseSpeed = 50; // Speed of erasing
const delayBetween = 2000; // Delay before erasing the text
const typewriterText = document.getElementById('typewriter-text');

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typewriterText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetween); // Start erasing after a delay
    }
}

function eraseText() {
    if (charIndex > 0) {
        typewriterText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing effect
typeText();
