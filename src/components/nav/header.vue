<template>
  <section class="wrapper header-wrapper">
    <header class="my-header">
      <h3>鸡冻头条后台管理系统</h3>
      <section class="my-header__icon">
        <el-dropdown>
          <span class="my-icon my-icon-account">用户名</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="$_push({path: '/user/center'})" class="my-icon-left my-icon-account">个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="$_push({path: '/user/setting'})" class="my-icon-left my-icon-set">个人设置</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span @click="$_push({path: '/signin'})" class="my-icon-left my-icon-dianyuan">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown trigger="click">
            <span class="my-icon my-icon-remind">
              <el-badge value="10" class="my-badge-item">
              </el-badge>
            </span>
          <el-dropdown-menu slot="dropdown">
            <div class="" style="width: 300px;">
              <el-tabs style="width: 280px; margin-left: 10px;">
                <el-tab-pane label="消息" name="first">
                  消息
                </el-tab-pane>
                <el-tab-pane label="通知" name="second">
                  通知
                </el-tab-pane>
                <el-tab-pane label="待办" name="third">
                  待办
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </section>
    </header>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {
  _router
} from '@/utils/mixin'
export default {
  props: {},
  name: '',
  components: {},
  computed: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins: [_router]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
.header-wrapper{
  @include flex($dir: row, $align: center);
  width: inherit;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid $b-base;
  @include b(header){
    @include flex($dir: row, $align: center, $justify: space-between)
    flex: 1;
    @include e(icon) {
      @include b(icon) {
        margin: 0 10px;
        font-size: 16px;
        &:before {
          padding-right: 5px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
.my-icon-left {
  font-size: 14px;
  &:before {
    padding-right: 5px;
  }
}
.my-badge-item {
  position: absolute;
  left: 15px;
  top: -10px;
}
</style>
