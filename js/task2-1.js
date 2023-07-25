function showNumbers2(number) {
    let sequence2 = [];    
    
    for (let i = 1; i <= 1000; i++) {
        sequence2[i] = i;
    }
    
    let filteredNumbers1 = sequence2.filter((element) => {        
        return element % 2 === 0 && element % 10 === 0;              
    });    
    
    if (number >= 0) {        
        return filteredNumbers1;
    }         
}    
    
let result2 = showNumbers2(1000);
console.log(result2);
