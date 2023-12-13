const findTheOldest = function(peopleList) {
    peopleList.forEach(a => {
        const date1 = a.yearOfBirth;
        let date2 = (new Date()).getFullYear();
        if ("yearOfDeath" in a) {
            date2 = a.yearOfDeath;
        } 
        a.age = date2 - date1;
    });

    peopleList.sort((a,b) => {
        if (a.age > b.age) return -1;
        if (a.age < b.age) return 1;
    });

    console.log("Oldest: " + peopleList[0].name);
    return peopleList[0];
};

debugger;
// Do not edit below this line
module.exports = findTheOldest;
