<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-07-01 09:32:41
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-07-01 11:13:41
 * @Description: 
--> 
<template>
  <div class="head">
    <div id="box">
      编程适合那些有不同想法的人... <br />
      对于那些想要创造大事物并愿意改变世界的人们。
    </div>
  </div>
</template>
<script>
import { ref, watch, reactive, onBeforeMount, onMounted, provide } from '@vue/composition-api';
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
#box {
  font-family: Arial;
  font-size: 18px;
  line-height: 30px;
  font-weight: bold;
  color: white;
  padding: 40px;
  background: linear-gradient(to top, #4caf50, #4caf50 10px, transparent 10px),
    linear-gradient(to right, #c1ef8c, #c1ef8c 10px, transparent 10px),
    linear-gradient(to bottom, #8bc34a, #8bc34a 10px, transparent 10px),
    linear-gradient(to left, #009688, #009688 10px, transparent 10px);
  background-origin: border-box;
  position: absolute;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -85px;
}
.head {
  position: relative;
  background: green;
  width: 100%;
  height: 600px;
}
</style>
