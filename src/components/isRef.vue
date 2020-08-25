<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-27 10:35:19
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-27 10:35:22
 * @Description: 
--> 
<template>
  <div class="hello">

  </div>
</template>

<script>
import { ref, isRef } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const count = ref(0);// 定义第一个ref,返回一个对象
    const newCount = isRef(count) ? count.value : count;
    console.log(newCount, 'newCount');
    console.log(isRef(count), 'isRef(count)');
    return { // 返回供template使用
      count,
      name: ref('王'),
    };
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
