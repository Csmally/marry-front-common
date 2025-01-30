enum ENUM_MediaType {
  UNKNOW = "null",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

interface MovieScreenDataType {
  cnContent?: string;
  enContent?: string;
  hasMedia: boolean;
  timer: number;
  mediaType: ENUM_MediaType;
  mediaUrl?: string;
  isEnd: boolean;
  musicText1?: string;
  musicText2?: string;
  speakText1?: string;
  speakText2?: string;
  mediaHorizontal?: boolean;
  rotate?: number;
  startBgMusic?: boolean;
}

const movieData: MovieScreenDataType[] = [
  {
    cnContent: "人的一生有三万多天...",
    enContent: "There are more than 30,000 days in a person's life",
    hasMedia: false,
    timer: 3,
    mediaType: ENUM_MediaType.UNKNOW,
    isEnd: false,
  },
  {
    cnContent: "很开心今天您专程为我们而来",
    enContent: "I'm so glad you could make this day just for us",
    hasMedia: false,
    timer: 5,
    mediaType: ENUM_MediaType.UNKNOW,
    isEnd: false,
  },
  {
    cnContent: "- 我们订婚啦 -",
    enContent: "Our Betrothal",
    hasMedia: false,
    timer: 3,
    mediaType: ENUM_MediaType.UNKNOW,
    isEnd: false,
  },
  {
    cnContent: "杨璇 & 成怡",
    enContent: "CYXI",
    hasMedia: false,
    timer: 5,
    mediaType: ENUM_MediaType.UNKNOW,
    isEnd: false,
  },
  {
    cnContent: "我们的开始. . .",
    enContent: "The Dawn of Our Love...",
    hasMedia: false,
    timer: 2,
    mediaType: ENUM_MediaType.UNKNOW,
    isEnd: false,
  },

  {
    hasMedia: true,
    timer: 7,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen1.webp",
    isEnd: false,
    musicText1: "我为你翻山越岭",
    musicText2: "却无心看风景",
    speakText1: "羊：我们",
    speakText2: "豆：从一束光开始",
    mediaHorizontal: false,
    rotate: -2,
    startBgMusic: true,
  },
  {
    hasMedia: true,
    timer: 9,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen25.webp",
    isEnd: false,
    musicText1: "我想你，鼓足勇气",
    musicText2: "凭爱的地图散播讯息",
    speakText1: "羊：上海 ⇌ 杭州",
    speakText2: "豆：every week,没有例外",
    mediaHorizontal: true,
    rotate: -6,
  },
  {
    hasMedia: true,
    timer: 7,
    mediaType: ENUM_MediaType.IMAGE,
    //改成一张有爱的图片
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen24.webp",
    isEnd: false,
    musicText1: "我永远保护你",
    musicText2: "爱就一个字",
    speakText1: "羊：我保护你",
    speakText2: "豆：我也保护你",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen3.webp",
    isEnd: false,
    musicText1: "♪ ♩ ∮ ¶ ♬",
    musicText2: "♩ ♫ ♬ ¶ ‖ ♭ ♬ ¶",
    speakText1: "羊：这个帽子不好看",
    speakText2: "豆：是你头太大吧",
    mediaHorizontal: false,
    rotate: -8,
  },
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen5.webp",
    isEnd: false,
    musicText1: "♪ ♩ ∮ ¶ ♬",
    musicText2: "¶ ♩ ♫ ♬ ‖ ♭ ♬ ¶",
    speakText1: "羊：被强制贴睫毛",
    speakText2: "豆：是你主动要贴的",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 11,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen6.webp",
    isEnd: false,
    musicText1: "拨开天空的乌云",
    musicText2: "像蓝丝绒一样美丽",
    speakText1: "羊：终于买到了",
    speakText2: "豆：还是13排14座哦",
    mediaHorizontal: false,
    rotate: 3,
  },
  // 演唱会
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen17.webp",
    isEnd: false,
    musicText1: "我想你，身不由己",
    musicText2: "每个念头有新的梦境",
    speakText1: "羊：带着我的前桌，带着我的青春",
    speakText2: "豆：初三坐在我身后的男生带我去看了我的青春",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 9,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen8.webp",
    isEnd: false,
    musicText1: "但愿你没忘记",
    musicText2: "我永远保护你",
    speakText1: "羊：我们上大屏啦",
    speakText2: "豆：两个近视眼加两脸懵逼",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen18.webp",
    isEnd: false,
    musicText1: "两个人相互辉映",
    musicText2: "光芒胜过夜晚繁星",
    speakText1: "羊：生病了",
    speakText2: "豆：多喝热水",
    mediaHorizontal: false,
    rotate: 5,
  },
  {
    hasMedia: true,
    timer: 5,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen9.webp",
    isEnd: false,
    musicText1: "我为你翻山越岭",
    musicText2: "却无心看风景",
    speakText1: "我们的逛吃、逛吃",
    mediaHorizontal: false,
    rotate: 5,
  },
  {
    hasMedia: true,
    timer: 9,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen10.webp",
    isEnd: false,
    musicText1: "我想你，鼓足勇气",
    musicText2: "凭爱的地图散播讯息",
    speakText1: "还是逛吃、逛吃...",
    mediaHorizontal: false,
    rotate: 5,
  },

  {
    hasMedia: true,
    timer: 5,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen7.webp",
    isEnd: false,
    musicText1: "我永远保护你",
    mediaHorizontal: false,
    rotate: 5,
  },

  {
    hasMedia: true,
    timer: 7,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen12.webp",
    isEnd: false,
    musicText1: "爱就一个字，我只说一次",
    musicText2: "你知道我只会用行动表示",
    speakText1: "羊：小羊的礼物",
    speakText2: "豆：生日快乐",
    mediaHorizontal: false,
    rotate: -2,
  },
  {
    hasMedia: true,
    timer: 4,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen16.webp",
    isEnd: false,
    musicText1: "守住了坚持",
    musicText2: "看我为你孤注一掷",
    speakText1: "羊：豆妈给做的生日宴～",
    speakText2: "豆：螃蟹是我做的～",
    mediaHorizontal: true,
    rotate: -8,
  },
  {
    hasMedia: true,
    timer: 7,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen2.webp",
    isEnd: false,
    musicText1: "爱就一个字，我只说一次",
    musicText2: "恐怕听见的人勾起了相思",
    speakText1: "Beautiful Girl!",
    mediaHorizontal: false,
    rotate: -8,
  },
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen19.webp",
    isEnd: false,
    musicText1: "搜索你的影子",
    musicText2: "让你幸福我愿意试",
    speakText1: "豆：普陀山小记",
    speakText2: "羊：年轻人的“烧香拜佛”",
    mediaHorizontal: false,
    rotate: -2,
  },

  // 间奏三张
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen4.webp",
    isEnd: false,
    musicText1: "♪ ♩ ∮ ¶ ♬",
    musicText2: "♩ ♫ ♬ ¶ ‖ ♭ ♬ ¶",
    speakText1: "羊：豆豆的厨艺，好吃",
    mediaHorizontal: false,
    rotate: -8,
  },
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen15.webp",
    isEnd: false,
    musicText1: "♪ ♩ ∮ ¶ ♬",
    musicText2: "♩ ♫ ♬ ¶ ‖ ♭ ♬ ¶",
    speakText1: "豆豆的日常",
    mediaHorizontal: false,
    rotate: -8,
  },
  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen13.webp",
    isEnd: false,
    musicText1: "♪ ♩ ∮ ¶ ♬",
    musicText2: "♩ ♫ ♬ ¶ ‖ ♭ ♬ ¶",
    speakText1: "豆：牛马",
    speakText2: "羊：劳动人民最光荣",
    mediaHorizontal: false,
    rotate: -8,
  },

  {
    hasMedia: true,
    timer: 6,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen14.webp",
    isEnd: false,
    musicText1: "我想你，鼓足勇气",
    musicText2: "凭爱的地图散播讯息",
    speakText1: "豆：差点就以为要一个人跨年了",
    speakText2: "羊：怎么会丢下我的宝子一个人",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 11,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen20.webp",
    isEnd: false,
    musicText1: "但愿你  没忘记",
    musicText2: "我永远保护你",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 7,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen11.webp",
    isEnd: false,
    musicText1: "你知道我只会用行动表示",
    speakText1: "偶尔烧钱的小拌嘴",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 11,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen23.webp",
    isEnd: false,
    musicText1: "看我为你孤注一掷",
    speakText1: "超开心的一天",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 4,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen21.webp",
    isEnd: false,
    musicText1: "承诺一辈子",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 8,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen22.webp",
    isEnd: false,
    musicText1: "付出永远不会太迟",
    speakText1: "豆豆的洞洞鞋",
    mediaHorizontal: false,
  },
  {
    hasMedia: true,
    timer: 15,
    mediaType: ENUM_MediaType.IMAGE,
    mediaUrl: "https://www.onelight.ink/assets/movieScreen/movieScreen26.webp",
    isEnd: false,
    musicText1: "任时光飞逝，搜索你的影子",
    speakText1: "让你幸福是我一生在乎的事",
    mediaHorizontal: false,
    rotate: 6,
  },
  {
    cnContent: "未完待续...",
    enContent: "Our love will endure for all time.",
    hasMedia: false,
    timer: 3,
    mediaType: ENUM_MediaType.UNKNOW,
    isEnd: true,
  },
];

export { movieData, MovieScreenDataType, ENUM_MediaType };
