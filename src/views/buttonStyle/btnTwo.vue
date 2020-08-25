<!--
 * @Author: xxuzhong.wang
 * @Date: 2020-07-01 09:32:41
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-08-25 16:27:28
 * @Description: 
--> 
<template>
  <div id="shiny-shadow">
    <button><span>Hover me</span></button>
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
#shiny-shadow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1c2541;
}

button {
  border: 2px solid white;
  background: transparent;
  text-transform: uppercase;
  color: white;
  padding: 15px 50px;
  outline: none;
  overflow: hidden;
  position: relative;
}

span {
  z-index: 20;
}

button:after {
  content: "";
  display: block;
  position: absolute;
  top: -36px;
  left: -100px;
  background: white;
  width: 50px;
  height: 125px;
  opacity: 20%;
  transform: rotate(-45deg);
}

button:hover:after {
  left: 120%;
  transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
  -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
}
</style>
