let sequence3 = [1, 1000];
sequence3.length = 1000;

function showNumbers(number) {    
    for (let i = 0; i <= 1000; i++) {
        sequence3[i] = i;
    }
    
    sequence3.splice(0, 1);
    sequence3.reverse();
        
    let filteredNumbers1 = sequence3.filter((element) => {
        return element % 2 === 1;            
    });
    
    let filteredNumbers2 = sequence3.filter((element) => {
        return element % 3 === 0;            
    });

    let filteredNumbers3 = sequence3.filter((element) => {
        return element % 5 === 0;            
    });

    if (number > 1000) {
        console.log(filteredNumbers1);
        return filteredNumbers1;
    } if (number < 1000) {
        console.log(filteredNumbers2);
        return filteredNumbers2;
    } else {
        console.log(filteredNumbers3);
        return filteredNumbers3;
        }
    } 
    
    
showNumbers(1001);  
showNumbers(999);  
showNumbers(1000);  