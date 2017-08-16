function displayMeassge(): void {
    console.log("Welcome to void type!");
}
displayMeassge();


function test(): any {
    console.log("Welcome to test any type!");
}
test();



let unusable: void = undefined;
console.log('unusable', unusable);