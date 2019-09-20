<template>
  <section class='c-table-header'>
    <div class="b-header__inner flex-wrap flex-item__center">
      <span class="b-header__inner--label el-icon-s-operation">{{scope.name || tableName}}</span>
      <div class="b-header__inner--right flex-wrap flex-wrap__row-reverse flex-empty">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
 export default{
  name: 'MyTableHeader',
  components: {},
  props: {
    scope: Object,
    tableName: {
      type: String,
      default: 'TableName'
    }
  },
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
.c-table-header {
  width: 100%;
  height: 50px;
  max-height: 60px;

  .b-header__inner {
    width: inherit;
    height: inherit;
    &--label {
      position: relative;
      font-size: 14px;
      &::after {
        content: '列表';
      }
    }
    &--right {
      text-align: right;
    }
  }
}
</style>