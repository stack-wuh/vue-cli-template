<template>
  <section class='my-page'>
    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane 
        v-for="(p, pd) in List"
        :key="pd + 'p.label'"
        :label="p.label"
        :name='p.name'>
        <component :is="currTab"></component>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
 import UserDetailRecord from './record'
 import UserDetailCost from './cost-info'
 import UserDetailOrder from './order-info'
 import UserDetailVisit from './visit-info'
 const List = [
   {
     label: '用户信息',
     name: 'first'
   },
   {
     label: '消费记录',
     name: 'second'
   },
   {
     label: '订单记录',
     name: 'third'
   },
   {
     label: '阅读记录',
     name: 'four'
   }
 ]

 export default{
  name: 'UserDetailPage',
  components: {
    UserDetailRecord,
    UserDetailCost,
    UserDetailOrder,
    UserDetailVisit
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      List,
      activeTab: 'first',
      currTab: UserDetailRecord,
      maps: {
        'first': UserDetailRecord,
        'second': UserDetailCost,
        'third': UserDetailOrder,
        'four': UserDetailVisit
      }
    }
  },
  methods: {
    handleClick(t){
      this.activeTab = t.name
      this.currTab = this.maps[t.name]
      this.$router.push({ path: '/user/detail', query: { c: t.name } })
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>

</style>