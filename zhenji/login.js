layui.define(['element'],function(exports){

    var $ = layui.$;

    $('.input-field').on('change',function(){
        var $this = $(this),
            value = $.trim($this.val()),
            $parent = $this.parent();

        if(value !== '' && !$parent.hasClass('field-focus')){
            $parent.addClass('field-focus');
        }else{
            $parent.removeClass('field-focus');
        }
    })
    $('.login-button').on('click',function(){
        var username = $("#username").val();
        var password = $("#password").val();
        var jibie = $("#jibie").val();
        if(username == null || username == ""){
　　　　    alert("用户名不能为空");
    　　　　return false;
    　　}
        if(password == null || password == ""){
　　　　　  alert("密码不能为空");
    　　　　return false;
    　　}
        if(jibie == null || jibie == ""){
　　　　　  alert("请选择级别");
    　　　　return false;
    　　}
        if(jibie == "村居"){
　　　　　  location.href='index.html';
    　　　　
    　　}else if(jibie == "镇街"){
            alert("待开发")
        }else if(jibie == "县区"){
            alert("待开发")
        }
         
    
    })
    exports('login');
});