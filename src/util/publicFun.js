import Vue from 'vue';
export const funList = {
  // 展示提示框
  alertMessage: (type,message) => {
    Vue.prototype.$message({
      type: type,
      message: message,
      duration: 1000
    })
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
  }
};

