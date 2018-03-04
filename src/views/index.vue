<template>
    <div class="index-pannel">
        <div class="header">
            <div class="header-container">
                <div class="fl iconfont" @click="showPannel">&#xe606;</div>
                <div class="fl header-title">追书神器</div>
                <div class="fr iconfont" v-show="!leftPannelFlag">&#xe6ea;</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
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
        //打开面板
        showPannel() {
            if(this.leftPannelFlag) {
                this.$store.commit('changePannel', false);
            } else {
                this.$store.commit('changePannel', true);
            }
        }
    },
    components: {
        
    }
};
</script>

<style scoped>
    .header{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: red;
    }
    .header-container{
        width: 90%;
        margin: 0 auto;
    }
    .header-title{
        width: 84%;
        text-align: center;
        color: #fff;
    }
</style>

