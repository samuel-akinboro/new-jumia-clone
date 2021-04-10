const stickyElements = document.querySelectorAll(".sticky");

window.addEventListener("scroll", ()=>{
  if (window.scrollY > 150) {
    stickyElements.forEach(stick => {
      stick.classList.add('stickTop');
      console.log("shit");
    });
  } else {
    stickyElements.forEach(stick => {
      stick.classList.remove('stickTop');
    });
  }
});

console.log(stickyElements);

