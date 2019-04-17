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