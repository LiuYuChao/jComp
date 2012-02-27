/**
 * @author LiuYuChao
 * @title  浏览器检测
 */
 
 var BrowserUtil={
 	
	//判断是否为IE
	isIE:function(){
		var ua=navigator.userAgent;
		if((/MSIE/i.test(ua)) && ((/(\d)+\)$|(C\))$/).test(ua))){
			return true;
		}else{
			return false;
		}
	},	
	
	//判断是否为Firefox
	isFirefox:function(){
		return /Firefox/i.test(navigator.userAgent);
	},
	
	//判断是否为Chrome
	isChrome:function(){
		return /Chrome/i.test(navigator.userAgent);
	},
	
	//判断是否为Opera
	isOpera:function(){
		return /Opera/i.test(navigator.userAgent);
	},
	
	//判断是否为Safari
	isSafari:function(){
		return /Safari\/([\d]+\.[\d]+.[\d]?)$/i.test(navigator.userAgent);
	},
	
	//判断是否为360
	isQiHu:function(){
		return /(360SE)\)$/i.test(navigator.userAgent);
	},
	
	//判断是否为世界之窗
	isTheWorld:function(){
		return /(TheWorld)\)$/ig.test(navigator.userAgent);
	},
	
	//判断是否为傲游
	isMaxthon:function(){
		return /Maxthon/i.test(navigator.userAgent);
	},
	
	//判断是否为TT
	isTT:function(){
		return /TencentTraveler/i.test(navigator.userAgent);
	},
	
	//判断是否为Triden内核(IE,TheWorld,TT,360,Sogou)
	isTrident:function(){
		return /Trident\//i.test(navigator.userAgent);
	},
	
	//判断是否为Gecko内核(Firefox)
	isGecko:function(){
		return /Gecko\//i.test(navigator.userAgent);
	},
	
	//判断是否为Webkit内核(Chrome,Safari)
	isWebkit:function(){
		return /Webkit\//i.test(navigator.userAgent);
	},
	
	//判断不否为Presto内核(Opera)
	isPresto:function(){
		return /Presto\//i.test(navigator.userAgent);
	},
	
	//判断是否为严格的标准渲染模式
	isStrict:function(){
		return document.compatMode == "CSS1Compat";
	},
	
	browser:function(){
		var browser;
		if(BrowserUtil.isIE()){
			browser="Internet Explorer";
		}else if(BrowserUtil.isFirefox()){
			browser="火狐";
		}else if(BrowserUtil.isChrome()){
			browser="Chrome";
		}else if(BrowserUtil.isOpera()){
			browser="Opera";
		}else if(BrowserUtil.isSafari()){
			browser="Safari";
		}else if(BrowserUtil.isQiHu()){
			browser="360";
		}else if(BrowserUtil.isMaxthon()){
			browser="傲游";
		}else if(BrowserUtil.isTheWorld()){
			browser="世界之窗";
		}else if(BrowserUtil.isTT()){
			browser="腾讯TT";
		}else{
			browser="不是常用浏览器";
		}
		return browser;
	},
	
	version:function(){
		var version,
			browser=BrowserUtil.browser();
			ua=navigator.userAgent.toLowerCase();
		switch(browser){
			case "Internet Explorer":
				version="Internet Explorer "+(ua.match(/msie ([\d.]+)/)[1]).split('.')[0];
				break;
			case "火狐":
				version="火狐 "+(ua.match(/firefox\/([\d.]+)/)[1]).split('.')[0];
				break;
			case "Chrome":
				version="Chrome "+(ua.match(/chrome\/([\d.]+)/)[1]).split('.')[0];
				break;
			case "Opera":
				version="Opera "+(ua.match(/version\/([\d.]+)/)[1]).split('.')[0];
				break;
			case "Safari":
				version="Safari "+(ua.match(/version\/([\d.]+)/)[1]).split('.')[0];
				break;
			case "傲游":
				version="傲游 "+(ua.match(/maxthon\/([\d.]+)/)[1]).split('.')[0];
				break;
			case "360":
				version="360安全浏览器";
				break;
			case "世界之窗":
				version="世界之窗浏览器";
				break;
			case "腾讯TT":
				version="腾讯TT浏览器";
				break;
			default:
				version="您的浏览器版本太低,请更新至最新版本！";
				break;
		}
		return version;
	},
	
 }