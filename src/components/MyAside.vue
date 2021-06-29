<template>
    <el-aside>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="el-menu-vertical" :collapse="isCollapse" default-active="1">
          <el-menu-item index="1" @click="jumpTo(1)">
            <i class="el-icon-headset"></i>
            <span slot="title">本地音乐</span>
          </el-menu-item>
          <el-menu-item index="2" @click="jumpTo(2)">
            <i class="el-icon-s-unfold"></i>
            <span slot="title">播放列表</span>
          </el-menu-item>
          <el-menu-item index="3" @click="jumpTo(3)">
            <i class="el-icon-time"></i>
            <span slot="title">最近播放</span>
          </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
    data(){
        return {
            isCollapse: false
        }
    },
    methods:{
        jumpTo(index){
            const targetRoute = index===1? '/localmusic':
                                index===2? '/playingmusic':
                                '/playedmusic'
            if(this.$route.path!==targetRoute){
                this.$router.replace(targetRoute)
            }  
        }
    }
}
</script>
<style>
    .el-menu-vertical{
        height: 70vh;
    }
</style>