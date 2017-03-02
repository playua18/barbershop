
/* запускаем галерею */
    var gallery = document.querySelector(".gallery");
    gallery.classList.add("gallery-live");

/* добавляем кнопки под галереей */
    var buttons =
        '<button class="btn gallery-prev disabled">Назад</button>' +
          '<button class="btn gallery-next">Вперед</button>';
    gallery.innerHTML = gallery.innerHTML + buttons;
    var prev = document.querySelector(".gallery-prev");
    prev.setAttribute('disabled', 'disabled');
