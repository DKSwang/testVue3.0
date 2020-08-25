<template>
  <div class="hello">
    这是rective新页面
    <p>我显示reactive的值--{{count}}</p>
    <button @click="count+=1">我要增加</button>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({ count: 0 }); // 创建响应式数据对象
    return state; // return 出去供template使用
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
