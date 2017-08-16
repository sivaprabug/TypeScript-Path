function ProcessData(x: any, y: any) {
  return x + y;
}
let result: any;
let resultVal: any;
result = ProcessData("Hello ", "Any!"); //Hello Any!
console.log('result', resultVal = result);
result = ProcessData(2, 3); //5
console.log('result', resultVal = result);
