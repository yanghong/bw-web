<template>
  <div class="test-container">
    <testCom></testCom>
  </div>
</template>

<script>
import testCom from '../../pages/Profile/historyItem.vue'
import { saveChange, } from '../../api/user'
export default {
  name: 'testComp',
  components: {
    testCom
  },
  data () {
    return {
      params: {
        id:1,
        changeType: 'username',
        changeValue: 'hello'
      }
    }
  },
  methods: {
    userSaveChange(params) {
      saveChange(params)
        .then(resp => {
          console.log(resp);
        });
    }
  },
  created() {
    this.userSaveChange(this.params);
  }
};
</script>

<style lang="stylus" ref="stylesheet/styles">
  .test-container
    width 70%
    margin 0 auto

</style>
