<template>
    <div class="sys-message-container">
      <div class="sys-message-title-time">
        <div class="sys-message-title">
          <span>{{messageTitle}}</span>
        </div>
        <div class="sys-message-time">
          <span>{{messageTime}}</span>
        </div>
      </div>
      <div class="sys-message-content">
        <span>{{content}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'sysMessage',
    data () {
      return {
        messageTitle: '英雄联盟',
        messageTime: '2018年10月10日 12:00',
        content: 'ssssssssssssssssssssssssssssssss'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sys-message-container
    width 1155px
    height 100px
    margin 0 auto
    margin 10px 5px
    border-radius 3px
    border solid 1px gray
    display flex
    display -webkit-flex
    flex-direction column
  .sys-message-title-time
    display flex
    display -webkit-flex
    flex-direction row
  .sys-message-title span
    margin-left 5px
    margin-right 10px
    font-weight 20px
  .sys-message-content
    margin-left 15px
</style>
