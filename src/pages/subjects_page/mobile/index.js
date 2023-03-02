import React, { useEffect, useState } from 'react'
import TextField from '../../../common/inputs/TextField';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';

function MobileDesktop({ subjects }) {
    const [data, setData] = useState(subjects);
    const [value, setValue] = useState('');

    useEffect(() => {

    }, []);

    return (
        <div>
            <MobileNavbar />
            <div className='flex justify-center flex-col items-center gap-[25px]'>
                <div className='mt-[20px] w-[327px] flex justify-center'>
                    <InvoicesHeading
                        buttonText='Add subject'
                        amount={data.length}
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
                {data.map((subject) => {
                    return <SubjectsBox
                        key={subject.courseCode}
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