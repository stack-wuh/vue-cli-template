<template>
  <section class="my-page-404">
    <section class="my-page-404__img"></section>
    <my-error-panel></my-error-panel>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyErrorPanel from './panel'
  export default {
    name: 'MyPage500',
    components: {
      MyErrorPanel
    },
    provide: {
      info: {
        title: '500',
        desc: '抱歉, 服务器出错误了!',
        text: '返回首页',
        link: '/'
      }
    },
    props: {},
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
@include b(page-404) {
  @include flex($dir: row, $justify: center, $align: center);
  width: inherit;
  height: inherit;
  overflow: hidden;
  background-color: #E8E8E8;

  @include e(img) {
    width: 300px;
    height: 400px;
    background-image: url("https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
