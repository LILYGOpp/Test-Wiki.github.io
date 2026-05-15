import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '显示设备',
    items: [
      { text: 'T-Circle', items: [
        { text: 'T-Circle', link: '/zh/Display/T-Circle/T-Circle' },
        { text: 'T-Circle S3', link: '/zh/Display/T-Circle-S3/T-Circle-S3' }
      ]},
      { text: 'T-Display', items: [
        { text: 'T-Display P4', link: '/zh/Display/T-Display-P4/T-Display-P4' },
        { text: 'T-Display K230', link: '/zh/Display/T-Display-K230/T-Display-K230' },
        { text: 'T-Display S3 Long', link: '/zh/Display/T-Display-S3-Long/T-Display-S3-Long' },
        { text: 'T-Display S3 Pro', link: '/zh/Display/T-Display-S3-Pro/T-Display-S3-Pro' },
        { text: 'T-Display S3 Pro LR1121', link: '/zh/Display/T-Display-S3-Pro-LR1121/T-Display-S3-Pro-LR1121' },
        { text: 'T-Display S3 AMOLED Plus', link: '/zh/Display/T-Display-S3-AMOLED-Plus/T-Display-S3-AMOLED-Plus' },
        { text: 'T-Display S3 AMOLED 1.43', link: '/zh/Display/T-Display-S3-AMOLED-1.43/T-Display-S3-AMOLED-1.43' },
        { text: 'T-Display S3 AMOLED 1.64', link: '/zh/Display/T-Display-S3-AMOLED-1.64/T-Display-S3-AMOLED-1.64' },
        { text: 'T-Display S3 AMOLED 1.75', link: '/zh/Display/T-Display-S3-AMOLED-1.75/T-Display-S3-AMOLED-1.75' },
        { text: 'T-Display Bar', link: '/zh/Display/T-Display-Bar/T-Display-Bar' }
      ]},
      { text: 'T-Pico 2350', link: '/zh/Display/T-Pico-2350/T-Pico-2350' },
      { text: 'T-QT C6', link: '/zh/Display/T-QT-C6/T-QT-C6' },
      { text: 'T-Encoder Pro', link: '/zh/Display/T-Encoder-Pro/T-Encoder-Pro' },
      { text: 'T-Camera Plus S3', link: '/zh/Display/T-Camera-Plus-S3/T-Camera-Plus-S3' },
      { text: 'T-Keyboard-S3 Pro', link: '/zh/Display/T-Keyboard-S3-Pro/T-Keyboard-S3-Pro' },
      { text: 'T-Dongle-C5', link: '/zh/Display/T-Dongle-C5/T-Dongle-C5' },
      { text: 'T-Dongle-S3', link: '/zh/Display/T-Dongle-S3/T-Dongle-S3' }
    ]
  },
  {
    text: '可穿戴及可手持设备',
    items: [
      { text: 'T-Watch', items: [
        { text: 'T-Watch S3 Plus', link: '/zh/Wearable/T-Watch-S3-PLUS/T-Watch-S3-PLUS' },
        { text: 'T-Watch Ultra', link: '/zh/Wearable/T-Watch-Ultra/T-Watch-Ultra' }
      ]},
      { text: 'T5 E-Paper', items: [
        { text: 'T5 E-Paper', link: '/zh/Wearable/T5-E-Paper/T5-E-Paper' },
        { text: 'T5 E-Paper S3 Pro', link: '/zh/Wearable/T5-E-Paper-S3-Pro/T5-E-Paper-S3-Pro' },
        { text: 'T5 E-Paper S3 Lite', link: '/zh/Wearable/T5-E-Paper-Lite/T5-E-Paper-Lite' }
      ]},
      { text: 'T-Deck', items: [
        { text: 'T-Deck', link: '/zh/Wearable/T-Deck/T-Deck' },
        { text: 'T-Deck Plus', link: '/zh/Wearable/T-Deck-Plus/T-Deck-Plus' },
        { text: 'T-Deck Pro', link: '/zh/Wearable/T-Deck-Pro/T-Deck-Pro' }
      ]},
      { text: 'T-Echo', items: [
        { text: 'T-Echo', link: '/zh/Wearable/T-Echo/T-Echo' },
        { text: 'T-Echo Lite', link: '/zh/Wearable/T-Echo-Lite/T-Echo-Lite' }
      ]},
      { text: 'T-Embed CC1101', link: '/zh/Wearable/T-Embed-CC1101/T-Embed-CC1101' },
      { text: 'T-Embed SI4732', link: '/zh/Wearable/T-Embed-SI4732/T-Embed-SI4732' },
      { text: 'T-Glass', link: '/zh/Wearable/T-Glass/T-Glass' },
      { text: 'T-Mini E-paper-S3', link: '/zh/Wearable/T-Mini-E-paper-S3/T-Mini-E-paper-S3' }
    ]
  },
  {
    text: '无线通讯设备',
    items: [
      { text: 'LoRa/GPS', items: [
        { text: 'T3 S3', link: '/zh/LoRa_GPS/T3S3/T3S3' },
        { text: 'T-LoRa32', link: '/zh/LoRa_GPS/LoRa32/LoRa32' },
        { text: 'T-LoRa-C6', link: '/zh/LoRa_GPS/T-LoRa-C6/T-LoRa-C6' },
        { text: 'T-LoRa Dual', link: '/zh/LoRa_GPS/T-Lora-Dual/T-Lora-Dual' },
        { text: 'T3 STM32', link: '/zh/LoRa_GPS/T3-STM32/T3-STM32' },
        { text: 'T3 TXCO', link: '/zh/LoRa_GPS/T3-TXCO/T3-TXCO' },
        { text: 'T3-S3 LR1121', link: '/zh/LoRa_GPS/T3-S3-LR1121/T3-S3-LR1121' },
        { text: 'T3-S3 E-paper', link: '/zh/LoRa_GPS/T3-S3-E-paper/T3-S3-E-paper' },
        { text: 'T3-S3 MVSRBoard', link: '/zh/LoRa_GPS/T3-S3_MVSRBoard/T3-S3_MVSRBoard' },
        { text: 'T-LoraPager', link: '/zh/LoRa_GPS/T-LoraPager/T-LoraPager' },
        { text: 'T-Beam 1W', link: '/zh/LoRa_GPS/T-Beam-1W/T-Beam-1W' },
        { text: 'T-Beam SUPREME', link: '/zh/LoRa_GPS/T-Beam-SUPREME/T-Beam-SUPREME' }
      ]},
      { text: '高速通讯设备', items: [
        { text: 'T-TWR', link: '/zh/High_speed/T-TWR/T-TWR' },
        { text: 'T-Halow', link: '/zh/High_speed/T-Halow/T-Halow' },
        { text: 'T-Halow-P4', link: '/zh/High_speed/T-Halow-P4/T-Halow-P4' },
        { text: 'T-Connect', link: '/zh/High_speed/T-Connect/T-Connect' },
        { text: 'T-Connect Pro', link: '/zh/High_speed/T-Connect-Pro/T-Connect-Pro' },
        { text: 'T-Sim Shield', link: '/zh/High_speed/T-Sim-Shield/T-Sim-Shield' },
        { text: 'T-ETH', items: [
          { text: 'T-ETH-Elite', link: '/zh/High_speed/T-ETH/T-ETH-Elite/T-ETH-Elite' },
          { text: 'T-ETH-Gateway', link: '/zh/High_speed/T-ETH/T-ETH-Gateway/T-ETH-Gateway' },
          { text: 'T-ETH-LoRa-shield', link: '/zh/High_speed/T-ETH/T-ETH-LoRa-shield/T-ETH-LoRa-shield' },
          { text: 'T-ETH-1302', link: '/zh/High_speed/T-ETH/T-ETH-1302/T-ETH-1302' }
        ]},
        { text: 'T-ETH-Lite', items: [
          { text: 'T-ETH-Lite', link: '/zh/High_speed/T-ETH-Lite/T-ETH-Lite/T-ETH-Lite' },
          { text: 'T-ETH-Lite-S3', link: '/zh/High_speed/T-ETH-Lite/T-ETH-Lite-S3/T-ETH-Lite-S3' }
        ]},
        { text: 'T-2Can', link: '/zh/High_speed/T-2Can/T-2Can' },
        { text: 'T-PCIE', items: [
          { text: 'SIM7600E', link: '/zh/High_speed/T-PCIE/SIM7600E/SIM7600E' },
          { text: 'T-A7670', items: [
            { text: 'T-A7670E', link: '/zh/High_speed/T-PCIE/T-A7670/T-A7670E/T-A7670E' },
            { text: 'T-A7670G', link: '/zh/High_speed/T-PCIE/T-A7670/T-A7670G/T-A7670G' },
            { text: 'T-A7670SA', link: '/zh/High_speed/T-PCIE/T-A7670/T-A7670SA/T-A7670SA' }
          ]}
        ]}
      ]}
    ]
  },
  {
    text: '人工智能设备',
    items: [
      { text: 'T-Display K230', link: '/zh/AI/T-Display-K230/T-Display-K230' },
      { text: 'T-Bao', link: '/zh/AI/T-Bao/T-Bao' },
      { text: 'T-Circle S3', link: '/zh/AI/T-Circle-S3/T-Circle-S3' }
    ]
  },
  {
    text: '基础设备',
    items: [
      { text: 'T7 C6', link: '/zh/Basic_Module/T7_C6/T7_C6' },
      { text: 'T-Knob', link: '/zh/Basic_Module/T-Knob/T-Knob' }
    ]
  },
  {
    text: '拓展设备',
    items: [
      { text: 'T-BHI260AP', link: '/zh/Expand_Module/T-BHI260AP/T-BHI260AP' },
      { text: 'T-Solar', link: '/zh/Expand_Module/T-Solar/T-Solar' },
      { text: 'T-Radar', link: '/zh/Expand_Module/T-Radar/T-Radar' }
    ]
  },
  {
    text: 'FAQ',
    items: [
      { text: 'FAQ', link: '/zh/maixIV/m4ndock/FAQ' }
    ]
  },
  {
    text: 'Meshtastic 设备',
    items: [
      { text: 'Meshtastic 设备', link: '/zh/Meshtastic/Meshtastic_lilygo' },
      { text: 'Meshtastic 下载', link: '/zh/Meshtastic/Meshtastic_use' },
      { text: 'Meshtastic FAQ', link: '/zh/Meshtastic/Meshtastic_FAQ/Meshtastic_FAQ' }
    ]
  },
  {
    text: 'Meshcore 设备',
    items: [
      { text: 'Meshcore 使用', link: '/zh/Meshcore/meshcore' }
    ]
  },
  {
    text: 'LILYGO-Spark',
    items: [
      { text: 'LILYGO-Spark', link: '/zh/LILYGO-Spark/LILYGO-Spark-zh' }
    ]
  }
]

