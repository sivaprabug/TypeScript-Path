# Classes and Interfaces - Defining Classes

- Built in support for class
- JS dont have Class support
- The Role of Classes in TypeScript
	- Classes act as containers for different members
- TypeScript Class Members

	- Fields
		- Adding variables in to classes.
	- Constructors
		- Initialized an object.
	- Properties
		- **Set** and **get** different fields.
	- Functions
		- Normal Functions

### Defining a classes

```javascript
	class Car {
		//Fields
		//Constructors
		//Properties
		//Functions
	}
```

### Defining a constructors

**- Constructors are used to initialize fields.**
- Some one creates a new instance
```javascript
class Car{
	engine: string;

	constructor(engine: string){
		this.engine =engine;
	}
}

// Other class Type

class Car{
	constructor(public engine: string){
    }
}


// Adding functions in class

class Car{
	engine: string;

	constructor(public engine: string){
    	this.engine = engine;
    }

    start(){
    	return "Started " + this.engine;
    }

    stop(){
    	return "Stopped " + this.engine;
    }
}
```

- Class members are public by default.
- Properties act as filters and can have get or set blocks.

```javascript
class Car{
	engine: string;

	constructor(public engine: string){
    	this.engine = engine;
    }

    start(){
    	return "Started " + this.engine;
    }

    stop(){
    	return "Stopped " + this.engine;
    }

    set engine(value:string){
    	if(value==undefined) throw 'Supply an Engine !';
    	this._engine = value;
    }
}
```

#### Using complex types

```javascript
class Engine {
	constructor(public horsePower: number,
							public engineType: string){}
}

class Car {
	private _engine: Engine;

	constructor(engine: Engine) {
		this.engine = engine;
	}
}

```


### Instantiating a Type

Types are instantiated using the "new" keyword

```javascript
var engine = new Engine(300,'V8');
var car = new Car(engine);
```