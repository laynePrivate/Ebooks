<template>
    <div style="height: 100%;">
        <div class="left-pannel" v-if="leftPannelFlag">
            <router-link to="/login" class="iconfont left-pannel-item">&#xe65b;</router-link>
            <router-link to="index" class="iconfont left-pannel-item" @click.native="closePannel">&#xe60f;</router-link>
            <router-link to="email" class="iconfont left-pannel-item" @click.native="closePannel">&#xe61a;</router-link>
            <router-link to="setting" class="iconfont left-pannel-item" @click.native="closePannel">&#xe627;</router-link>
        </div>
        <div :class="{'main-pannel': leftPannelFlag}">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      leftPannelFlag: state => state.leftPannelFlag
    })
  },
  methods: {
    closePannel() {
      this.$store.commit("changePannel", false);
    }
  }
};
</script>

<style>
.left-pannel {
  width: 16%;
  height: 100%;
  background: #666;
  float: left;
}
.main-pannel {
  width: 84%;
  float: left;
}
.left-pannel-item {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  display: block;
  border-bottom: 1px solid #000;
}
.left-pannel-item:first-child {
  border-top: 1px solid #000;
  margin-top: 0.8rem;
}
.router-link-active {
  border-left: 3px solid red;
}
</style>
