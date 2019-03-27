<template>
  <section class="my-page-limit">
    <section
      class="my-limit-list"
      v-for="(item, index) in limitList"
      :key="'1' + index" >
      <p class="my-limit-list__title">{{item.label}}</p>

      <section
        class="my-limit-child"
        v-for="(sub, sid) in item.children"
        :key="'2' + sid">
        <el-checkbox>
          <span class="my-limit-child__title">{{sub.label}}</span>
        </el-checkbox>
        <div v-if="!sub.children" class="" style="display: inline-block;">
          <ul class="my-limit-child__list">
            <li
              v-for="(ll, ld) in limits"
              :key="ld"
              class="my-limit-child__item">
              <el-checkbox>{{ll}}</el-checkbox>
            </li>
          </ul>
        </div>
        <section
          class="my-limit-child"
          v-for="(cc, cd) in sub.children"
          :key="cd">
          <el-checkbox>
            <span class="my-limit-child__title">{{cc.label}}</span>
          </el-checkbox>
          <div class="" style="display: inline-block;">
            <ul class="my-limit-child__list my-limit-child__list--left">
              <li
                v-for="(ll, ld) in limits"
                :key="ld"
                class="my-limit-child__item">
                <el-checkbox>{{ll}}</el-checkbox>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </section>
    <section class="my-btn-area">
      <el-button type="primary">保存</el-button>
      <el-button type="danger">返回</el-button>
    </section>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import limitList from '@/utils/limit'
  const limits = ['查看', '新增', '修改', '删除']
  export default {
    components: {},
    props: {},
    model: {},
    data (){
      return {
        limitList,
        limits,
      }
    },
    computed: {},
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(page-limit) {
  @include b(limit-list) {
    @include e(title) {
      @include flex($dir: row, $align: center);
      height: 40px;
      padding-left: 10px;
      background-color: $b-base;
      font-size: 15px;
      color: $t-666;
    }
  }
  @include b(limit-child) {
    padding-left: 15px;
    margin-bottom: 10px;
    font-size: 15px;
    @include e(title) {
      display: inline-block;
      width: 140px;
    }
    @include e(list) {
      @include flex($dir: row, $align: center);
      margin-left: 40px;

      @include m(left){
        margin-left: 25px;
      }
    }
    @include e(item) {
      margin-right: 50px;
    }
  }
  @include b(btn-area) {
    @include flex($dir: row, $justify: center, $align: center);
    margin-top: 20px;
    margin-left: -10%;
  }
}
</style>
