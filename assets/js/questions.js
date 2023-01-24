let score = 0


var ques1 = prompt("What is a loop in JavaScript? \nA - Used to perfom repeated tasks based on a condition \nB - always returns value without a condition \nC - it Skips the current iteration \nAnswer: ")
alert("The answer you have selected is " + ques1);

if (ques1 === "A" || ques1 === "a"){
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score = 0;
  alert("Your answer is not correct");
}

var ques2 = prompt("What is JavaScript used for? \nA - Used for colors and layouts \nB - for the structure of the webpage \nC - used for interactivity \nAnswer: ");

if (ques2 === "C" || ques2 === "c") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct")
}

var ques3 = prompt("What is a string? \nA - A number \nB - characters written with quotes \nC - a true or false value \nAnswer: ");

if (ques3 === "B" || ques3 === "b") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct")
}

var ques4 = prompt("What does null mean? \nA - It has a value of zero\nB - invalid or non-existent value\nC - the average value \nAnswer: ")
alert("The answer you have selected is " + ques4);

if (ques4 === "B" || ques4 === "b") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct.")
}

var ques5 = prompt("What does the == operator do? \nA - compares types\nB - compares values\nC - compares values and types \nAnswer: ")
alert("The answer you have selected is " + ques5);

if (ques5 === "B" || ques5 === "b") {
  score++;
 alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
alert("Your answer is not correct.")
}


if (score >= 3) {
  alert("You have passed with a score of " + score);
} else {
  alert("You did not pass with a score of " + score)
}




