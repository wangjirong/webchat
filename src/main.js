import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//引入样式文件
import './style/style.css'
import './style/init.css'
import './style/footer_header.less'
import './style/home.less'
import './style/login_register.less'

import './util/init.js'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// import SocketIO from 'vue-socket.io'
// Vue.use(new SocketIO({
//   debug:true,
//   connecting:'http://localhost:3000',
//   vuex:{
//   }
// }));
// this.$socket.emit('login',{
//   username: 'username',
//   password: 'password'
// });
// this.sockets.subscribe('relogin', (data) => {
//   console.log(data)
// });

import axios from './util/axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
