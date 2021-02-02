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



    //判断是否移动端访问
// browserRedirect();
    // function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
     
        // if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        //     //window.location.href = "http://gz.gzwhir.com/jpcg201409177619/index.aspx";
        // }
    // }
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
         if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
            if(username=="jincai" && password=="666666"){
                    if(jibie == "村居"){
        　　　　　           location.href='./cunji/index.html';
        　　　　
                　　}else if(jibie == "镇街"){
                        location.href='./zhenji/index.html';
                    }else if(jibie == "县区"){
                        alert("县区级还在努力开发中")
                    }
                return false;
                }else{
                alert("账号或密码错误");
                
                return false;
                }
         }else{
             if(username=="jincai" && password=="666666"){
                    if(jibie == "村居"){
        　　　　　           location.href='./cApp/index.html';
        　　　　
                　　}else if(jibie == "镇街"){
                        alert("镇街级还在努力开发中")
                    }else if(jibie == "县区"){
                        alert("县区级还在努力开发中")
                    }
              
                // window.location.href = "index.html";
                return false;
                }else{
                alert("账号或密码错误");
                
                return false;
                } 
        }
        // browserRedirect(); 



         
    
    })



     function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
//               if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
//               //跳转移动端页面
//                 if(jibie == "村居"){
// 　　　　　           location.href='./cApp/index.html';
//     　　　　
//             　　}else if(jibie == "镇街"){
//                     location.href='县区级还在努力开发中';
//                 }else if(jibie == "县区"){
//                     alert("县区级还在努力开发中")
//                 }
//               } else {
              //跳转pc端页面
              if(jibie == "村居"){
　　　　　           location.href='./cunji/index.html';
    　　　　
            　　}else if(jibie == "镇街"){
                    location.href='./zhenji/index.html';
                }else if(jibie == "县区"){
                    alert("县区级还在努力开发中")
                }
              // window.location.href="http://f.jcngame.com/fanfan20171208//fanmai/index.html" rel="external nofollow" rel="external nofollow" ;
              }
        // }
    
    exports('login');
});