const openMenu = document.querySelector(".open-menu"),
      closeMenu = document.querySelector(".sidebarclose"),
      menu = document.querySelector(".menu");

// Open menu
openMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

// Close menu
closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});




document.querySelectorAll('.moving-div').forEach(div => {
    div.addEventListener('mouseenter', () => {
      div.style.transform = 'scale(1)'; // Zoom in on hover
      div.style.transition = 'transform 0.1s ease-in-out'; // Smooth transition
    });
  
    div.addEventListener('mouseleave', () => {
      div.style.transform = 'scale(1)'; // Reset zoom when hover ends
      div.style.transition = 'transform 0.1s ease-in-out'; // Smooth transition
    });
  });



  function copyText() {
    // Select the text inside the element with the class "clip"
    var buttonText = document.querySelector('.clip').innerText;
  
    // Use Clipboard API to copy text
    navigator.clipboard.writeText(buttonText)
      .then(() => {
        alert('Text copied to clipboard: ' + buttonText);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }
  

  
 
  
