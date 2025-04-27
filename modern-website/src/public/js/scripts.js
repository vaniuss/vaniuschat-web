// This file contains JavaScript functionality for the website, including toggling light/dark mode, handling the FAQ accordion, managing language selection, and form submissions for suggestions.

document.addEventListener('DOMContentLoaded', function() {
    // Toggle light/dark mode
    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // Language selection
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        // Logic to change the language of the website
        console.log('Language changed to:', selectedLanguage);
    });

    // Form submission for suggestions
    const suggestionForm = document.getElementById('suggestion-form');
    suggestionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(suggestionForm);
        // Logic to handle form submission, e.g., sending data to the server
        console.log('Suggestion submitted:', Object.fromEntries(formData));
    });
});