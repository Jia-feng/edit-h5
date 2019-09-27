//获取url参数
function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
//页面数量组加载
function getPageNum(){
  $.ajax({
    type:"POST",
    url: "/ET/getPages.json",
    dataType:"json",
    data:{
      templateId:templateId
    },
    success: function(data){
      if(data.metaInfo.code == 0){
        var data =data.data;
        var aHtml='';
        for(var j=0;j<data.length;j++){ 
          if(getQueryVariable('pageId') == data[i].id){
            aHtml+= " <option value="+data[i].id+" selected>"+ data[i].title +"</option>"; 
          }else{
            aHtml+= " <option value="+data[i].id+">"+ data[i].title +"</option>"; 
          }   
        }
        $("#onPage").html(aHtml);
      }else{ 
        layer.msg(data.metaInfo.message);
      }
    }});
}
//获取自己的组件
function getUserModule(){
  $.ajax({
    type: 'GET',
    url: "/htmlSingle/userModulesJson.json",
    success: function(data){
      if(data.metaInfo.code == 0){
        userModulebox = data.data;
        for(var i = 0;i<data.data.length;i++){
          userModulebox[i].config = JSON.parse(data.data[i].config);
        }
      }else {
        layer.msg(data.metaInfo.message);
      }
    },
  });
};
//getUserModule();


//搜到个人图库分组加载
function updateFenzu(a,b){
  $.ajax({
    type: 'post',
    url: AJAXHOST+"userFodder/categroy/list.json",
    data:{
      page:a,
      pageSize:b,
    },
    dataType: "json",
    success: function(data){
      if(data.metaInfo.code == 0){
        var allData = data.data;
        var opt = "<li _kind='' class='active'><b>全部分组</b><span class='sou_iconfont edit_fenzu'>&#xe696;</span><span class='sou_iconfont delete_fenzu'>&#xe697;</span></li>";

        for(var i=0;i<allData.list.length;i++){
          opt+="<li _kind="+allData.list[i].id+"><b>"+allData.list[i].caption+"</b><span class='sou_iconfont edit_fenzu'>&#xe696;</span><span class='sou_iconfont delete_fenzu'>&#xe697;</span></li>";
        }
        opt += "<div class='addFenzu'><span class='sou_iconfont'>&#xe66c;</span><b>添加分组</b></div>";
        $(".image_contbox .listbox_selectbox").html(opt);
      }else {
        layer.msg(data.metaInfo.message);
      }
    },
    error: function(xhr, type){
      layer.msg("网络错误，请重试！");
    }
  });
}
//图库分组加载
function otherFenzu(a,b){
  $.ajax({
    type:"POST",
    url: "/fodder/fodderCategorys.json",
    dataType:"json",
    data:{
      kind:a,
    },
    success: function(data){
      if(data.metaInfo.code == 0){
        var data =data.data;
        var aHtml='';
        for(var j=0;j<data.length;j++){
          if(j == 0){
            aHtml+= "<li class='active' _kindSub="+data[j].id+"><b>"+data[j].caption+"</b></li>";
            categoryIdSub = data[j].id;
            souKind(b,"",1,2);
          }else{
            aHtml+= "<li _kindSub="+data[j].id+"><b>"+data[j].caption+"</b></li>";
          }
        }
        $(".listbox_left_btnbox>div").eq(b).find("ul").html(aHtml);
      }else{
        layer.closeAll();
        layer.msg(data.metaInfo.message);
      }
    }});
}
/*保存项目*/
function storeUp(types){
  $(".sou_keep_loading >div").hide().eq(0).show();
  var thisConfig = {modBK:modBK,thisTheme:thisTheme,service:serviceBox};
  var valueH = $(".sou_htmlbox").clone();
  valueH.find(".sou_module_set").remove();
  valueH.find(".sou_list_sortable_addBtnBox").remove();
  valueH.find(".sou_list_editor_box").remove();
  valueH.find(".map_set").remove();
  valueH.find(".sou_list_innerBg_btn").remove();
  valueH.find(".ontext_edit").removeAttr('contenteditable spellcheck data-medium-editor-element role aria-multiline medium-editor-index');//清理medium编辑器属性
  for(var i=0;i<valueH.find("a").length;i++){
    var patt1 = /soudao.com/i;
    if(!patt1.test(valueH.find("a").eq(i).attr("href"))){
      valueH.find("a").eq(i).attr({rel:"nofollow",target:"_blank"});
    }
  }
  valueH.find(".linkList").find("a").removeAttr("target");
  valueH.find(".slide_setbox").remove();
  valueH =valueH.html(); 
  var urlLink = '/ET/autoSave.json';
  if(thisTime){
    thisTime = !1;
    if(types){
      urlLink = '/ET/save.json';
    }
    $.ajax({
      type:"POST",
      url: urlLink,
      dataType:"json",
      data:{
        templateId:templateId,
        pageId:pageId,
        htmlBody:valueH,
        pageConfig:JSON.stringify(thisConfig),
        editorId:editorId
      },
      success: function(data){
        if(data.metaInfo.code == 0){
          $(".sou_keep_loading >div").hide().eq(2).show();
          store("VerNum",parseInt(data.data));
          if(parseInt(data.data) > 0){
            $(".sou_edit_nav .cancel").addClass("active");
            $(".sou_edit_nav .reform").removeClass("active");
          }
          setTimeout(function(){
            thisTime = !0;
          },1000);
        }else{
          $(".sou_keep_loading >div").hide().eq(1).show();
          layer.closeAll();
          layer.msg(data.metaInfo.message);
          var csLayer = layer.open({
            content: '系统错误，请重试！'
            ,btn: ['确定重试']
            ,closeBtn:0
            ,yes: function(index, layero){
              //按钮【按钮一】的回调
              layer.close(csLayer);
              thisTime = !0;
              storeUp();
            }
          });
        }
      },
      erroe:function(data){
        $(".sou_keep_loading >div").hide().eq(1).show();
        var csLayer = layer.open({
          content: '系统错误，请重试！'
          ,btn: ['确定重试']
          ,closeBtn:0
          ,yes: function(index, layero){
            //按钮【按钮一】的回调
            layer.close(csLayer);
            thisTime = !0;
            storeUp();
          }
        });
      }
    });
  } 
}

