// loader in every page 
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); 
});
