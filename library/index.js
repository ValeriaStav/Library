console.log(
    'My self-assessment by items:\n\n*Library#1*\n\n\n1. Valid layout +10\n\n2. Semantic layout +16\n\n3. Layout corresponds to layout +54\n\n4. General requirements for layout +20\n\n\nTotal score: 100 / 100 ;)\n\n\n*Library#2*\n\n1. Вёрстка соответствует макету. Ширина экрана 768px +26\n\n    ✅ блок <header> +2\n\n    ✅ секция Welcome +2\n\n    ✅ секция About +4. Обратите внимание на появление новых элементов в виде стрелок и переход на 5 точек вместо 3х. Не нужно менять расстояние от картинки до точек, нужно оставить 40px. Оценку не снижаем, если сделано по макету (25px).\n\n    ✅ секция Favorites +2\n\n    ✅ Сделать кнопку own, вместо buy для последней книги. Здесь важно будет соблюсти условие, что, какие кнопки находились в состояние "own" на Desktop, те же кнопки в том же состоянии будут и на Tablet. Если условие соблюдено: +2\n\n    ✅ секция CoffeShop +4\n\n    ✅ ❗Оценка снижаться не будет, если при наложении текста, не будет совпадать расположение букв, расстояние между символами, начало и конец строки, а так же орфография. Будут оцениваться межстрочный интервал, шрифт и центрирование блока с текстом по общим правилам.\n\n    ✅ секция Contacts +4\n\n    ✅ секция LibraryCard +4\n\n    ✅ блок <footer> + 2\n\n2. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n\n    ✅ нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\n\n    ✅ элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.\n\n    ✅ элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.\n\n    ✅ все что будет происходить на ширине свыше 1440px - не оценивается. Поэтому можно либо растягивать на весь экран, либо оставить центральной колонкой.\n\n3. На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px): Eсли при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:\n\n    ✅ ❗Версия Tablet, отступ иконки юзера от правого края - 105px. Такое же расстояние надо сделать и у открытого меню (сейчас там 92px). Сам крест желательно отцентрировать по поцентральной позиции бургер-иконки. Чтобы при переходе из одного состояния в другое ничего не прыгало. Само меню нужно прижать к правому краю целиком. Если иконка юзера не прыгает (не меняет позиции при открытии меню), независимо от величины отступа: +2\n\n    ✅ ❗Цвет выпавшего меню должен совпадать с цветом полоски навигации. Оценка снижаться не будет, если сделано по первому макету (#000000).\n\n    ✅ при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n\n    ✅ при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2\n\n    ✅ ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2\n\n    ✅ размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2\n\n\nTotal score: 50 / 50 )'
);

(function () {
    // Burger-menu

    const headerBurger = document.querySelector(".header-burger");
    const menuBurger = document.querySelector(".header-nav");
    const menuBurgerClose = document.querySelector(".header-burger-close");
    const menuLink = document.querySelector(".nav-list");
    const header = document.querySelector(".header-name");
    const main = document.querySelector(".main");
    headerBurger.addEventListener("click", () => {
        menuBurger.classList.add("header-nav-active");
    });
    menuBurgerClose.addEventListener("click", () => {
        menuBurger.classList.remove("header-nav-active");
    });
    menuLink.addEventListener("click", () => {
        menuBurger.classList.remove("header-nav-active");
    });
    header.addEventListener("click", () => {
        menuBurger.classList.remove("header-nav-active");
    });
    main.addEventListener("click", () => {
        menuBurger.classList.remove("header-nav-active");
    });

    // Header icon

    const headerIcon = document.querySelector(".header-icon");
    const menuProfile = document.querySelector(".menu-profile");
    const profileLogin = document.querySelector(".profile-login");

    headerIcon.addEventListener("click", () => {
        menuProfile.classList.toggle("menu-profile-active");
    });
    main.addEventListener("click", () => {
        menuProfile.classList.remove("menu-profile-active");
    });
    headerBurger.addEventListener("click", () => {
        menuProfile.classList.remove("menu-profile-active");
    });
    profileLogin.addEventListener("click", () => {
        modalWrapper.classList.add("modal-wrapper-active");
        menuProfile.classList.toggle("menu-profile-active");
    });

    // Modals

    const modalWrapper = document.querySelector(".modal-wrapper");
    const modalMenuOverlay = document.querySelector(".modal-menu-overlay");
    const modalMenuLogin = document.querySelector(".modal-menu-login");
    const modalMenuCloseButton = document.querySelector(
        ".modal-menu-close-btn"
    );
    const modalMenuCardButton = document.querySelector(".modal-menu-card-btn");

    modalMenuOverlay.addEventListener("click", () => {
        modalWrapper.classList.remove("modal-wrapper-active");
    });

    modalMenuCloseButton.addEventListener("click", () => {
        modalWrapper.classList.remove("modal-wrapper-active");
    });

    // Carousel-buttons

    const BTN_FIRST = document.querySelector("#btn-first");
    const BTN_SECOND = document.querySelector("#btn-second");
    const BTN_THIRD = document.querySelector("#btn-third");
    const BTN_FOURTH = document.querySelector("#btn-fourth");
    const BTN_FIFTH = document.querySelector("#btn-fifth");
    const CAROUSEL = document.querySelector("#carousel");

    const moveFirst = () => {
        CAROUSEL.classList.add("transition-first");
        BTN_FIRST.removeEventListener("click", moveFirst);
    };
    const moveSecond = () => {
        CAROUSEL.classList.add("transition-second");
        BTN_SECOND.removeEventListener("click", moveSecond);
    };
    const moveThird = () => {
        CAROUSEL.classList.add("transition-third");
        BTN_THIRD.removeEventListener("click", moveThird);
    };

    BTN_FIRST.addEventListener("click", moveFirst);

    BTN_SECOND.addEventListener("click", moveSecond);

    BTN_THIRD.addEventListener("click", moveThird);

    CAROUSEL.addEventListener("animationend", (animationEvent) => {
        if (animationEvent.animationsName === "move-first") {
            CAROUSEL.classList.remove("transition-first");
            const firstItem = document.querySelector("#item-first").innerHTML;
            document.querySelector("#item-second").innerHTML = firstItem;
        } else if (animation.animationsName === "move-second") {
            CAROUSEL.classList.remove("transition-second");
        } else if (animation.animationsName === "move-third") {
            CAROUSEL.classList.remove("transition-third");
        }
        BTN_FIRST.addEventListener("click", moveFirst);
        BTN_SECOND.addEventListener("click", moveSecond);
        BTN_THIRD.addEventListener("click", moveThird);
    });
})();
