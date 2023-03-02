/**
 * ASSUMPTIONS : 
 * 1) There are a maxiumum of 8 periods
 * 2) There are only five working days ie Monday,Tuesday,Wednesday,Thursday,Friday
 */

/**
 * TODO :
 * 1) Allot teachers to teach their subjects in a room
 * 2) Make sure a teacher does not have to teach multiple subjects at a time
 * 3) Maxiumum classes for a subject is three in a day
 */

// const subjects = [
//     {
//         courseCode: 180,
//         courseTitle: 'OFFICE AUTOMATION TOOLS',
//         credits: {
//             amount: 3,
//             L: 3,
//             T: 0,
//             P: 0
//         },
//         classSchedulePerWeek: 04,
//         class: 'BCA',
//         semesterLevel: '1',
//         branch: 'Bachelor of Computer Applications'
//     },
// ]


const teachers = [
    {
        teacherName: 'Seema Sharma',
        teacherInitials: 'SES',
        subjectsTaught: [
            {
                courseCode: 'CA258',
                courseTitle: 'SOFTWARE ENGINEERING',
                credits: {
                    amount: 3,
                    L: 3,
                    T: 0,
                    P: 0
                },
                classSchedulePerWeek: 03,
                class: 'BCA',
                semesterLevel: '4',
                branch: 'Bachelor of Computer Applications'
            },
            {
                courseCode: "CA356",
                courseTitle: 'DISTRIBUTED COMPUTING',
                credits: {
                    amount: 3,
                    L: 3,
                    T: 0,
                    P: 0
                },
                classSchedulePerWeek: 03,
                class: 'BCA',
                semesterLevel: '6',
                branch: 'Bachelor of Computer Applications'
            },
        ],
        periods: [
            {
                '2': {
                    courseCode: 'CA258',
                    roomNo: '301'
                }
            },
            {

            },
            {

            },
            {

            },
            {

            },
        ],
        preference: '1'
    },
    {
        type: 'special'
    }
]

/**
 * Seema maam teach Distributed Computing and Software Engineering
 * The periods field is an array of objects. The array index denotes 
 * the day. (0 -> Monday, 1-> Tuesday, 2-> Wednesday , 3-> Thursday, 4-> Friday)
 * The following period object denotes that seema maam on monday has a class in the second
 * period with the course code CA258 and room no 301
 */


const bca6 = [
    [
        null,
        [{
            courseCode: 'CA356',
            teacherInitials: 'CRW',
            roomNo: '301'
        }],
        [{
            courseCode: 'CA356',
            teacherInitials: 'SES',
            roomNo: '201'
        }],
        'special',
        [{
            courseCode: 'CA360',
            teacherInitials: 'ANJ',
            roomNo: 'UGL'
        }],
    ],
    [
        null,
        null,
        [{
            courseCode: 'CA327',
            teacherInitials: 'MRM',
            roomNo: '305'
        },
        {
            courseCode: 'CA328',
            teacherInitials: 'PRJ',
            roomNo: '201'
        }],
        [{
            courseCode: 'CA355',
            teacherInitials: 'CRW',
            roomNo: '303'
        }],
        [{
            courseCode: 'CA325',
            teacherInitials: 'SSR',
            roomNo: '301'
        }],
        [{
            courseCode: 'special',
            teacherInitials: '',
            roomNo: ''
        }],
        null
    ],
    [
        null,
        [{
            courseCode: 'CA355',
            teacherInitials: 'CRW',
            roomNo: '301'
        }],
        [{
            courseCode: 'CA325',
            teacherInitials: 'SSR',
            roomNo: '301'
        }],
        [{
            courseCode: 'CA327',
            teacherInitials: 'MRM',
            roomNo: '305'
        },
        {
            courseCode: 'CA328',
            teacherInitials: 'PRJ',
            roomNo: '201'
        }],
        null,
        null,
        null
    ],
    [

    ],
    [

    ],
]

const bca1 = []
const bca2 = []
const bca3 = []
const bca4 = []
const bca5 = []

const mca1 = [];
const mca2 = [];
const mca3 = [];
const mca4 = [];

const bba1 = [];
const bba2 = [];
const bba3 = [];
const bba4 = [];
const bba5 = [];
const bba6 = [];

const mba1 = [];
const mba2 = [];
const mba3 = [];
const mba4 = [];



//FUNCTIONS

/**
 * @function generateMap
 * @param {Number} periods
 * @returns {HashMap}
 */

function generateMap(periods = 7) {
    const map = new Map();
    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < periods; j++) {
            map.set(`${days[i]}${j}`, new Set());
        }
    }
    return map;
}

const daysMap = generateMap();

