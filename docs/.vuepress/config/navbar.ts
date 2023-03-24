export default [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '模板',
        children: [{
            text: '后台',
            link: '/template/web/project-introduction.md',
            activeMatch: '/template/web',
        },{
            text: '移动端',
            link: '/template/mobile/project-introduction.md',
            activeMatch: '/template/mobile',
        },{
            text: 'uni-app',
            link: '/template/uni-app/project-introduction.md',
            activeMatch: '/template/uni-app',
        }],
    },
    // {
    //     text: '工程化',
    //     children: [],
    // },
    // {
    //     text: '有趣的东西',
    //     children: [{
    //         text: 'A',
    //         link: 'https://www.baidu.com'
    //     },{
    //         text: 'B',
    //         link: 'https://www.baidu.com'
    //     },{
    //         text: 'C',
    //         link: 'https://www.baidu.com'
    //     }],
    // },
    {
        text: '大佬博客',
        children: [{
            text: 'A',
            link: 'https://www.baidu.com'
        },{
            text: 'B',
            link: 'https://www.baidu.com'
        },{
            text: 'C',
            link: 'https://www.baidu.com'
        }]
    },
]

// export default navbar