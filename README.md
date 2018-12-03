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
* 在micro1设置全局方法window.onhashchange事件，当#后的路由发生变化后触发此事件
```javascript
window.onhashchange=function(data){
	// console.log(location.hash)
	if(location.hash.startsWith('#/micro2')){
		SystemJS.import("/micro2/micro2.js")
	}
	if(location.hash.startsWith('#/micro3')){
		SystemJS.import("/micro3/micro3.js")
	}
}
```
  当路由指到micro2则引入/micro2/micro2.js，(根据下边说到的反向代理，实现路由跳转，即引入micro2服务下打包的micro2.js)
* 在micro1服务下做webpack代理配置，实现服务跳转 跳转到相应的配置下
```javascript
proxy: {
    "/micro2": {
            target: "http://192.168.100.176:8088",
            pathRewrite: {"^/micro2" : ""}
        },
    "/micro3": {
            target: "http://192.168.100.176:8089",
            pathRewrite: {"^/micro3" : ""}
        },
},
```
  到micro1服务检测到请求地址为/micro2时会自动跳转到target上，并通过pathrewrite的正则表达式将micro2替换成空，所以最后的请求地址就是http://192.168.100.176:8088/micro2.js,自此实现服务下引入其他服务
