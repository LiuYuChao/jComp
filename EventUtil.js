/**
 * @author LiuYuChao
 * @title  屏蔽浏览器差异性的事件封装
 */
var EventUtil={
	//添加事件处理程序
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	
	//删除事件处理程序
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(emelent.detachEvent){
			element.detach("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},
	
	//获取事件对象
	getEvent:function(event){
		return event?event:window.event;
	},
	
	//获取事件目标
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	
	//取消事件的默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	
	//取消事件的进一步捕获与冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	},
	
	//获取相关元素
	getRelatedTarget:function(event){
		if(event.relatedTarget){
			return event.relatedTarget;	
		}else if(event.toElement){
			return event.toElement;
		}else if(event.fromElement){
			return event.fromElement;
		}
	},
	
	//获取鼠标按钮button属性
	getButton:function(event){
		if(document.implementation.hasFeature("MouseEvents","2.0")){
			return event.button;
		}else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	
	//获取字符按键编码
	getCode:function(event){
		if (typeof event.charCode == "number") {
			return event.charCode;
		}else{
			return event.keyCode;
		}
	},
	
	//获取鼠标事件的鼠标x坐标
	getPageX:function(event){
		var result=event.pageX,
			doc=document;
		if(!result && result == 0){
			result=(event.clientX || 0) + (doc.documentElement.scrollLeft ||
										   doc.body.scrollLeft);
		}
		return result;
	},
	
	//获取鼠标事件的鼠标y坐标
	getPageY:function(event){
		var result=event.pageY,
			doc=document;
		if(!result && result == 0){
			result=(event.clientY || 0) + (doc.documentElement.scrollTop ||
										   doc.body.scrollTop);
		}
		return result;
	},
	
}
