import Vue from 'vue';
import wdIcon from '../packages/icon/icon.vue';
import wdButton from '../packages/button/button.vue'
import wdButtonGroup from '../packages/button-group/button-group'

// 注册组件
Vue.component(wdIcon.name, wdIcon)
Vue.component(wdButton.name, wdButton)
Vue.component(wdButtonGroup.name, wdButtonGroup)

new Vue({
    el: '#app',
    data: {
      loading: true,
    }
})

// 单元测试

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

{// button组件的icon是否生效
  const Constructor = Vue.extend(wdButton);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
    }
  });
  button.$mount('#test1');
  let icon = button.$el.getElementsByTagName('i')[0];
  expect(icon.getAttribute('class')).to.eq('wd-button__icon wd-icon-setting')
}

{// button组件的loading是否生效
  const Constructor = Vue.extend(wdButton);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  });
  button.$mount('#test2');
  let icon = button.$el.getElementsByTagName('i')[0];
  expect(icon.getAttribute('class')).to.eq('wd-button__icon wd-icon-loading wd-button__loading')
}

{// button的点击事件身份成功
  const Constructor = Vue.extend(wdButton);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  });
  button.$mount('#test3');
  let spy = chai.spy(function(){});

  button.$on('click', spy);
  let db = button.$el;
  db.click();
  expect(spy).to.have.been.called() 
}