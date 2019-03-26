<template>
  <section class="wrapper signin-wrapper">
    <section class="form-area">
      <el-form :model="userInfo" :rules="rules" ref="myForm" >
          <el-form-item>
              <p class="form__title">登录</p>
          </el-form-item>
          <el-form-item prop="username" >
            <el-input clearable v-model="userInfo.username" class="my-form__item" placeholder="请编辑账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input clearable type="password" v-model="userInfo.password" class="my-form__item" placeholder="请编辑密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submit" type="primary" class="my-form__item my-form__item--btn-area">
              <span class="f16">登录</span>
            </el-button>
          </el-form-item>
      </el-form>
    </section>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
const rules = {
  username: [{required: true, message: 'please input your account', trigger: ['blur', 'change']}],
  password: [{required: true, message: 'please input your password', trigger: ['blur', 'change']}]
}
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {
      userInfo: {
        username: '',
        password: '',
      },
      rules,
    }
  },
  methods: {
    ...mapActions({
      signin: 'SigninByUsername'
    }),
    submit(){
      this.$refs.myForm.validate(valid => {
        if(valid){
        this.$router.push({path: '/user', query: {name: '用户管理'}})
          // this.signin(this.userInfo)
        }else {
          _g._toast({msg: '请填写必填项后提交', type: 'error'})
        }
      })
    }
  },
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
  .signin-wrapper{
    @include flex($justify: center, $align: center);
    width:100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url(http://ddi-dev.com/uploads/media/news/0001/01/f2da1c598e2ff9bc29b229773a189d33d38e0252.jpeg);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    .form-area{
      width: 500px;
      height: 350px;
      border-radius: 4px;
      background: linear-gradient(to bottom, #5F7997, #737B93);
      .form__title{
        margin-top: 40px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        line-height: 20px;
        white-space: pre-line;
      }
      .my-form__item{
        width: 70%;
        margin: 0 15%;

        .el-input--small, .el-input__inner{
          height: 40px;
        }

        &--btn-area{
          margin-top: 20px;
        }
      }
    }
  }
</style>
