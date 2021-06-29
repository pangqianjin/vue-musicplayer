<template>
    <el-row>
        <el-col :span="5"><strong>{{musicName}}</strong></el-col>
        <el-col :span="1">
            <el-button type="primary" icon="el-icon-caret-left" circle @click="handlePreNext(-1)"></el-button>
        </el-col>
        <el-col :span="1">
            <el-button type="primary"
                :icon="isPlaying? 'el-icon-video-pause': 'el-icon-video-play'"
                @click="handlePlaying" circle></el-button>
        </el-col>
        <el-col :span="1">
            <el-button type="primary" icon="el-icon-caret-right" circle @click="handlePreNext(1)"></el-button>
        </el-col>
    </el-row>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['isPlaying', 'index', 'localSongs', 'playingSongs']),
        musicName(){// 当前播放音乐的名字
            if(this.playingSongs.length===0) return '未知'
            return this.playingSongs[this.index].name
        }
    },
    methods:{
        ...mapActions(['handlePlaying', 'handleClickSong']),
        handlePreNext(step){
            const index = this.index+step
            if(index>=0&&index<this.playingSongs.length){
                this.handleClickSong({index, audio:this.playingSongs[index].audio, name:this.playingSongs[this.index].name})
            }
        }
    }
}
</script>
<style>
    .el-button, .el-button--primary, .is-circle{
        font-size: 1em;
    }
    .el-row{
        padding: 3em;
    }
</style>