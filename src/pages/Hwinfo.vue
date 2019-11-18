<template>
  <div class="content">
    <div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">作业信息</h4>
          </md-card-header>
          <md-card-content>
            <p>1.exercise 3 3.1 3.2</p>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">截至时间</h4>
          </md-card-header>
          <md-card-content>
            <p>2019/11/17</p>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div>
      <input type="file" name="file" @change="uploadAvatar" />
      <button id="loadimg" @click="downloadImage()">下载</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {
    function() {
      this.initialize();
    }
  },
  methods: {
    uploadAvatar(avatar) {
      console.log(avatar.target.files[0]);
      let file = avatar.target.files[0];
      let data = new FormData();
      data.append("file", file, file.name); //很重要 data.append("file", file);不成功
      data.append("data", 112);
      console.log(data.get("file"));
      return axios.post("api/user/uploadpic", data, {
        headers: { "content-type": "multipart/form-data" }
      });
    },
    downloadImage() {
      axios
        .get("api/user/download", {
          // 还可以直接把参数拼接在url后边
          params: {
            dir: "/server/public/upload",
            name: "Obfuscator-llvm.pdf"
          },
          responseType: "blob"
        })
        .then(response => {
          this.download(response);
        })
        .catch(error => {});
    },
    download(data) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      console.log(url);
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", "xx.pdf");

      document.body.appendChild(link);
      link.click();
    }
  }
};
</script>
