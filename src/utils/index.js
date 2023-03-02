export const searchSubjectByQuery = (value, subjects, setViewableData) => {
    if (value.length) {
        const filtered = subjects.filter((item) => {
            const { courseCode, courseTitle, class: className, semesterLevel } = item;
            const regex = new RegExp(value, 'gi');
            if (courseCode.match(regex) || courseTitle.match(regex) || semesterLevel.match(regex) || className.match(regex)) {
                return item;
            }
        })
        setViewableData([...filtered]);
    }
    else {
        setViewableData(subjects);
    }
}

