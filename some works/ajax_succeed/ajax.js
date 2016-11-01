    function jsonToURL(json) {
    // user.php?act=xxx&user=用户名&pass=密码
    json.t = Math.random();
    var arr = [];
    for(var key in json) {
        arr.push(key + "=" + encodeURIComponent(json[key]));
    }
    return arr.join("&");
}

function ajax(options)
{
    // url, method, data, fnSucc, fnFailed
    options = options || {};
    var url = options.url;
    var method = options.method || "get";
    var data = options.data || "";
    // var timeout = options.timeout;
    var fnSucc = options.fnSucc;
    var fnFailed = options.fnFailed || "";
    var str = jsonToURL(data);

    //1.创建Ajax对象
    if(window.XMLHttpRequest)
    {
        var oAjax=new XMLHttpRequest();
    }
    else
    {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    if (method.toUpperCase() == "GET") {
        //2.连接服务器（打开和服务器的连接）
        oAjax.open('GET', url + "?" + str, true);
        //3.发送
        oAjax.send(str);
    } else {
        oAjax.open('POST', url, true);
        oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        oAjax.send(str);
        console.log("ajax内部str："+str);
    }
    
    //4.接收
    oAjax.onreadystatechange=function ()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)//oAjax.status>=200 && oAjax.status<300
            {
                //alert('成功了：'+oAjax.responseText);
                fnSucc(oAjax.responseText);
            }
            else
            {
                //alert('失败了');
                if(fnFailed)
                {
                    fnFailed();
                }
            }
        }
    };

    // // 超时
    // if (timeout) {
    //  setTimeout(function(){
    //      aAjax.abort();
    //  }, timeout);
    // }
}