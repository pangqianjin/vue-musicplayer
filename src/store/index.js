import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    audio: new Audio(),// 当前正在播放的audio
    isPlaying: false,
    localSongs: [],// 本地歌曲列表
    playingSongs: [],// 正在播放的歌曲列表
    playedSongs: [],// 最近播放的歌曲列表
    index: -1// 正在播放的歌曲索引
  },
  getters: {
    isPlaying: state=>state.isPlaying,
    localSongs: state=>state.localSongs,
    playingSongs: state=>state.playingSongs,
    playedSongs: state=>state.playedSongs,
    index: state=>state.index,
  },
  mutations: {
    handlePlaying(state){
      state.isPlaying? state.audio.pause(): state.audio.play()
      state.isPlaying = !state.isPlaying
    },
    handleUpload(state, fileslist){
      state.localSongs = fileslist
    },
    handlePlay(state){
      state.isPlaying? state.audio.pause(): state.audio.play()
      state.isPlaying = !state.isPlaying
    },
    handleClickSong(state, {index, audio, name}){
      state.audio.load()// 停止当前音频
      state.audio = audio// 替换当前音频
      state.index = index// 替换当前索引
      state.isPlaying = true// 更改播放状态
      state.audio.play()
      
      state.playedSongs.push({name: name, audio})// 最近播放音乐
      // 如果已存在则不添加 
      if(!state.playingSongs.some(song=>song.name===name)){// 正在播放音乐
        state.playingSongs.push({name: name, audio}) 
        state.index = state.index+1
      }
        
    }
  },
  actions: {
    handlePlaying({commit}){
      commit('handlePlaying')
    },
    handleUpload({commit}, fileslist){
      commit('handleUpload', fileslist)
    },
    handlePlay({commit}){
      commit('handlePlay')
    },
    handleClickSong({commit},{index, audio, name}){
      commit('handleClickSong', {index, audio, name})
    }
  }
})
