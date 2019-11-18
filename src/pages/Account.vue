<template>
  <div class="content">
    <div>
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">账户信息</h4>
          </md-card-header>
          <md-card-content>
            <md-table>
              <md-table-row>
                <md-table-cell>姓名</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>性别</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>学号</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>邮箱</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>专业</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>

     </div>
    <div></div>
    <div class="md-card md-card-plain md-theme-default">
      <div class="md-card-header" data-background-color="green">
        <h4 class="title">正在学</h4>
      </div>
    </div>
    <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>计算机网络</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">进入课程</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
        <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>软件需求工程</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">进入课程</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
        <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>操作系统</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <button type="button" class="md-button md-raised md-success md-theme-default">
              <div class="md-ripple">
                <div class="md-button-content">查看详情</div>
              </div>
            </button>
            <button type="button" class="md-button md-raised md-success md-theme-default">
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
    <div class="md-card md-theme-default">
      <div class="md-card-content">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <h3>数据结构</h3>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            
          </div>
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
export default {
  data() {
    return {
      loading: true,
      qidian: 1000,
      gongxian: 0,
      qidian_rank: 1,
      gongxian_rank: 1
    };
  },
  computed: {
    function() {
      this.initialize();
    }
  },
  methods: {
    async initialize() {
      await setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
};
</script>
