<template>
  <div class="container">
    <Banner></Banner>
    <div class="content">
      <img src="../../assets/images/404.jpg" alt="not fund">
    </div>
  </div>
</template>

<script>
  import Banner from '../../components/Banner/BannerBw.vue'
export default {
  name: '404',
  components: {
    Banner
  },
  data() {
    return {
      count:"",//倒计时
    }
  },
  methods: {
    backToMsite(){
      const TIME_COUNT = 3;
      if(!this.timer){
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(()=>{
          if(this.count > 0 && this.count <= TIME_COUNT){
            this.count--;
          }else{
            this.$router.push({name:'/msite'});
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        },1000)
      }
    }
  },
  created() {
    this.backToMsite();
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    width 75%
    margin 0 auto
</style>
