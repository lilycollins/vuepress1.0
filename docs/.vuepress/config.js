module.exports = {
  title: 'L2CH',
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com', target:'_brank', rel:'' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/foo/1' },
          { text: 'Japanese', items: [
            { text: 'Group1', link: '/guide/1/' },
          ] }
        ]
      },
       {
        text: 'login',
        link: '/login/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'guide',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            ['/guide/1','page1'],
            ['/guide/2','page2'],
            {
                title: 'third',
                collapsable: false,
                children: [
                    '/guide/3'
                ]
            }
          ]
        }
      ],
      '/foo/': [
        {
          title: 'foo',
        //   collapsable: true,
          children: [
            ['/foo/1','page1'],
          ]
        }
      ],
      // fallback
      '/': [
        '',        /* / */
      ]
    },
    // // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'vuejs/vuepress',
    // // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    smoothScroll: true
  }
}