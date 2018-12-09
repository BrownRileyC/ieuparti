var food = {
    title: "Alcohol",
    questionArray: ["This liquor is made from the agave plant.", "This cocktail is made with honey, whiskey, lemon, and hot water.", "The name of this style of beer means India Pale Ale.", "Guiness beer was first brewed in this country.", "This president's resume includes selling liquor before his presidency."],
    answerArray: [{
        array: ["Gin", "Tequila", "Vodka", "Port"],
        answer: "What is Tequila",
        image: "assets/images/Tequila.jpg",
        text: "Tres Agaves Tequila"
        },
        {
        array: ["Hot Toddy", "Americano", "French 75", "Cosmopolitan"],
        answer: "What is Hot Toddy",
        image: "assets/images/hot-toddy.jpg",
        text: "A warming mug full of Hot Toddy"
        },
        {
        array: ["Witbier", "IPA", "Dubble", "Saison"],
        answer: "What is IPA",
        image: "assets/images/IPA.jpeg",
        text: "Goose Island IPA"
        },
        {
        array: ["Scotland", "France", "Ireland", "Mexico"],
        answer: "What is Ireland",
        image: "assets/images/Ireland.jpg",
        text: "A map of Ireland"
        },
        {
        array: ["George Washington", "George W Bush", "JFK", "Abraham Lincoln"],
        answer: "What is Abraham Lincoln",
        image: "assets/images/Lincoln.jpg",
        text: "Abraham Lincoln"
        }],
    correct: 0,
    incorrect: 0
};

var animals = {
    title: "Animals",
    questionArray: ["This mammal is the largest species in the known world.", "This species of animal, with a much longer neck, surprisingly has the same number of vertebrae as humans.", "Often mistaken for a whale, this species is actually in the dolphin family.", "This animal is renowned for its incredible memory.", "This animal is commonly thought to have only a three second memory."],
    answerArray: [{
        array: ["The Elephant", "The Elephant Seal", "The Blue Whale", "The Human"],
        answer: "What is The Blue Whale",
        image: "assets/images/BlueWhale.jpeg",
        text: "The Majestic Blue Whale"
    },
    {
        array: ["The Giraffe", "The Hummingbird", "The Leopard", "The Blue Whale"],
        answer: "What is The Giraffe",
        image: "assets/images/Giraffe.jpg",
        text: "A lovely sunset complimented by a Giraffe"
    },
    {
        array: ["The Sperm Whale", "The Great White Shark", "The Orca", "The Tiger"],
        answer: "What is The Orca",
        image: "assets/images/Orca.gif",
        text: "The orca, also know as a Killer Whale"
    },
    {
        array: ["The Elephant", "The Goldfish", "The Silverback Gorilla", "The Toad"],
        answer: "What is The Elephant",
        image: "assets/images/Elephant.jpg",
        text: "An Elephant waving hello"
    },
    {
        array: ["The Elephant", "The Baboon", "The Dog", "The Goldfish"],
        answer: "What is The Goldfish",
        image: "assets/images/goldfish.jpg",
        text: "With proper training a goldfish can learn and remember many things"
        
    }],
    correct: 0,
    incorrect: 0
};

var art = {
    title: "Art",
    questionArray: ["This famous artist astonishingly only sold 1 painting in his lifetime.", "Paul Gauguin's work, The Yellow Christ, belongs to this artistic movement", "This ancient artist was the court sculptor to Alexander the Great", "This art movement developed as a reaction to the strict regulations and symmetry of the Baroque", "Leonardo da Vinci's The Last Supper had this element romved by careless workers."],
    answerArray: [{
        array: ["Salvador Dali", "Leonardo Da Vinci", "Paul Gauguin", "Vincent Van Gogh"],
        answer: "What is Vincent Van Gogh",
        image: "assets/images/TheRedVineyardsAtArlesVanGogh.jpg",
        text: "Van Gogh's only painting sold while alive: The Red Vineyards at Arles"
    },
    {
        array: ["Pointilism", "Cloisonnism", "Modernism", "Cubism"],
        answer: "What is Cloisonnism",
        image: "assets/images/ChristoGiallo.jpg",
        text: "Christo Giallo, or The Yellow Christ"
    },
    {
        array: ["Lysippus", "el Greco", "Praxiteles", "Vulcan"],
        answer: "What is Lysippus",
        image: "assets/images/AlexandreTheGreat.jpg",
        text: "Lysippus's marble bust of Alexander the Great"
    },
    {
        array: ["Dadaism", "Cubism", "Romanticism", "Rococo"],
        answer: "What is Rococo",
        image: "assets/images/Rococo.jpg",
        text: "A rococo stylized fixture in Zwiefalten Abbey"
    },
    {
        array: ["Judas", "Jesus' Feet", "A pouch of a silver coins", "God"],
        answer: "What is Jesus' Feet",
        image: "assets/images/TheLastSupper.jpg",
        text: "The Last Supper"
        
    }],
    correct: 0,
    incorrect: 0
};

