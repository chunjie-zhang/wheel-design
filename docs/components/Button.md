---
title: Button 按钮
---

# Button 按钮

**使用方法**

#### 基本用法：

<ClientOnly>
  <WdButton></WdButton>
</ClientOnly>

#### 示例代码：

```vue
  <WdButton>默认按钮</WdButton>
  <WdButton icon="settings">默认按钮</WdButton>
  <WdButton :loading="loading" @click="loading=!loading">默认按钮</WdButton>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | setting，info，left，right，download，loading，thumbs-up，down| -- 
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
