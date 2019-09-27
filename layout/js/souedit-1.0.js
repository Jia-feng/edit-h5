var thisbkType = '',
  userModuleOn = [];
//客服回显
function serviceIn() {
  if (!$(".sou_htmlbox .sou_Service").length) {
    $(".sou_footer").after("<div class='sou_Service'><div class='sou_ser_type0'><div><span class='sou_iconfont'>&#xe68a;</span><p>客服</p><ul class='sou_ser_qqListBox'></ul></div><div class='sou_ser_phoneTopBox'><span class='sou_iconfont'>&#xe630;</span><p>电话</p><ul class='sou_ser_phoneBox'><li><a href='#'></a></li></ul></div><div style='display: none;' class='sou_ser_codeTopBox'><span class='sou_iconfont'>&#xe6a4;</span><p>扫码</p><ul class='sou_ser_codeBox'><li><img src='http://static.isoudao.com/layout3.0/images/weixin.png' alt=''><p>扫一扫</p></li></ul></div></div></div>");
  }
  $("select[name=SerTypeBox]").children("option").eq(serviceBox.serType).attr("selected", true);
  if (serviceBox.serType == 1) {
    $("select[name=styleBox]").children("option").eq(serviceBox.serJson.style).attr("selected", true);
    $("input[name=phoneNumber]").val(serviceBox.serJson.phone);
    $(".qqBox").show();
    for (var i = 0; i < serviceBox.serJson.qqNumber.length; i++) {
      $("input[name=qqNumber]").eq(i).val(serviceBox.serJson.qqNumber[i]);
    };
    $(".qqCodeUrl").attr("src", serviceBox.serJson.codeUrl);
  }
};
//客服设置
function servicePush(a) {
  if (a == 1) {
    $(".sou_ser_codeTopBox").show();
  }
  if (a == 2) {
    $(".sou_ser_codeTopBox").hide();
    $(".qqCodeUrl").attr("src", "http://static.isoudao.com/upload/fodder/339/33905/jd_14.png");
  }
  var SerTypeBox = $("select[name=SerTypeBox]").val();
  if (SerTypeBox == 0) {
    serviceBox.serType = SerTypeBox;
    $(".sou_Service").hide();
  } else if (SerTypeBox == 1) {

    serviceBox.serType = SerTypeBox;
    var jsons = {
      style: 0,
      phone: '',
      qqNumber: [],
      codeUrl: ''
    };
    var qqList = '';
    jsons.style = $("select[name=styleBox]").val();
    jsons.phone = $("input[name=phoneNumber]").val();
    if (jsons.phone == '') {
      $(".sou_ser_phoneTopBox").hide();
    } else {
      $(".sou_ser_phoneTopBox").show();
    }
    for (var i = 0; i < $("input[name=qqNumber]").length; i++) {
      var _thisNum = $("input[name=qqNumber]").eq(i).val();
      jsons.qqNumber = [];
      jsons.qqNumber.push(_thisNum);
      qqList += "<li><a href='tencent://message/?uin=" + _thisNum + "&Site=qq&Menu=yes'><span class='sou_iconfont'>&#xe6c1;</span><p>QQ</p></a></li>"
    };
    jsons.codeUrl = $(".qqCodeUrl").attr("src");
    serviceBox.serJson = jsons;
    $(".sou_Service").show();
    $(".sou_Service .sou_ser_qqListBox").html(qqList);
    $(".sou_ser_phoneBox li").html("<a href='tel:" + jsons.phone + "'>" + jsons.phone + "</a>");
    $(".sou_ser_codeBox img").attr("src", jsons.codeUrl);
  }
};

//轮播图组件
var swipers, swiper3;

