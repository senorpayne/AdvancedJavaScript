
module.exports = Letter;
var userinput = process.argv[2];

function Letter (abc){
    this.abc = abc;
    this.show = false;
    
    

    this.letterin = function(){

    if (this.abc ===userinput){
    this.show = true;
        console.log(this.abc);
    
        
        }else{
            console.log("_");


    }
    return "_";

}
    this.check = function(){
        if (this.show === true){
        console.log(this.abc);


    }
    else {
console.log("_");

    }

} };
//var newletter = new Letter("a");
//newletter.check();
//newletter.letterin();

