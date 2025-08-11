function oddAvg(numbers){
    const odd = [];
    for(const number of numbers){
        if ( number%2 === 1 ){
            console.log(number);
            odd.push(number)
        }
    }
    console.log(odd);
    let sum = 0;
    for(const number of odd){
        sum = sum + number;
    }
    console.log('Sum of all odds: '+ sum)
    console.log('Average of Odd numbers: ' + sum/odd.length)
}

const numbers = [42, 3 , 6, 88 , 99, 63,47];
const avg = oddAvg(numbers);
console.log('Average of the odd number is: ', avg)