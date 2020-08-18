const Mock = require('mockjs');
const Random = Mock.Random;
Mock.mock('/api/register', 'get', () => {
  let articles = [];
  for(let i=0;i<10;i++) {
    let newArticleObject = {
      title: Random.csentence(5,30),
      thumbnail_pic_s:Random.image('150x100','#894fc4','#fff','png','mock'),
      author_name:Random.cname(),
      date: Random.date() + ' ' +Random.time()
    };
    articles.push(newArticleObject);
  }
  console.log(articles);
  return articles;
});
