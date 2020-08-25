<template>
  <div class="hello">
    <button v-if="isInput===false" @click='showInput'>展示input</button>
    <input @blur="getButton" ref="ipt" type="text" v-else>
  </div>
</template>
<script>
import { ref, watch, reactive, onBeforeMount, onMounted, provide } from '@vue/composition-api';
export default {
  name: 'HelloWorld',
  data() {
    return {
      isInput: false
    }
  },
  methods: {
    showInput() {
      this.isInput = true;
      // this.$refs.ipt.focus()//此时会报错,Error in v-on handler: "TypeError: Cannot read property 'focus' of undefined",因为
      //在执行完上一步的时候,DOM还没有更新,左右页面上并没做 ipt绑定的Dom  <input ref="ipt" type="text" v-else>
      //解决方案-使用this.$nextTick(),延时一会,等到DOM渲染完成了就可以了
      this.$nextTick(() => {
        this.$refs.ipt.focus()
      })
    },
    getButton() {
      this.isInput = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
