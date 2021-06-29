<template>
    <el-table
        :data="songs" height="70vh"
        style="width: 100%"
    >
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="时长" prop="duration"></el-table-column>
        <el-table-column align="right">
            <template slot="header" slot-scope="scope">
                <el-button type="primary" @click="upload">导入本地</el-button>
            </template>
            <template slot-scope="scope">
                <el-button
                    size="mini" icon="el-icon-video-play"
                    @click="play(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import {uploadFiles} from '../utils'
export default {
    computed:{
        ...mapGetters(['index','localSongs', 'playingSongs', 'playedSongs']),
        songs(){
            switch(this.$route.path){
                case '/playingmusic':
                    return this.playingSongs
                case '/playedmusic':
                    return this.playedSongs
                default:
                    return this.localSongs
            }
        }
    },
    methods:{
        ...mapActions(['handlePlay', 'handleClickSong', 'handleUpload']),
        play(_, row){
            console.log({index:this.index, audio:row.audio, name:row.name})
            this.handleClickSong({index:this.index, audio:row.audio, name:row.name})
        },
        async upload(){
            this.$message('加载中，请等候...')
            this.handleUpload(await uploadFiles())
        }
    }
}
</script>
<style>
    .my-main{
        width: 100%;
    }
</style>