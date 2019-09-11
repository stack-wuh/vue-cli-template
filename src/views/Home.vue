<template>
  <div class="home">
    <MyHeader />
    <section class="body-wrapper">
      <leftmenu></leftmenu>
      <section class="router-wrapper">
        <transition-group name="fade">
          <my-crumbs key="lb-1" v-if="canShowCrubms"></my-crumbs>
          <router-view key="lb-2"></router-view>
        </transition-group>
      </section>
    </section>

    <my-dialog></my-dialog>
  </div>
</template>

<script>
import MyHeader from '@/components/nav/header'
import MyAside from '@/components/nav/aside'
import MyFooter from '@/components/nav/footer'
import Leftmenu from '@/components/nav/leftmenu'
import MyCrumbs from '@/components/nav/crumbs'
import MyDialog from '@/components/schema/dialog'
export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MyAside,
    MyFooter,
    Leftmenu,
    MyCrumbs,
    MyDialog
  },
  computed: {
    canShowCrubms(){
      let { $route: { meta: { crubms } } } = this
      return (Array.isArray(crubms) && crubms.length)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/style/mixin.scss';
  @import 'style/transition.scss';
  .home{
    height: inherit;
    display: flex;
    flex-flow: column nowrap;

    .body-wrapper{
      height: inherit;
      display: flex;
      justify-content: space-between;
      flex:1;
      .router-wrapper{
        @include scroll-bar;
        flex:1;
        // height: inherit;
        padding: 20px;
        border-left: 1px solid #eee;
        overflow-y: scroll;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave, .fade-leave-active {
    opacity: 0;
  }
</style>
