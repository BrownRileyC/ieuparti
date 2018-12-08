food = {
    title: "Food",
        // Change Q keys into questionArray = ["q1","q2"]
        // create answer array either for each question or one answer array and grab a range of the array
    questionArray: ["Q1","Q2","Q3","Q4", "Q5"],
    answerArray: [{
        array: ["A1","Q1","A3","A4"],
        answer: "Q1"
    },
    {
        array: ["Q2","A2","A3","A4"],
        answer: "Q2"
    },
    {
        array: ["A1","Q3","A3","A4"],
        answer: "Q3"
    },
    {
        array: ["A1","A2","Q4","A4"],
        answer: "Q4"
    },
    {
        array: ["A1","A2","A3","Q5"],
        answer: "Q5"
    }],
    correct: 0,
    incorrect: 0
};

animals = {
    title: "Animals",
    questionArray: ["Q1","Q2","Q3","Q4","Q5"],
    answerArray: [{
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    }],
    correct: 0,
    incorrect: 0
};

art = {
    title: "Art",
    questionArray: ["Q1","Q2","Q3","Q4", "Q5"],
    answerArray: [{
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    }],
    correct: 0,
    incorrect: 0
};

sports = {
    title: "Sports",
    questionArray: ["Q1","Q2","Q3","Q4","Q5"],
    answerArray: [{
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    }],
    correct: 0,
    incorrect: 0
};

var categories = [food, art, sports, animals]
var questionsAsked = [];
var categoriesOpened = false;
var categorySelected = false;
var category;
var quizTimer = 15;
var questionNumber = 0;
var randomNumber;
var intervalId;
var interQuestion;
var gameStarted = false;
var runAgain = true;

var instructions;
var startButton;

