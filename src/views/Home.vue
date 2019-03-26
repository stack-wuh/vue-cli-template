<template>
  <div class="home">
    <MyHeader />
    <section class="body-wrapper">
      <leftmenu></leftmenu>
      <section class="router-wrapper">
        <my-crumbs></my-crumbs>
        <transition name="fade">
          <router-view />
        </transition>
      </section>
      <MyAside />
    </section>
    <MyFooter />

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
  name: 'home',
  components: {
    MyHeader,
    MyAside,
    MyFooter,
    Leftmenu,
    MyCrumbs,
    MyDialog
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
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
        height: inherit;
        padding: 20px;
        border-left: 1px solid #eee;
        overflow-y: scroll;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
