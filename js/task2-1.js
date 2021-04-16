let sequence2 = [1, 1000];
sequence2.length = 1000;

function showNumbers(number) {    
    for (let i = 0; i <= 1000; i++) {
        sequence2[i] = i;
    }
    
    sequence2.splice(0, 1);
        
    let filteredNumbers1 = sequence2.filter((element) => {
        return element % 2 === 0;            
    });
    
    let filteredNumbers2 = sequence2.filter((element) => {
         return element % 10 === 0;            
    });

    if (number >= 1000) {
        console.log(filteredNumbers1);
        return filteredNumbers1;
    } else {
        console.log(filteredNumbers2);
         return filteredNumbers2;
        }
    }    
    
showNumbers(1000);  
showNumbers(999);  