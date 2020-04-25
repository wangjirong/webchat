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
import './style/chat.less'


import './util/init.js'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);


import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: 'http://localhost:3000',
    vuex: {
    }
}))





import axios from './util/axios'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
