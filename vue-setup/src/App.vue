<template>
  <div id="home">
    <HelloWorld :info="msg" time="42分钟" @myAdd="myAddHander" @myDel='myDelHander' ref="manInfo"></HelloWorld>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

let msg = ref('公交车-第一次循环')
const manInfo = ref()

function myAddHander(data){
  console.log(data);
  manInfo.value.aging()
}

function myDelHander(data){
  console.log(data);
}
</script>

<style scoped>
#home{
  text-align: center;
}
</style>

