<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-27 15:57:54
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-27 15:58:01
 * @Description: 
--> 
<template>
  <div class="hello">
    <!-- 创建的只读属性-->
    <p>{{state}}-触发set</p>
    <p>{{newC}}-触发get</p>
    <button @click="state+=1">点击</button>
  </div>
</template>
<script>
import { ref, computed } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const state = ref(1);
    const newC = computed({
      get: () => state.value + 1,
      set: (val) => {
        state.value = val - 1;
      },
    });
    newC.value = 9; // 这里会触发set
    console.log(state.value);// 触发get
    return {
      state,
      newC,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
