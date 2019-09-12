<template>
  <section class='c-detail-cost'>
    <my-downcard-group>
      <my-downcard count='3' title='书币总消费(元)' unitText='元'></my-downcard>
    </my-downcard-group>
    <my-table-main 
      header
      footer
      :data="[{}, {}]" 
      fullpath='/user/detail/second'>
      <template slot='header' slot-scope='props'>
        <my-table-head :scope="props.scope"></my-table-head>
      </template>
      <template slot='footer'>
        <my-pagination v-bind='pageObj'></my-pagination>
      </template>
    </my-table-main>
  </section>
</template>

<script>
 import MyTableMain from '@c/table-schema/table'
 import MyTableHead from '@c/table-schema/table-head'
 import MyPagination from '@c/schema/pagination'
 import MyDowncard from '@c/downcard/main'
 import MyDowncardGroup from '@c/downcard-group'

 export default{
  name: 'UserDetailCostInfo',
  components: {
    MyTableMain,
    MyTableHead,
    MyPagination,
    MyDowncard,
    MyDowncardGroup
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
.c-detail-cost {
  min-height: 40vh;
}
</style>