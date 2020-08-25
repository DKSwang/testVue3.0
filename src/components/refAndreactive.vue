<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-26 16:55:07
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-26 16:55:10
 * @Description: 
--> 
<template>
  <div class="hello">

  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const count = ref(0);// 定义第一个ref,返回一个对象
    const state = reactive({ count }); // 定义reactive,且将count用于reactive
    const countOne = ref(9);// 重新定义一个ref
    state.count = countOne;// 进行ref的赋值
    console.log(count, '我要的数据', count.value, state, '查看是否会覆盖', countOne);
    state.count += 1;
    console.log(state, '查看是否会覆盖', countOne);
    console.log(count.value, 'count.value,');
    console.log(countOne.value, 'countOne.value,');
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
