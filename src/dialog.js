function Dialog(obj){
	this.box = document.getElementById(obj.id);
	this.box.style.display = "block";
	this.header = this.box.querySelector(".modal-header");
	this.header_title = this.box.querySelector(".modal-title");
	this.body = this.box.querySelector(".modal-body p");
	this.close = this.box.querySelector(".modal-header span");
	this.btn_default = this.box.querySelector(".btn-default");
	this.btn_primary = this.box.querySelector(".btn-primary");
	this.title = obj.title;
	this.type = obj.type;
	this.content = obj.content;
	this.posX = obj.posX;
	this.posY = obj.posY;
	this.title_color = obj.title_color;
	this.content_color = obj.content_color;
	this.size_width = obj.size_width;
	this.boxshow = obj.boxshow;
	this.Mousedrag = obj.Mousedrag;
	this.animation = obj.animation;
	this.callback = obj.callback;
	this.init();
	this.addEvent();
}
Dialog.prototype.init = function(){
	switch(this.size_width){
		case "small":
			this.box.style.width = "3000px";
			break;
		case "normal":
			this.box.style.width = "6000px";
			break;
		case "big":
			this.box.style.width = "900px";
			break;
		default:
			this.box.style.width = this.size_width+"px";
			break;
	}
	switch(this.posX){
		case "center":
			this.box.style.left = "50%";
			this.box.style.transform="translateX(-50%) ";
			break;
		case "left":
			this.box.style.left = "0";
			break;
		case "right":
			this.box.style.right = 0;
			break;
		default:
			this.box.style.left = this.posX+"px";
			break;
	}
	switch(this.posY){
		case "center":
			this.box.style.top = "50%";
			this.box.style.transform+="translateY(-50%)";
			break;
		case "left":
			this.box.style.top = "0";
			break;
		case "bottom":
			this.box.style.top = "100%";
			this.box.style.transform+="translateY(-100%)";
			break;
		default:
			this.box.style.top = this.posY+"px";
			break;
	}
	if(this.type==="comfirm"){
		this.box.querySelector(".btn-default").style.display = "inline-block";
	}
	if(this.animation){
		this.box.style.animation = "slidedown .15s linear forwards";
	}else{
		this.box.style.animation ="";
	}
	if(this.title){
		this.header_title.innerHTML = this.title;
	}
	this.header_title.style.color = this.title_color;
	if(this.content){
		this.body.innerHTML = this.content;
	}
	this.body.style.color = this.content_color;
	if(this.boxshow.status){
		this.box.style.boxShadow= this.boxshow.h_shadow+" "+this.boxshow.v_shadow+" "+this.boxshow.blur+" "+this.boxshow.color;
	}else{
		this.box.style.boxShadow= "";
	}
};
Dialog.prototype.addEvent = function(){
	var that = this;
	var isMouseDown = false;
	var x1,x2,y1,y2,Top,Left;
	this.btn_primary.onclick = function(){
		if(that.animation){
			that.box.style.animation = "slideup .15s linear forwards";
			setTimeout(function(){
				that.box.style.display = "none";
			},500);	
		}else{
			that.box.style.animation ="";
			that.box.style.display = "none";
		}
		if(that.callback){
			that.callback();
		}
		
	};
	this.close.onclick = function(){
		if(that.animation){
			that.box.style.animation = "slideup .15s linear forwards";
			setTimeout(function(){
				that.box.style.display = "none";
			},500);	
		}else{
			that.box.style.animation ="";
			that.box.style.display = "none";
		}
	};
	this.btn_default.onclick = function(){
		if(that.animation){
			that.box.style.animation = "slideup .15s linear forwards";
			setTimeout(function(){
				that.box.style.display = "none";
			},500);
		}else{
			that.box.style.animation ="";
			that.box.style.display = "none";
		}
	};
	if(this.Mousedrag){
		this.header.style.cursor = "move";
		this.header.addEventListener("mousedown",function(evt){
			isMouseDown = true;
		},false);
		document.onmousemove = function(evt){
			if(isMouseDown){
				that.box.style.top = evt.clientY-30+"px";
				that.box.style.left = evt.clientX-that.box.clientWidth/2+"px";
				that.box.style.transform="";
			}
			
		};
		this.header.onmouseup = function(){
			isMouseDown = false;
		};
	}
};
