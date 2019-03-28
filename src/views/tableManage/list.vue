<template>
  <section class="my-page-table-list">
    <my-search></my-search>
    <my-table :list="list" params="用户列表"></my-table>
    <my-pagination :total="total" :currPage="currPageNum"></my-pagination>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyTable from '@/components/schema/table'
  import MySearch from '@/components/schema/search'
  import MyPagination from '@/components/schema/pagination'

  export default {
    name: 'MyTableList',
    components: {
      MyTable,
      MySearch,
      MyPagination
    },
    props: {},
    model: {},
    data (){
      return {}
    },
    computed: {
      ...mapState({
        list: state => state.tableData,
        total: state => state.total,
        currPageNum: state => state.currPageNum
      })
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@include b(table-list) {

}
</style>
