import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '../views/MyMain.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/localmusic', component: MyMain
        },
        {
            path: '/playingmusic', component: MyMain
        },
        {
            path: '/playedmusic', component: MyMain
        },
        {
            path: '/', redirect: '/localmusic'
        },
    ]
})