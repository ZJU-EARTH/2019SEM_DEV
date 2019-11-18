<template>
    <div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">{{course.name}}</h4>
          </md-card-header>
          <md-card-content>
            <md-table>
              <md-table-row>
                <md-table-cell>课程教师</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>课时</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>简介</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>预修要求</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>

 </div>
</template>
<script >
import axios from "axios";
export default{
    data(){
      return {
        course:{
            name:''
        }
      }
    },
    created(){
        this.initial();
    },
    methods:{
        async initial(){
          let c_id=this.$route.query.Course_id;
          console.log(c_id)
          await axios
          .post("api/user/selectCourseByid", {
            c_id
          })
          .then(res => {
            console.log(res);
            this.course.name=res.data[0].c_name;
            
          })
          .catch(err => {
            console.log(err);
          });
        }
    }
}
</script>