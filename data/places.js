const places = [

    /* =========================
       2026 晋陕八日 · 中国
    ========================= */

    {
        id: "taiyuan",
        tripId: "2026-shanxi",
        country: "中国",
        region: "山西",
        city: "太原",
        lat: 37.8706,
        lng: 112.5489,
        status: "visited",
        sites: ["晋祠"]
    },

    {
        id: "xinzhou",
        tripId: "2026-shanxi",
        country: "中国",
        region: "山西",
        city: "忻州",
        lat: 38.4160,
        lng: 112.7339,
        status: "visited",
        sites: ["雁门关"],
        note: "天子守国门，君王死社稷的现场"
    },

    {
        id: "datong",
        tripId: "2026-shanxi",
        country: "中国",
        region: "山西",
        city: "大同",
        lat: 40.0768,
        lng: 113.3001,
        status: "visited",
        sites: ["悬空寺", "云冈石窟"],
        note: "半部北魏史·会笑的佛"
    },

    {
        id: "shuozhou",
        tripId: "2026-shanxi",
        country: "中国",
        region: "山西",
        city: "朔州",
        lat: 39.3312,
        lng: 112.4330,
        status: "visited",
        sites: ["应县木塔"],
        note: "千年斗拱·希望有生之年再见它一面"
    },

    {
        id: "pingyao",
        tripId: "2026-shanxi",
        country: "中国",
        region: "山西",
        city: "平遥",
        lat: 37.1892,
        lng: 112.1764,
        status: "visited",
        sites: ["平遥古城", "《又见平遥》"]
    },

    {
        id: "yuncheng",
        tripId: "2026-shanxi",
        country: "中国",
        region: "山西",
        city: "运城",
        lat: 35.0232,
        lng: 110.9974,
        status: "visited"
    },

    {
        id: "jingbian",
        tripId: "2026-shanxi",
        country: "中国",
        region: "陕西",
        city: "靖边",
        lat: 37.5947,
        lng: 108.7947,
        status: "visited",
        sites: ["波浪谷", "地心谷"],
        note: "火星地貌·信任多一点的下午"
    },

    {
        id: "yanan",
        tripId: "2026-shanxi",
        country: "中国",
        region: "陕西",
        city: "延安",
        lat: 36.5855,
        lng: 109.4909,
        status: "visited",
        sites: ["雨岔大峡谷"],
        note: "红岩配绿苔·丁达尔的光"
    },

    /* =========================
       2020 大西北 · 中国
    ========================= */

    {
        id: "xining",
        tripId: "2020-xibei",
        country: "中国",
        region: "青海",
        city: "西宁",
        lat: 36.6171,
        lng: 101.7782,
        day: 1,
        status: "visited",
        sites: ["塔尔寺", "日月山"]
    },

    {
        id: "gonghe",
        tripId: "2020-xibei",
        country: "中国",
        region: "青海",
        city: "共和",
        lat: 36.2864,
        lng: 100.6183,
        day: 2,
        status: "visited",
        sites: ["青海湖"]
    },

    {
        id: "wulan",
        tripId: "2020-xibei",
        country: "中国",
        region: "青海",
        city: "乌兰",
        lat: 36.9297,
        lng: 98.4798,
        day: 3,
        status: "visited",
        sites: ["茶卡盐湖"],
        note: "天空之镜"
    },

    {
        id: "delingha",
        tripId: "2020-xibei",
        country: "中国",
        region: "青海",
        city: "德令哈",
        lat: 37.3694,
        lng: 97.3711,
        day: 3,
        status: "visited"
    },

    {
        id: "dafaidan",
        tripId: "2020-xibei",
        country: "中国",
        region: "青海",
        city: "大柴旦",
        lat: 37.8583,
        lng: 95.3578,
        day: 3,
        status: "visited",
        sites: ["翡翠湖", "乌素特水上雅丹"]
    },

    {
        id: "mangya",
        tripId: "2020-xibei",
        country: "中国",
        region: "青海",
        city: "茫崖",
        lat: 38.2528,
        lng: 90.8565,
        day: 3,
        status: "visited",
        sites: ["艾肯泉·恶魔之眼"]
    },

    {
        id: "dunhuang",
        tripId: "2020-xibei",
        country: "中国",
        region: "甘肃",
        city: "敦煌",
        lat: 40.1421,
        lng: 94.6619,
        day: 8,
        status: "visited",
        sites: ["鸣沙山月牙泉", "又见敦煌"]
    },

    {
        id: "jiayuguan",
        tripId: "2020-xibei",
        country: "中国",
        region: "甘肃",
        city: "嘉峪关",
        lat: 39.7589,
        lng: 98.2896,
        day: 8,
        status: "passed",
        note: "留白·只在记忆里——车过未留影的缺憾美"
    },

    {
        id: "zhangye",
        tripId: "2020-xibei",
        country: "中国",
        region: "甘肃",
        city: "张掖",
        lat: 38.9259,
        lng: 100.4496,
        day: 9,
        status: "visited",
        sites: ["七彩丹霞"],
        note: "Day9特种兵900km翻越祁连山"
    },

    /* =========================
       2026 俄罗斯蓝冰极光 · 俄罗斯
    ========================= */

    {
        id: "irkutsk",
        tripId: "2026-russia",
        country: "俄罗斯",
        region: "伊尔库茨克州",
        city: "伊尔库茨克",
        lat: 52.2870,
        lng: 104.3050,
        day: 1,
        status: "visited",
        sites: ["喀山圣母大教堂", "三大教堂city walk"]
    },

    {
        id: "olkhon",
        tripId: "2026-russia",
        country: "俄罗斯",
        region: "伊尔库茨克州",
        city: "奥利洪岛",
        lat: 53.0496,
        lng: 107.3118,
        day: 2,
        status: "visited",
        sites: ["萨满岩", "北线蓝冰", "气泡冰", "小南线"],
        note: "贝加尔湖·蓝冰与碎碎冰·小木屋"
    },

    {
        id: "murmansk",
        tripId: "2026-russia",
        country: "俄罗斯",
        region: "摩尔曼斯克州",
        city: "摩尔曼斯克",
        lat: 68.9585,
        lng: 33.0827,
        day: 6,
        status: "visited",
        sites: ["列宁号核动力破冰船", "哈士奇乐园", "北极圈极光"],
        note: "极昼白天只有4小时·北极圈的快乐"
    },

    {
        id: "moscow",
        tripId: "2026-russia",
        country: "俄罗斯",
        region: "莫斯科市",
        city: "莫斯科",
        lat: 55.7558,
        lng: 37.6173,
        day: 6,
        status: "passed",
        note: "机场中转·未出港"
    }

];
