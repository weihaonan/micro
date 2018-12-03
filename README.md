# micro
##操作流程
*在node上运行micro1
*运行micro2
*运行micro3
*点击micro1页面上的micro2标签 会将micro2服务引入到micro1的服务下
*点击micro1页面上的micro3标签 会将micro3服务引入到micro1的服务下
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
