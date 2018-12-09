<template>
  <div>
    <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">返回顶部</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        backTopShow:false
      }
    },
    components: {},
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
          }else {
            clearInterval(back)
          }
        });
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .back-top
    position fixed
    right 10px
    bottom 10px
</style>
