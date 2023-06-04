const letters = "ABCDEFGHIJKLM<>?*&%$#@";

document.querySelector(".glitchtxt").addEventListener("mouseover", event => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.dataset.value.split("").map((letter, index) => {
      if (index < iterations) {
        return event.target.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join("");
    
    iterations += 1/2;
    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
  }, 15);
});

var element = document.getElementById('glitchtxt');

element.addEventListener('mouseenter', function() {
    this.classList.add('active');
});

element.addEventListener('mouseleave', function() {
    this.classList.remove('active');
});

// Optional: Set initial opacity to 1 after a delay (e.g., 2 seconds)
setTimeout(function() {
    element.style.opacity = '1';
}, 2000);