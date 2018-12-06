food = {
    title: "Food",
        // Change Q keys into questionArray = ["q1","q2"]
        // create answer array either for each question or one answer array and grab a range of the array
    questionArray: ["Q1","Q2","Q3","Q4", "Q5"],
    answerArray: [{
        array: ["A1","A2","A3","A4"],
        answer: "A2"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A1"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A2"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A3"
    },
    {
        array: ["A1","A2","A3","A4"],
        answer: "A4"
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

var categories = [food, art, sports, animals]


var categorySelected = false;
var category;
var quizTimer = 5;
var questionNumber = 0;
var intervalId;
var interQuestion;
var gameStarted = false;

var instructions;
var startButton;

var goToCategories = function() {
    instructions = $('.instructions').detach();
    startButton = $('.startButton').detach();
    $('.instructionBar').addClass('categoryBar').removeClass('instructionBar');
    for (var i = 0; i < categories.length; i++) {
        var categoryCard = $('<div>');
        $('.categoryBar').append(categoryCard);
        categoryCard.text(categories[i].title);
        categoryCard.addClass('categoryCard' + ' ' + categories[i].title)
    };
    var categorySelectButton = $('<div>');
    $('.startBar').append(categorySelectButton);
    categorySelectButton.addClass('startButton');
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
var getQuestion = function(num) {
    // This will fetch and display the questions as well as the answers and increment a variable to show the question count remaining and use that same variable to fetch the question
    var questionBox = $('<div>');
    $('.questionBar').append(questionBox);
    questionBox.text(category.questionArray[num]);
};

var getAnswers = function() {
        for (var i = 0; i < 4; i ++) {
        var answerCard = $('<div>');
        $('.startBar').append(answerCard);
        answerCard.text(category.answerArray[questionNumber].array[i]);
        answerCard.addClass('answerCard' + ' ' + "answer"+(i))
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
    setTimeout(beginQuiz, 5000);
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
    setTimeout(beginQuiz, 5000);
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
    setTimeout(beginQuiz, 5000);
    // Get rid of everything on the screen and show the in between answers stuff
    // This will be on a timeout rather than an interval
    // after the time out we run a function that Gets the Next Question
}

// ToDo Timer goes wonky, make sure to include clears and resets where neeeded
var timerStart = function() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    console.log(quizTimer);
}

var gameOver = function() {
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
};

var beginQuiz = function() {
    quizTimer = 5;
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
    getQuestion(questionNumber);
    getAnswers()
    } else {
        gameOver();
    }


    // To do: Display and start timer
    
    // To do: display question and answers
    
    // To do: display options at the bottom

    // 
}



var fullReset = function() {
    $('.categoryBar').empty();
    $('.startBar').empty();
    $('.questionBar').empty();
    $('.questionBar').addClass('instructionBar').removeClass('questionBar');
    $('.categoryBar').addClass('instructionBar').removeClass('categoryBar');
    $('.questionBar').addClass('instructionBar').removeClass('categoryBar');
    $('.instructionBar').append(instructions);
    $(startButton).appendTo('.startBar');
    categorySelected = false;
    category.correct = 0;
    category.incorrect = 0;
    questionNumber = 0

};

$(document).ready(function() {

    $('.startBar').on('click','.startButton', function() {
        if (!categorySelected && !gameStarted) {
            goToCategories();
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
            console.log("It did something during the game");
            $.each(category.answerArray[questionNumber].array, function(i) {
                $('.startBar').on('click', '.answer'+i, function(){
                    var response = $(this).text();
                    if (response === category.answerArray[questionNumber].answer) {
                        category.correct ++;
                        console.log($(this).text());
                        postQuestionDisplayCorrect(response);
                    }
                    if (response !== category.answerArray[questionNumber].answer) {
                        category.incorrect ++;
                        console.log($(this).text());
                        console.log(category.answerArray[questionNumber].answer)
                        postQuestionDisplayIncorrect(response);
                    }
                    
                });
            })
        }

    });

    $('.resetBar').on('click', '.resetButton', function() {
        fullReset();
    });

});
