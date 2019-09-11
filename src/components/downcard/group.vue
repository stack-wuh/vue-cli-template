<template>
  <section class='c-downcard-group' :style="styles">
    <slot name="prefix"></slot>
    <slot></slot>
  </section>
</template>

<script>
 export default{
  name: 'DownCardGroup',
  components: {},
  props: {
    height: String
  },
  watch: {},
  computed: {
    styles(){
      let style = {}
      style.height = this.height
      return style
    }
  },
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
.c-downcard-group {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>