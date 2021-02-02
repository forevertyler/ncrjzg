// footer.js
document.writeln("    <script src=\'../assets/layui.all.js\'></script>");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("    layui.use([\'table\',\'element\', \'laydate\'], function(){");
document.writeln("        var table = layui.table");
document.writeln("            ,laydate = layui.laydate");
document.writeln("        ,$ = layui.$;");
document.writeln("        var element = layui.element;");
document.writeln("        $(\'.layui-btn-sm-a\').click(function(){");
document.writeln("            window.history.back(-1); ");
document.writeln("        })");
document.writeln("    })");
document.writeln("</script>");
document.writeln("</body>");
document.writeln("</html>");