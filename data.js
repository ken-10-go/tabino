const TABINO_DATA = {
  cover: {
    icon: '🗺️',
    title: '旅のしおり',
    subtitle: '京都ドライブ旅 2025',
    meta: [
      '📅 6月6日（土）〜 6月8日（月）',
      '🚗 神戸垂水 発',
      '👨‍👩‍👦 大人2名＋子ども1名'
    ]
  },

  schedule: {
    days: [
      {
        label: '1日目 6/6（土）',
        badge: 'd1',
        note: '移動・チェックイン',
        tlId: 'tl-day1',
        cardId: 'card-day1',
        items: [
          {
            dot: 'sub',
            time: '夕方（17:00〜18:00頃）',
            title: '🚗 神戸・垂水（自宅）を出発',
            desc: '自家用車にて出発',
            transport: '🚗 自家用車 ／ 約60〜90分'
          },
          {
            dot: 'main',
            time: '19:00〜20:00',
            title: '🍽️ 烏丸・四条エリアでディナー',
            desc: 'ホテルマイステイズ京都四条 周辺のレストランで夕食'
          },
          {
            dot: 'main',
            time: '20:00（22:00厳守）',
            title: '🏨 ホテルマイステイズ京都四条 チェックイン',
            desc: '四条通油小路・烏丸エリア',
            note: '⚠️ チェックイン22:00厳守 ／ 駐車場満車時は周辺コインパーキング利用'
          }
        ]
      },
      {
        label: '2日目 6/7（日）',
        badge: 'd2',
        note: '美術館・Nintendo KYOTO・1人帰宅',
        tlId: 'tl-day2',
        cardId: 'card-day2',
        items: [
          {
            dot: '',
            time: '〜11:00頃',
            title: '🏨 ホテルマイステイズ京都四条 チェックアウト',
            desc: '車をホテルモントレ京都へ移動・駐車し、荷物を預ける',
            info: '💡 ホテルモントレ京都から市内は公共交通機関 or 徒歩で移動'
          },
          {
            dot: 'main',
            time: '午前〜昼',
            title: '🎨 イベント①：京都市京セラ美術館「どろぼう展」',
            desc: '岡崎エリア',
            transport: '🚌 ホテルモントレ京都から市バス or 徒歩'
          },
          {
            dot: 'main',
            time: '昼〜午後',
            title: '<span class="star">★</span> イベント②：Nintendo KYOTO（京都髙島屋S.C. T8 7F）',
            desc: '四条河原町エリア',
            transport: '🚶 京セラ美術館 → 四条河原町（徒歩 or バス）'
          },
          {
            dot: 'main',
            time: '15:00〜',
            title: '🏨 ホテルモントレ京都 チェックイン',
            desc: '烏丸通三条エリア'
          },
          {
            dot: 'main',
            time: '夕方',
            title: '🚄 イベント③：京都駅から1人帰宅',
            desc: 'ホテルモントレ京都 → 京都駅 → 新幹線 or 電車で先行帰宅',
            note: '👋 残る2人はホテルモントレ京都に宿泊'
          }
        ]
      },
      {
        label: '3日目 6/8（月）',
        badge: 'd3',
        note: 'ニンテンドーミュージアム・帰路',
        tlId: 'tl-day3',
        cardId: 'card-day3',
        items: [
          {
            dot: '',
            time: '〜12:00',
            title: '🏨 ホテルモントレ京都 チェックアウト',
            desc: 'チェックアウト後、車でニンテンドーミュージアム（宇治・小倉町）へ',
            transport: '🚗 ホテルモントレ京都 → ニンテンドーミュージアム ／ 約30〜40分'
          },
          {
            dot: 'sub',
            time: '到着後すぐ',
            title: '🅿️ 京光製作所裏駐車場（akippa予約済み）に駐車',
            desc: 'ニンテンドーミュージアムまで徒歩圏内',
            note: '⚠️ 東側スペース・前向き駐車必須！'
          },
          {
            dot: 'main',
            time: '11:30〜（予約時間）',
            title: '<span class="star">★★</span> イベント④：ニンテンドーミュージアム',
            desc: '宇治市小倉町 ／ 本旅行のメインイベント！',
            info: '🎮 予約時間：11:30〜 を厳守'
          },
          {
            dot: 'sub',
            time: '午後（終了後）',
            title: '🚗 ニンテンドーミュージアムから神戸・垂水（自宅）へ帰路',
            desc: 'お疲れさまでした！',
            transport: '🚗 ニンテンドーミュージアム → 神戸・垂水 ／ 約90〜120分'
          }
        ]
      }
    ]
  },

  hotels: [
    {
      id: 'hotel1',
      night: '1泊目 — 6/6（土）',
      plan: '素泊まり',
      headerStyle: '',
      name: 'ホテルマイステイズ京都四条',
      rowsId: 'hotel1-rows',
      rows: [
        { label: '📍 住所', val: '京都市下京区四条通油小路東入ル傘鉾町52' },
        { label: '🕗 CI', val: '20:00予定（<strong>22:00厳守</strong>）' },
        { label: '🅿️ 駐車場', val: 'ホテル併設（台数少）／ 満車時は周辺コインパーキング' },
        { label: '📋 プラン', val: '素泊まり' }
      ]
    },
    {
      id: 'hotel2',
      night: '2泊目 — 6/7（日）',
      plan: '素泊まり',
      headerStyle: 'background:var(--terra);',
      name: 'ホテルモントレ京都',
      rowsId: 'hotel2-rows',
      rows: [
        { label: '📍 住所', val: '京都市中京区烏丸通三条下ル饅頭屋町604' },
        { label: '🕒 CI', val: '15:00〜' },
        { label: '🕛 CO', val: '〜12:00' },
        { label: '🅿️ 駐車場', val: 'ホテル地下（先着順・有料）' },
        { label: '📋 プラン', val: '素泊まり' }
      ]
    }
  ],

  parking: {
    name: '京光製作所裏駐車場（akippa）',
    rowsId: 'parking-rows',
    rows: [
      { label: '📍 エリア', val: '宇治市小倉町（ニンテンドーミュージアム徒歩圏内）' },
      { label: '📋 予約', val: 'akippa にて予約済み' }
    ],
    warning: '⚠️ <strong>東側スペースに前向き駐車必須！</strong>'
  },

  checklist: [
    {
      id: 'cg-docs',
      title: '📄 必須書類・チケット類',
      items: [
        '運転免許証',
        'ホテル予約確認メール・バウチャー',
        'ニンテンドーミュージアム 予約QR',
        'akippa 駐車場予約確認',
        '新幹線・電車チケット（帰宅用・1人分）',
        'どろぼう展 チケット（必要な場合）'
      ]
    },
    {
      id: 'cg-money',
      title: '💳 お金・支払い',
      items: [
        '現金（コインパーキング・細かい支払い用）',
        'クレジットカード',
        'ICカード（ICOCA等）'
      ]
    },
    {
      id: 'cg-digital',
      title: '📱 デジタル・電子機器',
      items: [
        'スマートフォン・充電器',
        'モバイルバッテリー',
        'カメラ・充電ケーブル',
        'カーナビ・スマホホルダー'
      ]
    },
    {
      id: 'cg-clothes',
      title: '👕 衣類・日用品',
      items: [
        '着替え（2〜3日分）',
        '洗面・歯ブラシセット',
        'タオル',
        '日焼け止め',
        '折りたたみ傘・雨具'
      ]
    },
    {
      id: 'cg-kids',
      title: '👦 子ども用品',
      items: [
        '飲み物・おやつ（車内用）',
        '常備薬・保険証',
        '暇つぶしグッズ（本・ゲーム等）'
      ]
    }
  ],

  info: {
    hotels: [
      { name: 'ホテルマイステイズ京都四条', sub: '1泊目 / 6月6日', val: '075-341-5353' },
      { name: 'ホテルモントレ京都', sub: '2泊目 / 6月7日', val: '075-251-7111' }
    ],
    emergency: [
      { name: 'JAF ロードサービス', val: '0570-00-8139' },
      { name: '警察（緊急）', val: '110' },
      { name: '救急・消防', val: '119' }
    ],
    spots: [
      { name: '京都市京セラ美術館', sub: 'どろぼう展', addr: '左京区岡崎円勝寺町124' },
      { name: 'Nintendo KYOTO', sub: '髙島屋S.C. T8 7F', addr: '下京区四条通河原町西入真町52' },
      { name: 'ニンテンドーミュージアム', sub: '予約 11:30〜', addr: '宇治市小倉町神楽田56' }
    ]
  },

  map: {
    center: [34.98, 135.73],
    zoom: 10,
    spots: [
      { lat: 34.6443, lng: 135.0156, label: '神戸・垂水（出発地）', color: '#888', day: '出発地' },
      { lat: 35.0036, lng: 135.7556, label: 'ホテルマイステイズ京都四条', color: '#e07820', day: '1日目 宿泊' },
      { lat: 35.0114, lng: 135.7824, label: '京都市京セラ美術館', color: '#b04010', day: '2日目 どろぼう展' },
      { lat: 35.0031, lng: 135.7714, label: 'Nintendo KYOTO（髙島屋T8 7F）', color: '#b04010', day: '2日目' },
      { lat: 35.0116, lng: 135.7581, label: 'ホテルモントレ京都', color: '#e07820', day: '2日目 宿泊' },
      { lat: 35.0066, lng: 135.7540, label: '京都駅', color: '#888', day: '2日目 帰宅出発点' },
      { lat: 34.9380, lng: 135.7014, label: 'ニンテンドーミュージアム', color: '#4a7040', day: '3日目 メインイベント' }
    ],
    routes: [
      { points: [[34.6443,135.0156],[35.0036,135.7556]], color: '#7a4810', weight: 2.5 },
      { points: [[35.0036,135.7556],[35.0116,135.7581],[35.0114,135.7824],[35.0031,135.7714]], color: '#b04010', weight: 2 },
      { points: [[35.0116,135.7581],[34.9380,135.7014],[34.6443,135.0156]], color: '#4a7040', weight: 2.5 }
    ],
    gmapLinks: [
      { label: '🏨 ホテルマイステイズ京都四条', query: 'ホテルマイステイズ京都四条', day: '1日目 宿泊' },
      { label: '🎨 京都市京セラ美術館', query: '京都市京セラ美術館', day: '2日目 どろぼう展' },
      { label: '🎮 Nintendo KYOTO（髙島屋T8 7F）', query: 'Nintendo+KYOTO+京都髙島屋', day: '2日目 ショップ' },
      { label: '🏨 ホテルモントレ京都', query: 'ホテルモントレ京都', day: '2日目 宿泊' },
      { label: '🚄 京都駅', query: '京都駅', day: '2日目 帰宅出発点' },
      { label: '⭐ ニンテンドーミュージアム', query: 'ニンテンドーミュージアム+宇治', day: '3日目 メイン' }
    ],
    routeSummary: [
      { num: '1', color: '#7a4810', text: '神戸・垂水（自宅）→ ホテルマイステイズ京都四条', transport: '🚗 約60〜90分' },
      { num: '2', color: '#b04010', text: 'ホテルモントレ京都 → 京セラ美術館 → Nintendo KYOTO', transport: '🚶/🚌' },
      { num: '3', color: '#4a7040', text: 'ホテルモントレ京都 → ニンテンドーミュージアム', transport: '🚗 約30〜40分' },
      { num: '4', color: '#888', text: 'ニンテンドーミュージアム → 神戸・垂水（自宅）', transport: '🚗 約90〜120分' }
    ]
  }
};
