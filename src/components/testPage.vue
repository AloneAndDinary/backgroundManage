<template>
    <div>
      <tableComponent
        :tableData="tableData"
        :columnData="columnData"
        :showCheckbox="showCheckbox"
        :refName="refName"
        :showBtn="showBtn"
        :btnList="btnList"
        @btnClickEvent="btnClickEvent"/>
      <pageComponent
        :total="total"
        :pageSize.sync="pageSize"
        :currentPage.sync="currentPage"
        :layout="layout"
        :showBackground="showBackground"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"/>
    </div>
</template>

<script>
  import { funList } from '../../../../Desktop/publicFun';
  import tableComponent from '../../../../Desktop/tableComponent';
  import pageComponent from '../../../../Desktop/pageComponent';
    export default {
      name: "testPage",
      components: {
        tableComponent,
        pageComponent
      },
      data() {
          return {
            total: 100,
            pageSize: 10,
            currentPage: 1,
            layout: `total,sizes,prev,pager,next,jumper`,
            showBackground: true,
            tableData: [
              {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }
            ],
            columnData: [
              {
                propName: 'date',
                label: '日期',
                showActionBar: false
              },
              {
                propName: 'name',
                label: '姓名',
                showActionBar: false
              },
              {
                propName: 'address',
                label: '地址',
                showActionBar: false
              }
            ],
            showBtn: true,
            btnList: {
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
            },
            showCheckbox: false,
            refName: ''
          }
      },
      mounted() {
        this.getTableData();
      },
      methods: {
        // 获取表格数据
        getTableData() {
          const sendData = {
            page: this.currentPage,
            size: this.pageSize
          };
          console.log('获取表格数据', sendData);
        },
        // 按钮点击事件合集
        btnClickEvent(data) {
          console.log(data);
          switch (data.type) {
            case 'view' : this.viewData();break;
            case 'edit' : this.editData();break;
            case 'delete' : this.delete();break;
          }
        },
        // 查看功能
        viewData(data) {
          funList.alertMessage('success', '查看功能');
          console.log('处理查看功能', data);
        },
        // 编辑功能
        editData(data) {
          funList.alertMessage('warning', '编辑功能');
          console.log('处理编辑功能', data);
        },
        // 删除功能
        delete(data) {
          funList.confirmDialog(() => {
            funList.alertMessage('error', '删除功能');
          }, '您确定要删除该数据吗？');
          console.log('处理删除功能', data)
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
    }
</script>

<style scoped>

</style>
