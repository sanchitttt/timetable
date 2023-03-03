import React, { useEffect, useState } from 'react'
import TextField from '../../../common/inputs/TextField';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import { makeid, searchSubjectByQuery } from '../../../utils';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';

function MobileDesktop({ subjects }) {
    const [viewableData, setViewableData] = useState(subjects);
    const [value, setValue] = useState('');

    useEffect(() => {
        searchSubjectByQuery(value, subjects, setViewableData);
    }, [value]);
    
    return (
        <div>
            <MobileNavbar />
            <div className='flex justify-center flex-col items-center gap-[25px]'>
                <div className='mt-[20px] w-[327px] flex justify-center'>
                    <InvoicesHeading
                        buttonText='Add subject'
                        amount={viewableData.length}
                        subHeading='Subjects'
                    >Subjects</InvoicesHeading>
                </div>
                <div className='mt-[20px] w-[300px]'>
                    <TextField
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Search by course name, code or semester'
                    />
                </div>
                {viewableData.map((subject) => {
                    const uniqueId = makeid(subject.courseTitle.length)
                    return <SubjectsBox
                        key={uniqueId}
                        courseCode={subject.courseCode}
                        courseTitle={subject.courseTitle}
                        classSchedulePerWeek={subject.classSchedulePerWeek}
                        className={subject.class}
                        branch={subject.branch}
                        credits={subject.credits}
                        semesterLevel={subject.semesterLevel}
                        status={subject.status}
                    />
                })}
                {/* <NoInvoices /> */}
            </div>


        </div>
    )
}

export default MobileDesktop;