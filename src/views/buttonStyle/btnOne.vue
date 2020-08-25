<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-07-01 09:32:41
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-08-25 16:23:29
 * @Description: 
--> 
<template>
  <div id="border-btn">
    <button>Hover me</button>
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
#border-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  border-radius: 10px;
  background: #2ec4b6;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  outline: none;
  position: relative;
  transition: border-radius 3s;
  -webkit-transition: border-radius 3s;
}

button:hover {
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
