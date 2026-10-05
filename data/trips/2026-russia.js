/* ============================================
   俄罗斯蓝冰极光 · 2026
   数据来源：结构化拆分（2026-10-05）
============================================ */


TRIP_BANK.push(
{
    "id": "2026-russia",
    "title": "俄罗斯蓝冰极光",
    "destination": "伊尔库茨克 · 摩尔曼斯克",
    "country": "俄罗斯",
    "year": 2026,
    "startDate": "2026-02-01",
    "endDate": "2026-02-10",
    "cover": "",
    "type": "trip",
    "status": "completed",
    "memoryStatus": "none",
    "description": "贝加尔湖蓝冰+北极圈极光，11天，奥利洪岛住了3晚小木屋。",
    "guidePage": "",
    "memoryPage": "",
    "places": [
        "伊尔库茨克州",
        "摩尔曼斯克州"
    ]
}
);

/* —— 点亮（4城） —— */

PLACE_BANK.push(
{
    "id": "irkutsk",
    "tripId": "2026-russia",
    "country": "俄罗斯",
    "region": "伊尔库茨克州",
    "city": "伊尔库茨克",
    "lat": 52.287,
    "lng": 104.305,
    "day": 1,
    "status": "visited",
    "sites": [
        "喀山圣母大教堂",
        "三大教堂city walk"
    ]
}
);

PLACE_BANK.push(
{
    "id": "olkhon",
    "tripId": "2026-russia",
    "country": "俄罗斯",
    "region": "伊尔库茨克州",
    "city": "奥利洪岛",
    "lat": 53.0496,
    "lng": 107.3118,
    "day": 2,
    "status": "visited",
    "sites": [
        "萨满岩",
        "北线蓝冰",
        "气泡冰",
        "小南线"
    ],
    "note": "贝加尔湖·蓝冰与碎碎冰·小木屋"
}
);

PLACE_BANK.push(
{
    "id": "murmansk",
    "tripId": "2026-russia",
    "country": "俄罗斯",
    "region": "摩尔曼斯克州",
    "city": "摩尔曼斯克",
    "lat": 68.9585,
    "lng": 33.0827,
    "day": 6,
    "status": "visited",
    "sites": [
        "列宁号核动力破冰船",
        "哈士奇乐园",
        "北极圈极光"
    ],
    "note": "极昼白天只有4小时·北极圈的快乐"
}
);

PLACE_BANK.push(
{
    "id": "moscow",
    "tripId": "2026-russia",
    "country": "俄罗斯",
    "region": "莫斯科市",
    "city": "莫斯科",
    "lat": 55.7558,
    "lng": 37.6173,
    "day": 6,
    "status": "passed",
    "note": "机场中转·未出港"
}
);
