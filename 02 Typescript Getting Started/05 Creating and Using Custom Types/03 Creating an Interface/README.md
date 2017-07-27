# 03 Creating and Using Custom Types - Creating an Interface

```javascript
interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    numOfEmployees: number,
    scheduleMeeting: (topic: string) => void
}
```