// Function to outline title text on the document
document.addEventListener('DOMContentLoaded', () => {
  const titleElements = document.querySelectorAll('.title');

  titleElements.forEach(element => {
    element.classList.add('outlinedText');
  });
});



