var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");
var wordBank = [ "test","help"];
var randWord;


function prompts() {
    
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
    validate: function(){
        if (correct) {
            return true;
        }


    }},
    ])
    .then(function(answer){
		if(answer.toLowerCase() == '') {

        }else {


        }

 function selector(randomWord){
        randWord = wordBank[Math.floor(Math.random()*wordBank.lentgh)];{

            for(var i = 0; i < randWord.length;i++){

                
            }


        }


 }  );
