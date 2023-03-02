import React, { useContext } from 'react'
import Text13px from '../../../common/text/Text13px';
import Text15px from '../../../common/text/Text15px';
import Text18px from '../../../common/text/Text18px';
import ThemeContext from '../../../global/contexts/ThemeContext';
import ActiveStatus from '../active_status';



function SubjectsBox({ courseCode, courseTitle, classSchedulePerWeek, className, branch, credits, status, semesterLevel }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div
            role={'button'}
            style={{ overflowY: 'scroll' }}
            className={`p-[20px]  w-[300px] h-[200px] justify-between gap-[10px] flex flex-col ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px]`}
        >
            <Text18px bold>{courseTitle}</Text18px>
            <Text15px color={themeValue === 'dark' ? '05' : '07'} bold>{courseCode} ({className}-{semesterLevel})</Text15px>
            <Text13px color={themeValue === 'dark' ? '05' : '07'}>{classSchedulePerWeek} classes per week</Text13px>
            <ActiveStatus status={status} />
        </div>
    )
}

export default SubjectsBox;