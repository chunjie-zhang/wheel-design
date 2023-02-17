/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-02-15 17:08:29
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-02-16 18:03:28
 */
import wdToast from '../Toast/Toast.vue';

let currentToast:any = undefined;

// 创建toast组件
function createToast ({Vue, message, propsData, onToastClose}) {
  const constructor = Vue.extend(wdToast);
  const instance = new constructor({
    propsData,
  })
  instance.$slots.default = [message];
  instance.$mount();
  instance.$on('toastClose', onToastClose);
  document.body.appendChild(instance.$el);
  return instance;
}

// 创建toast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions = {}) => {
      // 如果toast已经存在，就先销毁再创建
      if (currentToast) {
        currentToast.handleToastClose();
      }
      currentToast = createToast({Vue, message, propsData: toastOptions, onToastClose: () => {
        currentToast = undefined;
      }});
    }
  }
}