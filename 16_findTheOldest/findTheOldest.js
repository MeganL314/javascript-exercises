const findTheOldest = function(array) {
    const currentDate = new Date(); // Creates a Date object for the current date and time
    const currentYear = currentDate.getFullYear(); // Gets the four-digit year


    let new_array = array.map(item => {
        let Age;

        if(item.yearOfDeath !== undefined) {
            Age = item.yearOfDeath - item.yearOfBirth;
        }
        else{
            Age = currentYear - item.yearOfBirth;
        }
        return{age:Age, name:item.name};
});

    return new_array.reduce((a,b) => {
        return (a.age > b.age) ? a : b;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
