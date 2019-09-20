<template>
  <section class='c-table' :style="styles">
   <transition name='slide-left' mode="out-in">
      <header v-if="header" class="c-table__header">
        <slot name="header" :scope="cols"></slot>
      </header>
    </transition>
    <el-table 
     :data="data" 
     :border="border"
     :stripe="stripe"
     :width="width"
     :height="height">
     <el-table-column :align="align" :type='cols.type' :label="cols.label" fixed='left' width='80'></el-table-column>
      <template v-for="(p, pin) in cols.column">
        <el-table-column
          v-if="!p.type || p.type === 'default'" 
          :align="align"
          :label="p.label" 
          :key="'el-col' + pin" 
          :prop="p.field">
        </el-table-column>
        <el-table-column
         :key="'el-col' + pin" 
         v-else-if="p.type == 'image'">
          <template slot-scope="scope">
            <img :src="scope.row[p.field]" alt="covar">
          </template>
        </el-table-column>
        <el-table-column
         fixed="right"
         :align='align'
         :label="p.label"
         v-else-if="p.type == 'button'"
         :key="'el-col' + pin">
         <span 
          v-for="(bb, bid) in p.btns"
          :key="bid + 'btnid'">
          <el-button @click="() => { bb.event({ _$route: $route, _$this: bb }) }" v-bind="bb.props">{{bb.text}}</el-button>
        </span>
        </el-table-column>
      </template>
    </el-table>
    <transition name='slide-left' mode='out-in'>
      <footer v-if="footer" class="c-table__footer">
        <slot name="footer"></slot>
      </footer>
    </transition>
  </section>
</template>

<script>
 import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
 export default{
  name: 'MyTableMain',
  components: {},
  props: {
    width: String,
    height: String,
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      required: true
    },
    align: {
      type: String,
      default: 'center'
    },
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
    fullpath: String
  },
  watch: {
    '$route'() {
      this.GET_TABLE_COLS({ path: this.fullpath || this.path })
    }
  },
  computed: {
    ...mapState({
      cols: state => state.Table.cols
    }),
    path(){
      return this.$route.path
    },
    styles() {
      var style = {}
      style.width = this.width
      style.height = this.height
      return style
    }
  },
  data(){
    return {}
  },
  methods: {
    ...mapMutations(['GET_TABLE_COLS'])
  },
  created(){
    this.GET_TABLE_COLS({ path: this.fullpath || this.path })
},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-table {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  overflow: hidden;

  &__header {
    padding: 4px 10px;
    background-color: #e9e9e9;
    box-sizing: border-box;
  }
  &__footer {
    position: relative;
    padding: 4px 10px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
}
</style>