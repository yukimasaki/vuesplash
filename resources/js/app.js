import './bootstrap'
import Vue from 'vue'

// ルーティングの定義をインポートする
import router from './router'
// Vuexをインポート数R
import store from './store'
// ルートコンポーネントをインポートする
import App from './App.vue'

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const createApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />'
  })
}

createApp()