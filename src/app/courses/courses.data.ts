export interface CoursesData {
    key?: string // used for routing
    code: string // 課程代號
    year: number // 課程年份
    season: "spring" | "fall"
    nameZH: string
    nameEN: string
    taList: string[]
    lectureFiles?: CoursesFiles // 講義檔案櫃
    coursesFile?: CoursesFiles // 課程檔案櫃
}

interface CoursesFile {
    name: string;
    url: string;
}

export interface CoursesFiles {
    err: string;
    files: CoursesFile[];
}

export let dataMap: Map<string, CoursesData> = new Map([
    [
        "2024-algorithm",
        {
            code: "F720600",
            year: 2024,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "何瀚宇",
                "張志嘉",
                "周智涵",
                "洪至謙",
                "廖柏丞"
            ]
        }],
    [
        "2023-graph",
        {
            code: "F720600",
            year: 2023,
            season: "fall",
            nameZH: "圖論",
            nameEN: "Graph Theory",
            taList: [
                "鄒爽",
                "郭珈吟",
                "陳亭翰",
            ]
        }],
    [
        "2023-algorithm",
        {
            code: "F721300",
            year: 2023,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
            ]
        }
    ],
    [
        "2020-algorithm",
        {
            code: "F721300",
            year: 2020,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "許智惟",
                "涂登耀",
                "葉浩平",
                "李沿俊",
                "林彥亨"
            ]
        }
    ],
    [
        "2019-algorithm",
        {
            code: "F721300",
            year: 2019,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "姚凱勛",
                "李昀",
                "鄭力瑋",
                "楊奕正"
            ]
        }
    ],
    [
        "2018-algorithm",
        {
            code: "F721300",
            year: 2018,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "顏宏宇",
                "巫子軒",
                "林建夫",
                "詹智德"
            ]
        }
    ],
    [
        "2017-algorithm",
        {
            code: "F721300",
            year: 2017,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "許景添",
                "陳琮皓",
                "林玉陞",
                "何岱璇"
            ]
        }
    ],
    [
        "2017-algorithm",
        {
            code: "F721300",
            year: 2017,
            season: "spring",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "許景添",
                "陳琮皓",
                "林玉陞",
                "何岱璇"
            ]
        }
    ],
    [
        "2016-algorithm",
        {
            code: "F721300",
            year: 2016,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "盧緯",
                "張耕華",
                "楊順翔",
                "許景添"
            ]
        }
    ],
    [
        "2015-algorithm",
        {
            code: "F721300",
            year: 2015,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "葉承翰",
                "詹博丞",
                "林帝丞",
                "劉政昇",
                "張耕華",
                "盧緯",
                "賴俊嘉"
            ]
        }
    ],
    [
        "2014-algorithm",
        {
            code: "F721300",
            year: 2014,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "陳紀廷",
                "林箴諺",
                "鍾煒康",
                "黃信傑",
                "梁文宣"
            ]
        }
    ],
    [
        "2013-algorithm",
        {
            code: "F721300",
            year: 2013,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "陳紀廷",
                "林箴諺",
                "鍾煒康",
                "黃信傑",
                "葉泰麟",
                "張若怡",
                "吳泰融"
            ]
        }
    ],
    [
        "2012-algorithm",
        {
            code: "F721300",
            year: 2012,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "陳俊安",
                "鄭敦維",
                "張若怡",
                "許伯誠",
                "黃建翔",
            ]
        }
    ],
    [
        "2010-algorithm",
        {
            code: "F721300",
            year: 2010,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "葉泰麟",
                "蔡政諺",
                "吳宗翰",
                "張楹旋"
            ]
        }
    ],
    [
        "2009-algorithm",
        {
            code: "F721300",
            year: 2009,
            season: "fall",
            nameZH: "演算法",
            nameEN: "Algorithm",
            taList: [
                "葉泰麟",
                "曾敬嘉",
                "林約丞"
            ]
        }
    ]
])