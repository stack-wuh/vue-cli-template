<template>
  <section class="my-page-crumbs">
    <el-breadcrumb
      separator-class="el-icon-arrow-right">
      <transition-group name='list' mode='out-in'>
        <el-breadcrumb-item
         v-for="(item, index) in List"
         :key="'b' + index + item._index"
         :to="item.path">
         {{item.name}}
        </el-breadcrumb-item>
        <!-- <el-breadcrumb-item key="s1" :to="{path: '/index'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item key="s2" >系统管理</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.path == '/order/index'" key="s3" >系统管理1</el-breadcrumb-item> -->
      </transition-group>
    </el-breadcrumb>
  </section>
</template>

<script>
  export default {
    name: 'LayoutCrumbs',
    components: {},
    props: {},
    model: {},
    data (){
      return {}
    },
    computed: {
      List(){
        let { $route: { meta } } = this
        return meta.crubms
      }
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@include b(page-crumbs) {
  width: inherit;
  height: 30px;
  line-height: 30px;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-enter-active,
.list-leave-active {
  transition: all .5s;
}
</style>
