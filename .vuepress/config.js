module.exports = {
    base: '/blog-vuepress/',
    title: '王鑫之个人博客', // Title for the site. This will be displayed in the navbar.
    description: '学习记录 代码分享 经验总结 开发教程',
    lange: 'zh-CN',
    theme: require.resolve('./theme/'),
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: '关于我',
                link: '/',
            },
            {
                text: '博客',
                link: '/posts/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
            {
                text: '个人简历',
                link: '/resume/',
            },

            {
                text: '联系我',
                link: '/concat/',
            },
        ],
        directories: [
            {
                id: 'home',
                dirname: '_posts',
                path: '/resume/',
                layout: 'Resume',
            },
            {
                id: 'concat',
                dirname: '_posts',
                path: '/concat/',
                layout: 'Concat',
            },
            {
                id: 'home',
                dirname: '_posts',
                path: '/',
                layout: 'IndexHome',
            },
            {
                id: 'post',
                dirname: '_posts',
                path: '/posts/',
                itemPermalink: '/posts/:year/:month/:day/:slug',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/SpiritGit/blog-vuepress',
                },
            ],
            copyright: [
                {
                    text: '项目详情',
                    link: 'https://github.com/SpiritGit/blog-vuepress',
                },
            ],
        },
        // comment: {
        //     service: 'vssue',
        //     owner: 'zhb333',
        //     repo: 'blog-vuepress',
        //     clientId: '',
        //     clientSecret: '',
        // },

        // newsletter: {
        //     title: '邮件订阅',
        //     content: '请输入您的邮箱...',
        //     submitText: '订阅',
        //     endpoint:
        //         'https://forapi.us19.list-manage.com/subscribe/post?u=ac82b3046426d14cad8f2a3ef&amp;id=ebfc431c44',
        // },

        // sitemap: {
        //     hostname: 'http://forapi.cn',
        // },

        // feed: {
        //     canonical_base: 'http://forapi.cn',
        // },

        smoothScroll: true,
    },
}