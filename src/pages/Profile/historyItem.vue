<template>
    <div class="history-item-container">
      <div class="history-item-img-title">
        <div class="history-item-img">
          <img src="../../assets/images/profile/profile-history-item.png" alt="profile-history-item">
        </div>
        <div class="history-item-title">
          <span>{{historyItemTitle}}</span>
        </div>
      </div>
      <div class="history-item-divider">
        <a-divider style="margin-top: 0px; margin-bottom: 0px;"/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'historyItem',
    data () {
      return {
        historyItemTitle: '被遗忘的小道具，猫鱼打个烊'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .history-item-container
    width 900px
    height 200px
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction column
  .history-item-img-title
    width 800px
    height 150px
    margin 0 auto
    display flex
    display -webkit-flex
    flex-direction row
  .history-item-img
    width 300px
    height 180px
    margin 10px 30px 10px 20px
  .history-item-title
    width 550px
    height 180px
    display flex
    display -webkit-flex
    flex-direction row
    margin 60px 30px 10px 20px
  .history-item-divider
    width 800px
    margin 30px auto
</style>
