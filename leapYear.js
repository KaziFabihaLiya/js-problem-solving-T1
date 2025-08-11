// Check leap year or not

function isLeapYear(year) { 
    if(year%100!==0 && year % 4 ===0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeapYear(2043);
const isLipi2 = isLeapYear(1900);
const isLipi3 = isLeapYear(2400);
const isLipi4 = isLeapYear(2100);
console.log(isLipi, isLipi2, isLipi3, isLipi4)
