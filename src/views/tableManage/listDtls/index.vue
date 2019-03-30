<template>
  <section class="my-list-dtl">
    <my-order-list-card></my-order-list-card>
    <my-order-list-card></my-order-list-card>

    <my-table params="退货商品" :list="[{}, {}, {}]" ></my-table>
    <my-table params="退货进度" :list="[{}, {}, {}]" ></my-table>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import MyOrderListCard from '@/views/tableManage/dtlChild/orderList'
  import MyTable from '@/components/schema/table'

  export default {
    name: 'MyListDtlDefault',
    components: {
      MyOrderListCard,
      MyTable
    },
    props: {},
    model: {},
    computed: {},
    data (){
      return {}
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
</style>
