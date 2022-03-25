<!-- 这个是组件 -->
<template>
  <div>
    <h2>你好-我是Loopers</h2>
    <p>信息:{{ info }}</p>
    <p>时间：{{ time }}</p>
    <p>年龄：{{ detailInfo.age }}</p>
    <p>伴侣：{{ detailInfo.like }}</p>
    <button @click="handleAdd" class="button">新增</button>
    <button @click="handleDele" class="button">删除</button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
defineProps({
  info: {
    type: String,
    default: '----'
  },
  time: {
    type: String,
    default: '0分钟'
  },
})
let sex = ref('男')
let detailInfo = reactive({
  like: '李诗晴',
  age: 27
})
let $myemit = defineEmits(['myAdd', 'myDel'])
function handleAdd() {
  $myemit('myAdd', '新增的数据')
}
function handleDele() {
  $myemit('myDel', '删除的数据')
}
function aging() {
  detailInfo.age++

}
// 将组件中的属性暴露出去，这样父组件可以获取
defineExpose({
  sex,
  detailInfo,
  aging
})
</script>
<style scoped>
.button {
  margin: 10px;
}
</style>
