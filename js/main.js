var acc = document.getElementsByClassName("accordion"),
mainPanel = document.querySelector(".main-panel"),
i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      mainPanel.style.maxHeight = mainPanel.scrollHeight + panel.scrollHeight + "px";
    } 
  });
}

// Typing effect
window.addEventListener('load', (event) => {

  var i = 0,
  resumeTxt = "I do not compete with others, the only competition that challenges me is myself. As a fighter, friend and an employee I am known as contemplative, tortured and driven."
  speed = 50,
  typingResume = document.getElementById("typing-resume");

  function typeWriter() {
    if (i < resumeTxt.length) {
      typingResume.innerHTML += resumeTxt.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }
  typeWriter();
});
