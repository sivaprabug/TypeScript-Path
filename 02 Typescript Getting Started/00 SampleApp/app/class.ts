
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