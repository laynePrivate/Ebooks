<template>
  <div id="app">
    <div class="left-pannel" @click="hidePannel" v-show="leftPannelFlag">
      <router-link to="user" class="iconfont left-pannel-item">&#xe65b;</router-link>
      <router-link to="index" class="iconfont left-pannel-item">&#xe60f;</router-link>
      <router-link to="email" class="iconfont left-pannel-item">&#xe61a;</router-link>
      <router-link to="setting" class="iconfont left-pannel-item">&#xe627;</router-link>
    </div>
    <div :class="{'main-pannel': leftPannelFlag}" style="height:100%;">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
  name: "App",
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState({
      leftPannelFlag: state => state.leftPannelFlag
    })
  },
  methods: {
    //关闭面板
    hidePannel() {
      this.$store.commit('changePannel', false);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
.left-pannel{
  width: 16%;
  height: 100%;
  background: #666;
  float: left;
}
.main-pannel{
  width: 84%;
  float: left;
}
.left-pannel-item{
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  display: block;
  border-bottom: 1px solid #000;
}
.left-pannel-item:first-child{
  border-top: 1px solid #000;
  margin-top: 0.8rem;
}
.router-link-active{
  border-left: 3px solid red;
}
</style>