function newSwiper(a) {
  swipers = new Swiper(a, {
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
        spaceBetween: 10
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
  swiper3 = new Swiper('.sou_htmlbox .sou_swiper-container', {
    pagination: '.sou_swiperbanner .swiper-pagination',
    nextButton: '.sou_swiperbanner .swiper-button-next',
    prevButton: '.sou_swiperbanner .swiper-button-prev',

  });
  //slide 组件版本兼容
  $(".sou_swiperbox .slide-mess .ontext_edit").addClass("swiper-no-swiping");
};

function swiperThis() {
  if (swiper3.length > 0 || swiper3.container.length != 0) {
    setTimeout(function () {
      if (swiper3.length == undefined) {
        swiper3.onResize();
      } else {
        for (var i = 0; i < swiper3.length; i++) {
          swiper3[i].onResize();
        }
      }
      if (swipers.length == undefined) {
        swipers.onResize();
      } else {
        for (var i = 0; i < swipers.length; i++) {
          swipers[i].onResize();
        }
      }
    }, 500);
  }
};
//动态添加主题颜色
function themeAdd(a) {
  var nowBg = 0;
  var nums = thisTheme.themeTypebox.length;
  for (var h = 0; h < modBK.length; h++) {
    if (modBK[h].isbg == 1) {
      if (nowBg < nums) {
        $("#" + modBK[h].id).removeAttr("class").attr("class", "sou_content_html").addClass(thisTheme.themeTypebox[nowBg]);
        nowBg += 1;
      } else {
        $("#" + modBK[h].id).removeAttr("class").attr("class", "sou_content_html").addClass(thisTheme.themeTypebox[0]);
        nowBg = 1;
      }
    }
  }
};
//初始化主题块
function themeRen() {
  var contHtml = '';
  var nums = thisTheme.themeTypebox.length;
  for (var i = 0; i < nums; i++) {
    contHtml += "<li class=" + thisTheme.themeTypebox[i] + "></li>";
  };
  $(".bg_list_li").html(contHtml);
  $(".sou_htmlbox .header_nav >div").removeAttr("style");
  $(".sou_htmlbox .header_nav").removeAttr("class").attr("class", "header_nav").addClass(thisTheme.themeNav);
};

//主题设置版块
function showTheme() {
  allBlock();
  var oldTheme = $(".sou_themeSet .oldTheme");
  FeedbackOperation(5010103, "", "", pageId); //编辑器操作记录
  if ($(".sou_themeSet").is(":hidden")) {
    $(".sou_themeSet").show();
    var contexts = JSON.stringify(thisTheme);
    $(".sou_themeSet .oldTheme").val(contexts);
  } else {
    $(".sou_themeSet").hide();
    if (oldTheme.val() != '') {
      thisTheme = JSON.parse(oldTheme.val());
      $(".themeSet_box h3 span").text(thisTheme.themeNmae);
      oldTheme.val("");
      themeAdd();
      themeRen();
    }
  }
}
//初始化 主题
function chushiTheme() {
  var allhtml = '';
  for (var i = 0; i < themeBox.length; i++) {
    allhtml += "<li class=" + themeBox[i].themeClass + "><button>" + themeBox[i].themeNmae + "</button></li>"
  }
  $(".sou_themeSet .themeSet_box h3 span").text(thisTheme.themeNmae);
  $(".sou_themeSet .themeSet_box ul").html(allhtml);
};
//页眉页脚显示判断
function showNavBot() {
  if (!$("#sou_htmlbox .header_nav").is(":hidden")) {
    $(".navChekebox input[name=navCheck]").prop("checked", true);
  } else {
    $(".navChekebox input[name=navCheck]").prop("checked", false);
  }
  if (!$("#sou_htmlbox .sou_footer").is(":hidden")) {
    $(".navChekebox input[name=bottomCheck]").prop("checked", true);
  } else {
    $(".navChekebox input[name=bottomCheck]").prop("checked", false);
  }
};
showNavBot();


//文章设置模块展示
function listShade() {
  allBlock();
  if ($(".sou_listShade_box").is(":hidden")) {
    $(".sou_listShade_box").show();
  } else {
    $(".sou_listShade_box").hide();
  }
}

//本地储存
function localstrang() {
  var htmls = localStorage.getItem("sou_editHtml");
  var valueH = $(".sou_htmlbox").clone();
  valueH.find(".sou_module_set").remove();
  valueH.find(".sou_list_sortable_addBtnBox").remove();
  valueH.find(".sou_list_editor_box").remove();
  valueH.find(".map_set").remove();
  valueH.find(".slide_setbox").remove();
  valueH.find(".ontext_edit").removeAttr('contenteditable spellcheck data-medium-editor-element role aria-multiline medium-editor-index'); //清理medium编辑器属性
  for (var i = 0; i < valueH.find("a").length; i++) {
    var patt1 = /soudao.com/i;
    if (!patt1.test(valueH.find("a").eq(i).attr("href"))) {
      valueH.find("a").eq(i).attr({
        rel: "nofollow",
        target: "_blank"
      });
    }
  }
  valueH.find(".linkList").find("a").removeAttr("target");
  if (!htmls) {
    localStorage.setItem("sou_editHtml", valueH.html());
  } else {
    localStorage.sou_editHtml = valueH.html();
  }
}

//按钮设置
function showBtnSet() {
  allBlock();
  if ($(".btn_setBox").is(":hidden")) {
    $(".btn_setBox").show();
  } else {
    $(".btn_setBox").hide();
  }
}
//遮罩层d
function allBlock() {
  if ($(".allBlock").is(":hidden")) {
    $(".allBlock").show();
  } else {
    $(".allBlock").hide();
  }
};
//图片设置
function imgBoxShade() {
  allBlock();
  if ($(".imgBox_shadebox").is(":hidden")) {
    $(".imgBox_shadebox").show();
  } else {
    $(".imgBox_shadebox").hide();
  }
};
//图库设置
function image_contbox(e) {
  allBlock();
  if ($(".image_contbox").is(":hidden")) {
    $(".image_contbox").show();
    $(".dz-default").show();
    $(".image_contbox input[name=sou_icont]").val(e);
    $(".dz-preview").remove();
  } else {
    $(".image_contbox").hide();
  }
};
//图片回显
function imgEcho(a, b) {
  if (a == 1) {
    imgbox_obj.next().show();
    imgbox_obj.prev().show().children("img").attr("src", b);
    imgbox_obj.parents(".sou_content_html").css({
      backgroundImage: "url(" + b + ")",
      backgroundPosition: "top center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#FFF"
    });
    modBK[imgbox_obj.parents(".sou_content_html").index() - 1].isbg = 2;
    imgbox_obj.parents(".sou_content_html").removeAttr("class").attr("class", "sou_content_html");
    storeUp(); //保存项目
  } else if (a == 2) {
    imgbox_obj.css({
      backgroundImage: "url(" + b + ")",
      backgroundPosition: "top center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#FFF"
    });
  } else if (a == 3) {
    imgbox_obj.attr("src", b);
    sou_setbox();
    sou_checkbox();
    servicePush(1);
    allBlock();
  } else if (a == 4) {
    image_contbox($(".image_contbox input[name=sou_icont]").val());
    $(".listbox_left ul li").eq(1).click();
    userKind(1);
  } else if (a == 5) {
    imgBoxShade();
    imgbox_obj.attr("src", b);
  } else if (a == 6) {
    imgbox_obj.css({
      backgroundImage: "url(" + b + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#FFF"
    });
  }
};
//美图秀秀
function xiuxiu_show(typeN, thisImg) {
  allBlock();
  //秀秀版块
  $("#xiuxiu_Box").show();
  xiuxiu.setLaunchVars("nav", [{
    "decorate": ["basicEdit", "effect"]
  }, "facialMenu"]);
  xiuxiu.embedSWF("altContent", 3, 800, 600, "lite");

  xiuxiu.onInit = function (id) {
    xiuxiu.loadPhoto(thisImg, false);
    xiuxiu.setUploadURL(AJAXHOST + "/html/fodderUpload.do?kind=31900");
    xiuxiu.setUploadType(2);
    xiuxiu.setUploadDataFieldName("upload");
  }

  xiuxiu.onUploadResponse = function (data) {
    data = JSON.parse(data);
    if (data.metaInfo.code == 0) {
      imgEcho(typeN, FILEPATH + "/" + data.data.filePath);
      userKind(1, uks, 2);
      layer.msg("保存成功！");
      clearFlash();
    } else {
      layer.msg(data.metaInfo.message);
    }
  }

  xiuxiu.onDebug = function (data) {
    alert("错误信息：" + data);
  }

  xiuxiu.onClose = function (id) {
    //alert(id + "关闭");
    clearFlash();
  }
};
//清除flash
function clearFlash() {
  document.getElementById("xiuxiu_Box").style.display = "none";
  allBlock();
};
// 富文本编辑器
function newEditor() {
  var editor = new MediumEditor('.ontext_edit', {
    toolbar: {
      buttons: [{
          name: 'bold',
          aria: '加粗(Ctrl + B)'
        },
        {
          name: 'italic',
          aria: '倾斜(Ctrl + I)'
        },
        {
          name: 'underline',
          aria: '下划线(Ctrl + U)'
        },
        {
          name: 'strikethrough',
          aria: '删除线'
        },
        {
          name: 'removeFormat',
          aria: '清除格式'
        },
        {
          name: 'fontSize',
          aria: '字体大小'
        },
        {
          name: 'lineHeight',
          aria: '字体间距'
        },
        {
          name: 'colorPicker',
          aria: '字体颜色'
        },
        {
          name: 'anchor',
          aria: '链接'
        },
        {
          name: 'justifyLeft',
          aria: '左对齐'
        },
        {
          name: 'justifyCenter',
          aria: '居中对齐'
        },
        {
          name: 'justifyRight',
          aria: '右对齐'
        },
        {
          name: 'justifyFull',
          aria: '两端对齐'
        },
        {
          name: 'orderedlist',
          aria: '有序列表'
        },
        {
          name: 'unorderedlist',
          aria: '无序列表'
        },
        {
          name: 'indent',
          aria: '右缩进'
        },
        {
          name: 'outdent',
          aria: '左缩进'
        },
        {
          name: 'h2',
          aria: '标题2'
        },
        {
          name: 'h3',
          aria: '标题3'
        },
        {
          name: 'h4',
          aria: '标题4'
        }
              ],
    },
    placeholder: false,
    targetBlank: true,
    buttonLabels: 'fontawesome',
    anchor: {
      linkValidation: true, // 验证网址自动添加 http://
      placeholderText: '这里粘贴或输入您的网址',
      targetCheckbox: true, // 是否新窗口打开
      targetCheckboxChecked: true,
      targetCheckboxText: '在新窗口打开'
    },
    extensions: {
      'colorPicker': new ColorPickerExtension(),
      'fontSize': new FontSizeExtension(),
      'lineHeight': new LineHeightExtension()
    }
  });
};
//版块内添加设置按钮
function module_set(a, thisObj) {
  newEditor();
  var _set = $("#sou_edit >div.sou_module_set").clone().removeAttr("style");
  if (a.isSlide) {
    newSwiper('.swiper-container');
    if (swiper3.length > 0) {
      thisObj.attr("swiper_index", (swiper3.length - 1));
    } else {
      thisObj.attr("swiper_index", 0);
    }
    for (var i = 0; i < thisObj.find(".swiper-slide").length; i++) {
      _set.find(".slide_imglist").append("<li sou_alt='点击删除滑块' class='demoLeft " + (i == 0 ? 'active' : '') + "'><div class='slide_zhe'><span class='sou_iconfont'>&#xe6d3;</span></div><p>滑块(" + (i + 1) + ")</p></li>");
      let silid_set = $("#sou_edit >div.slide_setbox").clone().show();
      silid_set.find("select").val(thisObj.find(".swiper-slide").eq(i).css("backgroundSize"))
      thisObj.find(".swiper-slide").eq(i).append(silid_set);
    }
  } else {
    _set.find(".slide_set").remove();
  };
  if (!a.isbg) {
    _set.find(".bg_set").remove();
  }
  if (a.isList) {
    thisObj.find(".sou_list_sortable").after($(".sou_editbox> .sou_list_sortable_addBtnBox").clone(true).removeAttr("style"));
    thisObj.find(".sou_list_row").prepend($(".sou_editbox>.sou_list_editor_box").clone(true).removeAttr("style"));
    if (a.type != 30001 && a.type != 30002 && a.moduleType != 14) {
      thisObj.find(".sou_list_sortable").sortable({
        handle: ".sou_list_moveBtn",
        containment: "parent",
        deactivate: function (event, ui) {
          storeUp(); //保存项目
        }
      });
    } else {
      thisObj.find(".sou_list_sortable").sortable({
        handle: ".sou_list_moveBtn",
        revert: true,
        connectWith: '.defined_box .sou_list_sortable',
        deactivate: function (event, ui) {
          storeUp(); //保存项目
        }
      });
    }
    thisObj.find(".sou_list_sortable").sortable("refresh");
  }

  if (a.isAllPage) {  if(thisObj.find(".sou_list_sortable").hasClass('onArticle_edit')){  _set.find(".module_zhuan").children('span').hide().siblings(".module_putong").show();
   } 
  }else{
    _set.find(".module_zhuan").remove();
  }
  if (!a.islayout) {
    _set.find(".layout_set").remove();
  }
  if (a.islayout == 2) {
    _set.find(".layout_list_abeamBtn").remove();
  }
  if (a.isMap) {
    var _set2 = $("#sou_edit >div.map_set").clone().removeAttr("style");
    _set2.find(".video_inputbox").remove();
    thisObj.find(".onmap_edit").append(_set2);
  }
  if (a.isVideo) {
    var _set2 = $("#sou_edit >div.map_set").clone().removeAttr("style");
    _set2.find(".map_inputbox").remove();
    thisObj.find(".onvideo_edit").append(_set2);
  }
  if (a.type != 30001 && a.type != 30002 && a.moduleType != 14) {
    _set.find(".defined_layout_set").remove();
  } else {
    thisObj.find(".sou_list_sortable_addBtnBox").remove();
  }
  if (a.isBlockBg) {
    ReseauAddBtn(thisObj.find(".sou_reseau_list"));
    _set.find(".reseau_set").remove();
  }
  if (a.isReseau) {
    ReseauAddBtn(thisObj.find(".sou_reseau_list"));
  } else {
    _set.find(".reseau_set").remove();
  }
  if (a.type != 30001 && a.type != 30002 && a.moduleType == 15) {
    newSwiper('.swiper-container');
  }
  thisObj.children("div").eq(0).before(_set);
}

//保存版块设置
function keepModule_show() {
  allBlock();
  if ($(".keepModule_info").is(":hidden")) {
    $(".keepModule_info").show();
  } else {
    $(".keepModule_info").hide();
  }
};
//自动保存
/* (function(){
          if(isMoban != 1){
            var _thisTime = setInterval(function(){
              if(userId != ''){
               storeUp();
             }
           },1000 * 60);
          }else{
            clearInterval(_thisTime);
          }
          })();*/
//个人资料版块 图片
function renovateImg(a) {
  if (a.height() > a.siblings().height()) {
    $(".sou_typeList img").css("minHeight", a.find("img").height());
  }
}
//修改编辑单页添加设置按钮
function echoSetUp() {
  if (pageId != '') {
    module_set('', $(".header_nav"));
    for (var i = 0; i < $("#sou_htmlbox .sou_content_html").length; i++) {
      module_set(modBK[i], $("#sou_htmlbox .sou_content_html").eq(i));
    }
  }
}

//更新布局版块flex 居中
function updateFlex(a) {
  if (a.is(".list_one")) {
    a.find(".caption").css({
      minHeight: a.height()
    });
  }
}
//iframe回显
function iframeShow(obj, newMap) {
  var r = obj.attr("src").substring(obj.attr("src").indexOf("?"), 0);
  obj.attr({
    src: r + "?seachTitle=" + newMap,
    seaTitle: newMap
  });
  storeUp(); //保存项目
}
//发布成功二维码显示
function makeQrcode(url, obj) {
  obj.qrcode({
    text: url, //设置要生成二维码的网址
    width: 150, // 定义宽度
    height: 150, // 定义高度
    correctLevel: 3, //二维码纠错级别
  });
}

//区块布局添加块背景修改按钮
function ReseauAddBtn(obj) {
  var objthis = obj.find(".sou_reseau_cell");
  var addbtn = $("#sou_edit >div.sou_list_innerBg_btn").clone().removeAttr("style");
  objthis.find(".sou_list_innerBg_btn").remove();
  objthis.append(addbtn).addClass("sou_list_innerBg");
};


//初始化页面
function initialise() {
  themeRen(); //初始化主题
  showNav();
  newSwiper('.swiper-container');
  winRize();
  for (var i = 0; i < modBK.length; i++) {
    module_set(modBK[i], $("#" + modBK[i].id));
  }
}
var module_Id = 0;

function isMaxNum(a) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b.push(parseInt(a[i].id.replace(/[^0-9]/ig, "")));
  }
  return Math.max.apply(null, b);
};
//导航更新设置更新
function showNav() {
  var list = '',
    listNav = '',
    listNav2 = '',
    navStyle = '',
    optionbox = '';
  if (module_Id == 0 && modBK.length > 0) {
    module_Id = isMaxNum(modBK);
  } else if (modBK.length == 0) {
    module_Id = modBK.length;
  }
  $(".header_nav").attr('istype', '30001');
  for (var j = 0; j < navFooter.nav.navlist.length; j++) {
    navStyle += "<li><span class='nav_area sou_iconfont'>&#xe694</span><span class='text'>" + navFooter.nav.navlist[j].name + "</span><span class='sou_iconfont nav_gai'>&#xe696;</span><span class='sou_iconfont nav_delect'>&#xe697;</span></li> ";
    listNav2 += "<li><a href='" + navFooter.nav.navlist[j].link + "' target='" + navFooter.nav.navlist[j].target + "'>" + navFooter.nav.navlist[j].name + "</a></li>";
  }
  for (var i = 0; i < modBK.length; i++) {
    list += "<li index=" + i + "><span class='nav_area sou_iconfont'>&#xe694;</span><span class='title'>" + modBK[i].navname + "</span><span class='sou_iconfont sou_navSet demoRight change_bkset' sou_alt='点击打开当前模块设置'>&#xe631;</span></li>";
    optionbox += "<option value='#" + modBK[i].id + "'>" + modBK[i].navname + "</option> "
    if (modBK[i].isNav) {
      listNav += "<li index=" + i + "><a href='javascript:;'>" + modBK[i].navname + "</a></li>";
    };
  }
  $("#dragNav-list").html(navStyle);
  $("#navMaodian").html(optionbox);
  $(".drag-list").html(list);
  getUrlList(); //获取后台导航地址
  if (navFooter.nav.showStyle == 0) {
    $(".navBoxStyle .addNavListBg").show();
    $(".sou_htmlbox .linkList ul").html(listNav);
    $(".sou_htmlbox .m_linkList ul").html(listNav);
    scrollFloor({
      floorClass: '.sou_htmlbox .sou_content_html', //楼层盒子class;
      navClass: '.m_linkList ul li a', //导航盒子class;
      activeClass: 'active', //导航高亮class;
      delayTime: 200, //点击导航，滚动条滑动到该位置的时间间隔;
      activeTop: 300, //楼层到窗口的某个位置时，导航高亮（设置该位置）;
      scrollTop: -60 //点击导航，楼层滑动到窗口的某位置;
    }, $("body"));
    scrollFloor({
      floorClass: '.sou_htmlbox .sou_content_html', //楼层盒子class;
      navClass: '.linkList ul li a', //导航盒子class;
      activeClass: 'active', //导航高亮class;
      delayTime: 200, //点击导航，滚动条滑动到该位置的时间间隔;
      activeTop: 300, //楼层到窗口的某个位置时，导航高亮（设置该位置）;
      scrollTop: -60 //点击导航，楼层滑动到窗口的某位置;
    }, $("body"));
  } else if (navFooter.nav.showStyle == 1) {
    $(".navBoxStyle .addNavListBg").hide();
    $(".sou_htmlbox .linkList ul").html(listNav2);
    $(".sou_htmlbox .m_linkList ul").html(listNav2);
  }
  scrollFloor({
    floorClass: '.sou_htmlbox .sou_content_html', //楼层盒子class;
    navClass: '.drag-list li .title', //导航盒子class;
    activeClass: 'active', //导航高亮class;
    delayTime: 200, //点击导航，滚动条滑动到该位置的时间间隔;
    activeTop: 300, //楼层到窗口的某个位置时，导航高亮（设置该位置）;
    scrollTop: -60 //点击导航，楼层滑动到窗口的某位置;
  }, $("body"));
};
//浏览器变化
function winRize() {
  vheight = $(window).height(); //浏览器body 高度
  vwidth = $(window).width(); //浏览器body 宽度
  if ($(".sou_eidt_navleft").is(".sou_nav_show")) {
    $(".sou_eidt_navleft").addClass("sou_nav_show");
    $(".sou_htmlbox").css("width", "100%");
  } else {
    $("#sidebar-nav .sou_edit_nav ul").css("maxHeight", vheight - 400 + "px");
    $(".sou_templetBox .templetBox_list").css("height", vheight - 150 + "px");
    $("#sidebar-nav").css("height", vheight - 200 + "px");
    $(".sou_htmlbox").css("width", vwidth - 200 + "px");
  }
};


