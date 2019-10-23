var express = require('express');

/*
连接数据库
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'',
  user:'root',
  port:3306,
  password:'',
  database:'',
});
*/
var app = express();

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

