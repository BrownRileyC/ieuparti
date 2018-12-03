food = {
    title: "Food",
    Q1: "Question 1",
    Q2: "Question 2",
    Q3: "Question 3",
    Q4: "Question 4",
    correct: 0,
    incorrect: 0
};

animals = {
    title: "Animals",
    Q1: "Question 1",
    Q2: "Question 2",
    Q3: "Question 3",
    Q4: "Question 4",
    correct: 0,
    incorrect: 0
};

art = {
    title: "Art",
    Q1: "Question 1",
    Q2: "Question 2",
    Q3: "Question 3",
    Q4: "Question 4",
    correct: 0,
    incorrect: 0
};

sports = {
    title: "Sports",
    Q1: "Question 1",
    Q2: "Question 2",
    Q3: "Question 3",
    Q4: "Question 4",
    correct: 0,
    incorrect: 0
};

var categories = [food, art, sports, animals]


var categorySelected = false;
var category;
var quizTimer = 20;

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
}
var getQuestion = function() {
    // This will fetch and display the questions as well as the answers and increment a variable to show the question count remaining and use that same variable to fetch the question
}

var postQuestionDisplay = function() {
    // Get rid of everything on the screen and show the in between answers stuff
    // This will be on a timeout rather than an interval
    // after the time out we run a function that Gets the Next Question
}
var timerStart = function() {
    var intervalId = setInterval(count, 1000);
    if (quizTimer === 0) {
        clearInterval(intervalId);
        quizTimer = 20;

    }
}
var beginQuiz = function() {
    timerStart();

    // To do: Display and start timer
    
    // To do: display question and answers
    
    // To do: display options at the bottom

    // 
}

var fullReset = function() {
    $('.categoryBar').empty();
    $('.startBar').empty();
    $('.categoryBar').addClass('instructionBar').removeClass('categoryBar');
    $('.instructionBar').append(instructions);
    $(startButton).appendTo('.startBar');
    categorySelected = false;
    category.correct = 0;
    category.incorrect = 0;

};

$(document).ready(function() {

    $('.startBar').on('click','.startButton', function() {
        if (!categorySelected) {
            goToCategories();
            $.each(categories, function(i) {
                $('.categoryBar').on('click', '.'+categories[i].title, function(){
                    categorySelected = true;
                    category = categories[i];
                });
            });
        }
    });

    $('.resetBar').on('click', '.resetButton', function() {
        fullReset();
    });

});