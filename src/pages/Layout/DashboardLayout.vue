<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar title="高校教学管理系统">


      <sidebar-link to="/course">
        <md-icon>library_books</md-icon>
        <p>我的课程</p>
      </sidebar-link>
            <sidebar-link to="/homework">
        <md-icon>content_paste</md-icon>
        <p>我的作业</p>
      </sidebar-link>
      <sidebar-link to="/account">
        <md-icon>person</md-icon>
        <p>我的账户</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter
  }
};
</script>
