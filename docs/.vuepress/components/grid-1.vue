<template>
  <div>
    <WdRow class="demoRow">
      <WdCol span="8">
        <div class="demoCol">8</div>
      </WdCol>
      <WdCol span="8">
        <div class="demoCol">8</div>
      </WdCol>
      <WdCol span="8">
        <div class="demoCol">8</div>
      </WdCol>
    </WdRow>
    <WdRow class="demoRow">
      <WdCol span="6">
        <div class="demoCol">6</div>
      </WdCol>
      <WdCol span="6">
        <div class="demoCol">6</div>
      </WdCol>
      <WdCol span="6">
        <div class="demoCol">6</div>
      </WdCol>
      <WdCol span="6">
        <div class="demoCol">6</div>
      </WdCol>
    </WdRow>
    <WdRow class="demoRow">
      <WdCol span="4">
        <div class="demoCol">4</div>
      </WdCol>
      <WdCol span="4">
        <div class="demoCol">4</div>
      </WdCol>
      <WdCol span="4">
        <div class="demoCol">4</div>
      </WdCol>
      <WdCol span="4">
        <div class="demoCol">4</div>
      </WdCol>
      <WdCol span="4">
        <div class="demoCol">4</div>
      </WdCol>
      <WdCol span="4">
        <div class="demoCol">4</div>
      </WdCol>
    </WdRow>
    <WdRow class="demoRow">
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
      <WdCol span="2">
        <div class="demoCol">2</div>
      </WdCol>
    </WdRow>
  </div>
</template>
<script>
import Row from '../../../packages/Row/Row.vue'
import Col from '../../../packages/Col/Col.vue'
export default {
  components:{
    'WdRow': Row,
    'WdCol': Col,
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
