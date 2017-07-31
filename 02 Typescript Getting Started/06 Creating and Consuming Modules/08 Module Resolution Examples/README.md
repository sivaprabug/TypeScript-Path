# 08 Creating and Consuming Modules - Module Resolution Examples

#### Resolving Classic Relative Imports

```javascript
// File: /Source/MultiMath/player.ts
import { Developer} from'./person';
```

/Source/MultiMath/person.ts

/Source/MultiMath/person.d.ts

/Source/person.ts

/Source/person.d.ts (continue searching up the directory tree)

#### Resolving Classic Non-relative Imports

```javascript
// File: /Source/MultiMath/player.ts
import{ Developer} from'person';
```
/Source/MultiMath/person.ts

/Source/MultiMath/person.d.ts

/Source/person.ts

/Source/person.d.ts (continue searching up the directory tree)


#### Resolving Node Relative Imports

```javascript
// File: /Source/MultiMath/player.ts
import { Developer} from'./person';
```

/Source/MultiMath/person.ts

/Source/MultiMath/person.tsx

/Source/MultiMath/person.d.ts

/Source/MultiMath/person/package.json **(with "typings" property)**

/Source/MultiMath/index.ts

/Source/MultiMath/index.tsx

/Source/MultiMath/index.d.ts


#### Resolving Node Non-relative Imports

```javascript
// File: /Source/MultiMath/player.ts
import{ Developer} from'person';
```
/Source/MultiMath/node_modules/person.ts (person.tsx, person.d.ts)

/Source/MultiMath/node_modules/person/package.json (with "typings" property)

/Source/MultiMath/node_modules/index.ts (index.tsx, index.d.ts)

/Source/node_modules/person.ts (person.tsx, person.d.ts)

/Source/node_modules/person/package.json (with "typings" property)

/Source/node_modules/index.ts (index.tsx, index.d.ts)(continue searching up the directory tree)
