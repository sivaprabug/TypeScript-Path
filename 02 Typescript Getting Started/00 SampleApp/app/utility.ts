class Utility {

    static getInputValue(elementID: string): string {
        
        let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
    }
    
}