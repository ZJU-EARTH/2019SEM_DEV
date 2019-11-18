import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Account from "@/pages/Account.vue";
import Course from "@/pages/Course.vue";
import Homework from "@/pages/Homework.vue";
import Login from "@/pages/Login.vue";
import Sign from "@/pages/Sign.vue";
import Hwinfo from "@/pages/Hwinfo.vue";
import Courseinfo from "@/pages/Courseinfo.vue";
import vedio from "@/pages/coursedetail/vedio.vue";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "account",
        name: "我的账户",
        component: Account
      },
      {
        path: "course",
        name: "我的课程",
        component: Course
      },
      {
        path: "homework",
        name: "我的作业",
        component: Homework
      },
      {
        path: "login",
        name: "登陆",
        component: Login
      },
      {
        path: "sign",
        name: "注册",
        component: Sign
      },
      {
        path: "hwinfo",
        name: "作业详情",
        component: Hwinfo
      },
      {
        path: "courseinfo",
        name: "课程",
        component: Courseinfo
      },
      {
        path: "courseinfo/vedio",
        name: "课程",
        component: vedio
      }
    ]
  }
];

export default routes;
