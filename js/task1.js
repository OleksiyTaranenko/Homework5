function showNumbers1(number) {    
    let sequence1 = new Array(1000);    
    
    for (let i = 1; i <= 1000; i++) {
        sequence1[i] = i;
    }

    if (number >= 0) {        
        return sequence1;
    }
} 

let result1 = showNumbers1(1000);
console.log(result1);
