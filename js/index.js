function $(id){
	return document.getElementById(id);
}
//第一部分内容隐藏
//鼠标悬浮APP时隐藏内容显示
//$("APP").onmouseover=function(){
//	$("header_article_center").style.display="block";
//	$("APP").style.backgroundColor="#000000";
//}
//隐藏内容鼠标移出 APP时隐藏
//$("APP").onmouseout=function(){
//	$("header_article_center").style.display="none";
//	$("APP").style.backgroundColor="initial";
//}
//隐藏内容鼠标悬浮时显示
//$("header_article_center").onmouseover=function(){
//	$("header_article_center").style.display="block";
//	$("APP").style.backgroundColor="#000000";
//}
//隐藏内容鼠标移出时隐藏
//$("header_article_center").onmouseout=function(){
//	$("header_article_center").style.display="none";
	//背景颜色回到最初值
//  $("APP").style.backgroundColor="initial";
//}

//第一部分内容隐藏
//鼠标悬浮开发者时隐藏内容显示
$("APP").onmouseover=function(){
	$("header_article_center").style.display="block";
	$("APP").style.backgroundColor="#000000";
}
//隐藏内容鼠标移出 VIPserver时隐藏
$("APP").onmouseout=function(){
	$("header_article_center").style.display="none";
	$("APP").style.backgroundColor="initial";
}

//隐藏内容鼠标悬浮时显示
$("header_article_center").onmouseover=function(){
	$("header_article_center").style.display="block";
	$("APP").style.backgroundColor="#000000";
}
//隐藏内容鼠标移出时隐藏
$("header_article_center").onmouseout=function(){
	$("header_article_center").style.display="none";
	//背景颜色回到最初值
    $("APP").style.backgroundColor="initial";
}



//第二部分内容隐藏
//鼠标悬浮开发者时隐藏内容显示
$("Developer").onmouseover=function(){
	$("header_article_center2").style.display="block";
	$("Developer").style.backgroundColor="#000000";
}
//隐藏内容鼠标移出 Developer时隐藏
$("Developer").onmouseout=function(){
	$("header_article_center2").style.display="none";
	$("Developer").style.backgroundColor="initial";
}
//隐藏内容鼠标悬浮时显示
$("header_article_center2").onmouseover=function(){
	$("header_article_center2").style.display="block";
	$("Developer").style.backgroundColor="#000000";
}
//隐藏内容鼠标移出时隐藏
$("header_article_center2").onmouseout=function(){
	$("header_article_center2").style.display="none";
	//背景颜色回到最初值
    $("Developer").style.backgroundColor="initial";
}
//第三部分内容隐藏
//鼠标悬浮开发者时隐藏内容显示
$("VIPserver").onmouseover=function(){
	$("header_article_center3").style.display="block";
	$("VIPserver").style.backgroundColor="#000000";
}
//隐藏内容鼠标移出 VIPserver时隐藏
$("VIPserver").onmouseout=function(){
	$("header_article_center3").style.display="none";
	$("VIPserver").style.backgroundColor="initial";
}

//隐藏内容鼠标悬浮时显示
$("header_article_center3").onmouseover=function(){
	$("header_article_center3").style.display="block";
	$("VIPserver").style.backgroundColor="#000000";
}
//隐藏内容鼠标移出时隐藏
$("header_article_center3").onmouseout=function(){
	$("header_article_center3").style.display="none";
	//背景颜色回到最初值
    $("VIPserver").style.backgroundColor="initial";
}
//滚动鼠标事件
//var a=function(e){
//if(e.wheelDelta){
//  if(e.wheelDelta==9)
//  {
//    alert(e.wheelDeta +"向上");
//  }else
//  { 
//    $("nav").style.backgroundColor="#0000FF";
//  } 
//}
// };
// if(document.addEventListener){ 
// document.addEventListener("DOMMouseScroll" ,a, false);
//}
// window.onmousewheel=document.onmousewheel=a;

//三角按钮显示隐藏内容
$("btn_img").onclick=function(){
	if($("btn_img").src.match("qw2")){
		$("btn_img").src="img/qw.png";
		$("footer_article_none").style.display="none";
	}else{
		$("btn_img").src="img/qw2.png";
		$("footer_article_none").style.display="block";
	}
}



//文字的贴换
//文字容器内容
var main_artle3_div2=$("main_artle3_div2");
//小圆点
var span1=$("span1");
var span2=$("span2");
var span3=$("span3");
var i=0;
  function texeinhtml(){
  i++;
    if(i==1){
    	$("z-den_text3").style.display="none";
    span3.style.backgroundColor="white";
   main_artle3_div2.innerHTML="<br/>偶偶从专业的足球产品报道、评测、鉴定，到足球产品视频、电商平台、二手交易、正品商家认证等多维度提供一站式专业化服务。偶偶足球 CEO 周敏"
   span1.style.backgroundColor="#C0C0C0";
  $("z-den_text1").style.display="block";
 
    }
    if(i==2){
  	 span1.style.backgroundColor="white";
   main_artle3_div2.innerHTML="<br/>狸米是一套打通教师、学生和家长三方的互联网教育平台，目前在全国超过1000所公立学校全面部署使用。 狸米老师 副总裁 张楠"
    span2.style.backgroundColor="#C0C0C0";
    $("z-den_text1").style.display="none";
    $("z-den_text2").style.display="block";
    }
     if(i==3){
  	 span2.style.backgroundColor="white";
   main_artle3_div2.innerHTML="<br/>为了小钱压力山大的蓝领们，福音来了，只要您讲信用够靠谱，小葱借钱帮你统统都解决，妥妥滴！ 小葱钱包 CEO KAIC"
    span3.style.backgroundColor="#C0C0C0";
    $("z-den_text2").style.display="none";
    $("z-den_text3").style.display="block";
    }
     if(i==4){	
     	return i=0;
     }
  }
setInterval("texeinhtml()",3000);