const enSidebar = [
  {
    text: 'DISPLAY',
    items: [
      { text: 'T-Circle', items: [
        { text: 'T-Circle', link: '/en/Display/T-Circle/T-Circle' },
        { text: 'T-Circle S3', link: '/en/Display/T-Circle-S3/T-Circle-S3' }
      ]},
      { text: 'T-Display', items: [
        { text: 'T-Display P4', link: '/en/Display/T-Display-P4/T-Display-P4' },
        { text: 'T-Display K230', link: '/en/Display/T-Display-K230/T-Display-K230' },
        { text: 'T-Display S3 Long', link: '/en/Display/T-Display-S3-Long/T-Display-S3-Long' },
        { text: 'T-Display S3 Pro', link: '/en/Display/T-Display-S3-Pro/T-Display-S3-Pro' },
        { text: 'T-Display S3 Pro LR1121', link: '/en/Display/T-Display-S3-Pro-LR1121/T-Display-S3-Pro-LR1121' },
        { text: 'T-Display S3 AMOLED Plus', link: '/en/Display/T-Display-S3-AMOLED-Plus/T-Display-S3-AMOLED-Plus' },
        { text: 'T-Display S3 AMOLED 1.43', link: '/en/Display/T-Display-S3-AMOLED-1.43/T-Display-S3-AMOLED-1.43' },
        { text: 'T-Display S3 AMOLED 1.64', link: '/en/Display/T-Display-S3-AMOLED-1.64/T-Display-S3-AMOLED-1.64' },
        { text: 'T-Display S3 AMOLED 1.75', link: '/en/Display/T-Display-S3-AMOLED-1.75/T-Display-S3-AMOLED-1.75' },
        { text: 'T-Display Bar', link: '/en/Display/T-Display-Bar/T-Display-Bar' }
      ]},
      { text: 'T-Pico 2350', link: '/en/Display/T-Pico-2350/T-Pico-2350' },
      { text: 'T-QT C6', link: '/en/Display/T-QT-C6/T-QT-C6' },
      { text: 'T-Encoder Pro', link: '/en/Display/T-Encoder-Pro/T-Encoder-Pro' },
      { text: 'T-Camera Plus S3', link: '/en/Display/T-Camera-Plus-S3/T-Camera-Plus-S3' },
      { text: 'T-Keyboard S3 Pro', link: '/en/Display/T-Keyboard-S3-Pro/T-Keyboard-S3-Pro' },
      { text: 'T-Dongle C5', link: '/en/Display/T-Dongle-C5/T-Dongle-C5' },
      { text: 'T-Dongle S3', link: '/en/Display/T-Dongle-S3/T-Dongle-S3' }
    ]
  },
  {
    text: 'Wearable & Handheld Devices',
    items: [
      { text: 'T-Watch', items: [
        { text: 'T-Watch S3 Plus', link: '/en/Wearable/T-Watch-S3-PLUS/T-Watch-S3-PLUS' },
        { text: 'T-Watch Ultra', link: '/en/Wearable/T-Watch-Ultra/T-Watch-Ultra' }
      ]},
      { text: 'T5 E-Paper', items: [
        { text: 'T5 E-Paper', link: '/en/Wearable/T5-E-Paper/T5-E-Paper' },
        { text: 'T5 E-Paper S3 Pro', link: '/en/Wearable/T5-E-Paper-S3-Pro/T5-E-Paper-S3-Pro' },
        { text: 'T5 E-Paper S3 Lite', link: '/en/Wearable/T5-E-Paper-Lite/T5-E-Paper-Lite' }
      ]},
      { text: 'T-Deck', items: [
        { text: 'T-Deck', link: '/en/Wearable/T-Deck/T-Deck' },
        { text: 'T-Deck Plus', link: '/en/Wearable/T-Deck-Plus/T-Deck-Plus' },
        { text: 'T-Deck Pro', link: '/en/Wearable/T-Deck-Pro/T-Deck-Pro' }
      ]},
      { text: 'T-Echo', items: [
        { text: 'T-Echo', link: '/en/Wearable/T-Echo/T-Echo' },
        { text: 'T-Echo Lite', link: '/en/Wearable/T-Echo-Lite/T-Echo-Lite' }
      ]},
      { text: 'T-Embed CC1101', link: '/en/Wearable/T-Embed-CC1101/T-Embed-CC1101' },
      { text: 'T-Embed SI4732', link: '/en/Wearable/T-Embed-SI4732/T-Embed-SI4732' },
      { text: 'T-Glass', link: '/en/Wearable/T-Glass/T-Glass' },
      { text: 'T-Mini E-paper-S3', link: '/en/Wearable/T-Mini-E-paper-S3/T-Mini-E-paper-S3' }
    ]
  },
  {
    text: 'Wireless Communication Devices',
    items: [
      { text: 'LoRa/GPS', items: [
        { text: 'T3 S3', link: '/en/LoRa_GPS/T3S3/T3S3' },
        { text: 'T-LoRa32', link: '/en/LoRa_GPS/LoRa32/LoRa32' },
        { text: 'T-LoRa-C6', link: '/en/LoRa_GPS/T-LoRa-C6/T-LoRa-C6' },
        { text: 'T-LoRa Dual', link: '/en/LoRa_GPS/T-Lora-Dual/T-Lora-Dual' },
        { text: 'T3 STM32', link: '/en/LoRa_GPS/T3-STM32/T3-STM32' },
        { text: 'T3 TXCO', link: '/en/LoRa_GPS/T3-TXCO/T3-TXCO' },
        { text: 'T3-S3 LR1121', link: '/en/LoRa_GPS/T3-S3-LR1121/T3-S3-LR1121' },
        { text: 'T3-S3 E-paper', link: '/en/LoRa_GPS/T3-S3-E-paper/T3-S3-E-paper' },
        { text: 'T3-S3 MVSRBoard', link: '/en/LoRa_GPS/T3-S3_MVSRBoard/T3-S3_MVSRBoard' },
        { text: 'T-LoraPager', link: '/en/LoRa_GPS/T-LoraPager/T-LoraPager' },
        { text: 'T-Beam 1W', link: '/en/LoRa_GPS/T-Beam-1W/T-Beam-1W' },
        { text: 'T-Beam SUPREME', link: '/en/LoRa_GPS/T-Beam-SUPREME/T-Beam-SUPREME' }
      ]},
      { text: 'High Speed Communication', items: [
        { text: 'T-TWR', link: '/en/High_speed/T-TWR/T-TWR' },
        { text: 'T-Halow', link: '/en/High_speed/T-Halow/T-Halow' },
        { text: 'T-Halow-P4', link: '/en/High_speed/T-Halow-P4/T-Halow-P4' },
        { text: 'T-Connect', link: '/en/High_speed/T-Connect/T-Connect' },
        { text: 'T-Connect Pro', link: '/en/High_speed/T-Connect-Pro/T-Connect-Pro' },
        { text: 'T-Sim Shield', link: '/en/High_speed/T-Sim-Shield/T-Sim-Shield' },
        { text: 'T-ETH', items: [
          { text: 'T-ETH-Elite', link: '/en/High_speed/T-ETH/T-ETH-Elite/T-ETH-Elite' },
          { text: 'T-ETH-Gateway', link: '/en/High_speed/T-ETH/T-ETH-Gateway/T-ETH-Gateway' },
          { text: 'T-ETH-LoRa-shield', link: '/en/High_speed/T-ETH/T-ETH-LoRa-shield/T-ETH-LoRa-shield' },
          { text: 'T-ETH-1302', link: '/en/High_speed/T-ETH/T-ETH-1302/T-ETH-1302' }
        ]},
        { text: 'T-ETH-Lite', items: [
          { text: 'T-ETH-Lite', link: '/en/High_speed/T-ETH-Lite/T-ETH-Lite/T-ETH-Lite' },
          { text: 'T-ETH-Lite-S3', link: '/en/High_speed/T-ETH-Lite/T-ETH-Lite-S3/T-ETH-Lite-S3' }
        ]},
        { text: 'T-2Can', link: '/en/High_speed/T-2Can/T-2Can' },
        { text: 'T-A7670', link: '/en/High_speed/T-A7670/T-A7670' },
        { text: 'T-SIM7000G', link: '/en/High_speed/T-SIM7000G/T-SIM7000G' },
        { text: 'T-SIM7080G', link: '/en/High_speed/T-SIM7080G/T-SIM7080G' },
        { text: 'T-SIM7600', link: '/en/High_speed/T-SIM7600/T-SIM7600' },
        { text: 'T-PCIE', link: '/en/High_speed/T-PCIE/T-PCIE' }
      ]}
    ]
  },
  {
    text: 'AI Devices',
    items: [
      { text: 'T-Bao', link: '/en/AI/T-Bao/T-Bao' },
      { text: 'T-Circle S3', link: '/en/AI/T-Circle-S3/T-Circle-S3' },
      { text: 'T-Display K230', link: '/en/AI/T-Display-K230/T-Display-K230' }
    ]
  },
  {
    text: 'Basic Modules',
    items: [
      { text: 'T-BHI260AP', link: '/en/Basic_Module/T-BHI260AP/T-BHI260AP' },
      { text: 'T-Knob', link: '/en/Basic_Module/T-Knob/T-Knob' },
      { text: 'T7 C6', link: '/en/Basic_Module/T7_C6/T7_C6' }
    ]
  },
  {
    text: 'Expansion Modules',
    items: [
      { text: 'T-BHI260AP', link: '/en/Expand_Module/T-BHI260AP/T-BHI260AP' },
      { text: 'T-Radar', link: '/en/Expand_Module/T-Radar/T-Radar' },
      { text: 'T-Solar', link: '/en/Expand_Module/T-Solar/T-Solar' }
    ]
  },
  {
    text: 'LILYGO Spark',
    items: [
      { text: 'LILYGO Spark', link: '/en/LILYGO-Spark/LILYGO-Spark-en' }
    ]
  }
]

