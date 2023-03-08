/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-09 18:25:48
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-08 11:00:32
 */
import Vue from 'vue';
import WdIcon from '../packages/Icon/Icon.vue';
import WdButton from '../packages/Button/Button.vue';
import WdButtonGroup from '../packages/ButtonGroup/ButtonGroup.vue';
import WdInput from '../packages/Input/Input.vue';
import WdCol from '../packages/Col/Col.vue';
import WdRow from '../packages/Row/Row.vue';
import WdLayout from '../packages/Layout/Layout.vue';
import WdHeader from '../packages/Layout/Header.vue';
import WdSider from '../packages/Layout/Sider.vue';
import WdContent from '../packages/Layout/Content.vue';
import WdFooter from '../packages/Layout/Footer.vue';
import WdToast from '../packages/Toast/Toast.vue';
import WdTabs from '../packages/Tabs/Tabs';
import WdTabsHead from '../packages/Tabs/TabsHead';
import WdTabsItem from '../packages/Tabs/TabsItem';
import WdTabsBody from '../packages/Tabs/TabsBody';
import WdTabsPane from '../packages/Tabs/TabsPane';
import WdPopover from '../packages/Popover/Popover.vue';

import plugin from '../packages/utils/plugin';

Vue.use(plugin);

// 注册组件
Vue.component(WdIcon.name, WdIcon)
Vue.component(WdButton.name, WdButton)
Vue.component(WdButtonGroup.name, WdButtonGroup)
Vue.component(WdInput.name, WdInput)
Vue.component(WdCol.name, WdCol)
Vue.component(WdRow.name, WdRow)
Vue.component(WdLayout.name, WdLayout)
Vue.component(WdHeader.name, WdHeader)
Vue.component(WdSider.name, WdSider)
Vue.component(WdContent.name, WdContent)
Vue.component(WdFooter.name, WdFooter)
Vue.component(WdToast.name, WdToast);
Vue.component(WdTabs.name, WdTabs);
Vue.component(WdTabsHead.name, WdTabsHead);
Vue.component(WdTabsItem.name, WdTabsItem);
Vue.component(WdTabsBody.name, WdTabsBody);
Vue.component(WdTabsPane.name, WdTabsPane);
Vue.component(WdPopover.name, WdPopover);

new Vue({
    el: '#app',
    data: {
      loading: true,
      message: 'zcj',
      selected: 'article',
    },
    methods: {
      handleToastClick () {
        this.$toast('<em class="em">我是message消息我是message消息我是message消息我是message消息</em>', {
          enableHtml: true,
          autoCloseDelay: 2000,
          closeButton: {
            text: '我知道了',
            callback: () => {
              console.log('回调成功');
            }
          },
          position: 'top'
        });
      },
      handleTabsChange(val) {
        console.log('==========', val);
      },
    },
})