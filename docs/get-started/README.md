---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i wheel-design -S
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 wheel-design

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
import { WdButton, WdButtonGroup, WdIcon } from 'wheel-design'
import 'wheel-design/dist/index.css'
export default {
  name: 'app',
  components: {
    'WdButton': WdButton,
    'WdIcon': WdIcon
  }
}
```

**完整组件列表和引入方式**

```js
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
import WdCollspse from '../packages/Collapse/Collapse.vue';
import WdCollspseItem from '../packages/Collapse/CollapseItem.vue'

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
Vue.component(WdCollspse.name, WdCollspse);
Vue.component(WdCollspseItem.name, WdCollspseItem);
Vue.use(plugin)                           // toast 组件的使用方法
```
