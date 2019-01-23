<template>
  <div class="home">
    <MyHeader />
    <section class="body-wrapper">
      <MyAside />
      <router-view />
      <MyAside />
    </section>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '@/components/nav/header'
import MyAside from '@/components/nav/aside'
import MyFooter from '@/components/nav/footer'
export default {
  name: 'home',
  components: {
    MyHeader,
    MyAside,
    MyFooter,
  }
}
</script>
<style lang="scss" scoped>
  .home{
    height: inherit;
    display: flex;
    flex-flow: column nowrap;

    .body-wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex:1;
    }
  }
</style>
