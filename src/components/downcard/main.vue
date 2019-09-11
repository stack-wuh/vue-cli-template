<template>
  <div class="c-downcard">
    <div class="c-downcard__inner flex-wrap flex-wrap__column flex-main__center">
      <p class="c-downcard__inner--title">{{title}}</p>
      <p>
        <strong>{{count}}</strong>&nbsp;
        <span>{{unitText}}</span>
      </p>
    </div>
  </div>
</template>

<script>
 export default{
  name: 'MyDownCard',
  components: {},
  props: {
    title: {
      required: true,
      type: String,
      default: () => 'Title'
    },
    count: {
      required: true,
      type: [String, Number],
      default: 0,
      validator: (val) => {
        return ![undefined, null].indexOf(val) !== -1
      }
    },
    unitText: {
      required: true,
      type: String
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
.c-downcard {
  flex: 1;
  width: inherit;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

  &__inner {
    width: inherit;
    height: inherit;
    padding-left: 15px;
    border-left: 1px solid #e6e6e6;

    &--title {
      font-size: 15px;
      color: #999;
    }
    &--title + p {
      font-size: 14px;
      & > strong {
        line-height: 2em;
      }
    }
  }
}
</style>