const fibonacci = function(input) {
    let num = Number(input);
    let seq = [1,1];

    if (num == 0){
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    let start = 2;
    let current = 1;
    while (start < num){
        current = Number(seq[start-2]) + Number(seq[start-1]);
        seq.push(current);
        start = start + 1;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
