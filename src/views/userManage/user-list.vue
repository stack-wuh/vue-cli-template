<template>
  <section class="page">
    <my-search></my-search>
    <my-table params="用户列表" :list="userList"></my-table>
  </section>
</template>

<script>
import MyTable from '@/components/schema/table';
import MySearch from '@/components/schema/search'
  export default {
    components: {
      MyTable,
      MySearch
    },
    props: {},
    model: {},
    data (){
      return {
        userList: [
          {
            name: 'aaa',
          },
          {
            name: 'bbb',
          },
          {
            name: 'ccc'
          }
        ]
      }
    },
    computed: {},
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss"></style>
