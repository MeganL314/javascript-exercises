const sumAll = function(num1, num2) {

    if (num2 < num1){
        const reassign = num1;
        num1 = num2;
        num2 = reassign;
    }
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) ){
        return "ERROR";
    }
    let final = num2;
    let current = num1;

    while(current < num2){
        final = final + current;
        current = current + 1;
    }
    return final;
};



// Do not edit below this line
module.exports = sumAll;
