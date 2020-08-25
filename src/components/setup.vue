<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-05-26 15:23:00
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-05-26 15:33:12
 * @Description: 
--> 
<template>
  <div class="hello">
    这是setup页面
  </div>
</template>

<script>
import { } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  props: ['p1'],
  //   props: {
  //     p1: String,
  //   },
  setup(props, context) {
    console.log('setup');
    console.log(props.p1);
    console.log(context);
    console.log(this);
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
    console.log(this);
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
