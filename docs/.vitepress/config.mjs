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
          { text: 'ソフトウェア', link: '/software' },
          { text: 'ドキュメント', link: '/doc' },
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
