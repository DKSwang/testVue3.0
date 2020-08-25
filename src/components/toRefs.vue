<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-27 11:18:30
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-27 11:18:33
 * @Description: 
--> 
<template>
  <div class="hello">
    <!-- return state的写法和使用展开符号配合toRefs -->
    <p>显示state{{count}}</p>
    <button @click="add">点击</button>
    <!-- return {state}的写法-->
    <!-- <p>显示state{{state.count}}</p>
    <button @click="state.count+=1">点击</button> -->
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({ count: 0, name: '张三' });
    // 在vue3中不在推荐我们写methods,而是建议将函数写在setup中
    const add = () => {
      state.count += 1;
    };
    return {
      // state, // 这样return出去外面读取就使用state.count,变量依然是响应式的
      // ...state,// 但是使用展开符号的时候,外界读取依然是count,但是变量就不是响应式的了,若想使用展开符号,但是还想数据是响应式的就使用toRefs
      ...toRefs(state), // 使用这种方式数据依然是响应式的,且外界读取使用count
      add,
    };// 这中写法和下面的写法读取方式不一样
    // return {
    //   state,
    // };
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
