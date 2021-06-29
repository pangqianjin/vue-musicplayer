<template>
  <el-container>  
    <el-container>
      <my-aside />
      <router-view></router-view>
    </el-container>
    <el-footer>
      <my-footer />
    </el-footer>
</el-container>
</template>

<script>
import MyAside from './components/MyAside.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyAside,
    MyFooter
  }
}
</script>

<style>
</style>
