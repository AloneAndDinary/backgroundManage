<template>
    <div id="sliderBar">
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <template v-for="(router, index) in routerList">
                <el-submenu v-if="router.children" :index="String(index)" :key="index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{ router.otherName }}</span>
                    </template>
                    <ListTemplate :childrenList="router.children"></ListTemplate>
                </el-submenu>
                <el-menu-item v-else :index="String(index)" :key="index" @click="menuItemClick(router)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ router.otherName }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import ListTemplate from './listTemplate';
import { mapGetters } from 'vuex';
export default {
  name: "sliderBar",
  data() {
    return {
      isCollapse: false,
      routerList: [
        {
          path: '/welcome',
          name: 'welcome',
          otherName: '首页',
          meta: {canLogin: false}
        },
        {
          path: '/powerManage',
          name: 'powerManage',
          otherName: '权限管理',
          meta: {canLogin: false},
          redirect: '/powerManage/menuManage',
          children: [
            {
              path: '/powerManage/menuManage',
              name: 'menuManage',
              otherName: '菜单管理',
              // component: () => import('../views/welcome.vue'),
              meta: {canLogin: false}
            },
            {
              path: '/powerManage/roleManage',
              name: 'roleManage',
              otherName: '角色管理',
              // component: () => import('../views/powerManage/roleManage.vue'),
              meta: {canLogin: false}
            },
            {
              path: '/powerManage/powerManage',
              name: 'powerManage',
              otherName: '权限管理',
              // component: () => import('../views/powerManage/powerManage.vue'),
              meta: {canLogin: false}
            }
          ]
        },
        {
          path: '/test11',
          name: 'test11',
          otherName: '测试页面11',
          meta: {canLogin: false},
          redirect: '/test11/test1',
          children: [
            {
              path: '/test11/test1',
              name: 'welcomeIndex',
              otherName: '测试页面11-1',
              // component: () => import('../views/welcome.vue'),
              meta: {canLogin: false}
            }
          ]
        },
        {
          path: '/test',
          name: 'test',
          otherName: '测试页面1',
          meta: {canLogin: false},
          redirect: '/test/test1',
          children: [
            {
              path: '/test/test2',
              name: 'welcomeIndex',
              otherName: '测试页面1-2',
              // component: () => import('../views/welcome.vue'),
              meta: {canLogin: false}
            },
            {
              path: '/test/test3',
              name: 'welcomeIndex',
              otherName: '测试页面1-3',
              // component: () => import('../views/welcome.vue'),
              meta: {canLogin: false},
              redirect: '/test/test31',
              children: [
                {
                  path: '/test/test31',
                  otherName: '测试页面3-1-1',
                  name: 'welcomeIndex',
                  // component: () => import('../views/welcome.vue'),
                  meta: {canLogin: false}
                },
              ]
            },
            {
              path: '/test/test4',
              name: 'welcomeIndex',
              otherName: '测试页面1-4',
              // component: () => import('../views/welcome.vue'),
              meta: {canLogin: false}
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      openMenuList: 'openMenuList',
      activeIndex: 'activeIndex'
    })
  },
  components: {
    ListTemplate
  },
  methods: {
    menuItemClick(data) {
      this.$store.commit('SET_MENULIST', data);
      this.$router.push(data.path);
    }
  }
};
</script>

<style scoped>

</style>
