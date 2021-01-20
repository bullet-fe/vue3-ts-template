<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="欢迎使用 Vue3 + TypeScript + webpack5 App"/>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent, onMounted} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){
    return{
        number:10
    }
  },
  setup(props, context){
    const count = ref(0)
    onMounted(() => {
          console.log('onMounted',props, context, count)
      })
  }
});
</script>
<style lang="less" scoped>
.home{
  width: 100vw;
}
</style>