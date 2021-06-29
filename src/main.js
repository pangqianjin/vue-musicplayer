import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import {
  Footer, Container, Main, Aside,
  Menu, RadioGroup,RadioButton, MenuItem,
  Row, Col, Button, Table, TableColumn, Input,
  Message
} from 'element-ui'
Vue.component(Footer.name, Footer)
Vue.component(Container.name, Container)
Vue.component(Main.name, Main)
Vue.component(Aside.name, Aside)
Vue.component(Menu.name, Menu)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Input.name, Input)
Vue.component(Message.name, Message)

Vue.prototype.$message=Message
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
