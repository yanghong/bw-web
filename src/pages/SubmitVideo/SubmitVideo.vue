<template>
  <div class="submit-video-container">
    <BannerBw></BannerBw>
    <div class="submit-video-background-img">
      <img src="../../assets/images/submitVideo/submit-video-header.png" alt="submit-video-background-img">
    </div>
    <div class="submit-video-content">
      <div class="submit-video-info">
        <div class="submit-video-info-title">
          <span>投稿信息</span>
        </div>
        <div class="submit-video-title">
          <div class="submit-video-title-name">
            <span>标题</span><span class="star">*</span>
          </div>
          <div classs="submit-video-title-input">
            <a-input></a-input>
          </div>
        </div>
        <div class="submit-video-classify">
          <div class="submit-video-classify-name">
            <span>分类</span><span class="star">*</span>
          </div>
            <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled>Disabled</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
        </div>
        <div class="submit-video-cover">
          <div class="submit-video-cover-name">
            <span>封面</span><span class="star">*</span>
          </div>
          <div classs="submit-video-cover-input">
            <a-upload name="avatar" listType="picture-card" class="avatar-uploader" :showUploadList="false" action="//jsonplaceholder.typicode.com/posts/" :beforeUpload="beforeUpload" @change="handleChangeUpload">
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
            <span>支持≤3M，JPG、JPEG、PNG格式文件</span>
          </div>
        </div>
        <div class="submit-video-intro">
          <div class="submit-video-intro-name">
            <span>简介</span>
          </div>
          <div classs="submit-video-intro-input">
            <a-textarea placeholder="小于200字" :rows="4"/>
          </div>
        </div>
      </div>
      <div class="submit-video-progress">
        <div class="submit-video-progress-notice">
          <span>请勿上传包含有政治有害、色情挑逗、血腥暴力等违法因素的视频内容。</span>
        </div>
        <a-progress :percent="50" status="active" />
        <!--TODO 视频上传插件-->
      </div>
    </div>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import BannerBw from '../../components/Banner/BannerBw.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  function getBase64 (img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  export default {
    name: 'SubmitVideo',
    components: {
      BannerBw,
      FooterGuide
    },
    data () {
      return {
        loading: false,
        imageUrl: '',
      }
    },
    methods: {
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      handleChangeUpload (info) {
        if (info.file.status === 'uploading') {
          this.loading = true
          return
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrl) => {
            this.imageUrl = imageUrl
            this.loading = false
          })
        }
      },
      beforeUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        if (!isJPG) {
          this.$message.error('You can only upload JPG file!')
        }
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('Image must smaller than 2MB!')
        }
        return isJPG && isLt2M
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .submit-video-background-img
    width 75%
    margin 0 auto
  .submit-video-content
    width 75%
    margin 0 auto
    display flex
    display -webkit-flex
  .submit-video-info
    width 584px
    height 640px
    margin 10px 10px
    border-radius 3px
    border solid 1px #dcdcdc
    display flex
    display -webkit-flex
    flex-direction column
  .submit-video-info div
    margin 5px 5px
  .avatar-uploader > .ant-upload
    width 128px
    height 128px
  .ant-upload-select-picture-card i
    font-size 32px
    color #999
  .ant-upload-select-picture-card .ant-upload-text
    margin-top 8p
    color #666
  .submit-video-progress
    width 696px
    height 640px
    margin 10px 10px
    display flex
    display -webkit-flex
    flex-direction column
  .submit-video-progress-notice
    width 667px
    height 64px
    margin 5px 5px
    background-color #f6f9fa
    border-radius 3px
    border solid 1px #dcdcdc
  .submit-video-progress-notice span
    width 506px
    height 18px
    font-family MicrosoftYaHei
    font-size 16.7px
    font-weight normal
    font-stretch normal
    letter-spacing 0px
    color #ff7380
</style>
