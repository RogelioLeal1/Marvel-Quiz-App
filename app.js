$(document).ready(function() {
            /* QUESTIONS */
            var questions = [{
                    question: " #1: Tony Stark is More Famously Known As ? ",
                    answers: ['Bat Man', 'Iron Man', 'Super Man', 'El Felix'],
                    correct: 'Iron Man' },
                {
                    question: " #2: What gave Spiderman his powers ? ",
                    answers: ['Kale Salad', 'Radiation', 'Spider Bite', 'New haircut'],
                    correct: 'Spider Bite'
                },
                {
                    question: " #3: Where is Captain America From? ",
                    answers: ['Brooklyn', 'Mexico City', 'Atlanta', 'Mars'],
                    correct: 'Brooklyn'
                },
                {
                    question: " #4: What color is The Hulk ? ",
                    answers: ['Purple', 'Green', 'Red', 'Yellow'],
                    correct: 'Green'
                },
               {
                    question: " #5: What is Black Panther's suit made up of ? ",
                    answers: ['Cabbages', 'Titanium', 'Vibranium', 'Adamantium'],
                    correct: 'Vibranium'
                },
            ]


      /* GLOBAL VARIABLES */
            var questionNum = 0;
            var numCorrect = 0;

            /* Hides questions and percent on page load */
            $('.quizcontent').hide();

            /*  Hides start button on click an displays the first question*/
            $('.start').click(function() {
                    $('.start').hide();
                    $('.quizcontent').fadeIn(800);
                    $('.feedback').text(" Select Correct Answer and Press Submit ");
                    question();
                })
                /* Function that loads questions and answers */
            function question() {
                console.log('questionNum = ' + questionNum);
                if (questionNum < questions.length) {
                    $('.question').text(questions[questionNum].question);
                    for (k = 0; k < questions[questionNum].answers.length; k++) {
                        $('.answers').prepend("<input type='radio' name='answer' class='radio' value='" + k + " '>" + "<label>" + questions[questionNum].answers[k] + "</label>" + "<br>");
                    }
                } else {
                    quizEnd();
                }

            };

            /* remove radio buttons  */
            function removeAnswers() {
                $('.radio').remove();
                $('.answers').empty();
            }

            /* ends quizz and submit results restart quiz  */
            function quizEnd() {
                $('.question').hide();
                $('.answerform').hide();
                $('.current-number').hide();
                $('#submitbtn').hide();
                $('.feedback').text(" You got  " + numCorrect + " out of " + questions.length);
                $('.feedback').css('maxWidth','300px').css('padding','10px').css('backgroundColor','#ffffff');
                var r = $('<br><input class="restart" type="button" value="Restart" onClick="window.location.reload()"/>');
                $(".feedback").append(r)
            }

            /* display number corrrect and total questions  */
            function currentNumbers() {
                $('.current-number').text(" # " + (questionNum + 1) + "/" + questions.length + " | Correct " + numCorrect + "/" + questionNum);
            };


            /*submit button click function*/
            $('#submitbtn').click(function() {
                var userAnswer = $('input[type=radio]:checked').next('label').text();
                var correctAnswer = questions[questionNum].correct;

                //checks the answer and moves to the next question
                if (userAnswer == '') {
                    $('.feedback').text('You need to choose something...').css('backgroundColor','Yellow').css('maxWidth','300px').css('padding','10px');
                } else if (userAnswer == correctAnswer) {
                  console.log(correctAnswer)
                    $('.feedback').text('Correct !').css('backgroundColor','#2BDF04').css('maxWidth','300px').css('padding','10px').css('color','black');
                    removeAnswers();
                    questionNum++
                    numCorrect++
                    question();
                } else {
                    $('.feedback').text('Wrong, the correct answer is ' + correctAnswer).css('backgroundColor','#FE6262').css('maxWidth','300px').css('padding','10px').css('color','black');
                    removeAnswers();
                    questionNum++
                    // currentNumbers()
                    question();
                };
                //console.log('submit clicked');
                //console.log('userAnswer is ' +userAnswer);
                return false;
            })
        });
