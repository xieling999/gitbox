<template>
  <div id="creat">
    <div @click="goIndex">my is creat!</div>
  </div>
</template>

<script>
export default {
  name: 'creat',
  methods: {
    goIndex:function(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/variables.less';
#creat {
  width: 100%;
  height: 2000px;
  background-color: @orange;
  color:@white;
}
</style>
