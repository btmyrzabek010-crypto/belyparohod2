document.addEventListener("DOMContentLoaded", () => {

    const introScreen = document.getElementById("introScreen");
    const gameScreen = document.getElementById("gameScreen");
    const resultScreen = document.getElementById("resultScreen");

    const startButton = document.getElementById("startButton");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    const sceneNumber = document.getElementById("sceneNumber");
    const imageNumber = document.getElementById("imageNumber");
    const progressBar = document.getElementById("progressBar");

    const sceneLabel = document.getElementById("sceneLabel");
    const sceneTitle = document.getElementById("sceneTitle");
    const sceneText = document.getElementById("sceneText");

    const sceneImage = document.getElementById("sceneImage");

    const choicesContainer = document.getElementById("choices");
    const consequence = document.getElementById("consequence");
    const consequenceText = document.getElementById("consequenceText");

    let currentScene = 0;
    let selectedChoice = null;

    const scenes = [

        {
            number: 1,
            label: "НАЧАЛО У РЕКИ",
            title: "У тебя есть два желания.",
            text: "Ты встречаешь деда Момуна у переправы. Он занят хозяйственными делами. Но далеко на горизонте появляется белый пароход.",
            image: "scene1.jpg",

            choices: [
                {
                    text: "Остаться и помочь деду.",
                    consequence: "Ты сохраняешь связь с дедом и помогаешь семье. Но белый пароход остаётся лишь далёкой мечтой.",
                    value: "ПАМЯТЬ"
                },
                {
                    text: "Убежать к обрыву и смотреть на пароход.",
                    consequence: "Ты следуешь за своей мечтой. Белый пароход становится ещё важнее для твоего внутреннего мира.",
                    value: "ВЕРА"
                }
            ]
        },

        {
            number: 2,
            label: "КОНФЛИКТ В ДОМЕ",
            title: "Оразкул начинает кричать на деда.",
            text: "В доме становится страшно и напряжённо. Ты видишь, как близкому человеку становится тяжело.",
            image: "scene2.jpg",

            choices: [
                {
                    text: "Промолчать и спрятаться.",
                    consequence: "Ты сохраняешь хрупкое спокойствие в доме, но внутри остаётся чувство несправедливости.",
                    value: "ПАМЯТЬ"
                },
                {
                    text: "Заступиться за деда.",
                    consequence: "Ты пытаешься защитить старика, но твой поступок вызывает ещё большую агрессию.",
                    value: "ДОБРО"
                }
            ]
        },

        {
            number: 3,
            label: "ШКОЛЬНАЯ ДОРОГА",
            title: "Перед тобой длинная дорога в школу.",
            text: "Каждый день нужно идти через степь. Но дома тебя ждут дед, горы и его легенды.",
            image: "scene3.jpg",

            choices: [
                {
                    text: "Пойти в школу вместе с одноклассниками.",
                    consequence: "Ты выходишь в большой мир, учишься общаться со сверстниками и узнаёшь новое.",
                    value: "ВЫБОР"
                },
                {
                    text: "Остаться рядом с дедом.",
                    consequence: "Ты остаёшься рядом с человеком, которому доверяешь, и продолжаешь жить в мире его историй.",
                    value: "ПАМЯТЬ"
                }
            ]
        },

        {
            number: 4,
            label: "МАТЬ-ОЛЕНИХА",
            title: "Взрослые говорят, что это всего лишь сказка.",
            text: "Ты слышишь рассказы о легенде Матери-Оленихи. Для взрослых это выдумка. Но для тебя эта история связана с природой, добром и прошлым.",
            image: "scene4.jpg",

            choices: [
                {
                    text: "Поверить взрослым.",
                    consequence: "Магия детства постепенно исчезает. Ты начинаешь смотреть на мир глазами взрослых.",
                    value: "РАЗУМ"
                },
                {
                    text: "Продолжить верить в легенду.",
                    consequence: "Ты сохраняешь веру в легенду и связь с природой. Твой внутренний мир остаётся чистым.",
                    value: "ВЕРА"
                }
            ]
        },

        {
            number: 5,
            label: "ОХОТА НА МАРАЛОВ",
            title: "Тебя заставляют принять участие в охоте.",
            text: "Ты понимаешь, что происходит что-то неправильное. Перед тобой стоит тяжёлый выбор.",
            image: "scene5.jpg",

            choices: [
                {
                    text: "Подчиниться взрослым.",
                    consequence: "Ты сохраняешь внешнее спокойствие в семье, но понимаешь, что поступил против собственных убеждений.",
                    value: "ВЫБОР"
                },
                {
                    text: "Отказаться и уйти в лес.",
                    consequence: "Ты сохраняешь верность природе и собственной совести, но оказываешься в конфликте со взрослыми.",
                    value: "ПРИРОДА"
                }
            ]
        },

        {
            number: 6,
            label: "ОТКАЗ ДЕДА",
            title: "Дед оказывается перед тяжёлым выбором.",
            text: "Человек, которого ты считал своим защитником, оказывается слабее, чем ты думал.",
            image: "scene6.jpg",

            choices: [
                {
                    text: "Попытаться переубедить деда.",
                    consequence: "Ты не отказываешься от своих убеждений и пытаешься сохранить добро в семье.",
                    value: "ДОБРО"
                },
                {
                    text: "Принять его слабость.",
                    consequence: "Ты сохраняешь любовь к деду, но впервые понимаешь, что взрослые тоже могут ошибаться.",
                    value: "ПАМЯТЬ"
                }
            ]
        },

        {
            number: 7,
            label: "ПОСЛЕДНИЙ ВЫБОР",
            title: "Ты стоишь перед последним выбором.",
            text: "Мир вокруг уже не такой, каким был раньше. Перед тобой остаётся белый пароход — символ твоей мечты.",
            image: "scene7.jpg",

            choices: [
                {
                    text: "Вернуться домой.",
                    consequence: "Ты выбираешь принять реальность и продолжить жить, несмотря на боль и разочарование.",
                    value: "ПАМЯТЬ"
                },
                {
                    text: "Последовать за своей мечтой.",
                    consequence: "Ты выбираешь свой внутренний мир и веру в белый пароход.",
                    value: "ВЕРА"
                }
            ]
        }

    ];

    function showScreen(screen) {
        introScreen.classList.remove("active");
        gameScreen.classList.remove("active");
        resultScreen.classList.remove("active");

        screen.classList.add("active");
    }

    function loadScene(index) {

        currentScene = index;

        const scene = scenes[index];

        sceneNumber.textContent = String(scene.number).padStart(2, "0");
        imageNumber.textContent = String(scene.number).padStart(2, "0");

        sceneLabel.textContent = scene.label;
        sceneTitle.textContent = scene.title;
        sceneText.textContent = scene.text;

        sceneImage.src = "/static/" + scene.image;
        sceneImage.alt = "Иллюстрация сцены " + scene.number;

        progressBar.style.width =
            ((scene.number / scenes.length) * 100) + "%";

        choicesContainer.innerHTML = "";

        consequence.classList.remove("show");
        nextButton.style.display = "none";

        selectedChoice = null;

        scene.choices.forEach((choice, index) => {

            const button = document.createElement("button");

            button.className = "choice";

            button.innerHTML = `
                <span class="choice-number">0${index + 1}</span>
                <span>${choice.text}</span>
                <span class="choice-arrow">→</span>
            `;

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".choice")
                    .forEach(btn => btn.classList.remove("selected"));

                button.classList.add("selected");

                selectedChoice = choice;

                consequenceText.textContent =
                    choice.consequence;

                consequence.classList.add("show");

                if (scene.number < scenes.length) {
                    nextButton.style.display = "block";
                } else {
                    nextButton.textContent = "Завершить историю →";
                    nextButton.style.display = "block";
                }

            });

            choicesContainer.appendChild(button);

        });
    }

    startButton.addEventListener("click", () => {

        showScreen(gameScreen);

        loadScene(0);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    nextButton.addEventListener("click", () => {

        if (!selectedChoice) return;

        if (currentScene < scenes.length - 1) {

            loadScene(currentScene + 1);

        } else {

            showScreen(resultScreen);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

    restartButton.addEventListener("click", () => {

        showScreen(introScreen);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const answers = document.querySelectorAll(".answer");
    const result = document.getElementById("testResult");
    const nextButton = document.getElementById("nextQuestion");
    const question = document.getElementById("question");
    const questionNumber = document.getElementById("questionNumber");

    let currentQuestion = 0;
    let score = 0;

    const questions = [
        {
            text: "Что, по-твоему, помогает человеку сохранить себя в сложной ситуации?",
            answers: [
                ["Вера в добро", true],
                ["Безразличие", false],
                ["Отказ от мечты", false],
                ["Желание быть сильнее других", false]
            ]
        },
        {
            text: "Что помогает Момуну сохранять человечность?",
            answers: [
                ["Доброта и вера", true],
                ["Жестокость", false],
                ["Безразличие", false],
                ["Желание власти", false]
            ]
        },
        {
            text: "Почему мечта о белом пароходе так важна для мальчика?",
            answers: [
                ["Она дает ему надежду", true],
                ["Он хочет стать капитаном", false],
                ["Он хочет разбогатеть", false],
                ["Он хочет уехать учиться", false]
            ]
        }
    ];

    function showQuestion() {

        const q = questions[currentQuestion];

        question.textContent = q.text;

        questionNumber.textContent =
            String(currentQuestion + 1).padStart(2, "0");

        answers.forEach(function (button, index) {

            button.classList.remove("correct");
            button.classList.remove("wrong");

            button.disabled = false;

            button.innerHTML =
                "<span>0" + (index + 1) + "</span> " +
                q.answers[index][0];
        });

        result.textContent = "";
        nextButton.style.display = "none";
    }


    answers.forEach(function (button, index) {

        button.addEventListener("click", function () {

            const correct = questions[currentQuestion].answers[index][1];

            answers.forEach(function (btn) {
                btn.disabled = true;
            });

            if (correct) {

                button.classList.add("correct");

                result.textContent =
                    "Верно. Ты выбрал правильный вариант.";

                score++;

            } else {

                button.classList.add("wrong");

                result.textContent =
                    "Этот выбор тоже интересен, но попробуй посмотреть на ситуацию с другой стороны.";
            }

            nextButton.style.display = "block";
        });

    });


    nextButton.addEventListener("click", function () {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            question.textContent =
                "Тест завершён.";

            questionNumber.textContent = "03";

            document.getElementById("answers").innerHTML = "";

            result.textContent =
                "Твой результат: " + score + " из 3.";

            nextButton.style.display = "none";
        }

    });


    showQuestion();

});