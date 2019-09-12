<template>
  <section class='my-page'>
    <div class="b-block flex-wrap flex-wrap__column flex-item__center position-center">
      <div class="b-block__avatar"></div>
      <p class="b-block__main">
        <span v-formmat>18827057040</span>
        <span>(123123123)</span>
      </p>
      <p class="b-block__sub">
        <span>渠道: <strong>XXX</strong></span>
      </p>
      <time class="b-block__time">创建时间: 2019-02-02 09:02:12</time>
    </div>
  </section>
</template>

<script>
 export default{
  name: 'userDetailRecord',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  directives: {
    formmat: {
      bind (el, binding, vnode, onode) {
        var reg = /(\d{3})(\d{4})(\d{4})/
        var phone = el.innerText
        el.innerHTML = phone.replace(reg, '$1****$3')
      }
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.my-page {
  width: inherit;
  height: 50vh;

  .b-block {
    &__avatar {
      width: 90px;
      height: 90px;
      border: 1px solid #e4e4e4;
      border-radius: 50%;
    } 

    &__time {
      font-size: 15px;
      color: #999;
    }

    &__sub {
      font-size: 15px;
      color: #999;
    }

    & > p {
      line-height: 2.5em;
    }
  }
}
</style>