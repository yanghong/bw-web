<template>
  <div class="banner">
    <div class="topic-preview-wrapper">
      <div class="topic-preview-list-wrapper">
        <ul class="topic-preview" style="width: 500%;" ref="banner">
          <BannerItem></BannerItem>
        </ul>
      </div>
      <a class="more-topic">更多
        <i class="b-icon"></i>
      </a>
      <div class="s-bottom">
        <div class="title">
            <span>Banner</span>
        </div>
        <ul class="slide-bar">
          <li ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from './BannerItem.vue'
export default {
  name: 'Banner',
  components: {
    BannerItem
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
