const Mock = require('mockjs');
const Random = Mock.Random;
Mock.mock('games/attention', 'get', [
    {
        id: 0,
        title: '推荐'
    },
    {
        id: 1,
        title: '刀塔自走棋'
    }, {
        id: 2,
        title: '绝地求生'
    }, {
        id: 3,
        title: '刀塔2'
    }, {
        id: 4,
        title: '炉石传说'
    },
    {
        id: 5,
        title: '主机游戏'
    },
    {
        id: 6,
        title: '只狼'
    }]
);
const articleLists=[];
for(let i=0;i<10;i++){
    let article={
        title:'@csentence(10,20)',
        author:'@cname(2,4)',
        date:'@date(2018-MM-dd)',
        views:'@natural(0,10000)',
        laud:'@natural(0,10000)',
        comment:'@natural(0,10000)',
        image:Random.image('200*100')
    }
    articleLists.push(article);
}
Mock.mock('articles/1','get',articleLists);