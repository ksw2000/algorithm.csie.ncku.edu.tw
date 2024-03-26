export enum MemberType {
    phd,
    master,
    undergraduate
}

export interface Member {
    year: number;
    id: string;
    name: string;
    img: boolean;
    graduated: boolean;
    type: MemberType;
}

export let members: Member[] = [
    {
        year: 111,
        name: "簡士傑",
        id: "P76094020",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 111,
        name: "吳安容",
        id: "P76094046",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 111,
        name: "周郁庭",
        id: "Q56091029",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 111,
        name: "周浩揚",
        id: "P76094795",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 111,
        name: "劉承毅",
        id: "Q56091087",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 112,
        name: "陳郁涵",
        id: "P78101035",
        img: true,
        graduated: false,
        type: MemberType.phd,
    }, {
        year: 112,
        name: "簡嘉妍",
        id: "P76101649",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 112,
        name: "蔡孟修",
        id: "P76101673",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 112,
        name: "陳冠昊",
        id: "",
        img: false,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 112,
        name: "林紹謙",
        id: "",
        img: false,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 112,
        name: "邱仲平",
        id: "NE6101131",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 112,
        name: "楊皓宇",
        id: "P76101461",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 112,
        name: "蔡宇暄",
        id: "P76103023",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 112,
        name: "許峯僑",
        id: "Q56104034",
        img: true,
        graduated: true,
        type: MemberType.master,
    }, {
        year: 112,
        name: "林瑋婷",
        id: "VS6102077",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 113,
        name: "林彥甫",
        id: "P76111733",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 113,
        name: "鄒爽",
        id: "P76113010",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 113,
        name: "陳亭翰",
        id: "Q56111057",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 113,
        name: "廖柏丞",
        id: "P76114642",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 113,
        name: "郭珈吟",
        id: "VS6112098",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "張雅雯",
        id: "P76121055",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "周智涵",
        id: "P76121241",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "常博愛",
        id: "P76123049",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "洪至謙",
        id: "VX6122069",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "鄭以新",
        id: "P76121283",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "陳英轍",
        id: "Q56121036",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "何瀚宇",
        id: "NE6127014",
        img: true,
        graduated: false,
        type: MemberType.master,
    }, {
        year: 114,
        name: "張志嘉",
        id: "",
        img: false,
        graduated: false,
        type: MemberType.phd,
    }
];