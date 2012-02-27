/**
 * @author LiuYuChao
 * @title  dom操作dom的方法。
 */
var DomUtil={
	
	//从文档中获取指定的DOM元素
	G:function(id){
		if(typeof id == 'string' || id instanceof String){
			return document.getElementById(id);		
		}else if( id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)){
			return id;
		}
		return null;
	},
	
	//获取元素的父节点
	getParent:function(element){
		var element=DomUtil.G(element);
		return element.parentElement || element.parentNode || null;
	},
	
	//获取目标元素所属的document对象
	getDocument:function(element){
		var element=DomUtil.G(element);
		return element.nodeType == 9 ? element:element.ownerDocument || element.document;
	},
	
	//创建DOM元素
	create:function(tagName,opt_attributes){
		var elment=document.createElement(tagName);
			attributes=opt_attributes || {};
		return DomUtil.setAttrs(element,attributes);
	},
	
	//设置目标元素的attribute值
	setAttr:function(element,key,value){
		var	element=DomUtil.G(element);
		if(key == 'style'){
			element.style.cssText=value;
		}else{
			element.setAttribute(key,value);
		}
		return element;
	},
	
	//批量设置目标元素的attribute值
	setAttrs:function(element,attributes){
		var element=DomUtil.G(element);
		for(var key in attributes){
			DomUtil.setAttr(element,key,attributes[key]);	
		}
		return element;
	},
	
	//获取目标元素的ComputedStyle值
	getComputedStyle:function(element,key){
		var element=DomUtil.G(element),
			doc=DomUtil.getDocument(element),
			styles;
		if(doc.defaultView && doc.defaultView.getComputedStyle){
			styles=doc.defaultView.getComputedStyle(element,null);
			if(styles){
				return styles[key] || styles.getPropertyValue(key);
			}
		}
		return '';
	},
	
	//获取目标元素的样式值
	getStyle:function(element,key){
		var element=DomUtil.G(element);
			key=StringUtil.toCamelCase(key);
		var value=element.style[key] ||
				  (element.currentStyle ? element.currentStyle[key] : "") ||
				  DomUtil.getComputedStyle(element,key);
		return value;
	},
	
	//获取元素中的文本内容
	getText:function(element){
		var element=DomUtil.G(elment);
		var txt="",childs,i=0,l;
		//3是text node, 4是CDATA node
		if(element.nodeType ==3 ||element.nodeType ==4){
			txt+=element.nodeValue;
		}else if(element.nodeType ==8 ){ //8是 comment node
			childs=element.childNodes;
			for(l=childs.length;i<l;i++){
				txt+=DomUtil.getText(childs[i]);
			}
		}
	},
	
	//显示目标元素
	show:function(element){
		var element=DomUtil.G(element);
		element.style.display="";
		return element;
	},
	
	//隐藏目标元素
	hide:function(element){
		var element=DomUtil.G(element);
		element.style.display="none";
		return element;
	},
	
	//改变目标元素的显示/隐藏状态
	toggle:function(element){
		var element=DomUtil.G(element);
		element.style.display=element.style.display == "none" ? "": "none";
		return element;
	},

		
}