let sequence = [1, 1000];
sequence.length = 1000;
    

function showNumbers(number) {    
    for (let i = 0; i <= 1000; i++) {
        sequence[i] = i;
    }

    sequence.splice(0, 1);

    if (number >= 1000) {
        console.log(sequence);
        return sequence;
    }
} 

showNumbers(1000);