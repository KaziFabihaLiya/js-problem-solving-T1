// inch to ft 
// 12 inch = 1 ft

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNum = parseInt(feetFraction)
    const inchRemaining = inch%12;
    const result = feetNum + ' ft ' + inchRemaining + ' inch.';
    return result;
}

const shuvoHeight =  inchToFeet2(99);
console.log(shuvoHeight);