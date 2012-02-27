/**
 * @author LiuYuChao
 * @title  page对页面层面的封装，包括页面的高宽属性、以及外部css和js的动态添加。
 */
 
 var PageUtil={
 		
	//动态加载一个外部css文件
	loadCssFile:function(path){
		var element=document.createElement('link');
		element.setAttribute('rel','stylesheet');
		element.setAttribute('type','text/css');
		element.setAttribute('href',path);
		document.getElementByTagName('head')[0].appendChild(element);
	},
	
	//动态加载一个外部js文件
	loadJsFile:function(path,callback){
		var element=document.createElement('script');
		element.setAttribute('type','text/javascript');
		if(element.readyState){
			element.onreadystatechange=function(){
				if(element.readyState == 'loaded' || element.readyState == 'complete'){
					element.onreadystatechange=null;
				}
				callback();
			};
		}else{
			element.onload=function(){
				callback();
			}
		}
		element.setAttribute('src',path);
		element.setAttribute('defer','defer');
		document.getElementByTagName('head')[0].appendChild(element);
	},
	
	//获取页面高度
	getPageHeight:function(){
		var doc=document,
			body=doc.body,
			html=doc.documentElement;
			client=doc.compatMode == 'BackCompat' ? body : doc.documentElement;
		return Math.max(html.scrollHeight, body.scrollHeight, client.clientHeight);
	},
	
	//获取页面宽度
	getPageWidth:function(){
		var doc=document,
			body=doc.body,
			html=doc.documentElement;
			client=doc.compatMode == 'BackCompat' ? body : doc.documentElement;
		return Math.max(html.scrollWidth, body.scrollWidth, client.clientWidth);
	},
	
	//获取横向滚动量
	getScrollLeft:function(){
		var doc=document;
		return window.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
	},
	
	//获取垂直滚动量
	getScrollTop:function(){
		var doc=document;
		return window.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
	},
	
	//获取页面视觉高度
	getViewHeight:function(){
		var doc=document,
			client=doc.compatMode == 'BackCompat' ? body : doc.documentElement;
		return client.clientHeight;
	},
	
	//获取页面视觉宽度
	getViewWidth:function(){
		var doc=document,
			client=doc.compatMode == 'BackCompat' ? body : doc.documentElement;
		return client.clientWidth;
	},
	
 }
 