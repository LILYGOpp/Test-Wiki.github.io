import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LILYGO Wiki',
  description: 'LILYGO - Happy to write',
  lastUpdated: true,
  // 开发模式使用 /，生产模式使用 /Test-Wiki.github.io/
  base: process.env.NODE_ENV === 'production' ? '/Test-Wiki.github.io/' : '/',
  ignoreDeadLinks: true,

  // 设置重写规则，让根路径指向 index_zh
  rewrites: {
    'index_zh.md': 'index.md'
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        logo: '/static/image/logo.png',
        siteTitle: 'LILYGO',

        // 中文导航栏配置
        nav: [
          { text: '产品', link: '/product_zh' },
          { text: 'START', link: '/news/' },
          { text: '开发', link: '/develop/zh/' },
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

    // 中文侧边栏配置
    sidebar: {
      '/get_started/zh/': [
        {
          text: '显示设备',
          items: [
            { text: 'T-Circle', items: [
              { text: 'T-Circle', link: '/get_started/zh/Display/T-Circle/T-Circle' },
              { text: 'T-Circle S3', link: '/get_started/zh/Display/T-Circle-S3/T-Circle-S3' }
            ]},
            { text: 'T-Display', items: [
              { text: 'T-Display P4', link: '/get_started/zh/Display/T-Display-P4/T-Display-P4' },
              { text: 'T-Display K230', link: '/get_started/zh/Display/T-Display-K230/T-Display-K230' },
              { text: 'T-Display S3 Long', link: '/get_started/zh/Display/T-Display-S3-Long/T-Display-S3-Long' },
              { text: 'T-Display S3 Pro', link: '/get_started/zh/Display/T-Display-S3-Pro/T-Display-S3-Pro' },
              { text: 'T-Display S3 Pro LR1121', link: '/get_started/zh/Display/T-Display-S3-Pro-LR1121/T-Display-S3-Pro-LR1121' },
              { text: 'T-Display S3 AMOLED Plus', link: '/get_started/zh/Display/T-Display-S3-AMOLED-Plus/T-Display-S3-AMOLED-Plus' },
              { text: 'T-Display S3 AMOLED 1.43', link: '/get_started/zh/Display/T-Display-S3-AMOLED-1.43/T-Display-S3-AMOLED-1.43' },
              { text: 'T-Display S3 AMOLED 1.64', link: '/get_started/zh/Display/T-Display-S3-AMOLED-1.64/T-Display-S3-AMOLED-1.64' },
              { text: 'T-Display S3 AMOLED 1.75', link: '/get_started/zh/Display/T-Display-S3-AMOLED-1.75/T-Display-S3-AMOLED-1.75' },
              { text: 'T-Display Bar', link: '/get_started/zh/Display/T-Display-Bar/T-Display-Bar' }
            ]},
            { text: 'T-Pico 2350', link: '/get_started/zh/Display/T-Pico-2350/T-Pico-2350' },
            { text: 'T-QT C6', link: '/get_started/zh/Display/T-QT-C6/T-QT-C6' },
            { text: 'T-Encoder Pro', link: '/get_started/zh/Display/T-Encoder-Pro/T-Encoder-Pro' },
            { text: 'T-Camera Plus S3', link: '/get_started/zh/Display/T-Camera-Plus-S3/T-Camera-Plus-S3' },
            { text: 'T-Keyboard-S3 Pro', link: '/get_started/zh/Display/T-Keyboard-S3-Pro/T-Keyboard-S3-Pro' },
            { text: 'T-Dongle-C5', link: '/get_started/zh/Display/T-Dongle-C5/T-Dongle-C5' },
            { text: 'T-Dongle-S3', link: '/get_started/zh/Display/T-Dongle-S3/T-Dongle-S3' }
          ]
        },
        {
          text: '可穿戴及可手持设备',
          items: [
            { text: 'T-Watch', items: [
              { text: 'T-Watch S3 Plus', link: '/get_started/zh/Wearable/T-Watch-S3-PLUS/T-Watch-S3-PLUS' },
              { text: 'T-Watch Ultra', link: '/get_started/zh/Wearable/T-Watch-Ultra/T-Watch-Ultra' }
            ]},
            { text: 'T5 E-Paper', items: [
              { text: 'T5 E-Paper', link: '/get_started/zh/Wearable/T5-E-Paper/T5-E-Paper' },
              { text: 'T5 E-Paper S3 Pro', link: '/get_started/zh/Wearable/T5-E-Paper-S3-Pro/T5-E-Paper-S3-Pro' },
              { text: 'T5 E-Paper S3 Lite', link: '/get_started/zh/Wearable/T5-E-Paper-Lite/T5-E-Paper-Lite' }
            ]},
            { text: 'T-Deck', items: [
              { text: 'T-Deck', link: '/get_started/zh/Wearable/T-Deck/T-Deck' },
              { text: 'T-Deck Plus', link: '/get_started/zh/Wearable/T-Deck-Plus/T-Deck-Plus' },
              { text: 'T-Deck Pro', link: '/get_started/zh/Wearable/T-Deck-Pro/T-Deck-Pro' }
            ]},
            { text: 'T-Echo', items: [
              { text: 'T-Echo', link: '/get_started/zh/Wearable/T-Echo/T-Echo' },
              { text: 'T-Echo Lite', link: '/get_started/zh/Wearable/T-Echo-Lite/T-Echo-Lite' }
            ]},
            { text: 'T-Embed CC1101', link: '/get_started/zh/Wearable/T-Embed-CC1101/T-Embed-CC1101' },
            { text: 'T-Embed SI4732', link: '/get_started/zh/Wearable/T-Embed-SI4732/T-Embed-SI4732' },
            { text: 'T-Glass', link: '/get_started/zh/Wearable/T-Glass/T-Glass' },
            { text: 'T-Mini E-paper-S3', link: '/get_started/zh/Wearable/T-Mini-E-paper-S3/T-Mini-E-paper-S3' }
          ]
        },
        {
          text: '无线通讯设备',
          items: [
            { text: 'LoRa/GPS', items: [
              { text: 'T3 S3', link: '/get_started/zh/LoRa_GPS/T3S3/T3S3' },
              { text: 'T-LoRa32', link: '/get_started/zh/LoRa_GPS/LoRa32/LoRa32' },
              { text: 'T-LoRa-C6', link: '/get_started/zh/LoRa_GPS/T-LoRa-C6/T-LoRa-C6' },
              { text: 'T-LoRa Dual', link: '/get_started/zh/LoRa_GPS/T-Lora-Dual/T-Lora-Dual' },
              { text: 'T3 STM32', link: '/get_started/zh/LoRa_GPS/T3-STM32/T3-STM32' },
              { text: 'T3 TXCO', link: '/get_started/zh/LoRa_GPS/T3-TXCO/T3-TXCO' },
              { text: 'T3-S3 LR1121', link: '/get_started/zh/LoRa_GPS/T3-S3-LR1121/T3-S3-LR1121' },
              { text: 'T3-S3 E-paper', link: '/get_started/zh/LoRa_GPS/T3-S3-E-paper/T3-S3-E-paper' },
              { text: 'T3-S3 MVSRBoard', link: '/get_started/zh/LoRa_GPS/T3-S3_MVSRBoard/T3-S3_MVSRBoard' },
              { text: 'T-LoraPager', link: '/get_started/zh/LoRa_GPS/T-LoraPager/T-LoraPager' },
              { text: 'T-Beam 1W', link: '/get_started/zh/LoRa_GPS/T-Beam-1W/T-Beam-1W' },
              { text: 'T-Beam SUPREME', link: '/get_started/zh/LoRa_GPS/T-Beam-SUPREME/T-Beam-SUPREME' }
            ]},
            { text: '高速通讯设备', items: [
              { text: 'T-TWR', link: '/get_started/zh/High_speed/T-TWR/T-TWR' },
              { text: 'T-Halow', link: '/get_started/zh/High_speed/T-Halow/T-Halow' },
              { text: 'T-Halow-P4', link: '/get_started/zh/High_speed/T-Halow-P4/T-Halow-P4' },
              { text: 'T-Connect', link: '/get_started/zh/High_speed/T-Connect/T-Connect' },
              { text: 'T-Connect Pro', link: '/get_started/zh/High_speed/T-Connect-Pro/T-Connect-Pro' },
              { text: 'T-Sim Shield', link: '/get_started/zh/High_speed/T-Sim-Shield/T-Sim-Shield' },
              { text: 'T-ETH', items: [
                { text: 'T-ETH-Elite', link: '/get_started/zh/High_speed/T-ETH/T-ETH-Elite/T-ETH-Elite' },
                { text: 'T-ETH-Gateway', link: '/get_started/zh/High_speed/T-ETH/T-ETH-Gateway/T-ETH-Gateway' },
                { text: 'T-ETH-LoRa-shield', link: '/get_started/zh/High_speed/T-ETH/T-ETH-LoRa-shield/T-ETH-LoRa-shield' },
                { text: 'T-ETH-1302', link: '/get_started/zh/High_speed/T-ETH/T-ETH-1302/T-ETH-1302' }
              ]},
              { text: 'T-ETH-Lite', items: [
                { text: 'T-ETH-Lite', link: '/get_started/zh/High_speed/T-ETH-Lite/T-ETH-Lite/T-ETH-Lite' },
                { text: 'T-ETH-Lite-S3', link: '/get_started/zh/High_speed/T-ETH-Lite/T-ETH-Lite-S3/T-ETH-Lite-S3' }
              ]},
              { text: 'T-2Can', link: '/get_started/zh/High_speed/T-2Can/T-2Can' },
              { text: 'T-PCIE', items: [
                { text: 'SIM7600E', link: '/get_started/zh/High_speed/T-PCIE/SIM7600E/SIM7600E' },
                { text: 'T-A7670', items: [
                  { text: 'T-A7670E', link: '/get_started/zh/High_speed/T-PCIE/T-A7670/T-A7670E/T-A7670E' },
                  { text: 'T-A7670G', link: '/get_started/zh/High_speed/T-PCIE/T-A7670/T-A7670G/T-A7670G' },
                  { text: 'T-A7670SA', link: '/get_started/zh/High_speed/T-PCIE/T-A7670/T-A7670SA/T-A7670SA' }
                ]}
              ]}
            ]}
          ]
        },
        {
          text: '人工智能设备',
          items: [
            { text: 'T-Display K230', link: '/get_started/zh/AI/T-Display-K230/T-Display-K230' },
            { text: 'T-Bao', link: '/get_started/zh/AI/T-Bao/T-Bao' },
            { text: 'T-Circle S3', link: '/get_started/zh/AI/T-Circle-S3/T-Circle-S3' }
          ]
        },
        {
          text: '基础设备',
          items: [
            { text: 'T7 C6', link: '/get_started/zh/Basic_Module/T7_C6/T7_C6' },
            { text: 'T-Knob', link: '/get_started/zh/Basic_Module/T-Knob/T-Knob' }
          ]
        },
        {
          text: '拓展设备',
          items: [
            { text: 'T-BHI260AP', link: '/get_started/zh/Expand_Module/T-BHI260AP/T-BHI260AP' },
            { text: 'T-Solar', link: '/get_started/zh/Expand_Module/T-Solar/T-Solar' },
            { text: 'T-Radar', link: '/get_started/zh/Expand_Module/T-Radar/T-Radar' }
          ]
        },
        {
          text: 'FAQ',
          items: [
            { text: 'FAQ', link: '/get_started/zh/maixIV/m4ndock/FAQ' }
          ]
        },
        {
          text: 'Meshtastic 设备',
          items: [
            { text: 'Meshtastic 设备', link: '/get_started/zh/Meshtastic/Meshtastic_lilygo' },
            { text: 'Meshtastic 下载', link: '/get_started/zh/Meshtastic/Meshtastic_use' },
            { text: 'Meshtastic FAQ', link: '/get_started/zh/Meshtastic/Meshtastic_FAQ/Meshtastic_FAQ' }
          ]
        },
        {
          text: 'Meshcore 设备',
          items: [
            { text: 'Meshcore 使用', link: '/get_started/zh/Meshcore/meshcore' }
          ]
        },
        {
          text: 'LILYGO-Spark',
          items: [
            { text: 'LILYGO-Spark', link: '/get_started/zh/LILYGO-Spark/LILYGO-Spark-zh' }
          ]
        }
      ],

      '/develop/zh/': [
        {
          text: '开发指南',
          items: [
            { text: '插件系统', link: '/develop/zh/plugins' },
          ]
        }
      ],

      '/more/': [
        {
          text: '更多资源',
          items: [
            { text: '首页', link: '/more/' },
          ]
        }
      ],

      // 英文侧边栏配置
      '/get_started/en/': [
          {
            text: 'DISPLAY',
            items: [
              { text: 'T-Circle', items: [
                { text: 'T-Circle', link: '/get_started/en/Display/T-Circle/T-Circle' },
                { text: 'T-Circle S3', link: '/get_started/en/Display/T-Circle-S3/T-Circle-S3' }
              ]},
              { text: 'T-Display', items: [
                { text: 'T-Display P4', link: '/get_started/en/Display/T-Display-P4/T-Display-P4' },
                { text: 'T-Display K230', link: '/get_started/en/Display/T-Display-K230/T-Display-K230' },
                { text: 'T-Display S3 Long', link: '/get_started/en/Display/T-Display-S3-Long/T-Display-S3-Long' },
                { text: 'T-Display S3 Pro', link: '/get_started/en/Display/T-Display-S3-Pro/T-Display-S3-Pro' },
                { text: 'T-Display S3 Pro LR1121', link: '/get_started/en/Display/T-Display-S3-Pro-LR1121/T-Display-S3-Pro-LR1121' },
                { text: 'T-Display S3 AMOLED Plus', link: '/get_started/en/Display/T-Display-S3-AMOLED-Plus/T-Display-S3-AMOLED-Plus' },
                { text: 'T-Display S3 AMOLED 1.43', link: '/get_started/en/Display/T-Display-S3-AMOLED-1.43/T-Display-S3-AMOLED-1.43' },
                { text: 'T-Display S3 AMOLED 1.64', link: '/get_started/en/Display/T-Display-S3-AMOLED-1.64/T-Display-S3-AMOLED-1.64' },
                { text: 'T-Display S3 AMOLED 1.75', link: '/get_started/en/Display/T-Display-S3-AMOLED-1.75/T-Display-S3-AMOLED-1.75' },
                { text: 'T-Display Bar', link: '/get_started/en/Display/T-Display-Bar/T-Display-Bar' }
              ]},
              { text: 'T-Pico 2350', link: '/get_started/en/Display/T-Pico-2350/T-Pico-2350' },
              { text: 'T-QT C6', link: '/get_started/en/Display/T-QT-C6/T-QT-C6' },
              { text: 'T-Encoder Pro', link: '/get_started/en/Display/T-Encoder-Pro/T-Encoder-Pro' },
              { text: 'T-Camera Plus S3', link: '/get_started/en/Display/T-Camera-Plus-S3/T-Camera-Plus-S3' },
              { text: 'T-Keyboard S3 Pro', link: '/get_started/en/Display/T-Keyboard-S3-Pro/T-Keyboard-S3-Pro' },
              { text: 'T-Dongle C5', link: '/get_started/en/Display/T-Dongle-C5/T-Dongle-C5' },
              { text: 'T-Dongle S3', link: '/get_started/en/Display/T-Dongle-S3/T-Dongle-S3' }
            ]
          },
          {
            text: 'Wearable & Handheld Devices',
            items: [
              { text: 'T-Watch', items: [
                { text: 'T-Watch S3 Plus', link: '/get_started/en/Wearable/T-Watch-S3-PLUS/T-Watch-S3-PLUS' },
                { text: 'T-Watch Ultra', link: '/get_started/en/Wearable/T-Watch-Ultra/T-Watch-Ultra' }
              ]},
              { text: 'T5 E-Paper', items: [
                { text: 'T5 E-Paper', link: '/get_started/en/Wearable/T5-E-Paper/T5-E-Paper' },
                { text: 'T5 E-Paper S3 Pro', link: '/get_started/en/Wearable/T5-E-Paper-S3-Pro/T5-E-Paper-S3-Pro' },
                { text: 'T5 E-Paper S3 Lite', link: '/get_started/en/Wearable/T5-E-Paper-Lite/T5-E-Paper-Lite' }
              ]},
              { text: 'T-Deck', items: [
                { text: 'T-Deck', link: '/get_started/en/Wearable/T-Deck/T-Deck' },
                { text: 'T-Deck Plus', link: '/get_started/en/Wearable/T-Deck-Plus/T-Deck-Plus' },
                { text: 'T-Deck Pro', link: '/get_started/en/Wearable/T-Deck-Pro/T-Deck-Pro' }
              ]},
              { text: 'T-Echo', items: [
                { text: 'T-Echo', link: '/get_started/en/Wearable/T-Echo/T-Echo' },
                { text: 'T-Echo Lite', link: '/get_started/en/Wearable/T-Echo-Lite/T-Echo-Lite' }
              ]},
              { text: 'T-Embed CC1101', link: '/get_started/en/Wearable/T-Embed-CC1101/T-Embed-CC1101' },
              { text: 'T-Embed SI4732', link: '/get_started/en/Wearable/T-Embed-SI4732/T-Embed-SI4732' },
              { text: 'T-Glass', link: '/get_started/en/Wearable/T-Glass/T-Glass' },
              { text: 'T-Mini E-paper-S3', link: '/get_started/en/Wearable/T-Mini-E-paper-S3/T-Mini-E-paper-S3' }
            ]
          },
          {
            text: 'Wireless Communication Devices',
            items: [
              { text: 'LoRa/GPS', items: [
                { text: 'T3 S3', link: '/get_started/en/LoRa_GPS/T3S3/T3S3' },
                { text: 'T-LoRa32', link: '/get_started/en/LoRa_GPS/LoRa32/LoRa32' },
                { text: 'T-LoRa-C6', link: '/get_started/en/LoRa_GPS/T-LoRa-C6/T-LoRa-C6' },
                { text: 'T-LoRa Dual', link: '/get_started/en/LoRa_GPS/T-Lora-Dual/T-Lora-Dual' },
                { text: 'T3 STM32', link: '/get_started/en/LoRa_GPS/T3-STM32/T3-STM32' },
                { text: 'T3 TXCO', link: '/get_started/en/LoRa_GPS/T3-TXCO/T3-TXCO' },
                { text: 'T3-S3 LR1121', link: '/get_started/en/LoRa_GPS/T3-S3-LR1121/T3-S3-LR1121' },
                { text: 'T3-S3 E-paper', link: '/get_started/en/LoRa_GPS/T3-S3-E-paper/T3-S3-E-paper' },
                { text: 'T3-S3 MVSRBoard', link: '/get_started/en/LoRa_GPS/T3-S3_MVSRBoard/T3-S3_MVSRBoard' },
                { text: 'T-LoraPager', link: '/get_started/en/LoRa_GPS/T-LoraPager/T-LoraPager' },
                { text: 'T-Beam 1W', link: '/get_started/en/LoRa_GPS/T-Beam-1W/T-Beam-1W' },
                { text: 'T-Beam SUPREME', link: '/get_started/en/LoRa_GPS/T-Beam-SUPREME/T-Beam-SUPREME' }
              ]},
              { text: 'High Speed Communication', items: [
                { text: 'T-TWR', link: '/get_started/en/High_speed/T-TWR/T-TWR' },
                { text: 'T-Halow', link: '/get_started/en/High_speed/T-Halow/T-Halow' },
                { text: 'T-Halow-P4', link: '/get_started/en/High_speed/T-Halow-P4/T-Halow-P4' },
                { text: 'T-Connect', link: '/get_started/en/High_speed/T-Connect/T-Connect' },
                { text: 'T-Connect Pro', link: '/get_started/en/High_speed/T-Connect-Pro/T-Connect-Pro' },
                { text: 'T-Sim Shield', link: '/get_started/en/High_speed/T-Sim-Shield/T-Sim-Shield' },
                { text: 'T-ETH', items: [
                  { text: 'T-ETH-Elite', link: '/get_started/en/High_speed/T-ETH/T-ETH-Elite/T-ETH-Elite' },
                  { text: 'T-ETH-Gateway', link: '/get_started/en/High_speed/T-ETH/T-ETH-Gateway/T-ETH-Gateway' },
                  { text: 'T-ETH-LoRa-shield', link: '/get_started/en/High_speed/T-ETH/T-ETH-LoRa-shield/T-ETH-LoRa-shield' },
                  { text: 'T-ETH-1302', link: '/get_started/en/High_speed/T-ETH/T-ETH-1302/T-ETH-1302' }
                ]},
                { text: 'T-ETH-Lite', items: [
                  { text: 'T-ETH-Lite', link: '/get_started/en/High_speed/T-ETH-Lite/T-ETH-Lite/T-ETH-Lite' },
                  { text: 'T-ETH-Lite-S3', link: '/get_started/en/High_speed/T-ETH-Lite/T-ETH-Lite-S3/T-ETH-Lite-S3' }
                ]},
                { text: 'T-2Can', link: '/get_started/en/High_speed/T-2Can/T-2Can' },
                { text: 'T-PCIE', items: [
                  { text: 'SIM7600E', link: '/get_started/en/High_speed/T-PCIE/SIM7600E/SIM7600E' },
                  { text: 'T-A7670', items: [
                    { text: 'T-A7670E', link: '/get_started/en/High_speed/T-PCIE/T-A7670/T-A7670E/T-A7670E' },
                    { text: 'T-A7670G', link: '/get_started/en/High_speed/T-PCIE/T-A7670/T-A7670G/T-A7670G' },
                    { text: 'T-A7670SA', link: '/get_started/en/High_speed/T-PCIE/T-A7670/T-A7670SA/T-A7670SA' }
                  ]}
                ]}
              ]}
            ]
          },
          {
            text: 'AI Devices',
            items: [
              { text: 'T-Display K230', link: '/get_started/en/AI/T-Display-K230/T-Display-K230' },
              { text: 'T-Bao', link: '/get_started/en/AI/T-Bao/T-Bao' },
              { text: 'T-Circle S3', link: '/get_started/en/AI/T-Circle-S3/T-Circle-S3' }
            ]
          },
          {
            text: 'Basic Devices',
            items: [
              { text: 'T7 C6', link: '/get_started/en/Basic_Module/T7_C6/T7_C6' },
              { text: 'T-Knob', link: '/get_started/en/Basic_Module/T-Knob/T-Knob' }
            ]
          },
          {
            text: 'Expansion Modules',
            items: [
              { text: 'T-BHI260AP', link: '/get_started/en/Expand_Module/T-BHI260AP/T-BHI260AP' },
              { text: 'T-Solar', link: '/get_started/en/Expand_Module/T-Solar/T-Solar' },
              { text: 'T-Radar', link: '/get_started/en/Expand_Module/T-Radar/T-Radar' }
            ]
          },
          {
            text: 'FAQ',
            items: [
              { text: 'FAQ', link: '/get_started/en/maixIV/m4ndock/FAQ' }
            ]
          },
          {
            text: 'Meshtastic Devices',
            items: [
              { text: 'Meshtastic Devices', link: '/get_started/en/Meshtastic/Meshtastic_lilygo' },
              { text: 'Meshtastic Download', link: '/get_started/en/Meshtastic/Meshtastic_use' },
              { text: 'Meshtastic FAQ', link: '/get_started/en/Meshtastic/Meshtastic_FAQ/Meshtastic_FAQ' }
            ]
          },
          {
            text: 'Meshcore Devices',
            items: [
              { text: 'Meshcore Usage', link: '/get_started/en/Meshcore/meshcore' }
            ]
          },
          {
            text: 'LILYGO-Spark',
            items: [
              { text: 'LILYGO-Spark', link: '/get_started/en/LILYGO-Spark/LILYGO-Spark-zh' }
            ]
          }
        ],

      '/develop/en/': [
        {
          text: 'Development Guide',
          items: [
            { text: 'Plugins', link: '/develop/en/plugins' },
          ]
        }
      ],
    },

    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 LILYGO'
    },

    // 社交媒体链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xinyuan-LilyGO' },
      { icon: 'x', link: 'https://x.com/lilygo9' },
      { icon: 'youtube', link: 'https://www.youtube.com/@LILYGO' },
    ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/LILYGOpp/LILYGO_wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 搜索配置
    search: {
      provider: 'local'
    }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        logo: '/static/image/logo.png',
        siteTitle: 'LILYGO',

        // English navigation bar
        nav: [
          { text: 'Products', link: '/product_en' },
          { text: 'START', link: '/news/' },
          { text: 'Develop', link: '/develop/en/' },
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

        // English sidebar configuration
        sidebar: {
          '/get_started/en/': [
            {
              text: 'DISPLAY',
              items: [
                { text: 'T-Circle', items: [
                  { text: 'T-Circle', link: '/get_started/en/Display/T-Circle/T-Circle' },
                  { text: 'T-Circle S3', link: '/get_started/en/Display/T-Circle-S3/T-Circle-S3' }
                ]},
                { text: 'T-Display', items: [
                  { text: 'T-Display P4', link: '/get_started/en/Display/T-Display-P4/T-Display-P4' },
                  { text: 'T-Display K230', link: '/get_started/en/Display/T-Display-K230/T-Display-K230' },
                  { text: 'T-Display S3 Long', link: '/get_started/en/Display/T-Display-S3-Long/T-Display-S3-Long' },
                  { text: 'T-Display S3 Pro', link: '/get_started/en/Display/T-Display-S3-Pro/T-Display-S3-Pro' },
                  { text: 'T-Display S3 Pro LR1121', link: '/get_started/en/Display/T-Display-S3-Pro-LR1121/T-Display-S3-Pro-LR1121' },
                  { text: 'T-Display S3 AMOLED Plus', link: '/get_started/en/Display/T-Display-S3-AMOLED-Plus/T-Display-S3-AMOLED-Plus' },
                  { text: 'T-Display S3 AMOLED 1.43', link: '/get_started/en/Display/T-Display-S3-AMOLED-1.43/T-Display-S3-AMOLED-1.43' },
                  { text: 'T-Display S3 AMOLED 1.64', link: '/get_started/en/Display/T-Display-S3-AMOLED-1.64/T-Display-S3-AMOLED-1.64' },
                  { text: 'T-Display S3 AMOLED 1.75', link: '/get_started/en/Display/T-Display-S3-AMOLED-1.75/T-Display-S3-AMOLED-1.75' },
                  { text: 'T-Display Bar', link: '/get_started/en/Display/T-Display-Bar/T-Display-Bar' }
                ]},
                { text: 'T-Pico 2350', link: '/get_started/en/Display/T-Pico-2350/T-Pico-2350' },
                { text: 'T-QT C6', link: '/get_started/en/Display/T-QT-C6/T-QT-C6' },
                { text: 'T-Encoder Pro', link: '/get_started/en/Display/T-Encoder-Pro/T-Encoder-Pro' },
                { text: 'T-Camera Plus S3', link: '/get_started/en/Display/T-Camera-Plus-S3/T-Camera-Plus-S3' },
                { text: 'T-Keyboard S3 Pro', link: '/get_started/en/Display/T-Keyboard-S3-Pro/T-Keyboard-S3-Pro' },
                { text: 'T-Dongle C5', link: '/get_started/en/Display/T-Dongle-C5/T-Dongle-C5' },
                { text: 'T-Dongle S3', link: '/get_started/en/Display/T-Dongle-S3/T-Dongle-S3' }
              ]
            },
            {
              text: 'Wearable & Handheld Devices',
              items: [
                { text: 'T-Watch', items: [
                  { text: 'T-Watch S3 Plus', link: '/get_started/en/Wearable/T-Watch-S3-PLUS/T-Watch-S3-PLUS' },
                  { text: 'T-Watch Ultra', link: '/get_started/en/Wearable/T-Watch-Ultra/T-Watch-Ultra' }
                ]},
                { text: 'T5 E-Paper', items: [
                  { text: 'T5 E-Paper', link: '/get_started/en/Wearable/T5-E-Paper/T5-E-Paper' },
                  { text: 'T5 E-Paper S3 Pro', link: '/get_started/en/Wearable/T5-E-Paper-S3-Pro/T5-E-Paper-S3-Pro' },
                  { text: 'T5 E-Paper S3 Lite', link: '/get_started/en/Wearable/T5-E-Paper-Lite/T5-E-Paper-Lite' }
                ]},
                { text: 'T-Deck', items: [
                  { text: 'T-Deck', link: '/get_started/en/Wearable/T-Deck/T-Deck' },
                  { text: 'T-Deck Plus', link: '/get_started/en/Wearable/T-Deck-Plus/T-Deck-Plus' },
                  { text: 'T-Deck Pro', link: '/get_started/en/Wearable/T-Deck-Pro/T-Deck-Pro' }
                ]},
                { text: 'T-Echo', items: [
                  { text: 'T-Echo', link: '/get_started/en/Wearable/T-Echo/T-Echo' },
                  { text: 'T-Echo Lite', link: '/get_started/en/Wearable/T-Echo-Lite/T-Echo-Lite' }
                ]},
                { text: 'T-Embed CC1101', link: '/get_started/en/Wearable/T-Embed-CC1101/T-Embed-CC1101' },
                { text: 'T-Embed SI4732', link: '/get_started/en/Wearable/T-Embed-SI4732/T-Embed-SI4732' },
                { text: 'T-Glass', link: '/get_started/en/Wearable/T-Glass/T-Glass' },
                { text: 'T-Mini E-paper-S3', link: '/get_started/en/Wearable/T-Mini-E-paper-S3/T-Mini-E-paper-S3' }
              ]
            },
            {
              text: 'Wireless Communication Devices',
              items: [
                { text: 'LoRa/GPS', items: [
                  { text: 'T3 S3', link: '/get_started/en/LoRa_GPS/T3S3/T3S3' },
                  { text: 'T-LoRa32', link: '/get_started/en/LoRa_GPS/LoRa32/LoRa32' },
                  { text: 'T-LoRa-C6', link: '/get_started/en/LoRa_GPS/T-LoRa-C6/T-LoRa-C6' },
                  { text: 'T-LoRa Dual', link: '/get_started/en/LoRa_GPS/T-Lora-Dual/T-Lora-Dual' },
                  { text: 'T3 STM32', link: '/get_started/en/LoRa_GPS/T3-STM32/T3-STM32' },
                  { text: 'T3 TXCO', link: '/get_started/en/LoRa_GPS/T3-TXCO/T3-TXCO' },
                  { text: 'T3-S3 LR1121', link: '/get_started/en/LoRa_GPS/T3-S3-LR1121/T3-S3-LR1121' },
                  { text: 'T3-S3 E-paper', link: '/get_started/en/LoRa_GPS/T3-S3-E-paper/T3-S3-E-paper' },
                  { text: 'T3-S3 MVSRBoard', link: '/get_started/en/LoRa_GPS/T3-S3_MVSRBoard/T3-S3_MVSRBoard' },
                  { text: 'T-LoraPager', link: '/get_started/en/LoRa_GPS/T-LoraPager/T-LoraPager' },
                  { text: 'T-Beam 1W', link: '/get_started/en/LoRa_GPS/T-Beam-1W/T-Beam-1W' },
                  { text: 'T-Beam SUPREME', link: '/get_started/en/LoRa_GPS/T-Beam-SUPREME/T-Beam-SUPREME' }
                ]},
                { text: 'High Speed Communication', items: [
                  { text: 'T-TWR', link: '/get_started/en/High_speed/T-TWR/T-TWR' },
                  { text: 'T-Halow', link: '/get_started/en/High_speed/T-Halow/T-Halow' },
                  { text: 'T-Halow-P4', link: '/get_started/en/High_speed/T-Halow-P4/T-Halow-P4' },
                  { text: 'T-Connect', link: '/get_started/en/High_speed/T-Connect/T-Connect' },
                  { text: 'T-Connect Pro', link: '/get_started/en/High_speed/T-Connect-Pro/T-Connect-Pro' },
                  { text: 'T-Sim Shield', link: '/get_started/en/High_speed/T-Sim-Shield/T-Sim-Shield' },
                  { text: 'T-ETH', items: [
                    { text: 'T-ETH-Elite', link: '/get_started/en/High_speed/T-ETH/T-ETH-Elite/T-ETH-Elite' },
                    { text: 'T-ETH-Gateway', link: '/get_started/en/High_speed/T-ETH/T-ETH-Gateway/T-ETH-Gateway' },
                    { text: 'T-ETH-LoRa-shield', link: '/get_started/en/High_speed/T-ETH/T-ETH-LoRa-shield/T-ETH-LoRa-shield' },
                    { text: 'T-ETH-1302', link: '/get_started/en/High_speed/T-ETH/T-ETH-1302/T-ETH-1302' }
                  ]},
                  { text: 'T-ETH-Lite', items: [
                    { text: 'T-ETH-Lite', link: '/get_started/en/High_speed/T-ETH-Lite/T-ETH-Lite/T-ETH-Lite' },
                    { text: 'T-ETH-Lite-S3', link: '/get_started/en/High_speed/T-ETH-Lite/T-ETH-Lite-S3/T-ETH-Lite-S3' }
                  ]},
                  { text: 'T-2Can', link: '/get_started/en/High_speed/T-2Can/T-2Can' },
                  { text: 'T-A7670', link: '/get_started/en/High_speed/T-A7670/T-A7670' },
                  { text: 'T-SIM7000G', link: '/get_started/en/High_speed/T-SIM7000G/T-SIM7000G' },
                  { text: 'T-SIM7080G', link: '/get_started/en/High_speed/T-SIM7080G/T-SIM7080G' },
                  { text: 'T-SIM7600', link: '/get_started/en/High_speed/T-SIM7600/T-SIM7600' },
                  { text: 'T-PCIE', link: '/get_started/en/High_speed/T-PCIE/T-PCIE' }
                ]}
              ]
            },
            {
              text: 'AI Devices',
              items: [
                { text: 'T-Bao', link: '/get_started/en/AI/T-Bao/T-Bao' },
                { text: 'T-Circle S3', link: '/get_started/en/AI/T-Circle-S3/T-Circle-S3' },
                { text: 'T-Display K230', link: '/get_started/en/AI/T-Display-K230/T-Display-K230' }
              ]
            },
            {
              text: 'Basic Modules',
              items: [
                { text: 'T-BHI260AP', link: '/get_started/en/Basic_Module/T-BHI260AP/T-BHI260AP' },
                { text: 'T-Knob', link: '/get_started/en/Basic_Module/T-Knob/T-Knob' },
                { text: 'T7 C6', link: '/get_started/en/Basic_Module/T7_C6/T7_C6' }
              ]
            },
            {
              text: 'Expansion Modules',
              items: [
                { text: 'T-BHI260AP', link: '/get_started/en/Expand_Module/T-BHI260AP/T-BHI260AP' },
                { text: 'T-Radar', link: '/get_started/en/Expand_Module/T-Radar/T-Radar' },
                { text: 'T-Solar', link: '/get_started/en/Expand_Module/T-Solar/T-Solar' }
              ]
            },
            {
              text: 'LILYGO Spark',
              items: [
                { text: 'LILYGO Spark', link: '/get_started/en/LILYGO-Spark/LILYGO-Spark-en' }
              ]
            }
          ]
        },

        // Footer
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 LILYGO'
        },

        // Social links
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Xinyuan-LilyGO' },
          { icon: 'x', link: 'https://x.com/lilygo9' },
          { icon: 'youtube', link: 'https://www.youtube.com/@LILYGO' },
        ],

        // Edit link
        editLink: {
          pattern: 'https://github.com/LILYGOpp/LILYGO_wiki/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },

        // Search
        search: {
          provider: 'local'
        }
      }
    }
  }
})
