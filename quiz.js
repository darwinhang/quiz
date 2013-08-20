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

// Run the first iteration of the script once the page loads
window.onload = createRadio;
// To keep track of the iterations through the allQuestions object
var counter = 0;
// To keep track of score
var score = 0;
var space = document.getElementById("action");
// The initial function to create the first question of the quiz.
function createRadio(){
    var f = document.createElement("form");
    var text = document.createTextNode(allQuestions[counter].question);
    var br = document.createElement('br');
    f.appendChild(text);
    f.appendChild(br);
    f.name ='quiz';
    for (var i=0; i< allQuestions[counter].choices.length; i++) {
        var f_in = document.createElement('input');
        f_in.type = 'radio';
        f_in.name = 'option';
        f_in.value = allQuestions[counter].choices[i];
        f.appendChild(f_in);
        var lab = document.createTextNode(allQuestions[counter].choices[i]);
        f.appendChild(lab);
    }
    document.getElementById("action").appendChild(f);
    counter++;
    createButton();
}

function createButton(){
    var btn=document.createElement("button");
    var t=document.createTextNode("Next");
    btn.appendChild(t);
    btn.onclick = replaceRadio;
    document.getElementById("demo").appendChild(btn);
}

// This function is used in place of createRadio after the first iteration.
function replaceRadio(){
    if (counter == allQuestions.length) {
        clearPage();
        var fin = document.getElementById("action");
        var notify = document.createTextNode("Your Score is: " + score);
        fin.appendChild(notify);
    } else {
        clearPage();
        createRadio();
    }
}
// Check to see if selected answer was correct.
function check()
{
    var radios = document.getElementsByName('option');
    var value;
    var corAns = allQuestions[counter-1].choices[allQuestions[counter-1].correctAnswer];
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
    check();
    var rem=document.getElementById("action");
    rem.removeChild(rem.childNodes[0]);
    rem.removeChild(rem.childNodes[0]);
}