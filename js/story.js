document.addEventListener("DOMContentLoaded", () => {

    const introScreen = document.getElementById("introScreen");
    const gameScreen = document.getElementById("gameScreen");
    const resultScreen = document.getElementById("resultScreen");

    const startButton = document.getElementById("startStory");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    const sceneNumber = document.getElementById("sceneNumber");
    const progressBar = document.getElementById("progressBar");

    const sceneImage = document.getElementById("sceneImage");
    const imageNumber = document.getElementById("imageNumber");

    const sceneLabel = document.getElementById("sceneLabel");
    const sceneTitle = document.getElementById("sceneTitle");
    const sceneText = document.getElementById("sceneText");

    const choicesContainer = document.getElementById("choices");

    const consequence = document.getElementById("consequence");
    const consequenceText =
        document.getElementById("consequenceText");


    /*
    ==========================================
    ИСТОРИЯ
    ==========================================
    */

    const scenes = [

        {
            label: "НАЧАЛО У РЕКИ",

            title:
                "Ты встречаешь деда у переправы.",

            text:
                "Вечер опускается на кордон. " +
                "Дед занят домашними делами. " +
                "Но тебе хочется подняться к обрыву " +
                "и посмотреть на далёкий белый пароход.",

            image: "scene1.jpg",

            choices: [

                {
                    text:
                        "Помочь деду по хозяйству.",

                    consequence:
                        "Твой выбор сохраняет лад в семье, " +
                        "но отдаляет тебя от заветной мечты.",

                    type: "good"
                },

                {
                    text:
                        "Убежать к обрыву и смотреть в бинокль.",

                    consequence:
                        "Ты следуешь за своей мечтой и снова " +
                        "видишь белый пароход вдали, " +
                        "но хозяйственные обязанности остаются невыполненными.",

                    type: "faith"
                }

            ]
        },


        {
            label: "КОНФЛИКТ В ДОМЕ",

            title:
                "Оразкул начинает кричать на деда.",

            text:
                "В доме становится тревожно. " +
                "Ты слышишь грубые голоса и понимаешь, " +
                "что дед оказался в тяжёлой ситуации.",

            image: "scene2.jpg",

            choices: [

                {
                    text:
                        "Заступиться за деда.",

                    consequence:
                        "Твоя попытка защитить старика усиливает напряжение. " +
                        "Ты впервые открыто сталкиваешься с жестокостью взрослых.",

                    type: "good"
                },

                {
                    text:
                        "Промолчать и спрятаться в углу.",

                    consequence:
                        "Молчание сохраняет хрупкое спокойствие, " +
                        "но внутри тебя остаётся чувство подавленного достоинства.",

                    type: "memory"
                }

            ]
        },


        {
            label: "ШКОЛЬНАЯ ДОРОГА",

            title:
                "Перед тобой — дорога в школу.",

            text:
                "Школа находится далеко. Каждый день нужно идти " +
                "через степь. Там тебя ждут другие дети и совсем другой мир.",

            image: "scene3.jpg",

            choices: [

                {
                    text:
                        "Пойти в школу вместе с одноклассниками.",

                    consequence:
                        "Ты выходишь за пределы своего маленького мира. " +
                        "Общение со сверстниками постепенно связывает тебя " +
                        "с реальной жизнью.",

                    type: "good"
                },

                {
                    text:
                        "Остаться на кордоне с дедом и его историями.",

                    consequence:
                        "Ты сохраняешь свой хрупкий внутренний мир " +
                        "и остаёшься рядом с дедушкой и его легендами.",

                    type: "memory"
                }

            ]
        },


        {
            label: "ЛЕГЕНДА",

            title:
                "Ты слышишь разговор взрослых о матери-оленихе.",

            text:
                "Взрослые говорят, что легенда — всего лишь сказка. " +
                "Но для тебя она значит гораздо больше.",

            image: "scene4.jpg",

            choices: [

                {
                    text:
                        "Поверить взрослым.",

                    consequence:
                        "Магия детства начинает исчезать. " +
                        "Ты всё сильнее сталкиваешься с суровой реальностью.",

                    type: "good"
                },

                {
                    text:
                        "Продолжать верить в легенду.",

                    consequence:
                        "Ты сохраняешь веру в чудо и чистоту своего внутреннего мира, " +
                        "но становишься особенно уязвимым перед жестокостью взрослых.",

                    type: "faith"
                }

            ]
        },


        {
            label: "ОХОТА",

            title:
                "Тебя заставляют сделать тяжёлый выбор.",

            text:
                "В лесу происходит то, что разрушает привычный порядок. " +
                "Ты понимаешь, что от твоего решения зависит не только ты.",

            image: "scene5.jpg",

            choices: [

                {
                    text:
                        "Подчиниться ради сохранения мира в семье.",

                    consequence:
                        "Покорность помогает сохранить внешнее спокойствие, " +
                        "но разрушает нравственную опору и доверие.",

                    type: "memory"
                },

                {
                    text:
                        "Отказаться и уйти в лес.",

                    consequence:
                        "Ты сохраняешь свою совесть и отказываешься принимать " +
                        "то, что считаешь неправильным, но это приводит к тяжёлому разрыву.",

                    type: "nature"
                }

            ]
        },


        {
            label: "ОТКАЗ ДЕДА",

            title:
                "Ты понимаешь, что дед оказался слабее, чем ты думал.",

            text:
                "Человек, которому ты доверял больше всего, " +
                "не смог противостоять давлению взрослых.",

            image: "scene6.jpg",

            choices: [

                {
                    text:
                        "Попытаться переубедить деда.",

                    consequence:
                        "Ты пытаешься сохранить то, во что верил, " +
                        "но понимаешь, насколько трудно изменить другого человека.",

                    type: "faith"
                },

                {
                    text:
                        "Принять его слабость.",

                    consequence:
                        "Ты сохраняешь любовь к деду, " +
                        "но вынужден смириться с противоречием между любовью " +
                        "и поступками взрослых.",

                    type: "memory"
                }

            ]
        },


        {
            label: "ФИНАЛ",

            title:
                "Белый пароход снова появляется вдали.",

            text:
                "Перед тобой оказывается граница между мечтой и реальностью. " +
                "Теперь тебе нужно решить, что делать со своей мечтой.",

            image: "scene7.jpg",

            choices: [

                {
                    text:
                        "Вернуться к дому и принять реальность.",

                    consequence:
                        "Ты возвращаешься в мир взрослых и понимаешь, " +
                        "что реальность может быть жестокой. " +
                        "Но теперь ты видишь её уже другими глазами.",

                    type: "memory"
                },

                {
                    text:
                        "Уйти к реке вслед за своей мечтой.",

                    consequence:
                        "Ты отказываешься от жестокого мира взрослых " +
                        "и символически выбираешь путь к своему Белому пароходу — " +
                        "к мечте, которую не смог отпустить.",

                    type: "faith"
                }

            ]
        }

    ];


    let currentScene = 0;

    let scores = {
        good: 0,
        faith: 0,
        memory: 0,
        nature: 0
    };


    /*
    ==========================================
    START
    ==========================================
    */

    startButton.addEventListener("click", () => {

        introScreen.classList.remove("active");

        gameScreen.classList.add("active");

        currentScene = 0;

        scores = {
            good: 0,
            faith: 0,
            memory: 0,
            nature: 0
        };

        loadScene();

    });


    /*
    ==========================================
    LOAD SCENE
    ==========================================
    */

    function loadScene() {

        const scene = scenes[currentScene];

        sceneNumber.textContent =
            String(currentScene + 1).padStart(2, "0");

        imageNumber.textContent =
            String(currentScene + 1).padStart(2, "0");

        progressBar.style.width =
            `${((currentScene + 1) / scenes.length) * 100}%`;


        sceneLabel.textContent = scene.label;

        sceneTitle.textContent = scene.title;

        sceneText.textContent = scene.text;


        /*
        IMAGE
        */

        sceneImage.src =
            `/static/images/${scene.image}`;


        /*
        RESET CONSEQUENCE
        */

        consequence.classList.remove("visible");

        choicesContainer.innerHTML = "";


        /*
        CHOICES
        */

        scene.choices.forEach((choice, index) => {

            const button =
                document.createElement("button");

            button.className = "choice";

            button.innerHTML = `
                <span class="choice-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span>
                    ${choice.text}
                </span>
            `;


            button.addEventListener("click", () => {

                choose(button, choice);

            });


            choicesContainer.appendChild(button);

        });

    }


    /*
    ==========================================
    CHOICE
    ==========================================
    */

    function choose(button, choice) {

        const buttons =
            choicesContainer.querySelectorAll(".choice");

        buttons.forEach(item => {

            item.disabled = true;

        });


        button.classList.add("selected");


        scores[choice.type]++;


        consequenceText.textContent =
            choice.consequence;


        consequence.classList.add("visible");


        setTimeout(() => {

            consequence.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 150);

    }


    /*
    ==========================================
    NEXT
    ==========================================
    */

    nextButton.addEventListener("click", () => {

        currentScene++;

        if (currentScene < scenes.length) {

            loadScene();

        } else {

            showResult();

        }

    });


    /*
    ==========================================
    RESULT
    ==========================================
    */

    function showResult() {

        gameScreen.classList.remove("active");

        resultScreen.classList.add("active");


        document.getElementById("goodScore").textContent =
            scores.good;

        document.getElementById("faithScore").textContent =
            scores.faith;

        document.getElementById("memoryScore").textContent =
            scores.memory;

        document.getElementById("natureScore").textContent =
            scores.nature;


        const maxScore =
            Math.max(...Object.values(scores));


        let result;


        if (scores.faith === maxScore) {

            result = {
                title: "ХРАНИТЕЛЬ МЕЧТЫ",

                text:
                    "Твои решения показали, что для тебя особенно важны " +
                    "вера, мечта и способность сохранять свой внутренний мир."
            };

        } else if (scores.nature === maxScore) {

            result = {
                title: "ХРАНИТЕЛЬ ПРИРОДЫ",

                text:
                    "Ты особенно остро чувствуешь связь человека " +
                    "с природой и ответственность за окружающий мир."
            };

        } else if (scores.memory === maxScore) {

            result = {
                title: "ХРАНИТЕЛЬ ПАМЯТИ",

                text:
                    "Для тебя важны прошлое, семья, память поколений " +
                    "и связь человека со своей историей."
            };

        } else {

            result = {
                title: "ЧЕЛОВЕК",

                text:
                    "Твои решения показывают, что тебе важно " +
                    "оставаться человеком даже в сложных обстоятельствах."
            };

        }


        document.getElementById("resultTitle").textContent =
            result.title;

        document.getElementById("resultText").textContent =
            result.text;

    }


    /*
    ==========================================
    RESTART
    ==========================================
    */

    restartButton.addEventListener("click", () => {

        resultScreen.classList.remove("active");

        introScreen.classList.add("active");

    });

});

const scenes = [
    {
        image: "/static/images/scene1.jpg"
    },
    {
        image: "/static/images/scene2.jpg"
    },
    {
        image: "/static/images/steamboat.png"
    },
    {
        image: "/static/images/deer.png"
    },
    {
        image: "/static/images/forest.png"
    },
    {
        image: "/static/images/choice.png"
    },
    {
        image: "/static/images/ending.png"
    }
];