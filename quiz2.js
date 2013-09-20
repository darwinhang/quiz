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
function validate()
{
    var radios = document.getElementsByName('option');
    var selected;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            var selected = radios[i].value;
            document.getElementById("quiz").value = selected;
		}
    };
    if (selected==null){
		alert("Please select an option");
	}
}
