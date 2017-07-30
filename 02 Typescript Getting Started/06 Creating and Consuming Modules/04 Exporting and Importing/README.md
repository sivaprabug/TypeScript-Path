# 04 Creating and Consuming Modules - Exporting and Importing

- The api expose the module
- Export function,interfaces,classes,simple codes
- Without export keyword not accessible by other modules.
- **as** used for **alias**

### Export Statements

```javascript
// person.ts

interface Person{ }

function hireDeveloper(): void{ }

class Employee{ }

class Manager{ } // not accessible outside the module

export { Person, hireDeveloper, Employee as StaffMember};
```
### Importing from a Module

- Several different way
- {a,b,c} using comma values

```javascript
// player.ts

import { Person, hireDeveloper} from './person';

let human: Person;

import Worker from'./person';

let engineer: Worker= newWorker();

import { StaffMember as CoWorker} from './person';

let emp: CoWorker= new CoWorker();

import * as HRfrom './person';

HR.hireDeveloper();

```