document.addEventListener("DOMContentLoaded", function () {
    const accessibilityWidget = document.getElementById("accessibility-widget");
    const accessibilityOptions = document.getElementById("accessibility-options");

    accessibilityWidget.addEventListener("click", function () {
        accessibilityOptions.classList.toggle("show-options");
    });

    // Handle click on each option
const options = document.querySelectorAll('.option');
options.forEach(function (option) {
    option.addEventListener('click', function () {
        const dataOption = option.getAttribute('data-option');
        // Redirect to the specific HTML page for each feature
        window.location.href = dataOption + '.html';
    });
});
});