# micro
## 操作流程

* 在node上运行micro1
* 运行micro2
* 运行micro3
* 点击micro1页面上的micro2标签 会将micro2服务引入到micro1的服务下
* 点击micro1页面上的micro3标签 会将micro3服务引入到micro1的服务下

## 重点讲解
* micro2和micro3服务webpack配置output需要加入library字段，在其webpack打包时会将其打包成一个模块，以便其他模块调用
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
