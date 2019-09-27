var swipers4,swiper5;
function newSwiper2(a){
 swipers4 = new Swiper(a, {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
   1200: {
    slidesPerView: 3,
    spaceBetween: 10
   },
   992: {
    slidesPerView: 2,
    spaceBetween:10
   },
   768:{
    slidesPerView: 1,
    spaceBetween: 10
   }
  }
 });
 swiper5 = new Swiper('.sou_htmlbox .sou_swiper-container', {
  pagination: '.sou_swiperbanner .swiper-pagination',
  nextButton: '.sou_swiperbanner .swiper-button-next',
  prevButton: '.sou_swiperbanner .swiper-button-prev',
  autoplay: 5000,//可选选项，自动滑动

 });
 //slide 组件版本兼容
 $(".sou_swiperbox .slide-mess .ontext_edit").addClass("swiper-no-swiping");
 $("body").on("mousemove",".sou_swiperbanner",function(){
  var parObj = $(this).parents(".sou_content_html").attr("swiper_index");
  if(parObj >0){
   swiper5[parObj].stopAutoplay();
  }else{
   if(swiper5.length == undefined){
    swiper5.stopAutoplay();
   }else{
    swiper5[0].stopAutoplay();
   }
  }
 });
 $("body").on("mouseout",".sou_swiperbanner",function(){
  var parObj = $(this).parents(".sou_content_html").attr("swiper_index");
  if(parObj >0){
   swiper5[parObj].startAutoplay();
  }else{
   if(swiper5.length == undefined){
    swiper5.startAutoplay();
   }else{
    swiper5[0].startAutoplay();
   }
  }
 });
};  
//更新pages分页
function  fenyeresh(){
 var cont = $("sitepagelist").attr("cont");
 var keyword = $("sitepagelist").attr("keyword");
 var no = $("sitepagelist").attr("no");
 var pageSize = $("sitepagelist").attr("pageSize");

 layui.use(['laypage', 'layer'], function(){
  var laypage = layui.laypage
  ,layer = layui.layer;
  laypage.render({
   elem: 'sou_pageNav'
   ,count: cont //数据总数，从服务端得到
   ,limit:pageSize
   ,jump: function(obj, first){
    //obj包含了当前分页的所有参数，比如：
    console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
    console.log(obj.limit); //得到每页显示的条数 
    //首次不执行
    if(!first){
     //do something
     window.location = "http://xb.soudao.com/about/contact.whtml?page="+obj.curr+"&pageSize="+obj.limit+"&key="+keyword+"&no="+no
    }
   }
  });
 });
}
fenyeresh();
$(function(){
  //移动端打开关闭导航
  $("body").on("click",".navbtn",function(event){
    event.stopPropagation();
    $(".m_linkList").addClass("m_translete");
  });
  $("body").on("click",".m_linkList a",function(event){
    $(".m_linkList").removeClass("m_translete");
  });
  //滚动条顶部
  $(window).scroll(function(){
   if($(document).scrollTop() >= 100 &&  !$(".navbar1").hasClass("isScroll_o")){
      $(".navbar1").addClass("isScroll isScroll_s");
      $(".navbar4").addClass("isScroll isScroll_s");
    }
    if($(document).scrollTop() < 100){
      $(".navbar1").removeClass("isScroll isScroll_s");
      $(".navbar4").removeClass("isScroll isScroll_s");
    }
  });
 

});
