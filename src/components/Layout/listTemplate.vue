<template>
  <div class="listContent">
    <template v-for="(detail, i) in childrenList">
      <el-submenu v-if="detail.children" :index="detail.otherName" :key="i">
        <template slot="title">{{ detail.otherName }}</template>
        <listTemplate :children-list="detail.children"></listTemplate>
      </el-submenu>
      <el-menu-item v-else :index="detail.otherName" :key="i" @click="menuItemClick(detail)">{{ detail.otherName }}</el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "listTemplate",
  props: {
    childrenList: {
      type: Array,
      default: () => {
        return [];
      }
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
