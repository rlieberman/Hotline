
var questions = [
  "How are you feeling right now?",
  "Do you need to talk?",
  "Do you need to talk about the election?",
  "Do you have something to say?",
  "Do you want to share how you're feeling?",
  "Do you need a space to process?",
  "Need to vent?",
  "How do you feel about the election?",
  "Do you have a story to share?",
  "Want to talk about what just happened?",
  "How do you feel?"
]


window.onload = function() {


  var arr = questions.length;
  var choice = Math.floor(Math.random() * arr);
  console.log(choice);

  var newQuestion = questions[choice];
  console.log(newQuestion);

  document.getElementById("question").innerHTML = newQuestion;

  
};