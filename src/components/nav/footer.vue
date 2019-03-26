<template>
  <section class="wrapper footer-wrapper">
    <div class="">
      footer
    </div>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  data(){
    return {}
  },
  methods: {},
  created(){}
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
.footer-wrapper{
  width: inherit;
  height: 60px;
  padding-left: 20px;
  background-color: rgba(178,186,214,1);
  @include flex($justify: center);
}
</style>
