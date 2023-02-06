function evenOdd(string) {
   const parts = string.split('');
if (parts.length % 2 == 0) {
    return 'even'
   }
   else{
    return 'odd'
   }
}
let result = evenOdd('Batch7');
console.log(result);