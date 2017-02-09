<template>
  <div id="index">
    <div @click="goCreat">my is index!</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods:{
    goCreat:function(){
      this.$router.push({path:'/Creat'})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/variables.less';
#index {
  width: 100%;
  height: 2000px;
  background-color: @green;
  color:@white;
}
</style>