<template>
  <div class="my-exchange-container">
    <div class="my-exchange-info-list">
      <div class="my-exchange-time">
        <span>{{time}}</span>
      </div>
      <div class="my-exchange-img">
        <img src="" alt="兑换商品">
      </div>
      <div class="my-exchange-title">
        <span>{{itemTitle}}</span>
      </div>
      <div class="my-exchange-amount">
        <span>{{itemAmount}}件</span>
      </div>
      <div class="my-exchange-changing">
        <img src="" alt="lighting">
        <span>×{{itemCostChanging}}</span>
        <span>{{itemStatus}}</span>
      </div>
      <div class="my-exchange-detail">
        <a-button @click="myExchangeDetail">订单详情</a-button>
      </div>
    </div>
    <div class="my-exchange-detail">
      <div class="my-exchange-detail-img">
        <img src="" alt="">
      </div>
      <div class="my-exchange-receiver_info">
        <div class="my-exchange-detail-title">
          <span>{{itemTitle}}</span>
        </div>
        <div class="my-exchange-detail-name-phone">
          <span>收件人：{{receiverName}}</span>
          <span>收货手机：{{receiverPhone}}</span>
        </div>
        <div class="my-exchange-detail-address">
          <span>收货地址：{{receiverAddr}}</span>
        </div>
        <div class="my-exchange-detail-order">
          <span>订单编号：{{orderId}}</span>
        </div>
        <div class="my-exchange-detail-express">
          <span>物流信息：{{expressInfo}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myExchange',
    data() {
      return {
        time: '2018-10-14',
        imgUrl: '',
        itemTitle: '铂金装饰黄金点缀毛绒玩具',
        itemAmount: 1,
        itemCostChanging: 199,
        itemStatus: '处理中',
        receiverName: '吴永斌',
        receiverPhone: '17764507310',
        receiverAddr: '浙江省杭州市西湖区留下街道留和路288号浙江工业大学',
        orderId: '234700256798362222',
        expressInfo: '中通快递 6110421628355555'
      }
    },
    methods: {
      /**
       * 订单详情
       */
      myExchangeDetail() {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my-exchange-container
    width 1155px
    height 100px
    margin 0 auto
    margin 10px 5px
    border-radius 3px
    border solid 1px gray
    display flex
    display -webkit-flex
    flex-direction row
  .my-exchange-info-list
    display flex
    display -webkit-flex
    flex-direction row
  .my-exchange-time
    margin 38px 20px 25px 20px
  .my-exchange-img
    margin 38px 20px 25px 20px
  .my-exchange-title
    margin 38px 20px 25px 20px
  .my-exchange-amount
    margin 38px 20px 25px 20px
  .my-exchange-changing
    margin 38px 20px 25px 20px
  .my-exchange-detail
    margin 38px 20px 25px 20px
</style>
