
exports.letter = letter;
//var abc = process.argv[2];

function letter (abc){
    this.abc = abc;
    this.show = false;

    if (this.abc ==='')
    this.show = true;

    this.protoype.printInfo = function(){

        if (this.show){
            return this.abc;
        }
    }
    return "_";


} 

