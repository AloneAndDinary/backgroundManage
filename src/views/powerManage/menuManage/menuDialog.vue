<template>
  <div class="menuDialog">
    <el-form ref="form" :model="form" label-width="110px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="名称：">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="所属系统：">
            <el-select v-model="form.ownSystem" placeholder="请选择" style="width: 100%;">
              <el-option
                v-for="item in systemList"
                :key="item.value"
                :label="item.label"

                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="跳转路由：">
            <el-input v-model="form.routerPath" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="文件位置：">
            <el-input v-model="form.filePlace" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否为菜单：">
            <el-switch v-model="form.isMenu" active-color="#13ce66" active-text="是" inactive-text="否" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否需要登录：">
            <el-switch v-model="form.canLogin" active-color="#13ce66" active-text="是" inactive-text="否" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否展示：">
            <el-switch v-model="form.isShow" active-color="#13ce66" active-text="是" inactive-text="否" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="打开方式：">
            <el-switch v-model="form.openType" active-color="#13ce66" active-text="新页面" inactive-text="本页面" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="父级：">
            <el-select v-model="form.parentId" placeholder="请选择">
              <el-option
                v-for="item in systemList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="排序：">
            <el-input v-model="form.sort" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'MenuDialog',
  data() {
    return {
      form: {
        name: '',
        ownSystem: '',
        routerPath: '',
        filePlace: '',
        isMenu: '是',
        canLogin: '否',
        isShow: '是',
        openType: '本页面',
        parentId: '',
        sort: '',
        value: ''
      },
      systemList: [
        {
          label: 'cms系统',
          value: 'cms'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 获取所有系统名称
    getSystemList() {

    }
  }
};
</script>

<style scoped lang="less">
/deep/ .el-form-item__content{
  text-align: left;
}
</style>
