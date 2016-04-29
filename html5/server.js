var http = require("http");
var serv = http.createServer(function(req,res){
	console.log(req)
	res.writeHeader(200,{
		"content-type" : "text/html;charset='utf-8'"
	})
	res.write("HELLO，你好啊！！！")
}).listen(8888);
// console.log(123)