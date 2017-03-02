    var linklogin = document.querySelector(".login");
    var popuplogin = document.querySelector(".modal-content");
    var closelogin = popuplogin.querySelector(".modal-content-close");
    var form = popuplogin.querySelector("form");
    var login = popuplogin.querySelector("[name=login]");
    var password = popuplogin.querySelector("[name=password]");
    var overlay = document.querySelector(".modal-overlay");
    var storage = localStorage.getItem("login");
    linklogin.addEventListener("click", function (event) {
      event.preventDefault();
      popuplogin.classList.add("modal-content-show");
      overlay.classList.add("overlay-show");
      if (storage) {
        login.value = storage;
        password.focus();
      }
      else {
        login.focus();
      }
    });
    closelogin.addEventListener("click", function (event) {
      event.preventDefault();
      popuplogin.classList.remove("modal-content-show");
      overlay.classList.remove("overlay-show");
      popuplogin.classList.remove("modal-error");
    });
    form.addEventListener("submit", function (event) {
      if (!login.value || !password.value) {
        event.preventDefault();
        popuplogin.classList.add("modal-error")
      }
      else {
        localStorage.setItem("login", login.value)
      }
    });
    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 27) {
        if (popuplogin.classList.contains("modal-content-show")) {
          popuplogin.classList.remove("modal-content-show");
          overlay.classList.remove("overlay-show");
          popuplogin.classList.remove("modal-error");
        }
      }
    });
