# 对话框组件
	对话框组件可以快速的在页面中生成一个对话框，其大小，内容，字体颜色，动画等效果都可自定义。
#### 优点
1. 原生JS实现
2. 自定义属性丰富，自由度高

## 使用步骤
1. 链接dialog-box.CSS
```
<link rel="stylesheet" href="../src/dialog-box.css">
```
2. 链接JS
```
<script src="../dist/dialog-1.1.7.min.js"></script>
```
3. 复制HTML代码
```
<div class="modal-dialog" id="box1" style="display:none;"> 
    <div class="modal-content">
		<div class="modal-header">
			<h4 class="modal-title">对话框标题</h4>
			<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
		</div>
		<div class="modal-body" style="max-height: initial; overflow: visible;">
			<p>主题内容...</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
			<button type="button" class="btn btn-primary">确定</button>
		</div>
    </div>
</div>
```
4. 新建实例对象并传入参数
```
var obj1 = {
	id:"box1",
	size_width:"small",
	title:"你是我遥不可及的梦啊！",
	title_color:'red',
	content:"夕阳余晖，孤雁翱翔，落霞与孤鹜齐飞，秋水共长天一色。",
	content_color:'#00f',
	posX:"center",
	posY:"center",
	boxshow:{
		status:true,
		color:"rgba(0,252,0,0.5)",
		h_shadow:"0",
		v_shadow:"5px",
		blur:"15px",
	},
	Mousedrag:true,
	animation:true,
	callback:b,
}
var a = new Dialog(obj1);
```
## 传输参数与参数值
| 参数名 | 参数值 | 是否必填 | 参数介绍 | 参数类型 |
| :-----| :---- | :----: | :---- | :---- |
| id | 节点id | 是 | 对话框最外层元素id | string |
| size_width | small / normal / big / 具体宽度 / 默认为600px | 否 | 对话框宽度 | string |
| title | 对话框标题内容  | 否 | 对话框标题内容 | string |
| title_color | #000 / red / rgba() / rgb() | 否 | 标题文字颜色 | string |
| content | 对话框主体内容  | 否 | 对话框主体内容 | string |
| content_color | #000 / red / rgba() / rgb() | 否 | 主体文字颜色 | string |
| posX | x方向偏移距离：100px / left / center / right | 否 | 对话框水平方向位置 | string |
| posY | Y方向偏移距离：100px / top / center / bottom | 否 | 对话框垂直方向位置 | string |
| boxshow | boject,status阴影开关,color颜色,h_shadow水平偏移,v_shadow垂直偏移,blur模糊距离 | 否 | 对话框阴影属性 | object |
| Mousedrag | 布尔值 | 否 | 是否可以拖动 | boolean |
| animation | 布尔值 | 否 | 对话框动画 | boolean |
| callback | function | 否 | 回调函数 | function |