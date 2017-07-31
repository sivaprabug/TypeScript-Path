# 09 Creating and Consuming Modules - Demo Configuring Module Resolution

- Change the tsconfig.json

```json
"module": "commonjs",
"moduleResolution": "node",
"traceResolution" : true,
"baseUrl": "./modules",
"paths": {
"my_lib" : ["./customPath"]
},
rootDirs:[
	"module","src","ts/modules"
]

```