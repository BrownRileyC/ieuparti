var categories = [1, 2, 3, 4]

var categorySelected = false;

var instructions;
var startButton;

var goToCategories = function() {
    instructions = $('.instructions').detach();
    startButton = $('.startButton').detach();
    $('.instructionBar').addClass('categoryBar').removeClass('instructionBar');
    for (var i = 0; i < categories.length; i++) {
        var categoryCard = $('<div>');
        $('.categoryBar').append(categoryCard);
        categoryCard.text(i);
        categoryCard.addClass('categoryCard')
    };
    var categorySelectButton = $('<div>');
    $('.startBar').append(categorySelectButton);
    categorySelectButton.addClass('startButton');
    categorySelectButton.text("Select Category");
};

var fullReset = function() {
    $('.categoryBar').empty();
    $('.startBar').empty();
    $('.categoryBar').addClass('instructionBar').removeClass('categoryBar');
    $('.instructionBar').append(instructions);
    $(startButton).appendTo('.startBar');

}

$(document).ready(function() {

    $('.startBar').on('click','.startButton', function() {
        goToCategories();
    });

    $('.resetBar').on('click', '.resetButton', function() {
        fullReset();
    });

});