# 10 Creating and Using Custom Types - Static Members

- Static class members you can call using the **class name** itself
- No need to use **this** keyword.


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

class WebDeveloper extends Developer {
    static jobDescription: string = 'Build cool things!';
    static logFavoriteProtocol() {
        console.log('HTTPS, of course!');
    }
    logJobDescription(): void {
        console.log(WebDeveloper.jobDescription);
    }
}
WebDeveloper.logFavoriteProtocol();
```