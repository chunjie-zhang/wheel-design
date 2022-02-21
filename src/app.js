import Vue from 'vue';
import wdIcon from '../packages/icon/icon.vue';
import wdButton from '../packages/button/button.vue'
import wdButtonGroup from '../packages/button-group/button-group'

// 注册组件
Vue.component('wd-icon', wdIcon)
Vue.component('wd-button', wdButton)
Vue.component('wd-button-group', wdButtonGroup)

new Vue({
    el: '#app',
    data: {
      loading: true,
    }
})