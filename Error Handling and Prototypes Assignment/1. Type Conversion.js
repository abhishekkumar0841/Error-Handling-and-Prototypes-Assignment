function convertToNumber(string){
    try{
        if(isNaN(string))
        throw "Invalid Number";
        if(Number(string))
        console.log(string);
    }catch(err){
        console.log(err);
    }
}

convertToNumber("789");
convertToNumber("abhishek");