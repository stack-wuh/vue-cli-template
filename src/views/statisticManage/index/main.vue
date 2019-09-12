<template>
  <section class='my-page'>
    <transition-group name='fade' mode='out-in'>
      <MyDownCardGroup
        class="b-downcard"
        v-for="(p, i) in handleCardList()"
        :key="i + 'downcard'">
          <div class='u-lf flex-wrap flex-align__center' slot="prefix">
            <span class="m-icon" :class="p.icon"></span>
            <span>{{p.item}}</span>
          </div>
          <MyDownCard 
            v-for="(item, index) in p.list" 
            :key="index"
            :title="item.name"
            :count="item.count"
            :unitText="item.unit">
          </MyDownCard>
      </MyDownCardGroup>
    </transition-group>

      <my-table-main :data="[{}, {}]" header footer>
        <template slot='header' slot-scope="props">
          <my-table-header :scope="props.scope">
            <transition name="fade" mode='out-in'>
              <my-table-header-form
                :list='props.scope.headForm' 
                v-if="Array.isArray(props.scope.headForm)">
              </my-table-header-form>
            </transition>
          </my-table-header>
        </template>
        <template slot="footer">
          <my-pagination v-bind="pageObj"></my-pagination>
        </template>
      </my-table-main>
  </section>
</template>

<script>
 import MyDownCard from '@c/downcard'
 import MyDownCardGroup from '@c/downcard-group'
 import * as DownCardStore from './index.js'
 import MyTableMain from '@c/table-schema/table'
 import MyTableHeader from '@c/table-schema/table-head'
 import MyPagination from '@c/schema/pagination'
 import MyTableHeaderForm from '@c/table-schema/table-head-form'

 export default{
  name: 'StatisticIndexPage',
  components: {
    MyDownCard,
    MyDownCardGroup,
    MyTableMain,
    MyTableHeader,
    MyPagination,
    MyTableHeaderForm
  },
  props: {},
  watch: {
    '$route': function () {
      this.handleCardList()
    }
  },
  computed: {},
  data(){
    return {
      pageObj: {
        total: 0,
        currPage: 1
      }
    }
  },
  methods: {
    handleCardList(){
      let { $route: { path } } = this
      switch(path) {
        case '/st/index': return DownCardStore.default.dData
        case '/st/user': return DownCardStore.default.dUser
        case '/st/book': return DownCardStore.default.dBook
        default: DownCardStore.default.dData
      }
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.my-page {
  .b-downcard {
    & + .b-downcard {
      margin-top:15px;
    }
  }
  .u-lf {
    margin: 0 10px;
    font-size: 18px;
    
    .m-icon {
      width: 40px;
      height: 40px;
      font-size: 40px;
      border-radius: 50%;
    }
  }
}
</style>