var Letter = require("./letter.js");

function Word(currentword){
            this.currentword = currentword;
            this.wordletters = [];

            
            this.getletter = function(){

                for(var i = 0; i <this.currentword.length; i++)
                {
            
                    var theNewLetter = new Letter(this.currentword[i]);
                    //this.currentword.push(new letters(array[i]));

                    console.log(theNewLetter);
			this.wordletters.push(theNewLetter);
                }
//console.log(this.wordletter);
            }

            this.letterchecker=function(guess){

                if (guess === this.abc){

                }
            }
                
        }
      //  var newletter = new Letter("a");
// newletter.check();
// newletter.letterin();
var newObj = new Word("cat");
newObj.getletter();
module.exports = Word;
        
        //exports.word = word;
        //this.currentword.push(new letters(array[i]))