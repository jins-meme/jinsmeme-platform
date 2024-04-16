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
          { text: 'JINS MEME センサー', link: '/hardware' },  
          { text: 'ソフトウェア', collapsed: false,
          items:[
            { text: 'Academic - Windows', link: '/software/ap' },
            { text: 'Academic - MacOS', link: '/software/std' },  
            { text: 'Academic - Android', link: '/software/std' },  
            { text: '通常版 - iOS', link: '/software/std' },  
            { text: '通常版 - Android', link: '/software/std' },  
          ] },
          { text: 'ドキュメント',  collapsed: false,
          items:[
            { text: 'バイタルデータ', link: '/doc/ap' },
            { text: '長期推移', link: '/doc/std' },  
        ]},
          { text: 'ご利用上の注意', link: '/notice' },
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
