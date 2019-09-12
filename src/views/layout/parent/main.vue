<template>
  <section class='my-page'>
      <el-card>
        <transition name="slide" mode='out-in'>
          <router-view></router-view>
        </transition>
      </el-card>
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