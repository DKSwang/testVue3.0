<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-28 11:25:13
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-28 11:25:16
 * @Description: 
--> 
<template>
  <div class="hello">
    <!-- <input type="text" v-model="keyWord"> -->
  </div>
</template>
<script>
import { ref, watch, reactive, onBeforeMount, onMounted } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
