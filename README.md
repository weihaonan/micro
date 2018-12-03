# micro
```javascript
entry: {
    micro3: './src/main.js'
},
output: {
path: config.build.assetsRoot,
filename: '[name].js',
//方便其他模块引入
libraryTarget: 'umd',
library: 'micro3'
},
```
