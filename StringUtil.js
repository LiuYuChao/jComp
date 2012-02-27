/**
 * @author LiuYuChao
 * @title  string操作字符串的方法。
 */
 var StringUtil={
	 
 	//删除目标字符串两端空白字符
	trim:function(source){
		var trimer=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
		return String(source).replace(trimer,"");
	},
	
	//对目标字符串进行HTML编码
	encodeHTML:function(source){
		return String(source)
				.replace(/&/g,'&amp;')
				.replace(/</g,'&lt;')
				.replace(/>/g,'&gt;')
				.replace(/"/g,'&quot;')
				.replace(/'/g,'&#39;');
	},
	
	//对目标字符串进行HTML解码
	decodeHTML:function(source){
		var str=String(source)
				.replace(/&quot;/g,'"')
				.replace(/&gt;/g,'>')
				.replace(/&lt;/g,'<')
				.replace(/&amp;/g,'&');
		//处理转义的中文及实体字符
		return str.replace(/&#([\d])+;/g,function(_0,_1){
			return String.fromCharCode(parseInt(_1,10));
		});
	},
	
	//将目标字符串进行驼峰化处理
	toCamelCase:function(source){
		if(source.indexOf('-') < 0 && source.indexOf('_') < 0){
			return source;
		}
		return source.replace(/[-_][^-_]/g,function(match){
			return match.charAt(1).toUpperCase();
		});
	},
	
	//去掉字符串中的HTML标签
	stripTags:function(source){
		return String( source || '').replace(/<[^>]+>/g,'');
	},
	
 }