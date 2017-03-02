    var linkmap = document.querySelector(".show-map");
    var popupmap = document.querySelector(".modal-content-map");
    var closemap = document.querySelector(".modal-content-map .modal-content-close");
    var overlay = document.querySelector(".modal-overlay");
    linkmap.addEventListener("click", function (event) {
      event.preventDefault();
      popupmap.classList.add("modal-content-map-show");
      overlay.classList.add("overlay-show");
    });
    closemap.addEventListener("click", function (event) {
      event.preventDefault();
      popupmap.classList.remove("modal-content-map-show");
      overlay.classList.remove("overlay-show");
    });
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupmap.classList.contains("modal-content-map-show")) {
    popupmap.classList.remove("modal-content-map-show");
    overlay.classList.remove("overlay-show");
    }
  }
});