var sports = {
    title: "Sports",
    questionArray: ["This is the only team to play in every soccer World Cup tournament.", "This American Football team won the first two Super Bowls (in 1967 and 1968).", "This boxer was the first to defeat Muhammad Ali in professional Boxing", "In horse racing, this is awarded to a horse which wins the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes.", "This Williams sister has won more tennis grand slam titles."],
    answerArray: [{
        array: ["USA", "Italy", "England", "Brazil"],
        answer: "What is Brazil",
        image: "assets/images/Brazil.jpg",
        text: "Brazil's Soccer team celebrating"
    },
    {
        array: ["The Eagles", "The Green Bay Packers", "The Bucanners", "The Cowboys"],
        answer: "What is The Green Bay Packers",
        image: "assets/images/GreenBayPackers.jpg",
        text: "The Green Bay Packers"
    },
    {
        array: ["Rocky Balboa", "Jack Johnson", "Joe Frazier", "Apollo Creed"],
        answer: "What is Joe Frazier",
        image: "assets/images/JoeFrazier.jpg",
        text: "Joe Frazier"
    },
    {
        array: ["A Mint Julep", "The Triple Crown", "The Golden Oat Sack", "A Nice Pet"],
        answer: "What is The Triple Crown",
        image: "assets/images/TripleCrown.jpg",
        text: "The Triple Crown Trophy"
    },
    {
        array: ["Serena", "William Penn", "Venus", "Pharell"],
        answer: "What is Serena",
        image: "assets/images/SerenaWilliams.jpg",
        text: "Serena Williams"
        
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
        $('.timer').text("Seconds left: "+quizTimer)
        if (quizTimer === 0) {
            clearInterval(intervalId);
            postQuestionDisplayTimeout();
        }
    }
        
    var getQuestion = function() {
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
            answerCard.text("What is "+category.answerArray[randomNumber].array[i]);
            answerCard.addClass('answerCard' + ' ' + "answer"+(i) + " "+"button")
        };
    };

    var displayImage = function() {
        var displayDiv= $('<div>')
        displayDiv.addClass('imageBox')
        $('.startBar').append(displayDiv);
        var interImage = $('<img>');
        var interText = $('<p>');
        displayDiv.append(interImage);
        displayDiv.append(interText);
        interText.text(category.answerArray[randomNumber].text).addClass('text');
        interImage.attr('src',category.answerArray[randomNumber].image).addClass('image')
    };

    var postQuestionDisplayCorrect = function(str) {
        clearInterval(intervalId);
        $('.questionBar').empty();
        $('.startBar').empty();
        interQuestion = $('<div>');
        interQuestion.appendTo('.questionBar');
        interQuestion.text("Great job! You guessed " + str +" and you got it!");
        questionNumber++;
        displayImage();  
        setTimeout(beginQuiz, 5000);
    }

    var postQuestionDisplayIncorrect = function(str) {
        clearInterval(intervalId);
        $('.questionBar').empty();
        $('.startBar').empty();
        interQuestion = $('<div>');
        interQuestion.appendTo('.questionBar');
        interQuestion.text("Too bad.  You answered " + str + " but the correct answer was " + category.answerArray[randomNumber].answer);
        questionNumber++;
        displayImage();
        setTimeout(beginQuiz, 5000);
    }

    var postQuestionDisplayTimeout = function() {
        $('.questionBar').empty();
        $('.startBar').empty();
        interQuestion = $('<div>');
        interQuestion.appendTo('.questionBar');
        interQuestion.text("You ran out of time!  The correct answer was " + category.answerArray[randomNumber].answer);
        category.incorrect ++ ;
        questionNumber++;
        displayImage();
        setTimeout(beginQuiz, 5000);
    }

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
        timerBox.text("Seconds left: "+quizTimer);
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
            fullReset();
            $('.startBar').off('click');
            beginQuiz();
            categorySelected = true;
            gameStarted = true;
            $.each(category.answerArray[randomNumber].array, function(i) {
                $('.startBar').on('click', '.answer'+i, function(){
                    var response = $(this).text();
                    if (response === category.answerArray[randomNumber].answer) {
                        category.correct ++;
                        postQuestionDisplayCorrect(response);
                    };
                    if (response !== category.answerArray[randomNumber].answer) {
                        category.incorrect ++;
                        postQuestionDisplayIncorrect(response);
                    };
                });
            });
        });
    };

    generateStartOnClicks();

});
