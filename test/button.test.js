const expect = chai.expect;
import Vue from 'vue'
import wdButton from '../packages/button/button.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('wdButton', () => {
    it('存在.', () => {
        expect(wdButton).to.be.ok
    })
    it('可以设置icon.', () => {
      const Constructor = Vue.extend(wdButton);
      const button = new Constructor({
        propsData: {
          icon: 'setting',
        }
      });
      button.$mount('#test1');
      let icon = button.$el.getElementsByTagName('i')[0];
      expect(icon.getAttribute('class')).to.eq('wd-button__icon wd-icon-setting')
      button.$destroy()
    })
    it('可以设置loading.', () => {
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
      button.$destroy()
    })
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(wdButton)
        const button = new Constructor({
        propsData: {
            icon: 'settings',
        }
        }).$mount(div)
        let icon = button.$el.getElementsByTagName('i')[0];
        expect(getComputedStyle(icon).order).to.eq('1')
        button.$el.remove()
        button.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(wdButton)
        const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
        }).$mount(div)
        let icon = button.$el.getElementsByTagName('i')[0];
        expect(getComputedStyle(icon).order).to.eq('2')
        button.$el.remove()
        button.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(wdButton)
        const button = new Constructor({
        propsData: {
            icon: 'settings',
        }
        }).$mount()

        const callback = sinon.fake();
        button.$on('click', callback)
        button.$el.click()
        expect(callback).to.have.been.called
    })
})