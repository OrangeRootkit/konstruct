const burger = document.querySelector("#burger"); // передаем константе селектор по id значок бургер
const burger__list = document.getElementById("#burger__list"); // передаем константе селектор по id значок контейнер меню со ссылками
const cross = document.querySelector("#cross");


burger.onclick = function () {
     burger.classList.add("active");
     cross.classList.add("active");
     burger__list.classList.add("active");
}
//      menu.classList.add("active"); // добавляем меню по нажатию
//      burger.classList.add("active");// скрываю значок бургера
//      // cross.classList.add("active");// добавляю крестик
// }

cross.onclick = function () {
     burger__list.classList.remove("active"); // убираю класс с меню по нажатию - скрываю
     burger.classList.remove("active");// возвращаю бургер
     cross.classList.remove("active");// убираю крестик
}