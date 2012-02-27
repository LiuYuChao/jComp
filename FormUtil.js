/**
 * @author LiuYuChao
 * @title  表单常用操作封装
 */
 
 var FormUtil={
	 
	 imgOK:'<img src="../images/global/vimg_ok.gif" style="margin-right:10px;" width="24" height="24" alt="格式正确" />',
	 imgError:'<img src="../images/global/vimg_error.gif" style="margin-right:10px;"  width="24" height="24" alt="格式错误" />', 
	 
	 userNameOK:'恭喜你，用户名可用！',
	 userNameError:'请输入有效的用户名',
	 pwdOK:'',
	 pwdError:'请输入有效的密码',
	 confirmPwdOK:'',
	 confirmPwdError:'两次输入的密码不一样',
	 emailOK:'邮箱可用',
	 emailError:'请输入有效的邮箱',
	 phoneOK:'手机号可用',
	 phoneError:'请输入有效的手机号',
	 
	 
	 //去除首尾空格
	 trim:function(str){
	 	return str.replace(/(^\s*)|(\s*$)/,'');
	 },
	 
	//检查中文
	isChinese:function(str){
		var pattern=/[\u4e00-\u9fa5]/g;
		return pattern.test(str);
	},
	
	//检测用户名
	isUserName:function(str){
		var pattern=/^\w{4,16}$/g;
		return pattern.test(str);
	},
	
	//检测密码
	isPwd:function(str){
		var pattern=/^\w{6,16}$/g;
		return pattern.test(str);
	},
	
	//检测邮箱
	isEmail:function(str){
		var pattern=/^[\w\.\-]+@([\w\-]+\.)+[a-z]{2,4}$/g;
		return pattern.test(str);
	},
	
	//检测邮编
	isZIP:function(str){
		var pattern=/^[1-9]{6}$/g;
		return pattern.test(str);
	},
	
	//检测手机号
	isPhone:function(str){
		var pattern=/(^1[358]\d{9}$)|(^0[1-9]\d{8,11}$)/g;
		return pattern.test(str);
	},
	
	//检测是否为QQ号
	isQQ:function(str){
		var pattern=/^([1-9]|[0-9]){5,}$/g;
		return pattern.test(str);
	},
	
	//检测身份证号
	isIdCard:function(str){
		var pattern=/(\d){6}(18|19|20)(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X)$/g;
		return pattern.test(str);
	},
	
	//检测URL
	isURL:function(str){
		var pattern=/((^http)|(^https)|(^ftp)):\/\/(\w)+\.(\w)+/ig;
		return pattern.test(str);
	},
	
	//检测日期
	isDate:function(str){
		var pattern=/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/g;
		return pattern.test(str);
	},
	
	//检测时间
	isTime:function(str){
		var pattern=/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/g;
		return pattern.test(str);
	},

 }