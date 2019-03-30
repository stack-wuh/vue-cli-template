<template>
  <section class="my-order-list">
    <h3 class="my-order-list__title">用户信息</h3>
    <ul class="my-order-list__list">
      <li
        v-for="(item, index) in 5"
        :key="index"
        class="my-order-list__item">
          <span class="my-order-list__item--label">用户姓名</span>
          <span class="my-order-list__item--value">shadow</span>
      </li>
    </ul>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  export default {
    name: 'MyOrderList',
    components: {},
    props: {
      info: {
        type: Object,
      }
    },
    model: {},
    computed: {},
    data (){
      return {}
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(order-list) {
  width: inherit;
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid $b-base;
  &:last-of-type {
    margin-bottom: 0;
  }
  @include e(title) {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: normal;
  }
  @include e(list) {
    @include flex($dir: row, $align: center, $wrap: wrap);
    width: inherit;
  }
  @include e(item) {
    width: 33.33%;
    margin-bottom: 5px;
    font-size: 14px;

    @include m(label) {
      &::after {
        content: ' : ';
      }
    }
    @include m(value) {
      color: $t-666;
    }
  }
}
</style>
