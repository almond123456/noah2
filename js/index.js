//获取类名为banner_left的元素
var bannerLeft = document.querySelector(".banner_left");
var bannerImg1 = document.querySelector(".banner_img1");
var bannerLine = document.querySelector(".banner_line");
var bannerImg2 = document.querySelector(".banner_img2");
var bannerImg3 = document.querySelector(".banner_img3");
var bannerImg4 = document.querySelector(".banner_img4");
var banner = document.querySelector(".banner");

var intro1=document.querySelector(".intro_content_text");

var intro2=document.querySelector(".intro_bg2");
var intro3=document.querySelector(".intro_bg4");
var intro4=document.querySelector(".intro_bg6");

// bannerLeft.style.transform="rotateY(0deg)";
// 页面每滚动一像素 bannerLeft 要旋转的角度/平移的距离
var speed = 45/window.innerHeight;
var speed1 = 300/window.innerHeight;
var speed2=360/window.innerHeight;

var speed3=1000/window.innerHeight;//半屏滚动高度 500*2
var speed4=600/window.innerHeight;

var speed5=300/293;
// 监听当前网页的滚动
window.onscroll=function(){
//获取当前的滚动高度
var top=document.documentElement.scrollTop;
console.log(top);
//y轴旋转的动画
var angle=top*speed;
if(angle<45){
    bannerLeft.style.transform="rotateY("+(45-angle)+"deg)";
    bannerImg1.style.transform="rotateY("+(45-angle)+"deg)";
}
else{
    bannerLeft.style.transform="rotateY(0deg)";
    bannerImg1.style.transform="rotateY(0deg)";
}
//内容平移的动画
var x = top*speed1;
if(x<=300){
bannerLine.style.transform="translateX("+(x-300)+"px)";
bannerImg2.style.transform="translateX("+(x-300)+"px)";
bannerImg3.style.transform="translateX("+(x-300)+"px)";
}
else{
    bannerLine.style.transform="translateX(0px)";
    bannerImg2.style.transform="translateX(0px)";
    bannerImg3.style.transform="translateX(0px)";
}
//首屏旋转动画
var angle2=top*speed2;
if(angle2<=360){
    bannerImg4.style.transform="rotate("+angle2+"deg)";
}
else{
    bannerImg4.style.transform="rotate(360deg)";
}
//处理首屏的定位方式
if(top>window.innerHeight){
banner.style.position="absolute";
banner.style.top=window.innerHeight+"px";
}
else{
banner.style.position="fixed";
banner.style.top=0;
}

//企业介绍的内容动画
//企业介绍的图片动画
//判断当前是不是已经滚动到1.5屏到2屏的方位内
if(top > 1.5*window.innerHeight && top < 2*window.innerHeight){
    var dis=500-(top-1.5*window.innerHeight) * speed3;//dis 当前移动距离
    intro1.style.transform="translateX("+dis+"px)";

    var dis2=-300+(top-1.5*window.innerHeight) * speed4;
    intro2.style.transform="translateX("+dis2+"px)";


}
else if(top > 2*window.innerHeight){
    intro1.style.transform="translateX(0px)";
    intro2.style.transform="translateX(0px)";//解决误差
}
//企业介绍动画2
if(top>1900 && top<2193){
    var dis=-300+(top-1900)*speed5;
    var dis2=300-(top-1900)*speed5;
    intro3.style.transform="translateX("+dis+"px)";
    intro4.style.transform="translateX("+dis2+"px)";
}
else if(top>2193){
    intro3.style.transform="translateX(0px)";
    intro4.style.transform="translateX(0px)";
}


}
//网页内容加载完成时回到顶部
// window.onload=function(){
//     setTimeout(function(){
//         window.scrollTo(0,0);
//     },20);
// }