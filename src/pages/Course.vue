<template>
  <div class="content">
    <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">正在学</h4>
      </div>
    </div>
    <div
      class="md-card md-theme-default"
      v-for="item in courselearn"
      v-bind:key="item.name"
    >
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>{{item.name}}</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100"></div>
          <div class="md-layout-item md-size-100 text-right">
            <button
              type="button"
              class="md-button md-raised md-success md-theme-default"
              @click="courseinfo(item)"
            >
              <div class="md-ripple">
                <div class="md-button-content">进入课程</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">已完成</h4>
      </div>
    </div>
    <div
      class="md-card md-theme-default"
      v-for="item in coursefinish"
      v-bind:key="item.name"
    >
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>{{item.name}}</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100"></div>
          <div class="md-layout-item md-size-100 text-right">
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleTable from "@/components";
import axios from "axios";
export default {
  data() {
    return {
      coursefinish: [],
      courselearn:[]
    };
  },
  created() {
      this.initial1();
      this.initial2();
    
  },
  methods: {
    async initial1() {
      let s_ID = "1";
      let course_id = [];
      await axios
        .post("api/user/selectStudent", {
          s_ID
        })
        .then(res => {
          console.log(res);
          
          let course_string = res.data[0].s_learncourse;
          course_id = course_string.split(",");
        })
        .catch(err => {
          console.log(err);
        });
        let i = 0;
        let result=[];
          for (i = 0; i < course_id.length; i++) {
            let c_id = course_id[i] - "0";
            await axios
              .post("api/user/selectCourseByid", {
                c_id
              })
              .then(res => {
                result[i] = {
                  name: res.data[0].c_name,
                  id:res.data[0].c_ID
                };
                console.log(result[i]);
              })
              .catch(err => {
                console.log(err);
              });
          }
          this.courselearn=result;
        
    },
    
    async initial2() {
      let s_ID = "1";
      let course_id = [];
      await axios
        .post("api/user/selectStudent", {
          s_ID
        })
        .then(res => {
          console.log(res);
          
          let course_string = res.data[0].s_finishcourse;
          course_id = course_string.split(",");
        })
        .catch(err => {
          console.log(err);
        });
        let i = 0;
        let result=[];
          for (i = 0; i < course_id.length; i++) {
            let c_id = course_id[i] - "0";
            await axios
              .post("api/user/selectCourseByid", {
                c_id
              })
              .then(res => {
                result[i] = {
                  name: res.data[0].c_name,
                  id:res.data[0].c_ID
                };
                console.log(result[i]);
              })
              .catch(err => {
                console.log(err);
              });
          }
          this.coursefinish=result;
        
    },
    courseinfo(item) {
      console.log(item)
      this.$router.push({
        name: "课程",
          query: {
            Course_id: item.id
          }
      });
    }
  }
};
</script>
