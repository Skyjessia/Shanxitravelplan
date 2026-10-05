/* ============================================
   Travel Bank · 数据银行入口
============================================
   TRIP_BANK  — 所有行程（一个行程一份文件）
   PLACE_BANK — 所有点亮（跟着行程文件走）

   加一次旅行（SOP三步）：
   1. 复制 data/trips/_template.js
      → 改名 data/trips/YYYY-目的地.js
   2. 填 trip 块 + places 块
   3. index.html 加一行：
      <script src="data/trips/YYYY-目的地.js"></script>
============================================ */

const TRIP_BANK = [];

const PLACE_BANK = [];
