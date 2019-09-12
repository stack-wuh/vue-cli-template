<template>
  <section class='c-detail-visit'>
    <my-table-main 
      header
      :data='[{}, {}]' 
      fullpath='/user/detail/four'>
        <template slot="header" slot-scope="props">
          <my-table-head :scope='props.scope'></my-table-head>
        </template>
    </my-table-main>
  </section>
</template>

<script>
 import MyTableMain from '@c/table-schema/table'
 import MyTableHead from '@c/table-schema/table-head'

 export default{
  name: 'UserDetailVisit',
  components: {
    MyTableMain,
    MyTableHead
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>

</style>