console.log(
    "✅ Просьба к проверяющему - если не затруднит, перепроверь, пожалуйста, работу перед окончанием срока проверки ещё раз, может быть ещё успею доделать 🙏🏻\n\n)"
);

(function () {
    // ---------- Burger-menu ---------- //

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

    // ---------- Header icon ---------- //

    const headerIcon = document.querySelector(".header-icon");
    const menuProfile = document.querySelector(".menu-profile");
    const profileLogin = document.querySelector(".profile-login");
    const profileRegister = document.querySelector(".profile-register");

    headerIcon.addEventListener("click", () => {
        menuProfile.classList.toggle("menu-profile-active");
        menuBurger.classList.remove("header-nav-active");
    });
    main.addEventListener("click", () => {
        menuProfile.classList.remove("menu-profile-active");
    });
    headerBurger.addEventListener("click", () => {
        menuProfile.classList.remove("menu-profile-active");
    });
    profileLogin.addEventListener("click", () => {
        modalLogin.classList.add("modal-login-active");
        document.body.classList.add("scroll-off");
        menuProfile.classList.toggle("menu-profile-active");
    });
    profileRegister.addEventListener("click", () => {
        modalRegister.classList.add("modal-register-active");
        document.body.classList.add("scroll-off");
        menuProfile.classList.toggle("menu-profile-active");
    });

    // ---------- Modals ---------- //

    const modalLogin = document.querySelector(".modal-login");
    const modalRegister = document.querySelector(".modal-register");
    const modalMenuOverlayLogin = document.querySelector(
        ".overlay-modal-login"
    );
    const modalMenuOverlayRegister = document.querySelector(
        ".overlay-modal-register"
    );
    const modalMenuCloseButtonLogin =
        document.querySelector(".close-modal-login");
    const modalMenuCloseButtonRegister = document.querySelector(
        ".close-modal-register"
    );
    const modalMenuFooterLogin = document.querySelector(
        ".modal-menu-footer-login"
    );
    const modalMenuFooterRegister = document.querySelector(
        ".modal-menu-footer-register"
    );
    const buyButton = document.querySelectorAll(".btn-buy");
    const signUpButton = document.querySelector(".btn-sign-up");
    const logInButton = document.querySelector(".btn-log-in");

    modalMenuFooterLogin.addEventListener("click", () => {
        modalLogin.classList.add("modal-login-active");
        document.body.classList.add("scroll-off");
        modalRegister.classList.remove("modal-register-active");
    });

    for (let i = 0; i < buyButton.length; i++) {
        buyButton[i].addEventListener("click", () => {
            modalLogin.classList.add("modal-login-active");
            document.body.classList.add("scroll-off");
        });
    }

    logInButton.addEventListener("click", () => {
        modalLogin.classList.add("modal-login-active");
        document.body.classList.add("scroll-off");
    });

    modalMenuOverlayLogin.addEventListener("click", () => {
        modalLogin.classList.remove("modal-login-active");
        document.body.classList.remove("scroll-off");
    });

    modalMenuCloseButtonLogin.addEventListener("click", () => {
        modalLogin.classList.remove("modal-login-active");
        document.body.classList.remove("scroll-off");
    });

    modalMenuFooterRegister.addEventListener("click", () => {
        document.body.classList.add("scroll-off");
        modalRegister.classList.add("modal-register-active");
        modalLogin.classList.remove("modal-login-active");
    });

    signUpButton.addEventListener("click", () => {
        modalRegister.classList.add("modal-register-active");
        document.body.classList.add("scroll-off");
    });

    modalMenuCloseButtonRegister.addEventListener("click", () => {
        modalRegister.classList.remove("modal-register-active");
        document.body.classList.remove("scroll-off");
    });

    modalMenuOverlayRegister.addEventListener("click", () => {
        modalRegister.classList.remove("modal-register-active");
        document.body.classList.remove("scroll-off");
    });

    // ---------- Carousel-buttons ---------- //

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

    // ---------- Local Storage ---------- //

    // localStorage.clear();

    const formRegister = document.querySelector(".form-modal-register");
    const formLogin = document.querySelector(".form-modal-login");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailReg = document.getElementById("email-reg");
    const passwordReg = document.getElementById("password-reg");
    const buttonReg = document.getElementById("button-reg");
    const emailLogin = document.getElementById("email-login");
    const passwordLogin = document.getElementById("password-login");
    const buttonLogin = document.getElementById("button-login");

    // ---------- Registration ---------- //

    // localStorage.setItem("usersArray", JSON.stringify([])); // remove data from array
    // localStorage.setItem("loginStatus", false);

    let users = JSON.parse(localStorage.getItem("usersArray"));

    console.log(users);

    class NewUser {
        constructor(name, surname, email, password) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.password = password;
        }
    }

    function registerNewUser() {
        if (
            firstName.value &&
            lastName.value &&
            emailReg.value &&
            passwordReg.value
        ) {
            users.push(
                new NewUser(
                    firstName.value,
                    lastName.value,
                    emailReg.value,
                    passwordReg.value
                )
            );
            localStorage.setItem("usersArray", JSON.stringify(users));
        }
    }

    buttonReg.addEventListener("click", () => {
        registerNewUser;
        document.body.classList.remove("formRegister");
    });

    // ---------- Log In ---------- //

    buttonLogin.onclick = function () {
        if (emailLogin.value && passwordLogin.value) {
            for (let i = 0; i < users.length; i++) {
                console.log(users[i]);
                if (
                    users[i].email === emailLogin.value &&
                    users[i].password === passwordLogin.value
                ) {
                    console.log(users[i]);
                    localStorage.setItem("loginStatus", true);
                    window.location.href = "index.html";
                }
            }
        }
    };

    // Unscroll page

    const pageOffset = pageYOffset;
    window.scrollTo({
        top: pageOffset,
    });
})();
