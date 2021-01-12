<template>
  <div>
    <BasePage :base-config="baseConfig" />
  </div>
</template>

<script>
import BasePage from '../../components/tableComponents/basePage';
import { request } from '@/network/require';
export default {
  name: 'Test1',
  components: {
    BasePage
  },
  data() {
    return {
      baseConfig: {
        searchConfig: {},
        tableConfig: {
          tableData: [], //  表格数据
          tableColumn: [
            {
              propName: 'name',
              label: '姓名',
              showActionBar: false
            },
            {
              propName: 'gender',
              label: '性别',
              showActionBar: false
            },
            {
              propName: 'role',
              label: '角色',
              showActionBar: false
            }
          ], // 表格表头配置信息
          showColumnBtn: true, // 是否展示表格操作栏
          columnBtnList: {
            label: '操作',
            actionBarList: [
              {
                name: '查看',
                type: 'view'
              },
              {
                name: '编辑',
                type: 'edit'
              },
              {
                name: '删除',
                type: 'delete'
              }
            ]
          }, // 操作栏按钮列表
          showCheckbox: false // 是否展示复选框
        },
        paginationConfig: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示多少条
          total: 0 // 总数
        }
      }
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    // 获取表格数据
    getTableData() {
      const sendData = {
        method: 'get',
        url: '/powerManage/getUserList'
      };
      request(sendData).then(res => {
        console.log(res);
        this.baseConfig.tableConfig.tableData = res;
      });
    }
  }
};
</script>

<style scoped>

</style>
