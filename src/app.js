/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-16 18:40:49
 */
import Vue from 'vue';
import wdIcon from '../packages/Icon/Icon.vue';
import wdButton from '../packages/Button/Button.vue';
import wdButtonGroup from '../packages/ButtonGroup/ButtonGroup.vue';
import wdInput from '../packages/Input/Input.vue';
import wdCol from '../packages/Col/Col.vue';
import wdRow from '../packages/Row/Row.vue';
import wdLayout from '../packages/Layout/Layout.vue';
import wdHeader from '../packages/Layout/Header.vue';
import wdSider from '../packages/Layout/Sider.vue';
import wdContent from '../packages/Layout/Content.vue';
import wdFooter from '../packages/Layout/Footer.vue';
import WdToast from '../packages/Toast/Toast.vue';
import plugin from '../packages/utils/plugin';

Vue.use(plugin);

// 注册组件
Vue.component(wdIcon.name, wdIcon)
Vue.component(wdButton.name, wdButton)
Vue.component(wdButtonGroup.name, wdButtonGroup)
Vue.component(wdInput.name, wdInput)
Vue.component(wdCol.name, wdCol)
Vue.component(wdRow.name, wdRow)
Vue.component(wdLayout.name, wdLayout)
Vue.component(wdHeader.name, wdHeader)
Vue.component(wdSider.name, wdSider)
Vue.component(wdContent.name, wdContent)
Vue.component(wdFooter.name, wdFooter)
Vue.component(WdToast.name, WdToast);

new Vue({
    el: '#app',
    data: {
      loading: true,
      message: 'zcj',
    },
    methods: {
      handleToastClick () {
        this.$toast('<em class="em">我是message消息我是message消息我是message消息我是message消息</em>', {
          enableHtml: true,
          autoCloseDelay: 200000,
          closeButton: {
            text: '我知道了',
            callback: () => {
              console.log('回调成功');
            }
          },
          position: 'middle'
        });
      },
    },
})