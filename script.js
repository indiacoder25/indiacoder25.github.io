// loader in every page 
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); 
});

// animations 

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
  duration: 1000,       
  once: true,           
//   easing: 'ease-in-out'
  });
})