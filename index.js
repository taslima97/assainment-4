function mindGame(number) {
 let multiplication = number * 3;
 let sum = multiplication + 10;
 let divided = sum / 2;
 let final = divided - 5;
 return final
}
//  let result = mindGame(33);
//  console.log(result);




function evenOdd(string) {
  const parts = string.split('');
if (parts.length % 2 == 0) {
   return 'even'
  }
  else{
   return 'odd'
  }
}
// let result = evenOdd('Batch7');
// console.log(result);



function isLGSeven(number) {
    let result = number -7;
    if (result < 7) {
      return result;
    } 
    else{
      
      return number * 2;
    }
  }
  //  let final = isLGSeven(6);
  //  console.log(final);



  // const list = [1, 3, 5, 4, -25, -4, -8, -6, -8];
function  findingBadData(list) {
  const badData = [];
  for (let i = 0; i < list.length; i++) {
      const element = list[i];

      if (element < 0) {
          badData.push(element);
      }
  }
  return badData.length;
}

// const result = findingBadData(list);
// console.log(result);




 function gemsToDiamond (gem1, gem2, gem3) {
    let firstFriend = gem1 * 21;
    let secoendFriend = gem2 * 32;
    let thirdFriend = gem3 * 43;
    let  totalDiamond = firstFriend + secoendFriend + thirdFriend;
    if(totalDiamond < 2000){
       return totalDiamond;
    }
    else {
       return totalDiamond - 2000;
    }
   
   
   }
   // const result = gemsToDiamond(1, 1, 1);
   // console.log(result);