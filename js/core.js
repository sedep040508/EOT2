(function () {

    let counter = document.querySelectorAll('.counter');
    let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
    window.addEventListener('scroll', function () {
      if (limit == counter.length) {
        return;
      }
  
      for (let i = 0; i < counter.length; i++) {
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if (pos < win && counter[i].dataset.stop === "0") {
          counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
          let x = 0;
          limit++; // Счетчик будет запущен, увеличиваем переменную на 1
          let int = setInterval(function () {
            // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
            x = x + Math.ceil(counter[i].dataset.to / 50);
            counter[i].innerText = x;
            if (x > counter[i].dataset.to) {
              //Как только досчитали - стираем интервал.
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 30);
        }
      }
    })
  })();

  //accardeon
 
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for(var i = 0; i < accordeonButtons.length; i++) {
      var accordeonButton = accordeonButtons[i];
  
      accordeonButton.addEventListener("click", toggleItems, false);
  }
  
  //пишем функцию
  function toggleItems() {
  
      // переменная кнопки(актульная) с классом
      var itemClass = this.className;
  
      // добавляем всем кнопкам класс close
      for(var i = 0; i < accordeonButtons.length; i++) {
          accordeonButtons[i].className = "accordeon__button closed";
      }
  
      // закрываем все открытые панели с текстом
      var pannels = document.getElementsByClassName("accordeon__panel");
      for (var z = 0; z < pannels.length; z++) {
          pannels[z].style.maxHeight = 0;
      }
  
      // проверка. если кнопка имеет класс close при нажатии
      // к актуальной(нажатой) кнопке добававляем активный класс
      // а панели - которая находится рядом задаем высоту
      if(itemClass == "accordeon__button closed") {
          this.className = "accordeon__button active";
          var panel = this.nextElementSibling;
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  
  }
  