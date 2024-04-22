import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/jinsmeme-platform/',
  title: "JINS MEME Platform",
  description: "生体データ活用の一歩先へ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'JINS サイト', link: 'https://www.jins.com' }
    ],

    sidebar: [
      {
        text: 'コンテンツ一覧',
        items: [
          { text: 'JINS MEME センサー', link: '/hardware' },
          {
            text: 'ソフトウェア', collapsed: false,
            items: [
              {
                text: '通常版 Logger', collapsed: true,
                items: [
                  { text: 'データ取得手順', link: '/software/es/logger_app' },
                  { text: '外部連携', link: '/software/es/external_integration.md' },
                ]
              },
              {
                text: 'Academic Logger', collapsed: true,
                items: [
                  {
                    text: 'パソコンでの使用', collapsed: true,
                    items: [
                      { text: 'インストール', link: '/software/with-pc/' },
                      { text: '測定のながれ', link: '/software/with-pc/measuring' },
                      { text: '画面の説明', link: '/software/with-pc/windows' },
                      { text: 'TCPソケット通信', link: '/software/with-pc/tcp' },
                    ]
                  },
                  {
                    text: 'Androidでの使用', collapsed: true,
                    items: [
                      { text: 'インストール', link: '/software/with-android/' },
                      { text: '測定のながれ', link: '/software/with-android/measuring' },
                    ]
                  },

                ]
              },
            ]
          },
          {
            text: 'ドキュメント', collapsed: false,
            items: [
              { text: '論文・文献リスト', link: '/doc/papers' },
              {
                text: 'データ定義', collapsed: false,
                items: [
                  { text: '通常版 Logger', link: '/doc/data_es' },
                  { text: 'Academic Logger', link: '/doc/data_esr' },
                ]
              },
              {
                text: '分析', collapsed: false,
                items: [
                  { text: '通常版の演算処理', link: '/doc/feature' },
                  { text: 'バイタルデータの注意点', link: '/doc/vital_data' },
                  { text: '短期のシーン分析例', link: '/doc/analysis_sample' },
                  { text: '長期の時系列分析例', link: '/doc/summarize_data' },
                  { text: 'モーショントラッキング', link: '/doc/motion-tracking-howto' },
                ]
              },

            ]
          },
          { text: '取扱上の注意', link: '/notice' },
          {
            text: '利用規約', collapsed: true,
            items: [
              { text: 'アプリ利用規約', link: '/doc/term_app' },
              { text: 'SDK利用規約', link: '/doc/term_sdk' },
              { text: 'プラットフォーム利用規約', link: '/doc/term_platform' },
            ]
          },
        ]
      }
    ],

    footer: {
      message: 'JINS MEME&#8482; Platform',
      copyright: 'Copyright © 2024-present JINS Inc.'
    }
  }
})
