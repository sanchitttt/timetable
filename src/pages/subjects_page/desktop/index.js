import React, { useEffect, useState } from 'react';
import TextField from '../../../common/inputs/TextField';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import { searchSubjectByQuery } from '../../../utils';
import NoRecords from '../../components/no_records_found';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';

function SubjectsDesktop({ subjects }) {
  const [value, setValue] = useState('');
  const [viewableData, setViewableData] = useState(subjects);

  useEffect(() => {
    searchSubjectByQuery(value,subjects,setViewableData);
}, [value]);

  return (
    <div className='relative flex justify-center item-center flex-col'>
      <div className='desktop-navbar absolute left-[0px] h-[100%]'>
        <DesktopNavbar />
      </div>

      <div className='mobile-navbar w-[100%]'>
        <MobileNavbar />
      </div>

      <div className='flex items-center justify-center flex flex-col mt-[25px]'>
        <div className='desktop:w-[730px] biggerDesktops:w-[900px] justify-between'>
          <InvoicesHeading
            buttonText='Add subject'
            amount={subjects.length}
            subHeading='Subjects'
          >Subjects</InvoicesHeading>
          <div className='mt-[20px]'>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Search by course name, code or semester'
            />
          </div>

          <div className='mt-[25px] overflow-hidden grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
            {viewableData.map((subject, idx) => {
              return <div key={subject.courseCode} className='overflow-hidden'>
                <SubjectsBox
                  courseCode={subject.courseCode}
                  courseTitle={subject.courseTitle}
                  classSchedulePerWeek={subject.classSchedulePerWeek}
                  className={subject.class}
                  branch={subject.branch}
                  credits={subject.credits}
                  semesterLevel={subject.semesterLevel}
                  status={subject.status}
                />
              </div>
            })}
          </div>
          {viewableData.length===0 && <NoRecords 
          mainHeading={'No records found'}
          subHeading={'Add subjects for them to show up here'}
          />}
        </div>


      </div>
    </div>
  )
}

export default SubjectsDesktop;