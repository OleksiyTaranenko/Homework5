function showNumbers3(number) {
    let sequence3 = [];

    for (let i = 1; i <= 1000; i++) {
        sequence3[i] = i;
    }

    sequence3.reverse();

    let filteredNumbers2 = sequence3.filter((element) => {
        return element % 2 === 1 && element % 3 === 0 && element % 5 === 0;
    });

    if (number >= 0) {
        return filteredNumbers2;
    }
}

let result3 = showNumbers3(1000);
console.log(result3);
