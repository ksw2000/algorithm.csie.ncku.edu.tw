export interface CoursesData {
    key?: string // used for routing
    code: string // 課程代號
    year: number // 課程年份
    season: "spring" | "fall"
    nameZH: string
    nameEN: string
    taList: string[]
    lectureFiles?: CoursesFiles // 講義檔案櫃
    coursesFile? : CoursesFiles // 課程檔案櫃
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
    ]
])