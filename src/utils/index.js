export const searchSubjectByQuery = (value, subjects, setViewableData) => {
    if (value.length) {
        const filtered = subjects.filter((item) => {
            const { courseCode, courseTitle, class: className, semesterLevel } = item;
            const regex = new RegExp(value, 'gi');
            if (courseCode && courseCode.match(regex)) {
                return item;
            }
            else if (className && className.match(regex)) {
                return item;
            }
            else if (courseTitle && courseTitle.match(regex)) {
                return item;
            }
            else if (semesterLevel && semesterLevel.match(regex)) {
                return item;
            }
        })
        setViewableData([...filtered]);
    }
    else {
        setViewableData(subjects);
    }
}


export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}