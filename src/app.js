/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-09 20:44:41
 */
import Vue from 'vue';
import wdIcon from '../packages/icon/icon.vue';
import wdButton from '../packages/button/button.vue';
import wdButtonGroup from '../packages/button-group/button-group';
import wdInput from '../packages/input/input.vue';
import wdCol from '../packages/col/col.vue';
import wdRow from '../packages/row/row.vue';

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