//模块显示
function showModule(a, b) {
  var modList = '';
  for (var i = 0; i < a.length; i++) {
    modList += "<li><h3>" + a[i].name + "</h3><div class='templetBox_sectionBox'><div class='section_shade' sou_index=" + i + ">" + a[i].describe + "</div><div class='sectionBox_list'  moudle-type =" + a[i].config.moduleType + ">" + a[i].html + "</div></div></li>";
  };
  b.html(modList);
};
/*showModule(modulebox,$(".templetBox_list .modulebox"));
  showModule(topModulebox,$(".templetBox_list .topModulebox"));
  showModule(botModulebox,$(".templetBox_list .botModulebox"));*/
//我的模块显示
function showUserModule(a, b) {
  var modList = '';
  for (var i = 0; i < a.length; i++) {
    modList += "<li><h3>" + a[i].name + "<span class='sou_iconfont demoRight dele_userModule' sou_alt='删除个人版块' sou_moduleId=" + a[i].id + ">&#xe6d3;</span></h3><div class='templetBox_sectionBox'><div class='section_shade' sou_index=" + i + ">" + a[i].describe + "</div><div class='sectionBox_list' moudle-type =" + a[i].config.moduleType + ">" + a[i].html + "</div></div></li>";
  };
  b.html(modList);
};

