const today = new Date();
console.log(today)
const date = new Date('2062-1-5')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate =  new Date (2091, 0 , 26)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-GB'));