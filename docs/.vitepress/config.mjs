import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/jinsmeme-platform/",
  //cleanUrls: true,
  title: "JINS MEME Platform",
  description: "生体データ活用の一歩先へ",
  // docs/doc/principles は python-processing-core の submodule(sparse-checkout で
  // docs/principles/ のみ checkout。セットアップ手順は README.md 参照)。
  // checkout パスが `doc/principles/docs/principles/...` とネストするので、
  // サイト上の URL は `/doc/principles/...` (EN は `/en/doc/principles/...`) に平らにする。
  rewrites: {
    "doc/principles/docs/principles/feature.md": "doc/principles/feature.md",
    "doc/principles/docs/principles/vital_data.md":
      "doc/principles/vital_data.md",
    "doc/principles/docs/principles/analysis_sample.md":
      "doc/principles/analysis_sample.md",
    "doc/principles/docs/principles/summarize_data.md":
      "doc/principles/summarize_data.md",
    "doc/principles/docs/principles/motion-tracking-howto.md":
      "doc/principles/motion-tracking-howto.md",
    "doc/principles/docs/principles/en/feature.md":
      "en/doc/principles/feature.md",
    "doc/principles/docs/principles/en/vital_data.md":
      "en/doc/principles/vital_data.md",
    "doc/principles/docs/principles/en/analysis_sample.md":
      "en/doc/principles/analysis_sample.md",
    "doc/principles/docs/principles/en/summarize_data.md":
      "en/doc/principles/summarize_data.md",
    "doc/principles/docs/principles/en/motion-tracking-howto.md":
      "en/doc/principles/motion-tracking-howto.md",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "JINS サイト", link: "https://www.jins.com" }],

    sidebar: [
      {
        text: "コンテンツ一覧",
        items: [
          { text: "重要なお知らせ", link: "/eol" },
          { text: "ハードウェア", link: "/hardware" },
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
                    link: "/software/es/external_integration",
                  },
                ],
              },
              {
                text: "Academic Logger",
                collapsed: true,
                items: [
                  {
                    text: "パソコンでの使用",
                    link: "/software/with-pc/",
                    collapsed: true,
                    items: [
                      {
                        text: "旧バージョン",
                        link: "/software/with-pc/old_app",
                      },
                    ],
                  },
                  {
                    text: "Androidでの使用",
                    link: "/software/with-android/",
                    collapsed: true,
                    items: [
                      {
                        text: "旧バージョン",
                        link: "/software/with-android/old_app",
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
                  {
                    text: "通常版の演算処理",
                    link: "/doc/principles/feature",
                  },
                  {
                    text: "バイタルデータの注意点",
                    link: "/doc/principles/vital_data",
                  },
                  {
                    text: "短期のシーン分析例",
                    link: "/doc/principles/analysis_sample",
                  },
                  {
                    text: "長期の時系列分析例",
                    link: "/doc/principles/summarize_data",
                  },
                  {
                    text: "モーショントラッキング",
                    link: "/doc/principles/motion-tracking-howto",
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
          { text: "プライバシーポリシー", link: "/doc/privacy" },
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
              { text: "Hardware", link: "/en/hardware" },
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
                        link: "/en/software/es/external_integration",
                      },
                    ],
                  },
                  {
                    text: "Academic Logger",
                    collapsed: true,
                    items: [
                      {
                        text: "Using with a PC",
                        link: "/en/software/with-pc/",
                        collapsed: true,
                        items: [
                          {
                            text: "Old version",
                            link: "/en/software/with-pc/old_app",
                          },
                        ],
                      },
                      {
                        text: "Using with an Android",
                        link: "/en/software/with-android/",
                        collapsed: true,
                        items: [
                          {
                            text: "Old version",
                            link: "/en/software/with-android/old_app",
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
                        link: "/en/doc/principles/feature",
                      },
                      {
                        text: "Notes specific to vital data",
                        link: "/en/doc/principles/vital_data",
                      },
                      {
                        text: "Short-term scene",
                        link: "/en/doc/principles/analysis_sample",
                      },
                      {
                        text: "Long-term time series",
                        link: "/en/doc/principles/summarize_data",
                      },
                      {
                        text: "Motion tracking",
                        link: "/en/doc/principles/motion-tracking-howto",
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
              { text: "Privacy policy", link: "/en/doc/privacy" },
            ],
          },
        ],
      },
    },
  },
});