$(document).ready(function() {

var goToCategories = function() {
    instructions = $('.instructions').detach();
    startButton = $('.startButton').detach();
    $('.instructionBar').addClass('categoryBar').removeClass('instructionBar');
    $('.questionBar').addClass('categoryBar').removeClass('questionBar')
    for (var i = 0; i < categories.length; i++) {
        var categoryCard = $('<div>');
        $('.categoryBar').append(categoryCard);
        categoryCard.text(categories[i].title);
        categoryCard.addClass('categoryCard' + ' ' + categories[i].title + " "+"button")
    };
    var categorySelectButton = $('<div>');
    $('.startBar').append(categorySelectButton);
    categorySelectButton.addClass('startButton'+ " "+"button");
    categorySelectButton.text("Select Category");
};

var count = function(){
    quizTimer--;
    $('.timer').text(quizTimer)
    if (quizTimer === 0) {
        clearInterval(intervalId);
        postQuestionDisplayTimeout();
    }
}
    // be sure to pass question number in here
var getQuestion = function() {
    // This will fetch and display the questions as well as the answers and increment a variable to show the question count remaining and use that same variable to fetch the question
    // Undo this and try again
    
        randomNumber = Math.floor(Math.random()*category.questionArray.length);
        if (!questionsAsked.includes(randomNumber)) {
            questionsAsked.push(randomNumber);
            var questionBox = $('<div>');
            $('.questionBar').append(questionBox);
            questionBox.text(category.questionArray[randomNumber]);
            runAgain = false;
        } else {
            runAgain = true;
        };
    };

var getAnswers = function() {
        for (var i = 0; i < 4; i ++) {
        var answerCard = $('<div>');
        $('.startBar').append(answerCard);
        answerCard.text(category.answerArray[randomNumber].array[i]);
        answerCard.addClass('answerCard' + ' ' + "answer"+(i) + " "+"button")
        };
    // It is probably better to simply do arrays for each question
};

var postQuestionDisplayCorrect = function(str) {
    clearInterval(intervalId);
    $('.questionBar').empty();
    $('.startBar').empty();
    interQuestion = $('<div>');
    interQuestion.appendTo('.questionBar');
    interQuestion.text("Great job! You guessed " + str +" and you got it!");
    questionNumber++;
    // ToDO: Display the correct answer and tell the user if they got it right or wrong (use the interQuestion.text to display the correct answer and the result)
    setTimeout(beginQuiz, 3000);
    // Get rid of everything on the screen and show the in between answers stuff
    // This will be on a timeout rather than an interval
    // after the time out we run a function that Gets the Next Question
}

var postQuestionDisplayIncorrect = function(str) {
    clearInterval(intervalId);
    $('.questionBar').empty();
    $('.startBar').empty();
    interQuestion = $('<div>');
    interQuestion.appendTo('.questionBar');
    interQuestion.text("Too bad.  You answered " + str + " but the correct answer was " + category.answerArray[questionNumber].answer);
    questionNumber++;

    // ToDO: Display the correct answer and tell the user if they got it right or wrong (use the interQuestion.text to display the correct answer and the result)
    setTimeout(beginQuiz, 3000);
    // Get rid of everything on the screen and show the in between answers stuff
    // This will be on a timeout rather than an interval
    // after the time out we run a function that Gets the Next Question
}

var postQuestionDisplayTimeout = function() {
    $('.questionBar').empty();
    $('.startBar').empty();
    interQuestion = $('<div>');
    interQuestion.appendTo('.questionBar');
    interQuestion.text("You ran out of time!  The correct answer was " + category.answerArray[questionNumber].answer);
    category.incorrect ++ ;
    questionNumber++;
    // ToDO: Display the correct answer and tell the user if they got it right or wrong (use the interQuestion.text to display the correct answer and the result)
    setTimeout(beginQuiz, 3000);
    // Get rid of everything on the screen and show the in between answers stuff
    // This will be on a timeout rather than an interval
    // after the time out we run a function that Gets the Next Question
}

// ToDo Timer goes wonky, make sure to include clears and resets where neeeded
var timerStart = function() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
}

var gameOver = function() {
    categoriesOpened = false;
    $('.questionBar').empty();
    $('.startBar').empty();
    var resultsBox = $('<div>');
    $('.questionBar').append(resultsBox)
    resultsBox.addClass('resultsBar');
    var resultCard = $('<div>').addClass('resultCard'+ " "+ "result");
    var resultCard2 = $('<div>').addClass('resultCard'+ " "+ "result2");
    $('.resultsBar').append(resultCard)
    $('.resultsBar').append(resultCard2)
    $('.result').text("Correct Answers: "+category.correct);
    $('.result2').text("Incorrect Answers: "+category.incorrect);
    var restartDiv = $('<div class="restartBar"></div>');
    $('.wrapper').append(restartDiv);
    var restartCategoryButton = $('<div>');
    restartCategoryButton.appendTo(restartDiv)
    restartCategoryButton.addClass('button retryButton startButton');
    restartCategoryButton.text("Play the Same Category");
    var fullRestartButton = $('<div>');
    fullRestartButton.appendTo(restartDiv)
    fullRestartButton.addClass('button restartButton startButton');
    fullRestartButton.text("Try Another Category");
    generateRestartOnClicks();
};

var beginQuiz = function() {
    quizTimer = 15;
    if (questionNumber < 5) {
    gameStarted = true;
    $('.categoryBar').empty();
    $('.questionBar').empty();
    $('.startBar').empty();
    $('.categoryBar').addClass('questionBar').removeClass('categoryBar');
    var timerBox = $('<div>');
    timerBox.addClass('timer');
    $('.questionBar').prepend(timerBox);
    timerBox.text(quizTimer);
    timerStart();
    while (runAgain  === true){
        getQuestion();
    };
    runAgain = true;
    getAnswers()
    } else {
        gameOver();
    } 
}



var fullReset = function() {
    $('.restartBar').remove();
    $('.startBar').empty();
    $('.questionBar').empty();
    categorySelected = false;
    gameStarted = false;
    categoriesOpened = false;
    category.correct = 0;
    category.incorrect = 0;
    questionNumber = 0;
    questionsAsked.length = 0;

};



    var generateStartOnClicks = function() {
        $('.startBar').on('click','.startButton', function() {
            if (!categoriesOpened) {
                goToCategories();
                categoriesOpened = true;
                $.each(categories, function(i) {
                    $('.categoryBar').on('click', '.'+categories[i].title, function(){
                        categorySelected = true;
                        category = categories[i];
                    });
                });
            } else if (categorySelected === true && !gameStarted) {
                beginQuiz();
            };
            if (gameStarted) {
                $.each(category.answerArray[randomNumber].array, function(i) {
                    console.log("Original Let's make those Answercard events");
                    $('.startBar').on('click', '.answer'+i, function(){
                        var response = $(this).text();
                        if (response === category.answerArray[randomNumber].answer) {
                            category.correct ++;
                            postQuestionDisplayCorrect(response);
                        }
                        if (response !== category.answerArray[randomNumber].answer) {
                            category.incorrect ++;
                            postQuestionDisplayIncorrect(response);
                        }
                        
                    });
                })
            }
        });
    };
    var generateRestartOnClicks = function() {
        $('.restartBar').on('click','.restartButton', function() {
            fullReset();
            goToCategories();
            categoriesOpened = true;
            $('.startBar').off('click');
            $.each(categories, function(i) {
                $('.categoryBar').on('click', '.'+categories[i].title, function(){
                    categorySelected = true;
                    category = categories[i];
                });
            });
            generateStartOnClicks();
        })

        $('.restartBar').on('click','.retryButton', function() {
            console.log("I'm the retry button");
            fullReset();
            $('.startBar').off('click');
            beginQuiz();
            categorySelected = true;
            gameStarted = true;
            $.each(category.answerArray[randomNumber].array, function(i) {
                console.log("I'm making the answer card events!");
                $('.startBar').on('click', '.answer'+i, function(){
                    var response = $(this).text();
                    if (response === category.answerArray[randomNumber].answer) {
                        category.correct ++;
                        console.log($(this).text());
                        postQuestionDisplayCorrect(response);
                    }
                    if (response !== category.answerArray[randomNumber].answer) {
                        category.incorrect ++;
                        console.log($(this).text());
                        console.log(category.answerArray[randomNumber].answer)
                        postQuestionDisplayIncorrect(response);
                    }
                    
                });
            })
        })
    };
    generateStartOnClicks();
});
