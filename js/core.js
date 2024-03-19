// Получаем ссылки на модальное окно и кнопку открытия
var modal = document.getElementById('myModal');
var btn = document.getElementById("openModal");
// Получаем ссылку на элемент закрытия
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрываем модальное окно при клике на элемент закрытия
span.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


