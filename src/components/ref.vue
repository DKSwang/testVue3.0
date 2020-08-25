<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-26 16:15:14
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-26 16:15:25
 * @Description: 
--> 
<template>
  <div class="hello">
    这是ref新页面
    <p>我显示ref的值--{{count}}--{{name}}</p>
    <button @click="count+=1">我要增加</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const count = ref(0);// 返回的是一个对象
    console.log(count, '我要的数据', count.value);// 只有在setup函数内读取ref对象的值要使用.value,除此之外会自动展开
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
