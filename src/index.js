module.exports = function solveEquation(equation) {
  var answer = [];
  // убираю из строки все, кроме чисел с соответствующим знаком
   var str = equation.replace(/\s/g, '').replace("*x^2", " ").replace("*x", " ");
   //создаю массив чисел(был массив строк)
   var arr = str.split(" ");
    arr = arr.map(function(num) {
  return Number(num);
});

var D = Math.pow(arr[1],2) - 4* arr[0] *arr[2];
if(D > 0){
answer.push(Math.round((arr[1]*(-1) + Math.sqrt(D)) / (2*arr[0])));
answer.push(Math.round((arr[1]*(-1) - Math.sqrt(D)) / (2*arr[0])));
 }
 else if(D === 0)
  answer.push(Math.round((arr[1]*(-1)) / (2*arr[0])));

 return answer.sort(function(a,b){return a-b;});

}
