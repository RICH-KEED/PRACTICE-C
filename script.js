function showQuestion(button, question, link = null) {
    // Collapse any expanded buttons
    const buttons = document.querySelectorAll('.question-button');
    buttons.forEach(btn => {
        btn.classList.remove('expanded');
        btn.innerHTML = btn.getAttribute('data-original-text');
    });

    // Expand the clicked button
    button.classList.add('expanded');
    button.innerHTML = `<span>${question}</span>`;
    if (link) {
        button.innerHTML += `<a href="${link}" target="_blank" class="pattern-link">Click here to view the pattern</a>`;
    }

    // Add a close button
    button.innerHTML += `<button class="close-button" onclick="closeQuestion(this)">&times;</button>`;
}

function closeQuestion(button) {
    const questionButton = button.parentElement;
    questionButton.classList.remove('expanded');
    questionButton.innerHTML = questionButton.getAttribute('data-original-text');
}

// Store the original button text for each button
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.question-button');
    buttons.forEach(button => {
        button.setAttribute('data-original-text', button.innerHTML);
    });
});
