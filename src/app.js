import Vue from 'vue';
import wdIcon from '../packages/icon/icon.vue';
import wdButton from '../packages/button/button.vue';
import wdButtonGroup from '../packages/button-group/button-group';
import wdInput from '../packages/input/input.vue';
import wdCol from '../packages/col/index.vue';
import wdRow from '../packages/row/index.vue';

// 注册组件
Vue.component(wdIcon.name, wdIcon)
Vue.component(wdButton.name, wdButton)
Vue.component(wdButtonGroup.name, wdButtonGroup)
Vue.component(wdInput.name, wdInput)
Vue.component(wdCol.name, wdCol)
Vue.component(wdRow.name, wdRow)

new Vue({
    el: '#app',
    data: {
      loading: true,
      message: 'zcj',
    }
})