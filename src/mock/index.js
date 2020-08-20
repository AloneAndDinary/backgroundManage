const Mock = require('mockjs');
// const Random = Mock.Random;
Mock.mock('/powerManage/menuList', 'get', () => {
  let systemList = [];
  let date = new Date();
  for(let i=0;i<5;i++) {
    systemList.push({
      systemName: `系统${i}`,
      updateTime: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`,
      visitAddress: `/cms`
    });
  }
  return systemList;
});
