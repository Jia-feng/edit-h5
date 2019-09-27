$(function(){
  //步骤操作
  function guidingStep(n){
    $(".sou_themeSet").hide();
    $(".templet_info").hide();
    $(".templet1").hide();
    $(".templet2").hide();
    $(".sou_bigbox").hide();
    layer.closeAll();
    switch(n)
    {
      case 1:
        $(".sou_themeSet").show();
        break;
      case 2:
        $(".sou_themeSet").show();
        break;
      case 3:
        $(".sou_themeSet").show();
        $(".templet_info").show();
        break;
      case 4:
        $(".templet_info").show();
        break;
      case 5:
        $(".templet_info").show();
        $(".templet1").show();
        break;
      case 6:
        $(".templet1").show();
        break;
      case 7:
        $(".templet2").show();
        $(".templet1").show();
        break;
      case 8:
        $(".templet2").show();
        break;
      case 9:
        $(".templet2").show();
        $(".sou_bigbox").show();
        break;
      case 10:
        $(".sou_bigbox").show();
        break;
      case 11:
        $(".sou_bigbox").show();
        break;
    }
    $(document).scrollTop(0);
    $("body").css("overflow","hidden");
  }
  //引导页
  function guide() {
    introJs().setOptions({
      nextLabel: '下一步',
      prevLabel: '上一步',
      skipLabel: '关闭',
      doneLabel: "完成",
      exitOnOverlayClick: false,
      exitOnEsc: false,
      showBullets: true,
      showStepNumbers: false,
      steps: [
        {
          //第1步引导
          element: '.sou_navBox',
          intro: '这里是单页操作面板，点击“<”号关闭操作面板。操作面板包含设置模块、操作模块、版块模块、发布模块',
          position: 'right'
        },
        {
          //第2步引导
          element: '.sou_collapse',
          intro: '这里是设置模块，包含预览、保存、主题设置按钮、模板库。',
          position: 'right'
        },
        {
          //第3步引导
          element: '.sou_themeSet',
          intro: '这是主题设置模块,可以设置主题样式、是否显示导航跟底部。',
          position: 'right'
        },
        {
          //第4步引导
          element: '.sou_edit_nav',
          intro: '这是操作模块,包含操作返回、重做、版块排序和版块设置，点击列表左侧图标 "<span class="sou_iconfont">&#xe60a;</span>"上下拖拽即可排序。列表右侧"<span class="sou_iconfont">&#xe631;</span>"设置按钮点击即可更改版块名称、是否显示在导航和复制版块内容。',
          position: 'right'
        },
        {
          //第5步引导
          element: '.templet_info',
          intro: '这里可以设置版块名称、是否显示在导航条及复制版块。',
          position: 'top'
        },
        {
          //第6步引导
          element: '.show_Headbox',
          intro: '这是头部/底部版块按钮，点击打开版块列表。',
          position: 'right'
        },
        {
          //第7步引导
          element: '.templet1',
          intro: '这是版块列表，包含头部版块和底部版块，点击当前版块可添加至页面。',
          position: 'right'
        },
        {
          //第8步引导
          element: '.show_bankuai',
          intro: '这是公共版块按钮，点击打开版块列表。',
          position: 'right'
        },
        {
          //第9步引导
          element: '.templet2',
          intro: '这是版块列表，包含公共版块和个人版块，点击当前版块可添加至页面。',
          position: 'right'
        },
        {
          //第10步引导
          element: '.show_setBox',
          intro: '这是发布按钮。',
          position: 'top'
        },
        {
          //第11步引导
          element: '.sou_bigbox',
          //这里是每个引导框具体的文字内容，中间可以编写HTML代码
          intro: '这是发布版块，包含网站标题、描述、分类、SEO信息、分享信息等，填写完整即可发布页面。',
          //这里可以规定引导框相对于选中对象出现的位置 top,bottom,left,right
          position: 'top'
        }
      ]

    }).start().onchange(function (targetElement) {

    }).oncomplete(function () {
      layer.open({
        closeBtn: 0,
        title: '',
        btnAlign: 'c',
        content: '现在可以开始制作你的单页了哦!',
        btn: ['编辑新单页'],
        yes: function (index, layero) {
          //创建新场景
          window.location.reload();
          store("h5First",1);
        },
        cancel: function () {
          //右上角关闭回调
          //创建新场景
          window.location.reload();
        }
      });
    }).onexit(function () {
      //关闭引导弹出
      layer.open({
        closeBtn: 0,
        title: '',
        btnAlign: 'c',
        content: '现在可以开始制作你的单页了!',
        btn: ['编辑单页', '继续引导'],
        yes: function (index, layero) {
          //创建新场景
          window.location.reload();
          store("h5First",1);
        },
        btn2: function (index, layero) {
          window.location.reload();
          store("h5First",0);
          guide();
        },
        cancel: function () {
          //右上角关闭回调
          window.location.reload();
        }
      });
    });
  };
  //guide();
  $("body").on("click",".introjs-tooltip .introjs-prevbutton",function(){
    guidingStep($(this).parents(".introjs-tooltip").find("li").children(".active").parent().index()-1);
  });
  $("body").on("click",".introjs-tooltip .introjs-nextbutton",function(){
    guidingStep($(this).parents(".introjs-tooltip").find("li").children(".active").parent().index()+1);
  });
  if(store("h5First") != 1 && pageId  != ''){
    guide();
  }});

