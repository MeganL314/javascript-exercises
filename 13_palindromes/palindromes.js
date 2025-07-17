const palindromes = function (str) {
    
    str = str.replace(/[.,!'"\\\s]/g, "");
    let length = str.length;

    let pal = "";
    while(length>0){
        pal = pal+str[length-1];
        length = length -1;
    }
    return pal.toLowerCase() == str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
