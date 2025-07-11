const repeatString = function(string, num) {
    let out_string = "";
    let i = 0;
    if(num < 0){
        return('ERROR')
    }
    while(i < num){
        out_string = out_string + string;
        i = i + 1;
    }
    return out_string;
};

// Do not edit below this line
module.exports = repeatString;
