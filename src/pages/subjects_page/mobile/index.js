import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import TextField from '../../../common/inputs/TextField';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import { makeid, searchSubjectByQuery } from '../../../utils';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';

function MobileDesktop() {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(true);
    const Subjects = useContext(SubjectsContext);
    const { subjectValue, setSubjects } = Subjects;
    const [viewableData,setViewableData] = useState(subjectValue)

    useEffect(() => {
        searchSubjectByQuery(value, subjectValue, setViewableData);
    }, [value]);

    useEffect(() => {
        if (subjectValue.length) setLoading(false)
    }, [subjectValue])

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
                {loading ? <CircularProgress /> : viewableData.map((subject) => {
                    return <SubjectsBox
                        key={subject._id}
                        _id={subject._id}
                        courseCode={subject.courseCode}
                        courseTitle={subject.courseTitle}
                        classSchedulePerWeek={subject.classSchedulePerWeek}
                        className={subject.class}
                        branch={subject.branch}
                        credits={subject.credits}
                        semesterLevel={subject.semesterLevel}
                        status={subject.status}
                        viewableData={subjectValue}
                        setViewableData={setSubjects}
                    />
                })}
                {/* <NoInvoices /> */}
            </div>


        </div>
    )
}

export default MobileDesktop;