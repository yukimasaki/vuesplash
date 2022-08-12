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

const app = new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    store,
    components: { App }, // ルートコンポーネントの使用を宣言する
    template: '<App />' // ルートコンポーネントを描画する
  });  