$(function () {
  var vheight = $(window).height(); //浏览器body 高度
  var vwidth = $(window).width(); //浏览器body 宽度


  winRize();
  $(window).resize(function () {
    winRize();
    swiperThis();
  });
  if (pageId != '') {
    storeUp(); // 进入页面走保存
  }
  // 富文本编辑器
  setTimeout(function () {
    newEditor();
    newSwiper('.swiper-container');
  }, 1000);


  //版块性质转换 （后台、普通）
  $("body").on('click', '.module_zhuan .module_quan', function () {
    $(this).hide().siblings('span').show();
    if ($(this).parents('.sou_content_html').find('sitemlist').length > 0) {
      $(this).parents('.sou_content_html').find('sitemlist').attr('usable', 1);
    } else {
      $(this).parents('.sou_content_html').find('.sou_list_sortable').attr('usable', 1);
    }
    $(this).parents('.sou_content_html').find('.sou_list_sortable').addClass("onArticle_edit");
  })
  $("body").on('click', '.module_zhuan .module_putong', function () {
    $(this).hide().siblings('span').show();
    if ($(this).parents('.sou_content_html').find('sitemlist').length > 0) {
      $(this).parents('.sou_content_html').find('sitemlist').attr('usable', 0);
    } else {
      $(this).parents('.sou_content_html').find('.sou_list_sortable').attr('usable', 0);
    }  $(this).parents('.sou_content_html').find('.sou_list_sortable').removeClass("onArticle_edit");
  })

  //提示显示语
  $("body").on("mouseover", ".demoUp", function () {
    var _this = $(this);
    _this.justToolsTip({
      animation: "moveInTop",
      contents: _this.attr("sou_alt"),
      gravity: 'top'
    });
  });
  $("body").on("mouseover", ".demoDown", function () {
    var _this = $(this);
    _this.justToolsTip({
      animation: "moveInBottom",
      //width:"300px",
      contents: _this.attr("sou_alt"),
      gravity: 'bottom'
    });
  });
  $("body").on("mouseover", ".demoLeft", function () {
    var _this = $(this);
    _this.justToolsTip({
      animation: "moveInLeft",
      //width:"300px",
      contents: _this.attr("sou_alt"),
      gravity: 'left'
    });
  });
  $("body").on("mouseover", ".demoRight", function () {
    var _this = $(this);
    _this.justToolsTip({
      animation: "moveInRight",
      //width:"300px",
      contents: _this.attr("sou_alt"),
      gravity: 'right'
    });
  });

  //导航设置操作面板
  //打开导航设置
  $(".navBox_shade_btn").click(function () {
      $(".navBoxStyle").show();
      allBlock();
    })
    //打开底部设置
  $(".linkBox_shade_btn").click(function () {
      layer.msg('请到后台中心设置友情链接！');
    })
    //关闭导航设置
  $(".navBoxStyle .closeNavBox").click(function () {
      $(".navBoxStyle").hide();
      allBlock();
    })
    //1.切换导航模式
  $("input[name=navType]").change(function () {
    navFooter.nav.showStyle = $(this).val()
    showNav();
  });
  //自动导航模式
  $(".navBoxStyle .addNavListBg").click(function () {
    layer.msg('当前模式无法操作导航列表！');
  });
  //添加导航菜单项
  $(".addNavBtn").click(function () {
      $(".navBoxStyle .styleBox").hide();
      $(".navBoxStyle .navStyleList").show().attr("isindex", '');
    })
    //关闭菜单项设置
  $(".navBoxStyle .closeAddNav").click(function () {
    $(".navBoxStyle .styleBox").show();
    $(".navBoxStyle .navStyleList").hide();
  });
  //修改菜单项
  $("body").on("click", '#dragNav-list .nav_gai', function () {
    var index = $(this).parent().index();
    $(this).parent().addClass("active");
    $(".navBoxStyle .styleBox").hide();
    $(".navBoxStyle .navStyleList").show();
    $("input[name=navName]").val(navFooter.nav.navlist[index].name);
    $("select[name=navType]").val(navFooter.nav.navlist[index].type);
    $("select[name=navMaodian]").hide();
    $("select[name=navLink]").hide();
    $("input[name=navLinkZdy]").hide();
    if (navFooter.nav.navlist[index].type == 0) {
      $("select[name=navMaodian]").show();
    } else if (navFooter.nav.navlist[index].type == 1) {
      $("select[name=navLink]").show();
    } else {
      $("input[name=navLinkZdy]").show();
    }
  });
  //删除菜单项
  $("body").on("click", "#dragNav-list .nav_delect", function () {
      var a = $(this).parent().index();
      layer.confirm('确认删除菜单项？', {
        btn: ['确定', '取消']
      }, function (index, layero) {
        $(this).parent().remove();
        navFooter.nav.navlist.splice(a, 1);
        showNav();
        layer.closeAll();
        storeUp(); //保存项目
      }, function (index) {
        //按钮【按钮二】的回调
      });
    })
    //链接方式切换
  $("select[name=navType]").change(function () {
      var vals = $(this).val();
      $("select[name=navMaodian]").hide();
      $("select[name=navLink]").hide();
      $("input[name=navLinkZdy]").hide();
      if (vals == 0) {
        $("select[name=navMaodian]").show();
      } else if (vals == 1) {
        $("select[name=navLink]").show();
      } else {
        $("input[name=navLinkZdy]").show();
      }
    })
    //添加修改菜单项
  $(".navStyleList .addNavBtn").click(function () {
    var indexN = $("#dragNav-list li.active").index();
    var navListbox = {
      name: '',
      type: 0,
      link: '',
      target: ''
    };
    var navName = $("input[name=navName]").val();
    var navType = $("select[name=navType]").val();
    var navMaodian = $("select[name=navMaodian]").val();
    var navLink = $("select[name=navLink]").val();
    var navLinkZdy = $("input[name=navLinkZdy]").val();
    var navOpen = $("select[name=navOpen]").val();
    navListbox.name = navName;
    navListbox.type = navType;
    navListbox.target = navOpen;
    if (navType == 0) {
      navListbox.link = navMaodian;
    } else if (navType == 1) {
      navListbox.link = navLink;
    } else {
      navListbox.link = navLinkZdy;
    }
    if (indexN != -1) {
      navFooter.nav.navlist[indexN] = navListbox
    } else {
      navFooter.nav.navlist.push(navListbox);
    }
    showNav();
    storeUp(); //保存项目
    $(".navBoxStyle .styleBox").show();
    $(".navBoxStyle .navStyleList").hide();
  })


  //预览
  $(".toPreview").click(function () {
    var valueH = $(".sou_htmlbox").clone();
    valueH.find(".sou_module_set").remove();
    valueH.find(".sou_list_sortable_addBtnBox").remove();
    valueH.find(".sou_list_editor_box").remove();
    valueH.find(".map_set").remove();
    valueH.find(".sou_list_innerBg_btn").remove();
    valueH.find(".ontext_edit").removeAttr('contenteditable spellcheck data-medium-editor-element role aria-multiline medium-editor-index'); //清理medium编辑器属性
    valueH.find(".swiper-wrapper").removeAttr("style");
    valueH.find(".slide_setbox").remove();
    valueH = valueH.html();
    localStorage.sou_editHtml = valueH;
    FeedbackOperation(5010101, "", "", pageId); //编辑器操作记录
  });
  //保存
  $(".storeThis").click(function () {
    storeUp(1);
  });


  //版块切换
  $(".templetBox_topNav span").click(function () {
    FeedbackOperation($(this).attr("indexNum"), "", "", pageId); //编辑器操作记录
    $(this).addClass("sou_checked").siblings().removeClass("sou_checked");
    $(this).parent(".templetBox_topNav").next().children().eq($(this).index()).show().siblings().hide();
  });


  showNav();
  //拖拽更改位置
  (function () {
    'use strict';
    var byId = function (id) {
        return document.getElementById(id);
      },
      loadScripts = function (desc, callback) {
        var deps = [],
          key, idx = 0;
        for (key in desc) {
          deps.push(key);
        };
        (function _next() {
          var pid, name = deps[idx],
            script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = desc[deps[idx]];
          pid = setInterval(function () {
            if (window[name]) {
              clearTimeout(pid);
              deps[idx++] = window[name];
              if (deps[idx]) {
                _next();
              } else {
                callback.apply(null, deps);
              }
            }
          }, 30);
          document.getElementsByTagName('head')[0].appendChild(script);
        })()
      };
    //模块位置更改
    Sortable.create(byId('drag-list'), {
      handle: '.nav_area',
      animation: 150,
      onEnd: function (evt) {
        //  console.log(evt.oldIndex,evt.newIndex);
        var oldModBk = modBK[evt.oldIndex];
        modBK.splice(evt.oldIndex, 1);
        modBK.splice(evt.newIndex, 0, oldModBk);
        FeedbackOperation(5010205, "", "", pageId); //编辑器操作记录
        if (evt.newIndex > evt.oldIndex) {
          $("#" + modBK[evt.newIndex].id).insertAfter($("#" + modBK[evt.newIndex - 1].id));
        } else if (evt.newIndex < evt.oldIndex) {
          $("#" + modBK[evt.newIndex].id).insertBefore($("#" + modBK[evt.newIndex + 1].id));
          //  $(".header_nav").after($("#"+modBK[evt.newIndex].id));
        }
        showNav();
        storeUp(); //保存项目
      }
    });
    //导航位置更改
    Sortable.create(byId('dragNav-list'), {
      handle: '.nav_area',
      animation: 80,
      onEnd: function (evt) {
        //  console.log(evt.oldIndex,evt.newIndex);
        var oldNavlist = navFooter.nav.navlist[evt.oldIndex];
        navFooter.nav.navlist.splice(evt.oldIndex, 1);
        navFooter.nav.navlist.splice(evt.newIndex, 0, oldNavlist);
        console.log(navFooter.nav.navlist);
        showNav();
        storeUp(); //保存项目
      }
    });
  })();

  //版块设置内容更新
  function updateCont(a) {
    $("input[name=templet_list]").val(a);
    $(".templet_info input[name=tem_name]").val(modBK[a].navname);
    if (modBK[a].isNav) {
      $(".templet_info input[name=inNav]").prop("checked", true);
    } else {
      $(".templet_info input[name=inNav]").attr("checked", false)
    }
  };
  //控制编辑面板
  $(".sou_showNav").click(function () {
    $(".sou_eidt_navleft").removeClass("sou_nav_show");
    $(".sou_htmlbox").css("width", vwidth - 200 + "px");
    $(".navbar1").removeClass("isScroll_o").addClass('isScroll_s');;
    swiperThis();
  });
  //设置版块按钮点击
  $("body").on("click", " .sou_htmlbox .sou_list_title", function () {
    if ($(this).next().is(":hidden")) {
      $(this).next().show();
    } else {
      $(this).next().hide();
    }
  });

  //保存版块按钮
  $("body").on("click", ".module_keep", function () {
    keepModule_show();
    var isType = $(this).parent().parent().attr('istype');
    if (isType == 30001) {
      var aa = $(this).parent().next();
      var cc = aa.clone();
      for (var i = 0; i < modules[30001].length; i++) {
        if (isType == modules[30001][i].config.type && navFooter.nav.moduleType == modules[30001][i].config.moduleType) {
          module_keep = modules[30001][i];
        }
      }
      module_keep.config.nav = navFooter.nav;
      $("input[name=keepModule_name]").val('默认导航');
    } else {
      var aa = $(this).parents(".sou_content_html");
      var bb = aa.index();
      var cc = aa.clone();
      $.each(modules, function (index, element) {
        for (var i = 0; i < element.length; i++) {
          if (modBK[bb - 1].type == element[i].config.type && modBK[bb - 1].moduleType == element[i].config.moduleType) {
            module_keep = element[i];
            module_keep.type = isType;
          }
        }
      }) 
    } 
    $("input[name=keepModule_name]").val(modBK[bb - 1].navname);
    $("textarea[name=keepModule_caption]").val(module_keep.describe);
    cc.removeAttr("id");
    cc.find(".sou_module_set").remove();
    cc.find(".sou_list_sortable_addBtnBox").remove();
    cc.find(".sou_list_editor_box").remove();
    cc.find(".map_set").remove();
    cc.find(".sou_list_innerBg_btn").remove();
    cc.find(".ontext_edit").removeAttr('contenteditable spellcheck data-medium-editor-element role aria-multiline medium-editor-index');//清理medium编辑器属性  
    module_keep.html = cc.prop("outerHTML");
  });

  //隐藏编辑面板
  $(".close_navBox").click(function () {
    $(".sou_eidt_navleft").addClass("sou_nav_show");
    $(".sou_htmlbox").css("width", "100%");
    $(".sou_templetBox").removeClass("sou_tepBoxShow");
    $(".navbar1").addClass("isScroll_o").removeClass('isScroll_s');
    swiperThis();
  });
  //显示版块盒子
  $("body").on('click', '.show_bankuai', function (e) {
    if ($(".show_bankuai ul").is(":hidden")) {
      $(".show_bankuai ul").show();
    } else {
      $(".show_bankuai ul").hide();
    }
  });
  $(".close_bankuai").click(function () {
    $(".show_bankuai ul").hide();
    $(".sou_templetBox ").removeClass("sou_tepBoxShow");
  });
  //显示版块盒子
  $("body").on('click', '.show_bankuai ul li', function (e) {
    e.stopPropagation();
    var index = $(this).attr("zjid");
    $(".sou_templetBox ").addClass("sou_tepBoxShow");
    thisbkType = index;
    modulebox = modules[index];
    userModuleOn = userModulebox[index];
    showModule(modules[index], $(".templetBox_list .modulebox"));
    showUserModule(userModulebox[index], $(".sou_templetBox .userModulebox"));
  });
  //头部版块盒子
  $(".show_Headbox").click(function () {
    FeedbackOperation(5010201, "", "", pageId); //编辑器操作记录
    if (!$(".templet1").hasClass("sou_tepBoxShow")) {
      $(".templet1").addClass("sou_tepBoxShow");
      $(".templet2").removeClass("sou_tepBoxShow");
      $(".templet3").removeClass("sou_tepBoxShow");
    } else {
      $(".templet1").removeClass("sou_tepBoxShow");
    }
  });
  //版块设置展开
  $("body").on("click", ".change_bkset", function () {
    var _this = $(".templet_info");
    if (_this.is(":hidden")) {
      updateCont($(this).parent("li").index());
      _this.show();
      showNav();
    } else {
      _this.hide();
    }
    allBlock();
    FeedbackOperation(5010206, "", "", pageId); //编辑器操作记录
  });
  //版块内容修改
  $(".templet_info input[name=tem_name]").keyup(function () {
    modBK[$(".templet_info input[name=templet_list]").val()].navname = $(this).val();
    showNav();
    storeUp(); //保存项目
  });
  $(".templet_info input[name=inNav]").change(function () {
    if ($(this).is(":checked")) {
      modBK[$(".templet_info input[name=templet_list]").val()].isNav = !0;
    } else {
      modBK[$(".templet_info input[name=templet_list]").val()].isNav = !1;
    }
    showNav();
    storeUp(); //保存项目
  });
  //删除版块
  $(".delete_mod").click(function () {
    var a = $(".templet_info input[name=templet_list]").val();
    if (modBK[a].moduleType == '7') {
      layer.msg("当前页不可删除此模块！");
    } else {
      layer.confirm('确认是否删除模块？', {
        btn: ['确定', '取消']
      }, function (index, layero) {
        $("#" + modBK[a].id).remove();
        modBK.splice(a, 1);
        showNav();
        allBlock();
        $(".templet_info").hide();
        layer.closeAll();
        winRize();
        storeUp(); //保存项目
      }, function (index) {
        //按钮【按钮二】的回调
      });
    }

  });
  // 复制版块
  $(".copy_mod").click(function () {
    var b = $(".templet_info input[name=templet_list]").val();
    var newModule = JSON.parse(JSON.stringify(modBK[b]));
    FeedbackOperation(5010207, "", "", pageId); //编辑器操作记录
    newModule.id = 'module_' + (module_Id + 1);
    modBK.splice(parseInt(b) + 1, 0, newModule);
    var hhh = $("#" + modBK[b].id).clone();
    hhh[0].id = newModule.id;
    $("#" + modBK[b].id).after(hhh);
    module_Id += 1;
    showNav();
    allBlock();
    $(".templet_info").hide();
    localstrang();
    winRize();
    newSwiper('.swiper-container');
    newEditor();
    storeUp(); //保存项目
  });
  //添加版块
  function addMoudleThis(a, c, f) {
    var b = c.attr("sou_index");
    if (a[b].config.type == 30001) {
      var hhh = c.next("div").children(".header_nav").clone(true);
      if (a[b].config.nav) {
        navFooter.nav = a[b].config.nav;
      } else {
        navFooter.nav.moduleType = a[b].config.moduleType;
      }
      $(".sou_htmlbox .header_nav").attr("moudle-type", a[b].config.moduleType);
      $(".sou_htmlbox .header_nav").attr("isType", a[b].config.type);
      $(".sou_htmlbox .header_nav").html(hhh);
      module_set('', $("#sou_htmlbox .header_nav"));
      layer.msg("更改头部成功");
      newEditor(); //富文本编辑器 
      showNavBot();
    } else if (a[b].config.type == 30002) {
      var hhh = c.next("div").children(".sou_footer").clone(true);
      hhh.attr("isType", a[b].config.type);
      hhh = hhh.html();
      navFooter.footer.moduleType = a[b].config.moduleType;
      $(".sou_htmlbox .sou_footer").html(hhh);
      newEditor(); //富文本编辑器 
      layer.msg("更改底部成功");
    } else {
      var newModule = JSON.parse(JSON.stringify(elemsGroup));
      newModule.id = 'module_' + (module_Id + 1),
        newModule.navname = a[b].name,
        newModule.moduleType = a[b].config.moduleType;
      newModule.type = a[b].config.type;
      newModule.isSlide = a[b].config.isSlide;
      newModule.isbg = a[b].config.isbg;
      newModule.isList = a[b].config.isList;
      newModule.islayout = a[b].config.islayout;
      newModule.isMap = a[b].config.isMap;
      newModule.isVideo = a[b].config.isVideo;
      newModule.isdefined = a[b].config.isdefined;
      newModule.isReseau = a[b].config.isReseau;
      newModule.isBlockBg = a[b].config.isBlockBg;
      newModule.isid = a[b].id;
      newModule.isAllPage = a[b].config.isAllPage;
      modBK.push(newModule);
      var hhh = c.next("div").children(".sou_content_html").clone();
      hhh[0].id = newModule.id;
      hhh.attr("moudle-type", newModule.moduleType);
      hhh.attr("islayout", a[b].config.islayout);
      // hhh.attr("isType", a[b].config.type);
      hhh.attr("isType", thisbkType);
      if(a[b].id){
        hhh.attr("site_module_id", a[b].id);
      }
      $(".sou_htmlbox .sou_footer").before(hhh);
      layer.msg('添加' + a[b].name + '成功');
      if (newModule.isbg == 1) {
        var nums = thisTheme.themeTypebox.length;
        var newNum = 0;
        for (var h = 0; h < modBK.length; h++) {
          if (modBK[h].isbg == 1) {
            newNum += 1;
          };
        };
      }
      if (newModule.isReseau) {
        ReseauAddBtn(hhh.find(".sou_reseau_list"));
      }
      newSwiper('.swiper-container');
      module_set(newModule, hhh);
      module_Id += 1;
      winRize();
      newEditor(); //富文本编辑器 

      FeedbackOperation(f, newModule.isid, newModule.navname, pageId); //编辑器操作记录
    }
    $(".sou_templetBox").removeClass("sou_tepBoxShow");
    $(".sou_templetBox .templetBox_list ul").html("");
    localstrang();
    showNav();
    fenyeresh();
    $(".show_bankuai ul").hide();
    storeUp(); //保存项目
  };
  //添加新版块
  $("body").on("click", ".sou_tepBoxShow .modulebox .section_shade", function () {
    addMoudleThis(modulebox, $(this), 501030102);
  });
  //个人版块添加新版块
  $("body").on("click", ".sou_templetBox  .userModulebox  .section_shade", function () {
    addMoudleThis(userModuleOn, $(this), 501030101);
  });
  /*  //更换头部版块
    $("body").on("click",".templet1 .topModulebox .section_shade",function(){
        var  hhh = $(this).next("div").children(".header_nav").clone(true);
        hhh = hhh.html();
        $(".sou_htmlbox .header_nav").html(hhh);
        layer.msg("更改头部成功"); 
        $(".sou_templetBox").removeClass("sou_tepBoxShow");;
        showNavBot(); 
    });
    //更换底部版块
    $("body").on("click",".templet1 .botModulebox .section_shade",function(){
      var  hhh = $(this).next("div").children(".sou_footer").clone(true);
      hhh = hhh.html();
      $(".sou_htmlbox .sou_footer").show().html(hhh);
      layer.msg("更改底部成功");
      localstrang();
      $(".sou_templetBox").removeClass("sou_tepBoxShow");
      showNavBot();
      storeUp();//保存项目
      newEditor();//富文本编辑器
    });*/
  $(".sou_user_defined").change(function () {
    storeUp(); //保存项目
  });

  //主体点击隐藏内容
  $(".sou_htmlbox").click(function (event) {
    $(".m_linkList").removeClass("m_translete");
    $(".sou_templetBox").removeClass("sou_tepBoxShow");;
  });
  //文本编辑器
  $(".ontext_hide").html("<i class='no_Text' style='color:#999;text-align:center;display: block;border: 1px dashed #999;padding: 5px 15px;font-size:12px;margin:0 8px;'>添加内容</i>");
  var newText = '';
  $("body").on("focus", ".ontext_edit", function () {
    oldText = $.trim($(this).html());
    $(this).find(".no_Text").remove();
    onfocus_this = $(this);
    $(".editAddType").fadeIn();
  });

  $("body").on("blur", ".ontext_edit", function () {
    var newText = $.trim($(this).html());
    $(".editAddType").fadeOut();
    if (oldText != newText) {
      storeUp(); //保存项目
    }
    if ($(this).text() == '') {
      $(this).html("<i class='no_Text' style='color:#999;text-align:center;display: block;border: 1px dashed #999;padding: 5px 15px;font-size:12px;margin:0 8px;'>添加内容</i>");
      $(this).addClass("ontext_hide");
    } else {
      $(this).removeClass("ontext_hide");
    }
  });
  //图库内容
    (function(){
      var _thisimg = $(".image_contbox .listbox_left_btnbox .left_btnbox_list");
      for(var i=0;i<_thisimg.length;i++){
        _thisimg.eq(i).children("p").click(function(evet){
          evet.stopPropagation();
          var indexLi = $(this).parent().index(); $(this).parent().addClass("active").siblings().removeClass("active");
          $(".image_contbox .listbox_right >div").hide().eq(indexLi).show();
          $(this).parents(".listbox_left_btnbox").find("ul").hide();
          $(this).parent().find("ul").show();
          if(indexLi>1){   $(this).next("ul").find("li").removeClass("active").eq(0).addClass("active");
            categoryId = $(this).next("ul").attr("_kind");
            otherFenzu(categoryId,indexLi); 
           }
        });
      }
      userKind(1,uks,2);
      updateFenzu(1,100);
     // otherFenzu(souImgkind,indexLi);
    })();
  //图库切换
  $("body").on("click", ".sou_userImgbox_type ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".listbox_allimg").scrollTop(0);
    uks = $(this).attr("_kind");
    userKind(1, uks, 2);
  });
  //搜到图库类别切换
  $("body").on("click", ".sou_imgbox_type ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".listbox_souimg").scrollTop(0);
    categoryId = $(this).attr("_kindSub");   souKind($(this).parents(".left_btnbox_list").index(), "", 1, 2);
  });

  //编辑图库内容
  $("body").on("click", ".listbox_right li .editImgbox_list", function (e) {
    e.stopPropagation();
    image_contbox();
    xiuxiu_show(4, $(this).parents("li").find("i").css("backgroundImage").replace('url("', '').replace('")', ''));
  });

  //发布设置


  (function () {
    var _thisimg = $(".sou_setbox .listbox_left ul li");
    for (var i = 0; i < _thisimg.length; i++) {
      _thisimg.eq(i).click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".sou_setbox .listbox_right >div").hide().eq($(this).index()).show();
      });
    }
  })();
  $(".file_head button").click(function () {
    sou_setbox();
    sou_checkbox();
    allBlock();
    image_contbox(3);
    imgbox_obj = $(this).parent(".file_head").find("img");
  });
  //隐私设置点击事件
  $(".isShowInput").click(function () {
    if ($(this).is(":checked")) {
      $(".isShowInput").prop("checked", false);
      $(this).prop("checked", true);
    } else {
      $(this).prop("checked", false);
    }
  })

  $(".listbox_keep .keep_this").click(function () {
    ajaxKeep("htmlSingle/fabu.do", "发布成功", 1);
  });
  $(".listbox_keep .save_this").click(function () {
    ajaxKeep("/htmlSingle/save2.json", "保存成功", 2);
  });
  //关闭美图秀秀
  $(".allBlock").click(function () {
    if (!$("#xiuxiu_Box").is(":hidden")) {
      clearFlash();
    }
  });

  // 图片遮罩
  (function () {
    for (var i = 0; i < $(".onImg_edit").length; i++) {
      $("body").on("mouseover", ".onImg_edit:nth-child(" + i + ")", function () {
        var aa = $(this);
        if (!$(this).parents().is(".sou_list_row")) {
          $("#imgBox_shade").css({
            width: $(this).innerWidth() + "px",
            height: $(this).innerHeight() + "px",
            top: $(this).offset().top + "px",
            left: $(this).offset().left + "px"
          }).show();
          $("#imgBox_shade").children(".imgBox_shade_btn").show();
        } else {
          $(this).parents(".sou_list_row").find(".sou_list_shade").css({
            width: $(this).innerWidth() + "px",
            height: $(this).innerHeight() + "px",
            background: "rgba(255,255,255,0.5) ",
            top: parseInt($(this).position().top) + "px",
            left: parseInt($(this).position().left) + "px"
          }).show();
          $(this).parents(".sou_list_row").find(".sou_list_shade").children(".imgBox_shade_btn").show();
        }
        img_this = $(this);
      });
    };
    $(".imgBox_shadebox .shade_a").click(function () {
      imgBoxShade();
      var imgurl = $(this).parent("div").prev("img").attr("src");
      xiuxiu_show(5, imgurl);
      imgbox_obj = $(this).parent("div").prev("img");
    });
    $(".imgBox_shadebox .shade_b").click(function () {
      imgBoxShade();
      image_contbox(5);
      imgbox_obj = $(this).parent("div").prev("img");
    });
    $("body").on("click", ".sou_list_shade .imgBox_shade_btn,#imgBox_shade .imgBox_shade_btn", function () {
      imgBoxShade();
      var bb = img_this.find("img").attr("soulink");
      var cc = img_this.find("img").attr("alt");
      var dd = img_this.find("img").attr("linka");
      imgbox_obj = img_this.children("img");
      $(".imgBox_shadebox .imgBox_imgUrl img").attr("src", img_this.find("img").attr("src"));
      if (bb != '') {
        $(".imgBox_shadebox .imgBox_linkUrl input[name=imgBox_link]").val(bb);
      } else {
        $(".imgBox_shadebox .imgBox_linkUrl input[name=imgBox_link]").val('');
      }
      if (cc != '') {
        $(".imgBox_shadebox .imgBox_linkUrl textarea[name=imgBox_Miaoshu]").val(cc);
      } else {
        $(".imgBox_shadebox .imgBox_linkUrl textarea[name=imgBox_Miaoshu]").val('');
      }
    });
    $("body").on("click", ".keep_imgBox", function () {
      var linka = $(".imgBox_linkUrl input[name=imgBox_link]").val();
      var linkMiao = $(".imgBox_linkUrl textarea[name=imgBox_Miaoshu]").val();
      img_this.find("img").attr("src", $(".imgBox_imgUrl img").attr("src"));
      if (linkMiao != '') {
        img_this.find("img").attr("alt", linkMiao);
      }
      if (linka != '') {
        img_this.find("img").attr("soulink", linka);
        var thisImg = img_this.find("img").clone(true);
        var noF = '';
        var patt1 = /soudao.com/;
        arr = patt1.test(linka);
        if (!arr) {
          noF = 'nofollow';
        }
        img_this.html("<a href=" + linka + " target='_blank' rel=" + noF + "></a>");
        img_this.find("a").append(thisImg);
      }
      imgBoxShade();
      storeUp(); //保存项目
    });
  })();
  $("body").on('mouseover', '.onNav_edit', function () {
    $("#navBox_shade").css({
      width: $(this).innerWidth() + "px",
      height: $(this).innerHeight() + "px",
      top: $(this).offset().top + "px",
      left: $(this).offset().left + "px"
    }).show();
    $("#navBox_shade").children(".navBox_shade_btn").show();
  })
  $("body").on('mouseover', '.onLink_edit', function () {
    $("#linkBox_shade").css({
      width: $(this).innerWidth() + "px",
      height: $(this).innerHeight() + "px",
      top: $(this).offset().top + "px",
      left: $(this).offset().left + "px"
    }).show();
    $("#linkBox_shade").children(".linkBox_shade_btn").show();
  })
  $("#navBox_shade").mouseout(function () {
    $("#navBox_shade").hide();
  });
  $("#imgBox_shade").mouseout(function () {
    $("#imgBox_shade").hide();
  });
  $("#BtnBox_shade").mouseout(function () {
    $("#BtnBox_shade").hide();
  });
  //打开图库上传到轮播图
  $("body").on("click", ".slide_draw button", function () {
    image_contbox(2);
    imgbox_obj = $(this).parents(".swiper-slide");
  });
  //轮播图打开图片编辑
  $(".edit_imgbtn").click(function () {
    slidebox();
    var imgurl = $(this).parent("div").prev("img").attr("src");
    xiuxiu_show(2, imgurl);
    imgbox_obj = $(this).parent("div").prev("img");
  });
  //图库选中图片
  $("body").on("click", ".listbox_right ul li", function (e) {
    e.stopPropagation();
    var imgUrl = $(this).children("i").css("backgroundImage").replace('url("', '').replace('")', '');
    var sou_iconts = $(".image_contbox input[name=sou_icont]").val();
    imgEcho(sou_iconts, imgUrl);
    image_contbox(0);
  });
  //删除轮播图内图
  $("body").on("click", ".slide_zhe span", function (e) {
    var _this = $(this);
    layer.confirm('确认删除滑块？', {
      title: '提示'
    }, function (index) {
      var parObj = _this.parents(".sou_content_html").attr("swiper_index");
      let indexN = _this.index();
      if (parObj > 0) {
        swiper3[parObj].removeSlide(indexN);
      } else {
        if (swiper3.length == undefined) {
          swiper3.removeSlide(indexN);
        } else {
          swiper3[0].removeSlide(indexN);
        }
      };
      _this.parents("li").remove();
      swiperThis();
      layer.closeAll();
    });
  });
  //添加轮播图内图
  $("body").on("click", ".add_slide_list", function () {
    var a = $(this).parents(".sou_module_set").next();
    var addSlide = a.find(".swiper-slide:last-child").clone();
    $(this).prev("ul").append("<li sou_alt='点击设置轮播图' class='demoLeft'><div class='slide_zhe'><span class='sou_iconfont'>&#xe6d3;</span></div><p>滑块(" + ($(this).prev("ul").children().length + 1) + ")</p></li>");
    var parObj = $(this).parents(".sou_content_html").attr("swiper_index");
    if (parObj > 0) {
      swiper3[parObj].appendSlide(addSlide);
    } else {
      if (swiper3.length == undefined) {
        swiper3.appendSlide(addSlide);
      } else {
        swiper3[0].appendSlide(addSlide);
      }
    };
    swiperThis();
    newEditor();
    storeUp(); //保存项目
  });
  //点击切换轮播内容
  $("body").on("click", ".slide_imglist li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var parObj = $(this).parents(".sou_content_html").attr("swiper_index");
    if (parObj > 0) {
      swiper3[parObj].slideTo($(this).index(), 500, false);
    } else {
      if (swiper3.length == undefined) {
        swiper3.slideTo($(this).index(), 500, false);
      } else {
        swiper3[0].slideTo($(this).index(), 500, false);
      }
    };
  });
  $("body").on("change", ".slide_draw select", function () {
    var lis = $(this).val();
    if (lis == 'cover') {
      $(this).parents(".swiper-slide").css({
        backgroundSize: lis,
        backgroundRepeat: "no-repeat"
      });
    }
    if (lis == 'contain') {
      $(this).parents(".swiper-slide").css({
        backgroundSize: lis,
        backgroundRepeat: "no-repeat"
      });
    }
    if (lis == 'tile') {
      $(this).parents(".swiper-slide").css({
        backgroundSize: "auto",
        backgroundRepeat: "repeat"
      });
    }
    if (lis == 'center') {
      $(this).parents(".swiper-slide").css({
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat"
      });
    }
  });
  //背景设置
  // -删除图片背景组件-
  function delete_bgImg(obj) {
    var objs = obj.parent(".bg_img");
    objs.hide();
    objs.siblings("select").hide();
    obj.parents(".sou_content_html").removeAttr("style");
    modBK[obj.parents(".sou_content_html").index() - 1].isbg = 1;
  };
  //添加单色背景
  $("body").on("click", ".bg_list_li li", function () {
    var _thisonj = $(this).parents(".sou_content_html");
    _thisonj.removeAttr("class").attr("class", "sou_content_html").addClass($(this).attr("class"));
    delete_bgImg(_thisonj.find(".bg_img").children("span"));
    modBK[_thisonj.index() - 1].isbg = 1;
  });
  //添加图片背景
  $("body").on("click", ".bg_draw button", function () {
    image_contbox(1);
    imgbox_obj = $(this);
  });
  //删除图片背景
  $("body").on("click", ".bg_img span", function () {
    delete_bgImg($(this));
  });
  //背景图拉伸/填充
  $("body").on("change", ".bg_draw select", function () {
    var lis = $(this).val();
    if (lis == 'cover') {
      $(this).parents(".sou_content_html").css({
        backgroundSize: lis,
        backgroundRepeat: "no-repeat"
      });
    }
    if (lis == 'contain') {
      $(this).parents(".sou_content_html").css({
        backgroundSize: lis,
        backgroundRepeat: "no-repeat"
      });
    }
    if (lis == 'tile') {
      $(this).parents(".sou_content_html").css({
        backgroundSize: "auto",
        backgroundRepeat: "repeat"
      });
    }
    if (lis == 'center') {
      $(this).parents(".sou_content_html").css({
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat"
      });
    }
  });
  //选择主题
  $("body").on("click", ".sou_themeSet .themeSet_box ul li", function () {
    $(".themeSet_box h3 span").text($(this).children("button").text());
    thisTheme = themeBox[$(this).index()];
    themeAdd();
    themeRen();
  });
  //保存主题
  $(".sou_themeSet .add_themeSet").click(function () {
    $(".sou_themeSet .oldTheme").val("");
    showTheme();
    storeUp(); //保存项目
  });
  //导航条颜色
  $(".navBg_btn .navBg_btn_color input").change(function () {
    var colors = $(this).val();
    $(".sou_htmlbox .header_nav").removeAttr("class").attr("class", "header_nav");
    $(".sou_htmlbox .header_nav >div").css("background", colors);
  });
  $(".navBg_btn .navBg_btn_img").click(function () {
      showTheme();
      image_contbox(6);
      $(".sou_htmlbox .header_nav").removeAttr("class").attr("class", "header_nav");
      imgbox_obj = $(".sou_htmlbox .header_nav >div");
    })
    //布局设置
    //横向布局设置
  $("body").on("click", ".layout_list_abeamBtn", function () {
    var this_obj = $(this).parents(".sou_content_html");
    $(this).addClass("active").siblings().removeClass("active");
    this_obj.find(".sou_list_row").removeClass("list_one list_two list_three list_four img_onLeft img_onRight img_onAlt big_List");
    this_obj.find(".layout_list_2btn").hide();
    this_obj.find(".layout_list_3btn").show();
    this_obj.find(".sou_list_row").addClass("list_one img_onLeft");
    storeUp(); //保存项目
  });
  //纵向布局设置
  $("body").on("click", ".layout_list_endwiseBtn", function () {
    var this_obj = $(this).parents(".sou_content_html");
    $(this).addClass("active").siblings().removeClass("active");
    this_obj.find(".sou_list_row").removeClass("list_one list_two list_three list_four img_onLeft img_onRight img_onAlt big_List");
    this_obj.find(".layout_list_2btn").show();
    this_obj.find(".layout_list_3btn").hide();
    this_obj.find(".sou_list_row").addClass("list_three");
    storeUp(); //保存项目
  });
  //大尺寸图片设置
  $("body").on("click", ".layout_list_bigImgBtn", function () {
    var this_obj = $(this).parents(".sou_content_html");
    $(this).addClass("active").siblings().removeClass("active");
    this_obj.find(".sou_list_row").removeClass("list_one list_two list_three list_four img_onLeft img_onRight img_onAlt");
    this_obj.find(".layout_list_2btn").hide();
    this_obj.find(".layout_list_3btn").hide();
    this_obj.find(".sou_list_row").addClass("big_List");
    storeUp(); //保存项目
  });

  //图片位置设定
  $("body").on("click", ".layout_list_3btn button", function () {
    var this_obj = $(this);
    var this_parent = this_obj.parents(".sou_content_html");
    $(this).addClass("active").siblings().removeClass("active");
    this_parent.find(".sou_list_row").removeClass("img_onLeft img_onRight img_onAlt");
    if (this_obj.is(".layout_list_01")) {
      this_parent.find(".sou_list_row").addClass("img_onLeft");
    } else if (this_obj.is(".layout_list_02")) {
      this_parent.find(".sou_list_row").addClass("img_onRight");
    } else {
      this_parent.find(".sou_list_row").addClass("img_onAlt");
    }
    storeUp(); //保存项目
  });

  //列表横排数量设定
  $("body").on("click", ".layout_list_2btn button", function () {
    var this_obj = $(this);
    var this_parent = this_obj.parents(".sou_content_html");
    $(this).addClass("active").siblings().removeClass("active");
    this_parent.find(".sou_list_row").removeClass("list_one list_two list_three list_four");
    this_parent.find(".caption").removeClass("captionOn");
    if (this_obj.is(".layout_list_01")) {
      this_parent.find(".sou_list_row").addClass("list_one");
      if (this_parent.find(".caption").eq(0).parent().children().length < 2) {
        this_parent.find(".caption").addClass("captionOn");
      }
    } else if (this_obj.is(".layout_list_02")) {
      this_parent.find(".sou_list_row").addClass("list_two");
    } else if (this_obj.is(".layout_list_03")) {
      this_parent.find(".sou_list_row").addClass("list_three");
    } else if (this_obj.is(".layout_list_04")) {
      this_parent.find(".sou_list_row").addClass("list_four");
    }
    storeUp(); //保存项目
  });

  //自定义布局设置
  $("body").on("click", ".defined_list_box button", function () {
    var parent_obj = $(this).parents(".sou_content_html");
    var this_obj = $(this);
    var child_num = parent_obj.find(".defined_box").children();
    var addHtml = parent_obj.find(".sou_list_sortable").eq(0).clone();
    addHtml.find(".sou_list_row").remove();
    addHtml = addHtml.prop("outerHTML");
    if (this_obj.attr("numb") == 1 && child_num.length > 1) {
      var index = layer.confirm('你确定要更改布局为单列吗？其余的竖列会则会删除?', {
        title: '提示'
      }, function (index) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box").children().eq(0).siblings().remove();
        this_obj.addClass("active").siblings().removeClass("active");
        parent_obj.find(".list_two").attr("style", "min-width:100%;");
        parent_obj.find(".list_three").attr("style", "min-width:100%;");
        layer.close(index);
      });
    }
    if (this_obj.attr("numb") == 2) {
      if (child_num.length == 1) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_tow");
        parent_obj.find(".defined_box").append(addHtml);
      }
      if (child_num.length == 2) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_tow");
      }
      this_obj.addClass("active").siblings().removeClass("active");
      if (child_num.length == 3) {
        var index = layer.confirm('你确定要更改布局吗？多余的竖列会则会删除?', {
          title: '提示'
        }, function (index) {
          parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_tow").children("div:last-child").remove();
          this_obj.addClass("active").siblings().removeClass("active");
          parent_obj.find(".list_two").attr("style", "min-width:100%;");
          parent_obj.find(".list_three").attr("style", "min-width:100%;");
          layer.close(index);
        });
      }
    }
    if (this_obj.attr("numb") == 3) {
      if (child_num.length == 1) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_three");
        var a = addHtml + addHtml;
        parent_obj.find(".defined_box").append(a);
      }
      if (child_num.length == 2) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_three");
        parent_obj.find(".defined_box").append(addHtml);
      }
      this_obj.addClass("active").siblings().removeClass("active");
    }
    if (this_obj.attr("numb") == 4) {
      if (child_num.length == 1) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_four");
        parent_obj.find(".defined_box").append(addHtml);
      }
      this_obj.addClass("active").siblings().removeClass("active");
      if (child_num.length == 2) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_four");
      }
      if (child_num.length == 3) {
        var index = layer.confirm('你确定要更改布局吗？多余的竖列会则会删除（不可恢复）?', {
          title: '提示'
        }, function (index) {
          parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_four").children("div:last-child").remove();
          this_obj.addClass("active").siblings().removeClass("active");
          parent_obj.find(".list_two").attr("style", "min-width:100%;");
          parent_obj.find(".list_three").attr("style", "min-width:100%;");
          layer.close(index);
        });
      }
    }
    if (this_obj.attr("numb") == 5) {
      if (child_num.length == 1) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_five");
        parent_obj.find(".defined_box").append(addHtml);
      }
      if (child_num.length == 2) {
        parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_five");
      }
      this_obj.addClass("active").siblings().removeClass("active");
      if (child_num.length == 3) {
        var index = layer.confirm('你确定要更改布局吗？多余的竖列会则会删除（不可恢复）?', {
          title: '提示'
        }, function (index) {
          parent_obj.find(".defined_box").removeAttr("class").addClass("defined_box defined_box_five").children("div:last-child").remove();
          this_obj.addClass("active").siblings().removeClass("active");
          parent_obj.find(".list_two").attr("style", "min-width:100%;");
          parent_obj.find(".list_three").attr("style", "min-width:100%;");
          layer.close(index);
        });
      }
    }
    storeUp(); //保存项目
    newEditor(); //富文本编辑器
  });
  //打开模块选择器
  $("body").on("click", ".defined_box .add_btn", function () {
    var this_obj = $(this);
    if (this_obj.parent().next().is(":hidden")) {
      this_obj.parent().next().show();
    } else {
      this_obj.parent().next().hide();
    }
  });
  //选择模块
  $("body").on("click", ".defined_box .defined_selectors li", function () {
    var this_obj = $(this);
    var addhtml = $(".defined_store>div").eq(this_obj.index()).clone();
    addhtml.prepend($(".sou_editbox>.sou_list_editor_box").clone(true).removeAttr("style"));
    if (this_obj.attr("orderNum") == 5) {
      var _set2 = $("#sou_edit >div.map_set").clone().removeAttr("style");
      _set2.find(".map_inputbox").remove();
      addhtml.find(".onvideo_edit").append(_set2);
    }
    this_obj.parents(".add_defined_btn").before(addhtml);
    this_obj.parent().hide();
    this_obj.parents(".sou_list_sortable").sortable({
      handle: ".sou_list_moveBtn",
      revert: true,
      connectWith: '.defined_box .sou_list_sortable',
      deactivate: function (event, ui) {
        storeUp(); //保存项目
      }
    });
    this_obj.parents(".sou_list_sortable").sortable("refresh");
    winRize();
    storeUp(); //保存项目
    newEditor(); //富文本编辑器
  });
  //按钮设置
  $("body").on("mouseover", ".onBtn_edit", function () {
    btn_this = $(this);
    if (!$(this).parents().is(".sou_list_row")) {
      $("#BtnBox_shade").css({
        width: $(this).innerWidth() + "px",
        height: $(this).innerHeight() + "px",
        top: $(this).offset().top + "px",
        left: $(this).offset().left + "px"
      }).show();
      $("#BtnBox_shade").children(".btn_shade_btn").show();
    } else {
      $(this).parents(".sou_list_row").find(".sou_list_shade").css({
        width: $(this).innerWidth() + "px",
        height: $(this).innerHeight() + "px",
        background: "rgba(255,255,255,0.5) ",
        top: parseInt($(this).position().top) + "px",
        left: parseInt($(this).position().left) + "px"
      }).show();
      $(this).parents(".sou_list_row").find(".sou_list_shade").children(".btn_shade_btn").show();
    }
  });
  //打开按钮设置
  $("body").on("click", ".btn_shade_btn", function () {
    showBtnSet();
    if (!$(this).children().hasClass(".no_Btn")) {
      $(".btn_setBox input[name=btnName]").val(btn_this.find("a").text());
      if (btn_this.find("a").attr("href") == "javascript:;") {
        $(".btn_setBox input[name=btnLink]").val("");
      } else {
        $(".btn_setBox input[name=btnLink]").val(btn_this.find("a").attr("href"));
      }
    } else {
      $(".btn_setBox input[name=btnLink]").val("");
      $(".btn_setBox input[name=btnLink]").val("");
    }
  });
  //保存按钮设置
  $(".btn_setBox_list .btn_setAdd").click(function () {
    var a = $(".btn_setBox_list  input[name=btnName]").val();
    var b = $(".btn_setBox_list  input[name=btnLink]").val();
    var c = $("<a href='javascript:;'></a>");
    if (a != '') {
      c.text(a);
      if (b == '') {
        c.attr("href", "javascript:;");
      } else {
        c.attr("href", b);
      }
      btn_this.html(c);
      btn_this.removeClass("onBtn_hide")
      showBtnSet();
      storeUp(); //保存项目
    } else {
      layer.msg("请填写按钮名称！");
    }
  });
  //移出按钮
  $(".btn_setBox_list .btn_setRemove").click(function () {
    btn_this.addClass("onBtn_hide").html("<i class='no_Btn' style='color:#999;text-align:center;display: block;border: 1px dashed #999;padding: 5px 15px;font-size:12px;margin:0 8px;'>添加按钮</i>");
    showBtnSet();
    storeUp(); //保存项目
  });

  //文章列表
  $("body").on("mouseover", ".onArticle_edit", function () {
    article_this = $(this); 
    $("#listBox_shade").css({
      width: $(this).innerWidth() + "px",
      height: $(this).innerHeight() + "px",
      top: $(this).offset().top + "px",
      left: $(this).offset().left + "px"
    }).show();
    $("#listBox_shade").children("p").show();
  });
  $("#listBox_shade").mouseout(function () {
    $("#listBox_shade").hide();
  });
  //打开模板库
  $(".sampleBtn").click(function () {
    FeedbackOperation(5010104, "", "", pageId); //编辑器操作记录
    layer.open({
      title: '搜到模板库',
      type: 2,
      area: ['960px', '643px'],
      content: "/html/sample" + EXT + "?pageId=" + pageId,
    });
  });
  //图库 滚动加载图片
  function onScroll(a, b) {
    var objChl = b.children("ul");
    b.scroll(function () {
      if (b.scrollTop() >= objChl.height() - b.height()) {
        var thisPage = parseInt(objChl.attr("page"));
        var pageCount = parseInt(objChl.attr("pageCount"));
        if (thisPage <= pageCount) {
          objChl.attr("page", thisPage + 1);
          if (a == 1) {
            souKind(b.index(), "", thisPage + 1, 1);
          } else {
            userKind(thisPage + 1, uks, 1);
          }
        } else {
          // layer.msg("没有了！");
        }
      }
    })
  };
  onScroll(1, $(".listbox_souimg"));
  onScroll(2, $(".listbox_allimg"));
  //list列表内容
  //拖拽按钮事件
  $("body").on("mouseover", ".sou_list_moveBtn", function () {
    var vwidth = $(this).parents(".sou_list_row").innerWidth();
    var vheight = $(this).parents(".sou_list_row").innerHeight();
    $(this).nextAll("p").css({
      width: parseInt(vwidth) + 10 + "px",
      height: parseInt(vheight) + 10 + "px",
      background: "rgba(255,255,255,0.5)",
      top: "-5px",
      left: "-5px"
    }).show();
  }).on("mouseout", ".sou_list_moveBtn", function () {
    $(this).nextAll("p").hide();
  });

  //删除按钮事件
  $("body").on("mouseover", ".sou_list_deletBtn", function () {
    var vwidth = $(this).parents(".sou_list_row").innerWidth();
    var vheight = $(this).parents(".sou_list_row").innerHeight();
    $(this).nextAll("p").css({
      width: parseInt(vwidth) + 10 + "px",
      height: parseInt(vheight) + 10 + "px",
      background: "rgba(255,0,0,0.3)",
      top: "-5px",
      left: "-5px"
    }).show();;
  }).on("mouseout", ".sou_list_deletBtn", function () {
    $(this).nextAll("p").hide();
  }).on("click", ".sou_list_deletBtn", function () {
    if ($(this).parents(".sou_list_row").siblings('.sou_list_row').length > 0) {
      $(this).parents(".sou_list_row").remove();
    } else {
      layer.msg('最少保留一个列表项！');
    }
    storeUp(); //保存项目
  });
  $("body").on("mouseout", ".sou_list_editor_box .sou_list_shade", function () {
    $(this).hide();
    $(this).children("span").hide();
  });

  $(".sou_list_sortable").sortable({
    handle: ".sou_list_moveBtn",
    revert: true,
    deactivate: function (event, ui) {
      storeUp(); //保存项目
    }
  });

  function getListCont(a) {
    var obj1 = $(".templetBox_list .modulebox li");
    for (var i = 0; i < obj1.length; i++) {
      if (a == obj1.eq(i).find(".sectionBox_list").attr("moudle-type")) {
        var b = obj1.eq(i).find(".sou_list_row:last").clone();
        b.prepend($(".sou_editbox>.sou_list_editor_box").clone(true));
        return b;
      }
    }
  };
  $("body").on("click", ".sou_list_sortable_addBtnBox .sou_list_sortable_addBotton", function () {
    var a = $(this).parent().prev(".sou_list_sortable");
    if (a.children().length > 0) {
      a.append(a.find(".sou_list_row:last").clone());
    } else {
      //console.log(getListCont(7));
      a.append(getListCont(7));
    }
    swiperThis();
    storeUp(); //保存项目
    newEditor(); //富文本编辑器
  });
  //地图编辑
  $("body").on("mouseover", ".sou_htmlbox .onmap_edit,.onvideo_edit", function () {
    $(this).children(".map_set").css({
      width: $(this).innerWidth() + 10 + "px",
      height: $(this).innerHeight() + 10 + "px"
    }).show();
  });
  $("body").on("mouseout", ".sou_htmlbox .onmap_edit,.onvideo_edit", function () {
    $(this).children(".map_set").hide();
  });
  $("body").on("click", ".onmap_edit .map_refresh", function () {
    $(this).next(".map_inputbox").show();
  });
  $("body").on("click", ".onvideo_edit .map_refresh", function () {
    $(this).siblings(".video_inputbox").show();
  });
  $("body").on("click", ".map_set .sou_close_map,.video_close_map", function () {
    $(this).parents(".map_inputbox").hide();
    $(this).parents(".video_inputbox").hide();
  });
  //  地图设置
  $("body").on("click", ".onmap_edit .map_button", function () {
    $(this).parent(".map_inputbox").hide();
    var thisMap = $(this).prev("input").val();
    var h = $(this).parents(".onmap_edit").find("iframe");
    iframeShow(h, thisMap);
  });
  // 视频添加内容
  $("body").on("click", ".onvideo_edit .video_button", function () {
    if ($(this).parent().attr("linkNum") == 1) {
      var thisVadio = $(this).parent().find("textarea").val();
      if (thisVadio.length > 10) {
        $(this).parents(".onvideo_edit").find(".sou_vadiobox").html(thisVadio);
        $(this).parent(".video_inputbox").hide();
      } else {
        layer.msg("请输入正确视频通用码！");
      }
    } else {
      var a = $(this).parent().children(".inputbox_2");
      var b = a.children("input[name=viedeo_mp4]").val();
      var c = a.children("input[name=viedeo_ogg]").val();
      if (b.length > 10 && c.length > 10) {
        var vidHtml = "<video  controls><source src=" + b + " type='video/mp4'><source src=" + c + " type='video/ogg'>您的浏览器不支持 video 标签。</video>";
        $(this).parents(".onvideo_edit").find(".sou_vadiobox").html(vidHtml);
        $(this).parent(".video_inputbox").hide();
        storeUp(); //保存项目
      } else {
        layer.msg("请输入正确视频地址！");
      }
    }
  });
  //  选择视频模式
  $("body").on("click", ".video_inputbox input[type=radio]", function () {
    if ($(this).val() == 1) {
      $(this).parent().siblings(".inputbox_1").show();
      $(this).parent().siblings(".inputbox_2").hide();
    } else {
      $(this).parent().siblings(".inputbox_2").show();
      $(this).parent().siblings(".inputbox_1").hide();
    }
    $(this).parents(".video_inputbox").attr("linkNum", $(this).val());
  });
  //判断是否有pageId
  function ispageId() {
    if (pageId == '' && isMoban != 1) {
      layer.open({
        title: '搜到模板库',
        type: 2,
        closeBtn: !1,
        area: ['960px', '643px'],
        content: "/html/sample" + EXT + "?pageId=" + pageId,
      });
    };
  };
  // ispageId();
  //设置滚动条样式
  $(".listbox_left").yi_scroll({
    cPWidth: "140px"
  });
  //页眉页脚设置
  $(".navChekebox input[name=navCheck]").change(function () {
    if ($(this).is(":checked")) {
      $("#sou_htmlbox .header_nav").attr("style", "display:block;");
    } else {
      $("#sou_htmlbox .header_nav").attr("style", "display:none;");
    }
  });
  $(".navChekebox input[name=bottomCheck]").change(function () {
    if ($(this).is(":checked")) {
      $("#sou_htmlbox .sou_footer").attr("style", "display:block;");
    } else {
      $("#sou_htmlbox .sou_footer").attr("style", "display:none;");
    }
  });

  //区块布局
  function reseau1btn(obj) {
    obj.addClass("active").siblings().removeClass("active");
    obj.parents(".reseau_list_box").find(".reseau_2btn").children("div").eq(obj.index()).show().siblings().hide();
    storeUp(); //保存项目
  } //按钮
  function addReseauList(num, obj) {
    var hasLength = obj.find(".sou_reseau_cell").removeAttr("style").length;
    obj.find(".cell_inner").removeClass("cell_inner").unwrap();
    ReseauAddBtn(obj);
    var htmls = obj.children("div:last").prop("outerHTML");
    if (num > hasLength) {
      for (var i = 0; i < (num - hasLength); i++) {
        obj.append(htmls);
      }
    } else {
      for (var i = 0; i < (hasLength - num); i++) {
        obj.children("div:last").remove();
      }
    }
  } //列表数量
  function ReseauCustom(x, y, obj) {
    addReseauList(x * y, obj);
    obj.find(".sou_reseau_cell").attr("style", "width:" + (100 / x) + "%");
  } // 自定义列表
  $("body").on("click", ".reseau_set .reseau_1btn .reseau_custom", function () {
    reseau1btn($(this));
    $(this).parents(".reseau_x_y").find("select").val("2");
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_list");
    ReseauCustom(2, 2, obj);
  });
  $("body").on("click", ".reseau_set .reseau_1btn .reseau_fixed", function () {
    reseau1btn($(this));
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_list");
    addReseauList(4, obj);
    obj.addClass("sou_twoTopTwoBottom").removeClass("sou_threeTopTowBottom sou_towLeftOneRight sou_oneLeftTowRight");
  });
  $("body").on("change", ".reseau_3btn select[name=reseau_space]", function () {
    var a = $(this).val();
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_list");
    if (a == 0) {
      obj.removeClass("sou_reseau_pb sou_reseau_ps");
    } else if (a == 1) {
      obj.removeClass("sou_reseau_pb").addClass("sou_reseau_ps");
    } else {
      obj.removeClass("sou_reseau_ps").addClass("sou_reseau_pb");
    }
    storeUp(); //保存项目
  });
  $("body").on("change", ".reseau_3btn select[name=reseau_hei]", function () {
    var a = $(this).val();
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_list");
    if (a == 0) {
      obj.removeClass("sou_reseau_hc sou_reseau_hb").addClass("sou_reseau_hs");
    } else if (a == 1) {
      obj.removeClass("sou_reseau_hs sou_reseau_hb").addClass("sou_reseau_hc");
    } else {
      obj.removeClass("sou_reseau_hs sou_reseau_hc").addClass("sou_reseau_hb");
    }
    storeUp(); //保存项目
  });
  $("body").on("change", ".reseau_3btn select[name=reseau_width]", function () {
    var a = $(this).val();
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_wrap");
    if (a == 0) {
      obj.removeClass("sou_full").addClass("sou_regular");
    } else if (a == 1) {
      obj.removeClass("sou_regular").addClass("sou_full");
    }
    storeUp(); //保存项目
  });
  $("body").on("click", ".reseau_2btn .reseau_compose  span", function () {
    var a = $(this).index();
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_list");
    $(this).addClass("active").siblings().removeClass("active");
    if (a == 0) {
      addReseauList(4, obj);
      obj.addClass("sou_twoTopTwoBottom").removeClass("sou_threeTopTowBottom sou_towLeftOneRight sou_oneLeftTowRight");
    } else if (a == 1) {
      addReseauList(5, obj);
      obj.addClass("sou_threeTopTowBottom").removeClass("sou_twoTopTwoBottom sou_towLeftOneRight sou_oneLeftTowRight");
    } else if (a == 2) {
      addReseauList(3, obj);
      obj.addClass("sou_towLeftOneRight").removeClass("sou_twoTopTwoBottom  sou_threeTopTowBottom sou_oneLeftTowRight");
      obj.children("div:nth-child(1),div:nth-child(2)").addClass("cell_inner").wrapAll("<div></div>");
    } else {
      addReseauList(3, obj);
      obj.addClass("sou_oneLeftTowRight").removeClass("sou_twoTopTwoBottom  sou_threeTopTowBottom sou_towLeftOneRight");
      obj.children("div:nth-child(2),div:nth-child(3)").addClass("cell_inner").wrapAll("<div></div>");
    }
    storeUp(); //保存项目
  });
  $("body").on("change", ".reseau_2btn select[name=reseau_x],select[name=reseau_y]", function () {
    var x = $(this).parents(".reseau_x_y").find("select[name=reseau_x]").val();
    var y = $(this).parents(".reseau_x_y").find("select[name=reseau_y]").val();
    var obj = $(this).parents(".sou_content_html").find(".sou_reseau_list");
    ReseauCustom(x, y, obj);
    storeUp(); //保存项目
  });
  //区块背景
  $("body").on("click", ".sou_list_innerBg_btn .title", function () {
    if ($(this).next().is(":hidden")) {
      $(this).next().show();
    } else {
      $(this).next().hide();
    }
  });
  //区块背景上传图片
  $("body").on("click", ".sou_list_innerBg_btn .innerBg_newImg", function () {
    image_contbox(6);
    imgbox_obj = $(this).parents(".sou_reseau_cell").find(".sou_reseau_item");
  });
  $("body").on("click", ".sou_list_innerBg_btn .innerBg_editImg", function () {
    imgbox_obj = $(this).parents(".sou_reseau_cell").find(".sou_reseau_item");
    var imgurl = imgbox_obj.css("backgroundImage").replace('url("', '').replace('")', '');
    xiuxiu_show(6, imgurl);
  });
  //区块背景遮罩
  $("body").on("change", ".sou_list_innerBg_btn input[name=isShade]", function () {
    if ($(this).is(":checked")) {
      $(this).parents(".sou_reseau_cell").find(".sou_reseau_item").addClass("s_re_before");
    } else {
      $(this).parents(".sou_reseau_cell").find(".sou_reseau_item").removeClass("s_re_before");
    }
  });

  $("body").on("click", ".bg_set .sou_list_title", function () {
    var aa = $(this).parents(".sou_content_html").index();
    FeedbackOperation(5010303, "", modBK[aa - 1].navname, pageId); //编辑器操作记录
  }); //背景设置操作记录
  $("body").on("click", ".defined_layout_set .sou_list_title", function () {
    var aa = $(this).parents(".sou_content_html").index();
    FeedbackOperation(5010304, "", modBK[aa - 1].navname, pageId); //编辑器操作记录
  });



  $(".sou_edit_nav .reform").click(function () {
    if ($(this).hasClass("active")) {
      reformCancel(1, 1, store("VerNum"));
    }
  });
  $(".sou_edit_nav .cancel").click(function () {
    if ($(this).hasClass("active")) {
      reformCancel(-1, 1, store("VerNum"));
    }
  });
  //客服设置
  $("select[name=SerTypeBox]").change(function () {
    var _thisVal = $(this).val();
    if (_thisVal == 0) {
      $(".qqBox").hide();
      $(".addressBox").hide();
    } else if (_thisVal == 1) {
      $(".addressBox").hide();
      $(".qqBox").show();
    } else if (_thisVal == 2) {
      $(".addressBox").show();
      $(".qqBox").hide();
    }
  });
  //QQ添加
  $(".addQqNumber").click(function () {
    var htmls = $(this).prevAll("div").children("input").eq(0).clone().val("");
    var remBtn = $(this).prev(".remQqNumber").clone(true).show();
    $(this).prevAll("div").append(remBtn);
    $(this).prevAll("div").append(htmls);
    if ($("input[name=qqNumber]").length > 2) {
      $(this).hide();
    } else {
      $(this).show();
    };
    servicePush();
  });
  $("body").on("click", ".remQqNumber", function () {
    $(this).prev("input").remove();
    $(this).remove();
    if ($("input[name=qqNumber]").length > 2) {
      $(".addQqNumber").hide();
    } else {
      $(".addQqNumber").show();
    };
    servicePush();
  });

  $("select[name=SerTypeBox]").change(function () {
    servicePush();
  });
  $("select[name=styleBox]").change(function () {
    var _thisVal = $(this).val();
    $(".sou_Service >div").removeAttr("class").addClass("sou_ser_type" + _thisVal);
  });
  $(".qqBox select").change(function () {
    servicePush();
  });
  $("body").on("change", ".qqBox input", function () {
    servicePush();
  });
  //code二维码重置
  $(".codeCz").click(function () {
    servicePush(2);
  });

  //获取光标位置 插入标签
  /*$(".editAddType button").click(function () {
    var indexN = $(this).index();
    var indexbox = ['【动态标题】', '【作者版块】', '【时间版块】', '【副标题】', '【正文内容】'];
    insertText(onfocus_this[0], indexbox[indexN]);
  })*/
});




