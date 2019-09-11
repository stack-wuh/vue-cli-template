<template>
  <section class='my-page'>
    <transition name="slide">
      <el-card>
        <router-view></router-view>
      </el-card>
    </transition>
  </section>
</template>

<script>
 export default{
  name: 'ParentView',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import 'style/transition.scss';
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s , transform .8s;
}
.slide-enter, .slide-leave-to, .slide-leave-active {
  transform: translateX(-20%);
  opacity: 0;
}
</style>