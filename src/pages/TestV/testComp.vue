<template>
  <div class="test-container">
    <testCom></testCom>
  </div>
</template>

<script>
  import testCom from '../../pages/Profile/historyItem.vue'
  export default {
    name: 'testComp',
    components: {
      testCom
    }
  };
</script>

<style lang="stylus" ref="stylesheet/styles">
  .test-container
    width 70%
    margin 0 auto

</style>
