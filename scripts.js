function menu(name) {
    let mainButton;
    var main = document.getElementsByClassName("sekcja_main_prawy_div");
    var quiz = document.getElementsByClassName("sekcja_main_lewy_div");
    for (let m of main) {
        m.style.display = "none";
    }
    for (let q of quiz) {
        q.style.display = "none";
    }

    const ele = document.getElementById(name);
    ele.style.display = "block"

    switch (name) {
        case "index":
            const choose = document.getElementById('choosePlanet');
            choose.style.display = "block";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "none";
            break;

        case "slonce":
            const quizzSun = document.getElementById("quizSun");
            quizzSun.style.display = "block";
            const chooseSun = document.getElementById("choosePlanet");
            chooseSun.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "merkury":
            const quizzMercury = document.getElementById("quizMercury");
            quizzMercury.style.display = "block";
            const chooseMercury = document.getElementById("choosePlanet");
            chooseMercury.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "wenus":
            const quizzVenus = document.getElementById("quizVenus");
            quizzVenus.style.display = "block";
            const chooseVenus = document.getElementById("choosePlanet");
            chooseVenus.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "ziemia":
            const quizzEarth = document.getElementById("quizEarth");
            quizzEarth.style.display = "block";
            const chooseEarth = document.getElementById("choosePlanet");
            chooseEarth.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "mars":
            const quizzMars = document.getElementById("quizMars");
            quizzMars.style.display = "block";
            const chooseMars = document.getElementById("choosePlanet");
            chooseMars.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "jowisz":
            const quizzJupiter = document.getElementById("quizJupiter");
            quizzJupiter.style.display = "block";
            const chooseJupiter = document.getElementById("choosePlanet");
            chooseJupiter.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "saturn":
            const quizzSaturn = document.getElementById("quizSaturn");
            quizzSaturn.style.display = "block";
            const chooseSaturn = document.getElementById("choosePlanet");
            chooseSaturn.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "uran":
            const quizzUranus = document.getElementById("quizUranus");
            quizzUranus.style.display = "block";
            const chooseUranus = document.getElementById("choosePlanet");
            chooseUranus.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "neptun":
            const quizzNeptune = document.getElementById("quizNeptune");
            quizzNeptune.style.display = "block";
            const chooseNeptune = document.getElementById("choosePlanet");
            chooseNeptune.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        case "pluton":
            const quizzPluto = document.getElementById("quizPluto");
            quizzPluto.style.display = "block";
            const choosePluto = document.getElementById("choosePlanet");
            choosePluto.style.display = "none";
            mainButton = document.getElementById('mainPageButton');
            mainButton.style.display = "block";
            break;

        default:
            break;
    }

}
menu("index")

var bt1 = document.getElementById("mainPageButton");
bt1.addEventListener("click", () => {menu("index")})

var bt2 = document.getElementById("sunButton");
bt2.addEventListener("click", () => {menu("slonce")})

var bt3 = document.getElementById("mercuryButton");
bt3.addEventListener("click", () => {menu("merkury")})

var bt4 = document.getElementById("venusButton");
bt4.addEventListener("click", () => {menu("wenus")})

var bt5 = document.getElementById("earthButton");
bt5.addEventListener("click", () => {menu("ziemia")})

var bt6 = document.getElementById("marsButton");
bt6.addEventListener("click", () => {menu("mars")})

var bt7 = document.getElementById("jupiterButton");
bt7.addEventListener("click", () => {menu("jowisz")})

var bt8 = document.getElementById("saturnButton");
bt8.addEventListener("click", () => {menu("saturn")})

var bt9 = document.getElementById("uranusButton");
bt9.addEventListener("click", () => {menu("uran")})

var bt10 = document.getElementById("neptuneButton");
bt10.addEventListener("click", () => {menu("neptun")})

var bt11 = document.getElementById("plutoButton");
bt11.addEventListener("click", () => {menu("pluton")})

function napisAnimacjaPojawienia(arg1){
    const napis = document.getElementById(arg1);

    napis.style.transitionDuration='500ms';
    napis.style.opacity='0.6';

}
function napisSlonceAnimacjaZnikanie(arg1){
    const napis = document.getElementById(arg1);

    napis.style.transitionDuration='500ms';
    napis.style.opacity='0';
}


function checkAnswers(){
    const questions = document.querySelectorAll("input[type=radio]:checked");
    questions.forEach(function(question) {
        if (question.value === "correct") {
            question.parentElement.classList.add("correct");
        } else {
            question.parentElement.classList.add("incorrect");
        }
    });
}

var quiz1 = document.getElementById("check-answers");
quiz1.addEventListener("click", () => {checkAnswers()})
var quiz2 = document.getElementById("check-answers2");
quiz2.addEventListener("click", () => {checkAnswers()})
var quiz3 = document.getElementById("check-answers3");
quiz3.addEventListener("click", () => {checkAnswers()})
var quiz4 = document.getElementById("check-answers4");
quiz4.addEventListener("click", () => {checkAnswers()})
var quiz5 = document.getElementById("check-answers5");
quiz5.addEventListener("click", () => {checkAnswers()})
var quiz6 = document.getElementById("check-answers6");
quiz6.addEventListener("click", () => {checkAnswers()})
var quiz7 = document.getElementById("check-answers7");
quiz7.addEventListener("click", () => {checkAnswers()})
var quiz8 = document.getElementById("check-answers8");
quiz8.addEventListener("click", () => {checkAnswers()})
var quiz9 = document.getElementById("check-answers9");
quiz9.addEventListener("click", () => {checkAnswers()})
var quiz10 = document.getElementById("check-answers10");
quiz10.addEventListener("click", () => {checkAnswers()})