<template>
  <div class="footer-container">
    <div class="contact-information">
      <div class="tel-number">
        <img src="../../assets/images/footer/tel.png" alt="tel">
        <span>0571-2864651</span>
      </div>
      <div class="e-mail">
        <img src="../../assets/images/footer/e-mail.png" alt="email">
        <span>265848951@joinbw.cn</span>
      </div>
      <div class="join-web">
        <img src="../../assets/images/footer/web-site.png" alt="web-site">
        <span>www.joinbw.cn</span>
      </div>
      <div class="address">
        <img src="../../assets/images/footer/address.png" alt="address">
        <span>浙江省杭州市西湖区留下街道的什么地方</span>
      </div>
    </div>
    <div class="register-information">
      <span>版权所有 杭州诀英科技有限公司 ALL RIGHT RESERVERVED 浙ICP备65488565号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-container
    width 100%
    display flex
    display -webkit-flex
    flex-direction column
    justify-content center
    background-color rgba(255,242,169,0.4)
  .contact-information
    width 100%
    display flex
    display -webkit-flex
    flex-direction row
    justify-content center
  .contact-information div
    width 260px
    margin 85px 40px 10px 40px
  .register-information
    width 600px
    margin 60px auto
</style>