const subjects = [
    {
        courseCode: 'CA101',
        courseTitle: 'SOLVING AND PROGRAMMING IN C',
        credits: {
            amount: 3,
            L: 3,
            T: 0,
            P: 0
        },
        classSchedulePerWeek: '04',
        class: 'BCA',
        semesterLevel: '1',
        branch: 'Bachelor of Computer Applications'
    },
    {
        courseCode: 'CA103',
        courseTitle: 'LOGICAL ORGANIZATIONS OF COMPUTERS',
        credits: {
            amount: 3,
            L: 3,
            T: 0,
            P: 0
        },
        classSchedulePerWeek: '04',
        class: 'BCA',
        semesterLevel: '1',
        branch: 'Bachelor of Computer Applications'
    },
    {
        courseCode: 'MT123',
        courseTitle: 'BUSINESS COMMUNICATIONS ',
        credits: {
            amount: 3,
            L: 3,
            T: 1,
            P: 0
        },
        classSchedulePerWeek: '03',
        class: 'BCA',
        semesterLevel: '1',
        branch: 'Bachelor of Computer Applications'
    },
    {
        courseCode: 'CE101',
        courseTitle: 'ENVIRONMENTAL SCIENCE',
        credits: {
            amount: 2,
            L: 2,
            T: 0,
            P: 0
        },
        classSchedulePerWeek: '03',
        class: 'BCA',
        semesterLevel: '1',
        branch: 'Bachelor of Computer Applications'
    },
    {
        courseCode: 'CA104',
        courseTitle: 'MATHEMATICS-I (ELEMENTARY MATHEMATICS)',
        credits: {
            amount: 3,
            L: 3,
            T: 0,
            P: 0
        },
        classSchedulePerWeek: '03',
        class: 'BCA',
        semesterLevel: '1',
        branch: 'Bachelor of Computer Applications'
    },
    {
        courseCode: 'CA104',
        courseTitle: 'MATHEMATICS-I (ELEMENTARY MATHEMATICS)',
        credits: {
            amount: 3,
            L: 3,
            T: 0,
            P: 0
        },
        classSchedulePerWeek: '03',
        class: 'BCA',
        semesterLevel: '1',
        branch: 'Bachelor of Computer Applications'
    },
]


const arr = ['101', '102', '201', '202', '203', '301', '302', '303', '304', '305', 'PGLab-1', 'PGLab-2', 'UGLab-1', 'UGLab-2'];

const rooms = [...arr];


function generateStructure() {
    const result = [];
    for (let i = 0; i < 5; i++) {
        let arr = [];
        for (let j = 0; j < 8; j++) {
            arr.push(null);
        }
        result.push(arr);
    }
    return result;
}

// function roomsAvailable(id) {
//     console.log(id);
// }

const m = 5; // No  of days
const n = 7; // No of periods


