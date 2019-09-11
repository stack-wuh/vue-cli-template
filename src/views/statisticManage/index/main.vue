<template>
  <section class='my-page'>
      <MyDownCardGroup
        class="b-downcard"
        v-for="(p, i) in DowncardList"
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
  </section>
</template>

<script>
 import MyDownCard from '@c/downcard'
 import MyDownCardGroup from '@c/downcard-group'
 import { DowncardList } from './index.js'

 export default{
  name: 'StatisticIndexPage',
  components: {
    MyDownCard,
    MyDownCardGroup
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      DowncardList
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.my-page {
  .b-downcard {
    &:last-of-type {
      margin-top: 15px;
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