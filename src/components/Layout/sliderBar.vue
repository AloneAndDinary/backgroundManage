<template>
  <div id="sliderBar">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <template v-for="(router, index) in routerList">
        <el-submenu v-if="router.children" :key="index" :index="String(index)">
          <template slot="title">
            <i class="el-icon-location" />
            <span>{{ router.otherName }}</span>
          </template>
          <ListTemplate :children-list="router.children" />
        </el-submenu>
        <el-menu-item v-else :key="index" :index="String(index)" @click="menuItemClick(router)">
          <i class="el-icon-menu" />
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
  name: 'SliderBar',
  components: {
    ListTemplate
  },
  data() {
    return {
      isCollapse: false,
      routerList: []
    };
  },
  computed: {
    ...mapGetters({
      openMenuList: 'openMenuList',
      activeIndex: 'activeIndex',
      asyncRouter: 'asyncRouter'
    })
  },
  mounted() {
    if (typeof this.asyncRouter === 'string') {
      this.routerList = JSON.parse(this.asyncRouter);
    } else {
      this.routerList = this.asyncRouter;
    }
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
