<template>
  <div class="menuDialog">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="所属系统">
            <el-select v-model="form.value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="跳转路由">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="文件位置">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否为菜单">
            <el-switch v-model="form.name" active-color="#13ce66" active-text="是" inactive-text="否"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否需要登录">
            <el-switch v-model="form.name" active-color="#13ce66" active-text="是" inactive-text="否"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否展示">
            <el-switch v-model="form.name" active-color="#13ce66" active-text="是" inactive-text="否"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="打开方式">
            <el-switch v-model="form.name" active-color="#13ce66" active-text="是" inactive-text="否"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="父级">
            <el-select v-model="form.value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="排序">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "menuDialog",
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      options: [
        {
          label: 'cms系统',
          value: 'cms'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
/deep/ .el-form-item__content{
  text-align: left;
}
</style>
