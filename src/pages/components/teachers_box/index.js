import React, { useContext, useEffect } from 'react'
import Text15px from '../../../common/text/Text15px';
import Text18px from '../../../common/text/Text18px';
import ThemeContext from '../../../global/contexts/ThemeContext';
import { getTeachers } from '../../../utils/apiCalls';

function TeachersBox({ teacherName, teacherInitials, subjectsTaught }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div
            role={'button'}
            className={`p-[20px] mobile:w-[150px] mobile:h-[200px] desktop:w-[220px] desktop:h-[110px]  justify-between gap-[10px] flex flex-col ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px]`}
        >
            <Text18px bold>{teacherName}</Text18px>
            <Text15px color={themeValue === 'dark' ? '05' : '07'} bold>{teacherInitials}</Text15px>
        </div>
    )
}

export default TeachersBox;