//获取选中的内容
function getSelectionField(e) {
  var selection = getIeSelection(e);
  if (selection == '') {
    selection = getFireFoxSelection(e);
  }
  return selection;
}

function getIeSelection(e) {
  if (window.getSelection) {
    // This technique is the most likely to be standardized.
    // getSelection() returns a Selection object, which we do not document.
    return window.getSelection().toString();
  } else if (document.getSelection) {
    // This is an older, simpler technique that returns a string
    return document.getSelection();
  } else if (document.selection) {
    // This is the IE-specific technique.
    // We do not document the IE selection property or TextRange objects.
    return document.selection.createRange().text;
  }
}

function getFireFoxSelection(e) {
  if (e.selectionStart != undefined && e.selectionEnd != undefined) {
    var start = e.selectionStart;
    var end = e.selectionEnd;
    return e.value.substring(start, end);
  } else {
    return "";
  } // Not supported on this browser
}
//在e元素的当前光标位置插入文本
//var cursPos;
function insertText(e, str) {
  var se = window.getSelection();
  //获取起始位置，这个是字符的序号位置，而不是坐标
  var start = se.anchorOffset;
  //获取结束位置
  var end = se.focusOffset;
  console.log(start);
  e.innerText = e.innerText.slice(0, start) + str + e.innerText.slice(end)
}
// 跟踪光标位置
function TraceCursorPosition(obj) {
  var cursPos = $CursorPosition(obj);
  return cursPos;
}
// 返回光标所在位置
/**/
/*
 * source:
 * source:
 * acknowledges for Marshall
 * example:
 * var myTextBox = document.getElementById(“MyTextBoxID”);
 * var cursPos = $CursorPosition(myTextBox);
 * alert(cursPos.item[0] + ” ” + cursPos.item[1]);
 * // OR
 * alert(cursPos.start + ” ” + cursPos.end);
 */
