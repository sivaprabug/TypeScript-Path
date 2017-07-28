# 06 Creating and Using Custom Types - Class Members

 - More features
 - Method implementation
 - Property Implementation
 - Accessors (getters and setters)
 - Access Modifiers
 	- Public
 	- Private
 	- Protected

 	- All private members are used with **_ **

 ```javascript
class Developer {
    department: string;
    private _title: string;
    get title(): string {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }
    documentRequirements(requirements: string): void {
        console.log(requirements);
    }
}
 ```