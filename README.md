# ieuparti
Assignment 5, trivia.

Concept:

    - single player trivia
    - timer on questions
    - jeopardy theme (with the auto progression on questions maybe just allow the player to choose a category to quiz on)

Homework Requirements:
    - Time questions
    - display one question at a time
    - questions run one after another
        - Questions advance regardless of it players answer correctly or not
        - on correct answer display a message telling the player they were correct
        - on incorrect answer tell player they were wrong and what the correct answer was
        - on timeout tell player they ran out of time and tell what the correct answer was
        - continue to the next question without needing any player input
    - players get question and then choose from amongst options (only allow players to choose one option per question)
    - after all questions run display how many questions the player got correct and incorrect as well as an option to restart the game (without refreshing the page);


What happens when you play?
- The page loads
    - Display the name of the game
    - Display the instructions on how to play
    - "start game" button
    - When the player clicks start game remove instructions and bring up the categories available
        - Allow player to only select one category at a time
            - Simple method: Clicking a category starts the game with that category
            - Advanced method: clicking the category brings up a description and you may click the start game button to begin
                - This requires clicking any category to deselect any other categories before selecting itself as well as creating and displaying the description
    - Once the player begins the game and selects the category the categories disappear and the timer/question appears
        - How many questions remain in the top right alogn with the category
        - The timer clearly shows time remaining
            - Likely best to do a simple countdown with numbers but maybe add the jeopardy dot clock as well
        - The question is displayed center screen
            - Give ample time to read questions as well as make sure the questions are fairly short
        - The options are below
            - Add pseudoclasses so that they change when you mouse over making it easy to see which you are hovering/about to select
    - Each time the player clicks an answer check if that answer is correct
        - Make sure the player can only click on one thing at a time
        - incorporate a variable to make sure the onclick only works when possibly answers are displayed
            - maybe even add a small delay to when you are able to answer so that a player doesn't accidentally click before the answers have had a chance to be read.
        - Record the results of the question each time they answer or time out
            - Possibly record the time spent on each question as well so as to show their time on the quiz
    - When the player answers remove the question and answers and display their result on that question as well as the answer to the question
    - Also check to see if the timer ran out
    - When the time has run out tell the player the correct response and show them that they ran out of time.
    - After the player has answered or run out of time and we displayed the result for the question move on to the next question
        - Use a reasonably short amount of time, but long enough to read the answer (maybe ~5 seconds)
    - The player doesn't need to click anything to move on to the next question
    - Once the player has advanced through all the questions display their results
        - On the end page show the player what category they took
        - Show how many questions they answered correctly 
        - show how many questions they answered incorrectly
        - show how many questions they timed out on
        - possibly show how long they spent on the quiz
        - two buttons: one to try that category again and one to go back to the category picking stage


        

To randomly order the questions:
    - Generate a random number from 0-QuestionArray.length
    - save that to random number and pass that to get Question
    - add that to askedQuestions array and throw an if to see if it's in the array then don't do it