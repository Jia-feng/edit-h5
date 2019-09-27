var elemsGroup = {
   navname : "",
   id:"",
   type:'',
   moduleType:'',
   isNav : !0,
   isbg:!0,
   isSlide:!0,
   isList:!0
} 
//判断谷歌浏览器
if(navigator.userAgent.toLowerCase().indexOf("chrome") == -1){
   $(".support").fadeIn();
}else{
   $(".support").fadeOut();
};
$(".text-primary").click(function(){
   $(".support").fadeOut();
});