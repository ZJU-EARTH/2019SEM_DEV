<template>
  <div class="content">
    <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">待完成作业</h4>
      </div>
    </div>
    <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>操作系统HW1</h3>
          </div>
          <div class="md-layout-item md-size-100 text-right">
               <button type="button" class="md-button md-raised md-success md-theme-default" @click="info()">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>         

          </div>
        </div>
      </div>
    </div>
        <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">已完成作业</h4>
      </div>
    </div>
    <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>计算机网络HW1</h3>
          </div>
          <div class="md-layout-item md-size-100 text-right">
               <button type="button" class="md-button md-raised md-success md-theme-default">
            </button>         
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看评价</div>
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
export default {
  data() {
    return {

    };
  },
  methods:{
    info(){
      this.$router.push({
        name: "作业详情"
      });
    }
    
  }
};
</script>
