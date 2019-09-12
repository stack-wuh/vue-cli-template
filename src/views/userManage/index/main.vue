<template>
  <section class='my-page'>
    <my-search></my-search>
    <my-table-main :data='[{}, {}]' footer header>
      <template slot="header" slot-scope="props">
        <my-table-head :scope='props.scope'></my-table-head>
      </template>
      <template slot="footer">
        <my-pagination v-bind="pageObj"></my-pagination>
      </template>
    </my-table-main>
  </section>
</template>

<script>
 import MyTableMain from '@c/table-schema/table'
 import MyTableHead from '@c/table-schema/table-head'
 import MyPagination from '@c/schema/pagination'
 import MySearch from '@c/schema/search'

 export default{
  name: 'userManageIndexPage',
  components: {
    MyTableMain,
    MyTableHead,
    MyPagination,
    MySearch
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      pageObj: {
        total: 0,
        currPage: 1
      }
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>

</style>