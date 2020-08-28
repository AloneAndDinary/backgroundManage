<template>
    <div id="mainContent">
        <div v-if="setting.showBreadcrumb && openMenuList.length>0" class="breadcrumb">
            <span v-for="(menu,index) in openMenuList" :class="{isActive:activeIndex === index}" :key="index" @click="menuLinkTo(menu, index)">
                {{ menu.otherName }}
                <i class="close el-icon-close" @click.stop="closeMenuItem(menu, index)"></i>
            </span>
            <span class="closeMenu">
                 <el-select v-model="closeType" placeholder="请选择">
                    <el-option
                      v-for="item in closeTypeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
            </span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "mainContent",
  computed: {
    ...mapGetters({
      openMenuList: 'openMenuList',
      activeIndex: 'activeIndex'
    })
  },
  props: {
    setting: {
      type:Object,
      default: ()=> {
        return {};
      }
    }
  },
  data() {
    return {
      closeType : 'closeAll',
      closeTypeList: [
        {
          label: '关闭所有',
          value: 'closeAll'
        },
        {
          label: '关闭其他',
          value: 'closeOther'
        },
        {
          label: '关闭当前',
          value: 'closeCurrent'
        }
      ]
    };
  },
  methods: {
    // 点击面包屑跳转到对应的路由
    menuLinkTo(data, index) {
      this.$router.push(data.path);
      this.$store.commit('SET_ACTIVEINDEX', index);
    },
    // 关闭面包导航一项
    closeMenuItem(data, index) {
      let activeIndex = 0;
      this.$store.commit('DELETE_MENULIST_ITEM', {path:data.path,index});
      if(index !==0 && index !== this.openMenuList.length) {
        activeIndex = index;
      }
      if(index === 0) {
        activeIndex = 0;
      }
      if(index === this.openMenuList.length) {
        activeIndex = index - 1;
      }
      if(this.openMenuList.length === 0) {
        activeIndex = 0;
      }
      this.$store.commit('SET_ACTIVEINDEX', activeIndex);
    },
  }
};
</script>

<style scoped lang="less">
    @import '../../css/framework';
    .breadcrumb{
        position: relative;
        width: @breadcrumbWidth;
        height: @breadcrumbHeight;
        line-height: @breadcrumbHeight;
        background: @breadcrumbBackgroundColor;
        text-align: left;
        padding: 0px 10px;
        font-size: @breadcrumbFontSize;
        span{
            border: @breadItemBorder;
            margin: 0px 5px;
            padding: @breadItemPadding;
            cursor: pointer;
            &:hover{
                background: @breadItemHoverBgColor;
                color: @breadItemHoverColor;
            }
        }
        span.isActive{
            background: @breadItemHoverBgColor;
            color: @breadItemHoverColor;
        }
        .closeMenu{
            position: absolute;
            border: none;
            line-height: 35px;
            right: 0;
            padding: 0;
            &:hover{
                background: none;
                color: #000;
            }
            /deep/ .el-input__inner{
                border: none;
                width: 110px;
            }
        }
    }
</style>
