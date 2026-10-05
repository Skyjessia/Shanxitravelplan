/* ============================================
   行程数据模板 · 使用说明
============================================
   复制本文件 → 改名 data/trips/YYYY-目的地.js
   填好两块数据 → index.html 加一行 script 引用
   （详见 data/bank.js 顶部SOP）

   必填最小集（30秒门槛）：
   · trip：year / title / destination / type / memoryStatus
   · 每个 place：tripId / country / region / city / lat / lng / status
   其余字段可空、可后补——先点亮，血肉慢慢长
============================================ */

/* —— ① 行程块（一次旅行一条） —— */

TRIP_BANK.push({

    id: "YYYY-dest",            // 年份-拼音，全库唯一

    title: "旅行名",

    destination: "省 · 省",      // 省级展示（国外填国名）

    country: "中国",

    year: 2026,                 // 年份筛选维度

    startDate: "",              // 可空，有就填 YYYY-MM-DD

    endDate: "",

    cover: "",                  // 封面图路径，可空=默认灰底

    type: "trip",               // trip旅行 / museum博物馆 / daytrip一日游

    status: "completed",

    memoryStatus: "none",       // done已数字化 / partial部分 / none只有记忆

    description: "一句话记忆",

    guidePage: "",              // 攻略页链接，可空

    memoryPage: ""              // 回忆页链接，可空

});


/* —— ② 点亮块（每个城市一条） —— */

PLACE_BANK.push({

    tripId: "YYYY-dest",        // 对应上面的 id

    country: "中国",

    region: "省份",              // 国内=省，国外=州/府/郡

    city: "城市",                // 抵达粒度：踩过的最小行政单元

    lat: 0.0,                   // 纬度

    lng: 0.0,                   // 经度

    day: 1,                     // 行程第几天（未来画路线）

    status: "visited",          // visited点亮 / passed路过

    sites: [],                  // 景点下沉：["景点A", "景点B"]

    note: ""                    // 一句话

});
