<template>
  <div class="container">
    <testCom></testCom>
  </div>
</template>

<script>
  import testCom from '../../components/Banner/BannerBw.vue'
  export default {
    name: 'testComp',
    components: {
      testCom
    }
  };
</script>

<style lang="stylus" ref="stylesheet/styles">
  .container
    width 75%
    margin 0 auto
</style>
