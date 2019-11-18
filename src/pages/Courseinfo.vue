<template>
  <div class="content">
        <md-app>
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{menu}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>课程平台</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item @click="chooseinfo()">
            课程介绍
          </md-list-item>
          <md-list-item @click="choosevedio()">
            课程视频
          </md-list-item>

          <md-list-item @click="choosedownload()">
            课件下载
          </md-list-item>

          <md-list-item @click="choosechat()">
            讨论区
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <vedio v-if="showvedio"></vedio>
        <download v-if="showdownload"></download>
        <chat v-if="showchat"></chat>
        <courseintro v-if="showcourseinfo"></courseintro>
      </md-app-content>
    </md-app>
    
  </div>
</template>

<script>
import vedio from "./coursedetail/vedio.vue"
import download from "./coursedetail/download.vue"
import courseintro from "./coursedetail/courseintro.vue"
import chat from "./coursedetail/chat.vue"
export default {
  components:{
    vedio,
    download,
    courseintro,
    chat
  },
  data() {
    return {
      showcourseinfo:true,
      showvedio:false,
      showdownload:false,
      showchat:false,
      menuVisible: false,
      menu:'课程介绍'
    };
  },
      methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      choosevedio(){
        this.showcourseinfo=false;
        this.showdownload=false;
        this.showchat=false;
        this.showvedio=true;
        this.menu='课程视频';
      },
      choosedownload(){
        this.showcourseinfo=false;
        this.showdownload=true;
        this.showchat=false;
        this.showvedio=false;
        this.menu='课件下载';
      },
      choosechat(){
        this.showcourseinfo=false;
        this.showdownload=false;
        this.showchat=true;
        this.showvedio=false;
        this.menu='讨论区';
      },
      chooseinfo(){
        this.showcourseinfo=true;
        this.showdownload=false;
        this.showchat=false;
        this.showvedio=false;     
        this.menu='课程简介';
      }
    }
};
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }


</style>
