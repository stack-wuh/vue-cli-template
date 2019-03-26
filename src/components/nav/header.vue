<template>
  <section class="wrapper header-wrapper">
      <div class="">
        header
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
.header-wrapper{
  width: inherit;
  height: 60px;
  padding-left: 20px;
  background-color: rgba(203,225,230,1);
  @include flex($justify: center);
}
</style>
