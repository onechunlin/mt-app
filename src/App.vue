<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo="poiInfo"></app-header>
    <!-- 导航 -->
    <app-nav :commentNum="commentNum"></app-nav>
    <!-- 内容 -->
    <app-content></app-content>
  </div>
</template>

<script>
import Header from "./views/Header"
import Nav from "./views/Nav"
import Content from "./views/Content"


export default {
  data(){
    return {
      poiInfo: {},
      commentNum: 0
    }
  },
  components:{
    "app-header":Header,
    "app-nav": Nav,
    "app-content": Content
  },
  created(){
    //请求goods
    fetch("/api/goods")
      .then(res => {
        return res.json()
      })
      .then(response =>{
        if(response.code == 0){
          this.poiInfo = response.data.poi_info;
        }
      })
    //请求ratings
    fetch("/api/ratings")
      .then(res => {
        return res.json()
      })
      .then(response =>{
        if(response.code == 0){
          this.commentNum = response.data.comment_num;
        }
      })
  }
}
</script>

<style lang="stylus" scoped>

</style>

