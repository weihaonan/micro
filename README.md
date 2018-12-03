# micro
<h3>操作流程</h3>
	<ul>
		<li>在node上运行micro1</li>
		<li>运行micro2</li>
		<li>运行micro3</li>
		<li>点击micro1页面上的micro2标签 会将micro2服务引入到micro1的服务下</li>
		<li>点击micro1页面上的micro3标签 会将micro3服务引入到micro1的服务下</li>
	</ul>
<h3>重点代码</h3>
<ul>
	<li>micro2和micro3服务webpack配置output需要加入library字段，在其webpack打包时会将其打包成一个模块，以便其他模块调用
	
	</li>
</ul>
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
