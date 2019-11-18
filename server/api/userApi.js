const express = require("express");
const router = express.Router();

const DBHelper = require("../utils/DBHelper");
const sql = require("../sqlMap");

var path = require("path");
var multer = require("multer");
var fs = require("fs");
var upload = multer({ dest: "./public/upload/" });

// 通过姓名查询学生
router.post("/selectStudent", (req, res) => {
  let sqlStr = sql.user.selectStudentById;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.s_ID], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  conn.end();
});

// 通过课程号查询课程
router.post("/selectCourseByid", (req, res) => {
  let sqlStr = sql.user.selectCoursedetailByid;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.c_id], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  conn.end();
});

//文件上传
router.post("/uploadpic", upload.any(), function(req, res, next) {
  console.log(req.files[0]); // 上传的文件信息

  var des_file = "./public/upload/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data) {
    fs.writeFile(des_file, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        // response = {
        //   message: "File uploaded successfully",
        //   filename: req.files[0].originalname
        // };
        console.log("response");
        // res.end(JSON.stringify(response));
      }
    });
  });
});
//下载文件
router.get("/download", function(req, res, next) {
  var currDir = path.normalize(req.query.dir),
    fileName = req.query.name,
    currFile = path.join(currDir, fileName),
    fReadStream;
  console.log(currDir);
  console.log(fileName);
  fs.exists(currFile, function(exist) {
    if (exist) {
      res.set({
        "Content-type": "application/octet-stream",
        "Content-Disposition": "attachment;filename=" + encodeURI(fileName)
      });
      fReadStream = fs.createReadStream(currFile);
      fReadStream.on("data", function(chunk) {
        res.write(chunk, "binary");
      });
      fReadStream.on("end", function() {
        res.end();
      });
    } else {
      res.set("Content-type", "text/html");
      res.send("file not exist!");
      res.end();
    }
  });
});

module.exports = router;
