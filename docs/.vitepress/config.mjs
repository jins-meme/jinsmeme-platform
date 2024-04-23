import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/jinsmeme-platform/",
  title: "JINS MEME Platform",
  description: "生体データ活用の一歩先へ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "JINS サイト", link: "https://www.jins.com" }],

    sidebar: [
      {
        text: "コンテンツ一覧",
        items: [
          { text: "大事なお知らせ", link: "/eol" },
          { text: "JINS MEME センサー", link: "/hardware" },
          {
            text: "ソフトウェア",
            collapsed: false,
            items: [
              {
                text: "通常版 Logger",
                collapsed: true,
                items: [
                  { text: "データ取得手順", link: "/software/es/logger_app" },
                  {
                    text: "外部連携",
                    link: "/software/es/external_integration.md",
                  },
                ],
              },
              {
                text: "Academic Logger",
                collapsed: true,
                items: [
                  {
                    text: "パソコンでの使用",
                    collapsed: true,
                    items: [
                      { text: "インストール", link: "/software/with-pc/" },
                      {
                        text: "測定のながれ",
                        link: "/software/with-pc/measuring",
                      },
                      { text: "画面の説明", link: "/software/with-pc/windows" },
                      {
                        text: "TCPソケット通信",
                        link: "/software/with-pc/tcp",
                      },
                    ],
                  },
                  {
                    text: "Androidでの使用",
                    collapsed: true,
                    items: [
                      { text: "インストール", link: "/software/with-android/" },
                      {
                        text: "測定のながれ",
                        link: "/software/with-android/measuring",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: "ドキュメント",
            collapsed: false,
            items: [
              { text: "論文・文献リスト", link: "/doc/papers" },
              {
                text: "データ定義",
                collapsed: false,
                items: [
                  { text: "通常版 Logger", link: "/doc/data_es" },
                  { text: "Academic Logger", link: "/doc/data_esr" },
                ],
              },
              {
                text: "分析",
                collapsed: false,
                items: [
                  { text: "通常版の演算処理", link: "/doc/feature" },
                  { text: "バイタルデータの注意点", link: "/doc/vital_data" },
                  { text: "短期のシーン分析例", link: "/doc/analysis_sample" },
                  { text: "長期の時系列分析例", link: "/doc/summarize_data" },
                  {
                    text: "モーショントラッキング",
                    link: "/doc/motion-tracking-howto",
                  },
                ],
              },
            ],
          },
          { text: "取扱上の注意", link: "/notice" },
          {
            text: "利用規約",
            collapsed: true,
            items: [
              { text: "アプリ利用規約", link: "/doc/term_app" },
              { text: "SDK利用規約", link: "/doc/term_sdk" },
              { text: "プラットフォーム利用規約", link: "/doc/term_platform" },
            ],
          },
        ],
      },
    ],

    footer: {
      message: "JINS MEME&#8482; Platform",
      copyright: "Copyright © 2024-present JINS Inc.",
    },
  },
  locales: {
    root: {
      label: "日本語",
      lang: "ja",
    },
    en: {
      label: "English",
      themeConfig: {
        nav: [{ text: "JINS website", link: "https://www.jins.com" }],
        sidebar: [
          {
            text: "Contents",
            items: [
              { text: "Important Notice", link: "/en/eol" },
              { text: "JINS MEME Sensing Core", link: "/en/hardware" },
              {
                text: "Software",
                collapsed: false,
                items: [
                  {
                    text: "Standard Logger",
                    collapsed: true,
                    items: [
                      {
                        text: "Data acquisition procedure",
                        link: "/en/software/es/logger_app",
                      },
                      {
                        text: "External share",
                        link: "/en/software/es/external_integration.md",
                      },
                    ],
                  },
                  {
                    text: "Academic Logger",
                    collapsed: true,
                    items: [
                      {
                        text: "Using with a PC",
                        collapsed: true,
                        items: [
                          {
                            text: "Installing the Software",
                            link: "/en/software/with-pc/",
                          },
                          {
                            text: "Measurement flow",
                            link: "/en/software/with-pc/measuring",
                          },
                          {
                            text: "User Interface",
                            link: "/en/software/with-pc/windows",
                          },
                          {
                            text: "TCP-Socket",
                            link: "/en/software/with-pc/tcp",
                          },
                        ],
                      },
                      {
                        text: "Using with an Android",
                        collapsed: true,
                        items: [
                          {
                            text: "Installing the Software",
                            link: "/en/software/with-android/",
                          },
                          {
                            text: "Measurement flow",
                            link: "/en/software/with-android/measuring",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                text: "Document",
                collapsed: false,
                items: [
                  { text: "Papers & Presentations", link: "/en/doc/papers" },
                  {
                    text: "Data definition",
                    collapsed: false,
                    items: [
                      { text: "Standard Logger", link: "/en/doc/data_es" },
                      { text: "Academic Logger", link: "/en/doc/data_esr" },
                    ],
                  },
                  {
                    text: "Analysis",
                    collapsed: false,
                    items: [
                      {
                        text: "Data processing details",
                        link: "/en/doc/feature",
                      },
                      {
                        text: "Notes specific to vital data",
                        link: "/en/doc/vital_data",
                      },
                      {
                        text: "Short-term scene",
                        link: "/en/doc/analysis_sample",
                      },
                      {
                        text: "Long-term time series",
                        link: "/en/doc/summarize_data",
                      },
                      {
                        text: "Motion tracking",
                        link: "/en/doc/motion-tracking-howto",
                      },
                    ],
                  },
                ],
              },
              { text: "Precautions", link: "/en/notice" },
              {
                text: "Terms",
                collapsed: true,
                items: [
                  {
                    text: "Application terms of use",
                    link: "/en/doc/term_app",
                  },
                  { text: "SDK terms of use", link: "/en/doc/term_sdk" },
                  {
                    text: "Platform terms of use",
                    link: "/en/doc/term_platform",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
});