/*操作反馈*/
function FeedbackOperation(kind,disId,disName,pageId){
  var temId ='';
  var pageIds = ''; 
  pageIds= pageId; 
  /*$.ajax({
    type: 'Post',
    url: "http://192.168.1.101:8093/monggoDb/editSingle/operationLog.json",
    dataType:"json",
    data:{ 
      kind:kind,
      discretenessId:disId,
      disCaption:disName,
      templateId:temId,
      pageId:pageIds,
    },
    success: function(data){
      if(data.metaInfo.code == 0){
        return true;
        console.log(1);
      }else {
        return false;
        console.log(2);
      }
    },
    error: function(xhr, type){
      return false;
    }
  });*/
};

//发布设置
function ajaxKeep(link,b,h){
  var name = $("input[name=websiteTitle]").val();//网站标题
  var seoName = $("input[name=websiteSeoTitle]").val(); //seo标题
  var webDepict = $("textarea[name=webDepict]").val(); //描述
  var webKeyWord = $("textarea[name=webKeyWord]").val(); //关键词
  var webShareTitle = $("input[name=webShareTitle]").val();//分享标题
  var webShareDepict = $("textarea[name=webShareDepict]").val();//分享描述
  var webSharePhoto = $(".file_head img").attr("src");;//分享图片
  var webGenre = $("select[name=webGenre]").val();//营销页分类
  var webGenre1 = $("select[name=webGenre1]").val();//营销页分类
  var isShow = '';
  if($("input[name=isShowInput]").is(":checked")){
    isShow = 0;
  }
  if($("input[name=isShowInput2]").is(":checked")){
    isShow = 20;
  }
  if(name!='' && webDepict != '' && webKeyWord != ''){
    storeUp();
    layer.load();
    if(seoName == '') seoName = name;
    if(webShareTitle == '') webShareTitle = name;
    if(webShareDepict == '') webShareDepict = webDepict;
    //if(webSharePhoto == '') webSharePhoto = ;
    $.ajax({
      type:"POST",
      url: AJAXHOST +  link,
      dataType:"json",
      data:{
        pageId:pageId,
        caption:name,
        seoDescription:webDepict,
        seoTitle:seoName,
        seoKeywords:webKeyWord,
        wxTitle:webShareTitle,
        wxInfo:webShareDepict,
        wxPhoto:webSharePhoto,
        kindId:webGenre,
        tradeId:webGenre1,
        isShow:isShow
      },
      success: function(data){
        if(data.metaInfo.code == 0){
          layer.closeAll();
          layer.msg(b);
          if(h == 1){
            sou_setbox();
            show_success();
            $("#sou_qrcode").html("");
            makeQrcode(data.data,$("#sou_qrcode"));
            $(".show_success_box").find("a").attr("href",data.data).text(data.data);
          }
        }else{
          layer.closeAll();
          layer.msg(data.metaInfo.message);
        }
      }
    });
  }else{
    layer.msg("请填写完整站点信息！");
  }
}
//返回 重做
function reformCancel(a,b,c){
  $.ajax({
    type: 'Post',
    url: "/ET/history.json",
    dataType:"json",
    data:{
      type:a,//-1后退，1前进
      num:b,//后退或前进几步
      curr:c,//当前版本号
      pageId:pageId
    },
    success: function(data){
      if(data.metaInfo.code == 0){
        store("VerNum",parseInt(data.data.curr));
        var dataThis = JSON.parse(data.data.content);
        $("#sou_htmlbox").html(dataThis.htmlBodyJson);
        thisConfig = JSON.parse(dataThis.pageConfig);
        modBK = thisConfig.modBK;
        thisTheme =thisConfig.thisTheme;
        serviceBox = thisConfig.service
        if(parseInt(data.data.curr) == 0){
          $(".sou_edit_nav .cancel").removeClass("active");
        }else{
          $(".sou_edit_nav .cancel").addClass("active");
        }
        if(parseInt(data.data.curr) < parseInt(data.data.max)){
          $(".sou_edit_nav .reform").addClass("active");
        }else{
          $(".sou_edit_nav .reform").removeClass("active");
        }
        initialise();
      }else {
        console.log(data.metaInfo.message);
      }
    }
  });
}

