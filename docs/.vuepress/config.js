/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2023-03-17 20:24:44
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2023-03-21 10:38:34
 */
module.exports = {
  title: 'wheel-design',
  description: '一个简约、易用的 UI 框架',
  themeConfig: {
    displayAllHeaders: true,
    logo: '/logo.jpeg',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/get-started/' },
      { text: 'github', link: 'https://github.com/chunjie-zhang/wheel-design' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/introduce/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/Button',
          // '/components/tabs',
          // '/components/input',
          // '/components/grid',
          // '/components/layout',
          // '/components/toast',
          // '/components/collapse',
          // '/components/popover',
        ]
      },

    ]
  }
}