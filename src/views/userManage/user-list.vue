<template>
  <section class="page">
    <my-search></my-search>
    <my-table params="用户列表" :list="userList">
      <div slot="right" class="list-button-group">
        <el-button>导出</el-button>
        <el-button>导入</el-button>
        <el-button>新增</el-button>
      </div>
    </my-table>
    <my-pagination :total="11" :curr-page="1" background @getCurrentPage="currPageChange" ></my-pagination>
  </section>
</template>

<script>
import MyTable from '@/components/schema/table';
import MySearch from '@/components/schema/search'
import MyPagination from '@/components/schema/pagination'
  export default {
    components: {
      MyTable,
      MySearch,
      MyPagination
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
    methods: {
      currPageChange(e) {
        console.log(e)
      }
    },
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss"></style>
