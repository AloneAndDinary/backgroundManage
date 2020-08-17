<template>
    <div id="mainContent">
        <div v-if="setting.showBreadcrumb && openMenuList.length>0" class="breadcrumb">
            <span v-for="(menu,index) in openMenuList" :class="{isActive:activeIndex === index}" :key="index" @click="menuLinkTo(menu, index)">
                {{ menu.otherName }}
                <i class="close el-icon-close" @click.stop="closeMenuItem(menu, index)"></i>
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
      // activeIndex: 0
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
    }
</style>