const bca1Subjects = [
    {
        "courseCode": "CA101",
        "courseTitle": "SOLVING AND PROGRAMMING IN C",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA103",
        "courseTitle": "LOGICAL ORGANIZATIONS OF COMPUTERS",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "MT123",
        "courseTitle": "BUSINESS COMMUNICATIONS ",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "inactive"
    },
    {
        "courseCode": "CE101",
        "courseTitle": "ENVIRONMENTAL SCIENCE",
        "credits": {
            "amount": 2,
            "L": 2,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "inactive"
    },
    {
        "courseCode": "CA104",
        "courseTitle": "MATHEMATICS-I (ELEMENTARY MATHEMATICS)",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "180",
        "courseTitle": " OFFICE AUTOMATION TOOLS ",
        "credits": {
            "amount": 2,
            "L": 3,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA155",
        "courseTitle": "DATA STRUCTURES",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "1",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
];

const bca2Subjects = [
    {
        "courseCode": "CA157",
        "courseTitle": " DISCRETE STRUCTURES",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA160",
        "courseTitle": "OPERATING SYSTEM CONCEPTS",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA158",
        "courseTitle": "NUMERICAL AND STATISTICAL METHODS",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA156",
        "courseTitle": "DATA STRUCTURES LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA161",
        "courseTitle": "OPERATING SYSTEM LAB",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA159",
        "courseTitle": "NUMERICAL AND STATISTICAL METHODS LAB",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA326",
        "courseTitle": "Unix and Shell Programming Lab",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA181",
        "courseTitle": "DESIGNING AND PUBLISHING IN COMPUTER USING PAGEMAKER,zPHOTOSHOP AND CORELDRAW LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "2",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
];

const bca3Subjects = [
    {
        "courseCode": "CA201",
        "courseTitle": "OBJECT ORIENTED PROGRAMMING USING JAVA",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA203",
        "courseTitle": "DATABASE MANAGEMENT SYSTEMS",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA202",
        "courseTitle": "OBJECT ORIENTED PROGRAMMING USING JAVA LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA204",
        "courseTitle": "DATABASE MANAGEMENT SYSTEMS LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA220",
        "courseTitle": "INTERNET TECHNOLOGIES",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA221",
        "courseTitle": "INTERNET TECHNOLOGIES LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA222",
        "courseTitle": "MOBILE APPLICATION",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "3",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
];

const bca4Subjects = [
    {
        "courseCode": "CA255",
        "courseTitle": "FUNDAMENTALS OF COMPUTER ALGORITHMS",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA256",
        "courseTitle": "WEB PROGRAMMING",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA257",
        "courseTitle": "WEB PROGRAMMING LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA259",
        "courseTitle": "SOFTWARE ENGINEERING LAB",
        "credits": {
            "amount": 2,
            "L": 2,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA223",
        "courseTitle": "ECOMMERCE TECHNOLOGY",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA271",
        "courseTitle": "Soft Computing and Applications",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA272",
        "courseTitle": "Soft Computing using MATLAB /SCI LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 4
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA224",
        "courseTitle": "CLOUD COMPUTING",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA276",
        "courseTitle": "Android Programming Lab",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "4",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
]

const bca5Subjects = [
    {
        "courseCode": "CA301",
        "courseTitle": "COMPUTER GRAPHICS AND MULTIMEDIA",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA303",
        "courseTitle": "COMPUTER NETWORKS",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA304",
        "courseTitle": "MANAGEMENT INFORMATION SYSTEMS",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA302",
        "courseTitle": "COMPUTER GRAPHICS LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA277",
        "courseTitle": "Python Programming",
        "credits": {
            "amount": 4,
            "L": 0,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA278",
        "courseTitle": "Python Programming Lab",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 4
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA320",
        "courseTitle": "Software Testing",
        "credits": {
            "amount": 3,
            "L": 1,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA321",
        "courseTitle": "SOFTWARE TESTING LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA322",
        "courseTitle": "NETWORK SECURITY",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA380",
        "courseTitle": "TALLY SOFTWARE (ACCOUNTING AND FINANCETALLY ERP)",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA381",
        "courseTitle": "PHOTO SHOP LAB",
        "credits": {
            "amount": 2,
            "L": 0,
            "T": 0,
            "P": 2
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "5",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
]

const bca6Subjects = [
    {
        "courseCode": "CA355",
        "courseTitle": "DATA MINING",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA356",
        "courseTitle": "DISTRIBUTED COMPUTING",
        "credits": {
            "amount": 3,
            "L": 3,
            "T": 0,
            "P": 0
        },
        "classSchedulePerWeek": "03",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA323",
        "courseTitle": "CYBER FORENSICS",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA325",
        "courseTitle": "UNIX AND SHELL PROGRAMMING",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA327",
        "courseTitle": "System Programming",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA328",
        "courseTitle": "DISTRIBUTED DATABASE SYSTEMS",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
    {
        "courseCode": "CA331",
        "courseTitle": "DECISION SUPPORT SYSTEM",
        "credits": {
            "amount": 4,
            "L": 3,
            "T": 1,
            "P": 0
        },
        "classSchedulePerWeek": "04",
        "class": "BCA",
        "semesterLevel": "6",
        "branch": "Bachelor of Computer Applications",
        "status": "active"
    },
]

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function generateTimetableForACourse(subjects) {
    const timetableStructure = generateStructure();
    for (let i = 0; i < subjects.length; i++) {
        let count = parseInt(subjects[i].classSchedulePerWeek);
        if (count <= 0) break;
        for (let j = 0; j < n; j++) {
            if (count <= 0) break;
            for (let k = 0; k < m; k++) {
                if (count <= 0) break;
                const key = days[k].slice(0, 3).toLowerCase() + j
                const val = daysMap.get(key);
                if (timetableStructure[k][j]) {
                    continue;
                }
                else {
                    for (let l = 0; l < rooms.length; l++) {
                        if (count <= 0) break;
                        if (!val.has(rooms[l])) {
                            const set = val;
                            val.add(rooms[l]);
                            daysMap.set(key, set);
                            count--;
                            timetableStructure[k][j] = rooms[l] + ' ' + subjects[i].courseCode;
                            break;
                        }
                    }
                }
            }
        }
    }
    return timetableStructure;
}

function printTimeTable(timetable) {
    for (let i = 0; i < timetable.length; i++) {
        let str = '';
        for (let j = 0; j < timetable[i].length; j++) {
            str += timetable[i][j];
        }
        console.log(str);
    }
}


const result = generateTimetableForACourse(bca1Subjects);
const result2 = generateTimetableForACourse(bca2Subjects);
const result3 = generateTimetableForACourse(bca3Subjects);
const result4 = generateTimetableForACourse(bca4Subjects);
const result5 =generateTimetableForACourse(bca5Subjects);
// console.log(daysMap)
console.log(result5);











