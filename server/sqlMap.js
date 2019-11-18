// sql语句
var sqlMap = {
  user: {
    // 添加用户
    add: "insert into user(id, name, age) values (0, ?, ?)",
    // 查询用户
    select: 'select * from user where name like "%"?"%"?"%"',
    selectStudentById: "select * from student where s_ID=?",
    selectCoursedetailByid: "select * from course_detail where c_ID=?"
  }
};

module.exports = sqlMap;
