$(function(){
  var phoneYan = /^1[3|4|5|7|8][0-9]{9}$/;
  var emailYan = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
  //页面表单提交
  $(".formbox_button").click(function(){
    var objThis = $(this);
    var formText = $(this).parents("form[name=formBox]").serializeArray();
    if(formText[0].value.length < 2){
      layer.msg("请填写您的姓名！");
      return false;
    }
    if(!phoneYan.test(formText[1].value)){
      layer.msg("请正确填写您的电话！");
      return false;
    }
    if(!emailYan.test(formText[2].value)){
      layer.msg("请正确填写您的邮箱！");
      return false;
    }
    if(formText[3].value == ''){
      layer.msg("请填写您的留言内容！");
      return false;
    }
      $.ajax({
        type: "POST",
        url: 'http://www.soudao.com/single/postData.json',
        data: {
          pageId:localpageId,
          name:formText[0].value,
          phone:formText[1].value,
          email:formText[2].value,
          note:formText[3].value,
        },
        success: function (data) {
          if(data.metaInfo.code == 0){
            layer.msg("发送成功");
            objThis.attr("disabled",true);
            objThis.text("已发送");
          }else{
            layer.msg("提交失败 请重试！");
          }
        },
        error: function(data) {
          layer.msg("网络错误");
        }
      });
  });
  $(".big_form button").click(function(){
    var objThis = $(this);
    var name = $(this).parent().children("input[name=name]").val();
    var email = $(this).parent().children("input[name=email]").val();
    var messageAll = $(this).parent().children("textarea[name=messageAll]").val();
    if(name.length < 2){
      layer.msg("请填写您的姓名！");
      return false;
    }
    if(!emailYan.test(email)){
      layer.msg("请正确填写您的邮箱！");
      return false;
    }
    if(messageAll == ''){
      layer.msg("请填写您的留言内容！");
      return false;
    }
    $.ajax({
      type: "POST",
      url: 'http://www.soudao.com/single/postData.json',
      data: {
        pageId:localpageId,
        name:name,
        email:email,
        note:messageAll,
      },
      success: function (data) {
        if(data.metaInfo.code == 0){
          layer.msg("发送成功");
          objThis.attr("disabled",true);
          objThis.text("已发送");
        }else{
          layer.msg("提交失败 请重试！");
        }
      },
      error: function(data) {
        layer.msg("网络错误");
      }
    });



  });
  $(".small_form button").click(function(){
    var objThis = $(this);
    var name = $(this).parent().children("input[name=name]").val();
    var email = $(this).parent().children("input[name=email]").val();
    if(name.length < 2){
      layer.msg("请填写您的姓名！");
      return false;
    }
    if(!emailYan.test(email)){
      layer.msg("请正确填写您的邮箱！");
      return false;
    }
    $.ajax({
      type: "POST",
      url: 'http://www.soudao.com/single/postData.json',
      data: {
        pageId:localpageId,
        name:name,
        email:email,
      },
      success: function (data) {
        if(data.metaInfo.code == 0){
          layer.msg("发送成功");
          objThis.attr("disabled",true);
          objThis.text("已发送");
        }else{
          layer.msg("提交失败 请重试！");
        }
      },
      error: function(data) {
        layer.msg("网络错误");
      }
    });



  });
});
