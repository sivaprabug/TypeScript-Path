function getInputValue(elementID: string): string {
    
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger };