import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JINS MEME Platform",
  description: "生体データ活用の一歩先へ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'コーポレートサイト', link: 'https://www.jins.com' }
    ],

    sidebar: [
      {
        text: 'コンテンツ一覧',
        items: [
          { text: 'JINS MEME センサー',collapsed: false,
          items:[
            { text: '機種について', link: '/hardware' },
            { text: 'ご利用上の注意', link: '/hardware/notice' },            
          ]},
          { text: 'ソフトウェア', collapsed: false,
          items:[
            { text: '通常版 Logger', link: '/software/std' }, 
            { text: 'Academic Logger', link: '/software/ap' },
          ]},
          { text: 'ドキュメント',  collapsed: false,
          items:[
            { text: '論文・文献リスト', link: '/notice' },
            { text: 'データ定義', link: '/notice' },
            { text: 'バイタルデータ', link: '/doc/ap' },
            { text: '長期推移', link: '/doc/std' },  
        ]},
          { text: '利用規約', link: '/terms' },
        ]
      }
    ],

    footer: {
      message: 'JINS MEME&#8482; Platform',
      copyright: 'Copyright © 2024-present JINS Inc.'
    }
  }
})
