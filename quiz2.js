// quiz2.js
// I need to improve the quiz app before I start
// adding the other features

/*	Create a user object that can store all the answers 
	and the name of the user. */
// function User(firstname, lastname){
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	var score;
	
// 	function storeAnswers(){
		
// 	}
// }



/* 	Create the question/button object, so that the user can go back
	and forth between quesions. This object will also have
	validation for answering questions	*/
	

// function for validating the user input
// function validate()
// {
//     var radios = document.getElementsByName('option');
//     var selected;
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].type === 'radio' && radios[i].checked) {
//             // get value, set checked flag or do whatever you need to
//             var selected = radios[i].value;
//             document.getElementById("quiz").value = selected;
// 		}
//     };
//     if (selected==null){
// 		alert("Please select an option");
// 	}
// }
/**
 * Created with JetBrains WebStorm.
 * User: winious
 * Date: 8/19/13
 * Time: 10:26 AM
 * To change this template use File | Settings | File Templates.
 */
var allQuestions = [
    {question: "What is the largest state (by area) in the U.S?",
    choices: ["New Jersey", "Texas", "California", "Alaska"],
    correctAnswer:3},
    {question: "What is the title of Jonathan Franzen's Last book?",
        choices: ["Attica", "Benjamin Button", "Freedom", "Mouse Hog"],
        correctAnswer:2},
    {question: "What is the most populous state in the U.S?",
        choices: ["New Jersey", "Texas", "California", "Alaska"],
        correctAnswer:2},
    {question: "What is the capital of the U.S?",
        choices: ["New York City", "Philadelphia", "Boston", "Washington, D.C."],
        correctAnswer:3},
    {question: "What food item was consumed the most in the U.S?",
        choices: ["Pizza", "Hot Dog", "Olive Garden", "Coke"],
        correctAnswer:0},
    {question: "What is the formal name of the house mouse?",
        choices: ["vas deferens", "mus musculus", "mouses de houses", "\'Ahhh\'"],
        correctAnswer:1},
    {question: "No shirts, no shoes, no ____",
        choices: ["Wallet", "Service", "Worries", "Shave"],
        correctAnswer:1},
    {question: "The number one tourist destination in the U.S.",
        choices: ["New York City", "Philadelphia", "Boston", "Washington, D.C."],
        correctAnswer:0},
    {question: "Two of the Powerball winners were from which state?",
        choices: ["New Jersey", "Texas", "California", "Alaska"],
        correctAnswer:0},
    {question: "By population, the fastest growing state in the U.S.",
        choices: ["New Jersey", "Texas", "California", "Alaska"],
        correctAnswer:1}
];
// To keep track of the iterations through the allQuestions object
var counter = 0;
// array to keep track of answers
var answered = [-1];
console.log("answered: " + answered);
// To keep track of score
var score = 0;
// Run the first iteration of the script once the page loads
window.onload = createRadio(0);


// The initial function to create the first question of the quiz.
function createRadio(increment){
	console.log("increment " + increment);
	counter+=increment;
	console.log("counter " + counter);
	console.log("answered in createRadio " + answered);
    var f = document.createElement("form");
    var text = document.createTextNode(allQuestions[counter].question);
    var br = document.createElement('br');
    f.appendChild(text);
    f.appendChild(br);
    f.name ='quiz';
	console.log(f);
    for (var i=0; i< allQuestions[counter].choices.length; i++) {
        var f_in = document.createElement('input');
        f_in.type = 'radio';
        f_in.name = 'option';
        f_in.value = allQuestions[counter].choices[i];
		if (i == answered[counter]) {
			console.log("f_in: " + answered[counter]);
			f_in.checked = true;
		}
        f.appendChild(f_in);
        var lab = document.createTextNode(allQuestions[counter].choices[i]);
        var br2 = document.createElement('br');
        f.appendChild(lab);
        f.appendChild(br2);
    }
	var action = document.getElementById("quiz");
	//console.log(action);
    document.getElementById("quiz").appendChild(f);
    createButton();
}

// create both next and back buttons
function createButton(){
	var btn=document.createElement("button");
    var t=document.createTextNode("Next");
	btn.appendChild(t);
    btn.onclick = replaceRadio;
    document.getElementById("quiz").appendChild(btn);
	var back=document.createElement("button");
	var backText=document.createTextNode("Back");
	back.appendChild(backText);
	back.onclick = replaceRadioBack;
	document.getElementById("quiz").appendChild(back);
}

// This function is used in place of createRadio after the first iteration.
function replaceRadio(){
	addAnswered();
    if (counter == allQuestions.length-1) {
        clearPage();
		checkScore();
        var fin = document.getElementById("quiz");
        var notify = document.createTextNode("Your Score is: " + score);
        fin.appendChild(notify);
    } else {
        clearPage();
        createRadio(1);
    }
}

// This function will go backwards
function replaceRadioBack(){
	addAnswered();
    if (counter == allQuestions.length-1) {
        clearPage();
		checkScore();
		//console.log("whathwat");
        var fin = document.getElementById("quiz");
        var notify = document.createTextNode("Your Score is: " + score);
        fin.appendChild(notify);
    } else {
        clearPage();
        createRadio(-1);
    }
}
// Check to see if selected answer was correct.
function check()
{
    var radios = document.getElementsByName('option');
	//console.log("radios: " + radios);
    var value;
    var corAns = allQuestions[counter].choices[allQuestions[counter].correctAnswer];
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            var ans = radios[i].value;
        }
    }
    if (ans == corAns) {
        ++score;
    }
}
// Function to check score and then clear page.
var clearPage = function() {
    //check();
    var rem=document.getElementById("quiz");
	// remove all the child nodes
	while(rem.childNodes[0]){
	    rem.removeChild(rem.childNodes[0]);
		//console.log("removed");
	}
	//console.log(answered);
	//console.log("correct answer:" + allQuestions[counter].correctAnswer);
}

// function to calculate score
function checkScore(){
	for (var i =0; i < allQuestions.length-1; i++){
		console.log("correct answers:" + allQuestions[i].correctAnswer);
		if (answered[i] == allQuestions[i].correctAnswer){
			++score;
		}
	}
}

// function to add selection to answered array
function addAnswered(){
	var answers = document.getElementsByName('option');
	for (var i = 0; i < answers.length; i++){
		if (answers[i].checked){
			answered[counter] = i;
		}
	}
}