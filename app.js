'use strict';
let score = 0; //Set score to 0
let total = 5; //Total number of questions
let point = 1; //Points per correct answer
let currentQuestion = 0;


let quizData = [
  {
    question:'Which grows faster. your fingernails or your toenails?',
    answers:['Fingernails','Toenails','About the same'],
    correctAnswer: '0',
    answerInfo:'Fingernails grow about twice as fast as toenails, at 3.47 millimeters per month compared with 1.62 millimeters per month.'
  },
  {
    question:'Which hand does more of the work when typing?',
    answers:['Right Hand', 'Left Hand', 'Equal amounts, 50/50'],
    correctAnswer: '1',
    answerInfo:'If you position your hands correctly on the keyboard, your left hand will do 56% of the work.'
  },
  {
    question:'Which finger are you most likely to break?',
    answers:['Thumb','Index finger','Pinky'],
    correctAnswer: '2',
    answerInfo:'Broken pinkies make up about one-third of all hand fractures in adults. Why? The pinky isn\'t as protected hanging out there on the end, and the bone is about the width of a pencil.',
  },
  {
    question:'How many muscles are in each finger?',
    answers:['Two','Five','None'],
    correctAnswer: '2',
    answerInfo: 'Even though most of your body’s moving parts have muscles, your fingers don\'t. They\'re moved by muscles in your wrist, palm, and forearm that are attached to tendons, or tough bands of connective tissue, in your fingers.',
  },
  {
    question:'What causes a difference in length between your ring and index fingers?',
    answers:['Protein', 'Testerone','Genetics'],
    correctAnswer: '1',
    answerInfo: 'The difference is determined by the hormone Testosterone early on during a baby\'s growth in the womb. Most men have longer ring fingers, while the opposite is true for many women.',
  },
];
  

$( document ).ready(function() {
  // Display Welcome Screen
  $(this).find('.nextContainer').hide();
  $(this).find('.quizContainer').hide();

  $(this).find('.start').click(function(){
    displayCurrentQuestion();
  });

});


//Display Current Question
function displayCurrentQuestion(i) {
  $('.welcome').hide();
  $('.quizContainer').show();
  $('.quizForm').show();


  let question = quizData[currentQuestion].question;
  let questionClass = $('.quizForm > .question');
  let choiceList = $('.quizForm > .choiceList');
  let numChoices = quizData[currentQuestion].answers.length;

  $(this).find('.quizMessage').hide();

  $(questionClass).text(question);
  
  // Remove all current <li> elements (if any)
  $(choiceList).find('li').remove();

  let choice;
  for (i = 0; i < numChoices; i++) {
    choice = quizData[currentQuestion].answers[i];
    $(`<li><input id= "choice${i}" type="radio" value= ${i}name="dynradio"  required /> <label for = "choice${i}"> ${choice} </label>  </li>`).appendTo(choiceList);
  }
  //Submit Answer
  $('.submit').on('click', function(event){
    event.preventDefault();
    console.log('sumbitted');
    
    //Error Message 
    let value = $('input[type="radio"]:checked').val();

    if (value == undefined) {
      $('.quizMessage').text('Please select an answer!');
      $('.quizMessage').show();
    } else {
  
      $('.quizMessage').hide();
      process(currentQuestion);
    }

  });

}
//Display Next Question
$('.continue').on('click', function (i) {
    
//Display next question
  currentQuestion++;
  //Populate DOM
  let question = quizData[currentQuestion].question;
  let questionClass = $('.quizForm > .question');
 
  let choiceList = $('.quizForm > .choiceList');
  let numChoices = quizData[currentQuestion].answers.length;

  $(questionClass).text(question);

  // Remove all current <li> elements (if any)
  $(choiceList).find('li').remove();

  let choice;
  for (i = 0; i < numChoices; i++) {
    choice = quizData[currentQuestion].answers[i];
    $('<li><input type="radio" value=' + i + ' name="dynradio"  required />' + choice + '</li>').appendTo(choiceList);
  }
  
  
  //Show next question
  $('.quizContainer').show();
  $('.nextContainer').hide();
  
});
 

//Process quiz answers
function process(n){

//Get input value
  let submitted = $('input[type="radio"]:checked').val();
  if (submitted == quizData[currentQuestion].correctAnswer){
    score++;
    //Correct answer screen
    $('.correctInfo').text(quizData[currentQuestion].answerInfo);
    $('.correctGroup').show();
    $('.nextContainer').show();
    $('.quizContainer').hide();
    $('.incorrectGroup').hide();
  }

  //Incorrect answer display

  else{
    //Incorrect answer screen
    $('.incorrectInfo').text(quizData[currentQuestion].answerInfo);
    $('.incorrectGroup').show();
    $('.nextContainer').show();
    $('.quizContainer').hide();
    $('.correctGroup').hide();

  }
  if (n == total - 1){
    
    $('#results').html(`<h3>Your final score is: ${score} out of 5</h3> <a href="index.html">Take Quiz Again</a>`);
    $('.continue').hide();
  }
  else {
    $('#results').html(`<h3>Your score is: ${score} out of 5</h3>`);
  }
  console.log(n);
}

//Add event listners
window.addEventListener('load',quizData,false);

   

