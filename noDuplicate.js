const singaraKhor = ['abul', 'babul', 'kabul', 'momo', 'abul', 'rahim', 'momo']
const number = [1, 5, 6, 8 , 7, 9,81, 11, 66, 5, 8, 6, 11]

function noDup(array){
    let newArr = [];
    for(let a=0; a<array.length; a++){
        let exist = false;
        for(let i=0; i<newArr.length; i++){
            if(array[a] === newArr[i]){
                exist = true;
                break;
            }
        } 
        if(!exist){
            newArr.push(array[a]);
        }   
    }
  //console.log(array);
  console.log(newArr);
  return newArr;
}
const arr = noDup(singaraKhor);
//console.log(arr);

function noDuplicate(array){
    const unique = [];
    for (const item of array){
        if (unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArr = noDuplicate(number);
console.log(uniqueArr);

