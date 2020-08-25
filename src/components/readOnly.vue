<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-27 15:17:00
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-28 15:07:35
 * @Description: 
--> 
<template>
  <div class="hello">
    <!-- return state的写法和使用展开符号配合toRefs -->
    <p>{{state}}</p>
    <p>{{newC}}</p>
    <button @click="state+=1">点击</button>
  </div>
</template>
<script>
import { ref, computed } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const state = ref(0);
    const newC = computed(() => state.value + 1);// 这就是制度属性
    const changeState = () => {
      state.value += 2
      console.log("我被ref的绑定调用le")
    }
    return {
      state,
      newC,
      changeState
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
