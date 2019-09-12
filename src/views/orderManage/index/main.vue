<template>
  <section class='my-page'>
    <my-search></my-search>
    <my-table-main :data='[{}, {}]' header footer>
      <template slot="header" slot-scope="props">
        <my-table-head :scope="props.scope">
          <my-table-head-form 
           :list='props.scope.headForm'
           v-if="Array.isArray(props.scope.headForm)">
          </my-table-head-form>
        </my-table-head>
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
 import MyTableHeadForm from '@c/table-schema/table-head-form'
 import MyPagination from '@c/schema/pagination'
 import MySearch from '@c/schema/search'

 export default{
  name: 'OrderIndexPage',
  components: {
    MyTableMain,
    MyPagination,
    MyTableHead,
    MyTableHeadForm,
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