function $CursorPosition(textBox) {
  var start = 0,
    end = 0;
  //如果是Firefox(1.5)的话，方法很简单
  if (typeof (textBox.selectionStart) == "number") {
    start = textBox.selectionStart;
    end = textBox.selectionEnd;
  }
  //下面是IE(6.0)的方法，麻烦得很，还要计算上’\n’
  else if (document.selection) {
    var range = document.selection.createRange();
    if (range.parentElement().id == textBox.id) {
      // create a selection of the whole textarea
      var range_all = document.body.createTextRange();
      range_all.moveToElementText(textBox);
      //两个range，一个是已经选择的text(range)，一个是整个textarea(range_all)
      //range_all.compareEndPoints()比较两个端点，如果range_all比range更往左(further to the left)，则
      //返回小于0的值，则range_all往右移一点，直到两个range的start相同。
      // calculate selection start point by moving beginning of range_all to beginning of range
      for (start = 0; range_all.compareEndPoints("StartToStart", range) < 0; start++)
        range_all.moveStart('character', 1);
      // get number of line breaks from textarea start to selection start and add them to start
      // 计算一下\n
      for (var i = 0; i <= start; i++) {
        if (textBox.value.charAt(i) == '\n')
          start++;
      }
      // create a selection of the whole textarea
      var range_all = document.body.createTextRange();
      range_all.moveToElementText(textBox);
      // calculate selection end point by moving beginning of range_all to end of range
      for (end = 0; range_all.compareEndPoints('StartToEnd', range) < 0; end++) {
        range_all.moveStart('character', 1);
      }
      // get number of line breaks from textarea start to selection end and add them to end
      for (var i = 0; i <= end; i++) {
        if (textBox.value.charAt(i) == '\n')
          end++;
      }
    }
  }
  //return [start, end]; // 包括选中区域的起始位置
  // modified to return as Object
  return {
    'start': start,
    'end': end,
    'item': [start, end]
  };
}
