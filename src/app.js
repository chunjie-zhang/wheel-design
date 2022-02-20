import Vue from 'vue';
import wdIcon from '../packages/icon/icon.vue';
import wdButton from '../packages/button/button.vue'

// 注册组件
Vue.component('wd-button', wdButton)
Vue.component('wd-icon', wdIcon)

new Vue({
    el: '#app',
})