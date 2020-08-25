import Vue from 'vue';
export const funList = {
  // 展示提示框
  alertMessage: (type,message) => {
    Vue.prototype.$message({
      type: type,
      message: message,
      duration: 1000
    });
  },
  confirmDialog(confirm, message) {
    Vue.prototype.$confirm(message, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      cancelButtonClass: 'cancel',
      confirmButtonClass: 'el-button--primary'
    }).then(() => {
      confirm();
    }).catch(() => {
      this.alertMessage('info', '已取消');
    });
  },
  // 格式路由
  formatRouter(data, route) {
    data.forEach(router=>{
      if(router.hasChild) {
        router.children = [];
      }
      // 第一级 直接push进数组
      if(router.level === 0) {
        route.push(router);
      } else {
      // 根据id获取对应的数据 判断数据为第几级 然后赋值
        const item = this.getItem(route, router.parentId);
        if (router.level > 1 && item.children) {
          item.children.push(router);
        } else {
          item.children.push(router);
        }
      }
    });
  },

  // 获取数据中与指定id相同的值
  getItem(list,id) {
    for(let i = 0; i < list.length; i++) {
      let item = list[i];
      if(item.id === id){
        return item;
      } else {
        if (item.children) {
          let returnData = this.getItem(item.children, id);
          if(returnData) {
            return returnData;
          }
        }
      }
    }
  }
};

