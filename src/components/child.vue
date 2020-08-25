<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-28 13:40:10
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-28 14:11:57
 * @Description: 
--> 

<template>
  <div class="hello">
    <p :style="{color: themeColor}">这是孙子组件</p>
  </div>
</template>
<script>
import { ref, watch, reactive, onBeforeMount, onMounted, inject } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    const themeColor = inject('childColor')
    return {
      themeColor
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
