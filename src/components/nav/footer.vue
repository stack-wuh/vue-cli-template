<template>
  <section class="my-page-footer footer-wrapper">
    <p class="my-page-footer__copyright">
      <strong>Shadow</strong>
      ©2019-2020 Created by Shadow 请勿商用!
    </p>
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
  @include flex($justify: center, $align: center);
  width: inherit;
  height: 60px;
  padding-left: 20px;
  background-color: rgba(178,186,214,1);
  font-size: 14px;
  color: #666;
}
</style>
