<template>
  <section class='c-table-head-form'>
    <ul class="e-form-list flex-wrap">
      <li 
        v-for="(s, sid) in list"
        :key="sid + 'el-form-item'"
        class="e-form-item flex-wrap flex-item__center">
        <!-- <span class="m-form__label">label</span> -->
        <div v-if="s.type == 'default' || !s.type" class="m-form__content">
          <el-input v-model="form[s.field]" placeholder="placholer"></el-input>
        </div>
        <div v-else-if="s.type == 'daterange'" class="m-form__content">
          <el-date-picker
            :style="s.style" 
            :type="s.type"
            v-model="form[s.field]">
          </el-date-picker>
        </div>
        <div v-else-if="s.type == 'button-group'" class="m-form__content">
          <el-button 
            v-for="(b, bid) in s.btns"
            :key="'btn' + bid"
            v-bind="b.props">
            {{b.text}}
          </el-button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
 export default{
  name: 'MyTableHeadForm',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {},
  computed: {},
  data(){
    return {
      form: {}
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-table-head-form {
  .e-form-list {
    .e-form-item {
      &:not(:last-of-type) {
        margin-right: 10px;
      }
      .m-form__label {
        margin-right: 4px;
        &::after {
          content: ': ';
        }
      }
    }
  }
}
</style>