$(function(){
  //保存版块信息
  $("body").on("click",".keepModule_info .keepModule",function(){
    var infoThis = $("textarea[name=keepModule_caption]").val();
    var captionThis =  $("input[name=keepModule_name]").val();
    if(infoThis != '' && captionThis !=''){
      $.ajax({
        type:"POST",
        url: AJAXHOST + "htmlSingle/userModulesAdd.json",
        async:false,
        dataType:"json",
        data:{
          configJson:JSON.stringify(module_keep.config),
          htmlBodyJson:module_keep.html,
          info:infoThis,
          caption:captionThis,
          type:module_keep.config.type,
          version:version
        },
        success: function(data){
          var userVdm = data.data;
          if(data.metaInfo.code == 0){
            keepModule_show();
            getUserModule();
            showUserModule(userModulebox,$(".sou_templetBox .userModulebox"));
            layer.msg("保存我的版块成功！");
          }else{
            layer.msg(data.metaInfo.message);
          }
        }});
    }else{
      layer.msg("填写完整信息！");
    }
  });
  //删除个人模块
  $("body").on("click",".dele_userModule",function(){
    var moudleId = $(this).attr("sou_moduleId");
    var _this = $(this);
    layer.confirm('确认是否删除模块？', {
      btn: ['确定', '取消']
    }, function(index, layero){
      $.ajax({
        type:"POST",
        url: AJAXHOST + "htmlSingle/userModulesDel.json",
        async:false,
        dataType:"json",
        data:{
          id:moudleId,
        },
        success: function(data){
          var userVdm = data.data;
          if(data.metaInfo.code == 0){
            _this.parents("li").remove();
            layer.closeAll();
            layer.msg("删除我的版块成功。");
          }else{
            layer.msg(data.metaInfo.message);
          }
        }});

    }, function(index){
      //按钮【按钮二】的回调
    });
  });
  //图库添加我的分组
  $("body").on("click",".image_contbox .addFenzu",function(){
    var index=  layer.prompt({title:"添加新的分组"},function(value, index, elem){
      $.ajax({
        type: 'post',
        url: AJAXHOST+"userFodder/categroy/add.do",
        data:{
          caption:value,
        },
        dataType: "json",
        success: function(data){
          if(data.metaInfo.code == 0){
            layer.msg("添加成功。");
            updateFenzu(1,100);
            userKind(1,'',2);
          }else {
            layer.msg(data.metaInfo.message);
          }
        },
        error: function(xhr, type){
          layer.msg("网络错误，请重试！");
        }
      });
      layer.close(index);
    });
  });
  //修改分组名称
  $("body").on("click",".image_contbox .left_btnbox_list .edit_fenzu",function(){
    uks = $(this).parent("li").attr("_kind");
    var thisTetx = $(this).parent("li").find("b").text();
    var index=  layer.prompt({title:"修改分组名称",value:thisTetx},function(value, index, elem){
      $.ajax({
        type: 'post',
        url: AJAXHOST+"userFodder/categroy/update.do",
        data:{
          id:uks,
          caption:value,
        },
        dataType: "json",
        success: function(data){
          if(data.metaInfo.code == 0){
            layer.msg("修改成功。");
            updateFenzu(1,100);
            userKind(1,uks,2);
          }else {
            layer.msg(data.metaInfo.message);
          }
        },
        error: function(xhr, type){
          layer.msg("网络错误，请重试！");
        }
      });
      layer.close(index);
    });
  });
  //删除个人素材分组
  $("body").on("click",".image_contbox .left_btnbox_list .delete_fenzu",function(){
    uks = $(this).parent("li").attr("_kind");
    layer.confirm('是否确定删除当前素材分组？<br>（删除分组后素材不会被删除）',function(index){
      $.ajax({
        type: 'post',
        url: AJAXHOST+"userFodder/categroy/del.do",
        data:{
          id:uks,
        },
        dataType: "json",
        success: function(data){
          if(data.metaInfo.code == 0){
            layer.msg("删除分组成功。");
            updateFenzu(1,100);
            userKind(1,uks,2);
          }else {
            layer.msg(data.metaInfo.message);
          }
        },
        error: function(xhr, type){
          layer.msg("网络错误，请重试！");
        }
      });
      layer.close(index);
    });
  });
  //设置个人素材分组
  $("body").on("click",".image_contbox .listbox_right .setUserImg_list",function(e){
    e.stopPropagation();
    layer.open({
      title: '设置图片分组'
      ,type:2
      ,area: ['400px']
      ,content: '/userFodder/update/group'+EXT+'?id='+$(this).attr("sou_imgId")
    });
  });

  //删除个人图库内容
  $("body").on("click",".listbox_right li .deleUserImg",function(e){
    e.stopPropagation();
    $.ajax({
      url:'/html/delfodder.do',
      type:"POST",
      dataType:"json",
      data:{
        fodderId:$(this).attr("sou_imgId")
      },
      success: function(data){
        if(data.metaInfo.code == 0){
          layer.msg("删除成功");
          userKind(1,uks,2);
        }else{
          layer.msg(data.metaInfo.message);
        }
      }
    })
  });
  //或者文章分类
  $("body").on("click",".list_shade_btn",function(){
    var jsonBox =  JSON.parse(article_this.children("sitemlist").attr("sedit").replace(/'/g, '"'));
    $.ajax({
      type: 'GET',
      url: "/edit/getUserArticleNo.json",
      data:{
        userId:userId
      },
      success: function(data){
        if(data.metaInfo.code == 0){
          Data = data.data;
          var optionB = '';
          for(var i = 0;i<Data.length;i++){
            if(jsonBox.no  = Data[i].no){
              optionB += "<option value='"+Data[i].no+"' selected>"+Data[i].caption+"</option>";
            }else{
              optionB += "<option value='"+Data[i].no+"'>"+Data[i].caption+"</option>";
            }
          };
          $("select[name=articleList]").html(optionB);
          let lengths = $("input[name=articleNum]").val(jsonBox.length);
          let keyB = $("input[name=articleKeyword]").val(jsonBox.keyword);
          listShade();
        }else {
          layer.msg(data.metaInfo.message);
        }
      },
    });
  });
  //刷新文章分类
  $(".articleRefresh").click(function(){
    var jsonBox =  JSON.parse(article_this.children("sitemlist").attr("sedit").replace(/'/g, '"'));
    $.ajax({
      type: 'GET',
      url: "/edit/getUserArticleNo.json",
      data:{
        userId:userId
      },
      success: function(data){
        if(data.metaInfo.code == 0){
          Data = data.data;
          var optionB = '';
          for(var i = 0;i<Data.length;i++){
            if(jsonBox.no  = Data[i].no){
              optionB += "<option value='"+Data[i].no+"' selected>"+Data[i].caption+"</option>";
            }else{
              optionB += "<option value='"+Data[i].no+"'>"+Data[i].caption+"</option>";
            }
          };
          $("select[name=articleList]").html(optionB);
          layer.msg("更新分类成功。");
        }else {
          layer.msg(data.metaInfo.message);
        }
      },
    });
  });
  $(".save_articleThis").click(function(){
    let no = $("select[name=articleList]").val();
    let lengths = $("input[name=articleNum]").val();
    let keyB = $("input[name=articleKeyword]").val();
    if(no != '' && lengths != ''){
      $.ajax({
        type: 'GET',
        url: "/edit/getArticleByNo.json",
        data:{
          length:lengths,
          no:no,
          key:keyB,
          userId:userId
        },
        success: function(data){
          if(data.metaInfo.code == 0){
            Data = data.data;
            if(Data.length > 0){
              var htmlBox = '';
              for(var i = 0;i<Data.length;i++){
                htmlBox += "<div class='sou_typeList_biao sitems'><a href='"+Data[i].link+"' sitem=\"{'type':'link'}\"><div class='thumbnail'><div><img src='"+FILEPATH+"/"+Data[i].photo+"' alt='' sitem=\"{'type':'photo'}\"></div><div class='caption'><div><div><h3 sitem=\"{'type':'title','length':10}\">"+Data[i].title+"</h3></div><div><span sitem=\"{'type':'info','length':100}\">"+Data[i].info+"</span></div></div></div></div></a></div>";
              };
              article_this.children("sitemlist").html(htmlBox);
              article_this.children("sitemlist").attr("sedit","{'length':'"+lengths+"','no':'"+no+"','keyword':'"+keyB+"'}");
              article_this.children(".articlie_text").hide();
              listShade();
            }else{
              article_this.children("sitemlist").html("暂无文章");
              listShade();
            }
            storeUp();//保存项目
          }else {
            layer.msg(data.metaInfo.message);
          }
        },
      });
    }else{
      layer.msg("请正确选择文章列表信息！");
    }
  });
  
  
  
})
