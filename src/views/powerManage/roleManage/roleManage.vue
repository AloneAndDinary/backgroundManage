<template>
  <div class="container">
    <ControlBtn :show-search-btn="showSearchBtn" :control-btn="controlBtn" :search-item-list="searchItemList" @search="search" />
    <TableComponent
      :table-data="tableData"
      :column-data="columnData"
      :show-btn="showBtn"
      :btn-list="btnList"
      @btnClickEvent="btnClickEvent"
    />
    <Pagination
      :total="total"
      :page-size.sync="pageSize"
      :current-page.sync="currentPage"
      :layout="layout"
      :show-background="showBackground"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <RoleDialog />
    </el-dialog>
  </div>
</template>

<script>
import TableComponent from '@/components/tableComponents/tableComponent.vue';
import Pagination from '@/components/tableComponents/pagination.vue';
import ControlBtn from '@/components/tableComponents/controlBtn.vue';
import RoleDialog from './roleDialog';
import { request } from '@/network/require';
import { funList } from '@/util/publicFun';
export default {
  name: 'RoleManage',
  components: {
    TableComponent,
    Pagination,
    ControlBtn,
    RoleDialog
  },
  data() {
    return {
      total: 3,
      pageSize: 10,
      currentPage: 1,
      layout: 'total,sizes,prev,pager,next,jumper',
      showBackground: true,
      baseConfig: {
        searchConfig: {},
        tableConfig: {
          tableData: [], //  表格数据
          tableColumn: [], // 表格表头配置信息
          showColumnBtn: true, // 是否展示表格操作栏
          columnBtnList: [], // 操作栏按钮列表
          showCheckbox: false // 是否展示复选框
        },
        paginationConfig: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示多少条
          total: 0 // 总数
        }
      },
      tableData: [],
      columnData: [
        {
          propName: 'name',
          label: '姓名',
          showActionBar: false
        },
        {
          propName: 'createTime',
          label: '创建时间',
          showActionBar: false
        },
        {
          propName: 'createName',
          label: '创建人',
          showActionBar: false
        }
      ],
      showBtn: true,
      showSearchBtn: false,
      btnList: {
        label: '操作',
        actionBarList: [
          {
            name: '查看权限',
            type: 'view'
          },
          {
            name: '编辑权限',
            type: 'edit'
          },
          {
            name: '删除',
            type: 'delete'
          }
        ]
      },
      controlBtn: [
        {
          name: '新增',
          type: 'primary',
          size: 'normal',
          position: 'left'
        }
      ],
      searchItemList: [
        // {
        //   type: 'input',
        //   placeholder: '请输入姓名',
        //   title: '姓名',
        //   value: ''
        // },
        // {
        //   type: 'cascader',
        //   placeholder: '请输入部门',
        //   title: '级联',
        //   value: '',
        //   options: [
        //     {
        //       value: 'zhinan',
        //       label: '指南',
        //       children: [{
        //         value: 'shejiyuanze',
        //         label: '设计原则',
        //         children: [{
        //           value: 'yizhi',
        //           label: '一致'
        //         }, {
        //           value: 'fankui',
        //           label: '反馈'
        //         }, {
        //           value: 'xiaolv',
        //           label: '效率'
        //         }, {
        //           value: 'kekong',
        //           label: '可控'
        //         }]
        //       }, {
        //         value: 'daohang',
        //         label: '导航',
        //         children: [{
        //           value: 'cexiangdaohang',
        //           label: '侧向导航'
        //         }, {
        //           value: 'dingbudaohang',
        //           label: '顶部导航'
        //         }]
        //       }]
        //     },
        //     {
        //       value: 'zujian',
        //       label: '组件',
        //       children: [{
        //         value: 'basic',
        //         label: 'Basic',
        //         children: [{
        //           value: 'layout',
        //           label: 'Layout 布局'
        //         }, {
        //           value: 'color',
        //           label: 'Color 色彩'
        //         }, {
        //           value: 'typography',
        //           label: 'Typography 字体'
        //         }, {
        //           value: 'icon',
        //           label: 'Icon 图标'
        //         }, {
        //           value: 'button',
        //           label: 'Button 按钮'
        //         }]
        //       }, {
        //         value: 'form',
        //         label: 'Form',
        //         children: [{
        //           value: 'radio',
        //           label: 'Radio 单选框'
        //         }, {
        //           value: 'checkbox',
        //           label: 'Checkbox 多选框'
        //         }, {
        //           value: 'input',
        //           label: 'Input 输入框'
        //         }, {
        //           value: 'input-number',
        //           label: 'InputNumber 计数器'
        //         }, {
        //           value: 'select',
        //           label: 'Select 选择器'
        //         }, {
        //           value: 'cascader',
        //           label: 'Cascader 级联选择器'
        //         }, {
        //           value: 'switch',
        //           label: 'Switch 开关'
        //         }, {
        //           value: 'slider',
        //           label: 'Slider 滑块'
        //         }, {
        //           value: 'time-picker',
        //           label: 'TimePicker 时间选择器'
        //         }, {
        //           value: 'date-picker',
        //           label: 'DatePicker 日期选择器'
        //         }, {
        //           value: 'datetime-picker',
        //           label: 'DateTimePicker 日期时间选择器'
        //         }, {
        //           value: 'upload',
        //           label: 'Upload 上传'
        //         }, {
        //           value: 'rate',
        //           label: 'Rate 评分'
        //         }, {
        //           value: 'form',
        //           label: 'Form 表单'
        //         }]
        //       }, {
        //         value: 'data',
        //         label: 'Data',
        //         children: [{
        //           value: 'table',
        //           label: 'Table 表格'
        //         }, {
        //           value: 'tag',
        //           label: 'Tag 标签'
        //         }, {
        //           value: 'progress',
        //           label: 'Progress 进度条'
        //         }, {
        //           value: 'tree',
        //           label: 'Tree 树形控件'
        //         }, {
        //           value: 'pagination',
        //           label: 'Pagination 分页'
        //         }, {
        //           value: 'badge',
        //           label: 'Badge 标记'
        //         }]
        //       }, {
        //         value: 'notice',
        //         label: 'Notice',
        //         children: [{
        //           value: 'alert',
        //           label: 'Alert 警告'
        //         }, {
        //           value: 'loading',
        //           label: 'Loading 加载'
        //         }, {
        //           value: 'message',
        //           label: 'Message 消息提示'
        //         }, {
        //           value: 'message-box',
        //           label: 'MessageBox 弹框'
        //         }, {
        //           value: 'notification',
        //           label: 'Notification 通知'
        //         }]
        //       }, {
        //         value: 'navigation',
        //         label: 'Navigation',
        //         children: [{
        //           value: 'menu',
        //           label: 'NavMenu 导航菜单'
        //         }, {
        //           value: 'tabs',
        //           label: 'Tabs 标签页'
        //         }, {
        //           value: 'breadcrumb',
        //           label: 'Breadcrumb 面包屑'
        //         }, {
        //           value: 'dropdown',
        //           label: 'Dropdown 下拉菜单'
        //         }, {
        //           value: 'steps',
        //           label: 'Steps 步骤条'
        //         }]
        //       }, {
        //         value: 'others',
        //         label: 'Others',
        //         children: [{
        //           value: 'dialog',
        //           label: 'Dialog 对话框'
        //         }, {
        //           value: 'tooltip',
        //           label: 'Tooltip 文字提示'
        //         }, {
        //           value: 'popover',
        //           label: 'Popover 弹出框'
        //         }, {
        //           value: 'card',
        //           label: 'Card 卡片'
        //         }, {
        //           value: 'carousel',
        //           label: 'Carousel 走马灯'
        //         }, {
        //           value: 'collapse',
        //           label: 'Collapse 折叠面板'
        //         }]
        //       }]
        //     },
        //     {
        //       value: 'ziyuan',
        //       label: '资源',
        //       children: [{
        //         value: 'axure',
        //         label: 'Axure Components'
        //       }, {
        //         value: 'sketch',
        //         label: 'Sketch Templates'
        //       }, {
        //         value: 'jiaohu',
        //         label: '组件交互文档'
        //       }]
        //     }
        //   ]
        // },
        // {
        //   type: 'time',
        //   placeholder: '请选择开始时间',
        //   title: '开始日期',
        //   value: ''
        // },
        // {
        //   type: 'time',
        //   placeholder: '请选择结束时间',
        //   title: '结束日期',
        //   value: ''
        // },
        // {
        //   type:'select',
        //   placeholder: '请选择类型',
        //   title: '类型',
        //   value: '',
        //   options: [
        //     {
        //       label: '全部',
        //       value: ''
        //     },
        //     {
        //       label: '单选',
        //       value: '1'
        //     },
        //     {
        //       label: '复选',
        //       value: '2'
        //     }
        //   ]
        // }
      ],
      dialogVisible: false,
      dialogTitle: '新增角色'
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    // 搜索表格数
    search() {
      this.getTableData();
    },
    // 获取表格数据
    getTableData() {
      const sendData = {
        method: 'get',
        url: '/powerManage/getRoleList'
      };
      request(sendData).then(res => {
        this.tableData = res;
      });
    },
    // 按钮点击事件合集
    btnClickEvent(data) {
      switch (data.type) {
        case 'view' : this.viewData(data); break;
        case 'edit' : this.editData(data); break;
        case 'delete' : this['delete'](data); break;
      }
    },
    // 查看功能
    viewData(data) {
      funList.alertMessage('success', '查看功能');
      this.dialogTitle = '查看角色权限';
    },
    // 编辑功能
    editData(data) {
      // funList.alertMessage('warning', '编辑功能');
      this.dialogTitle = '编辑角色权限';
      this.dialogVisible = true;
    },
    // 删除功能
    delete(data) {
      funList.confirmDialog(() => {
        funList.alertMessage('error', '删除功能');
      }, '您确定要删除该数据吗？');
    },
    // 分页页数切换
    handleSizeChange(size) {
      this.pageSize = size;
      this.getTableData();
    },
    // 分页页码切换
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getTableData();
    }
  }
};
</script>

<style scoped lang="less">
  @import "../../../css/pageCommon";
</style>