export default defineConfig({
  title: 'LILYGO Wiki',
  description: 'LILYGO - Happy to write',
  lastUpdated: true,
  base: process.env.NODE_ENV === 'production' ? '/Test-Wiki.github.io/' : '/',
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '产品', link: '/zh/product' },
          { text: 'START', link: '/news/' },
          { text: '开发', link: '/zh/develop/' },
          { text: '更多', link: '/more/' },
          {
            text: '链接',
            items: [
              { text: '网页下载工具', link: 'https://xinyuan-lilygo.github.io/Launchpad/', target: '_blank' },
              { text: 'LILYGO官网', link: 'https://lilygo.cc', target: '_blank' },
              { text: 'GitHub', link: 'https://github.com/Xinyuan-LilyGO', target: '_blank' },
              { text: 'YouTube', link: 'https://www.youtube.com/@LILYGO', target: '_blank' },
              { text: '淘宝店铺', link: 'https://shop140839766.taobao.com', target: '_blank' },
            ]
          }
        ],
        sidebar: {
          '/zh/': zhSidebar
        },
        editLink: {
          pattern: 'https://github.com/LILYGOpp/LILYGO_wiki/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Products', link: '/en/product' },
          { text: 'START', link: '/news/' },
          { text: 'Develop', link: '/en/develop/' },
          { text: 'More', link: '/more/' },
          {
            text: 'Links',
            items: [
              { text: 'Web Download Tool', link: 'https://xinyuan-lilygo.github.io/Launchpad/', target: '_blank' },
              { text: 'LILYGO Official', link: 'https://lilygo.cc', target: '_blank' },
              { text: 'GitHub', link: 'https://github.com/Xinyuan-LilyGO', target: '_blank' },
              { text: 'YouTube', link: 'https://www.youtube.com/@LILYGO', target: '_blank' },
              { text: 'Taobao Store', link: 'https://shop140839766.taobao.com', target: '_blank' },
            ]
          }
        ],
        sidebar: {
          '/en/': enSidebar
        },
        editLink: {
          pattern: 'https://github.com/LILYGOpp/LILYGO_wiki/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        }
      }
    }
  },

  themeConfig: {
    logo: '/static/image/logo.png',
    siteTitle: 'LILYGO',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xinyuan-LilyGO' },
      { icon: 'x', link: 'https://x.com/lilygo9' },
      { icon: 'youtube', link: 'https://www.youtube.com/@LILYGO' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 LILYGO'
    },

    search: {
      provider: 'local'
    }
  }
})
