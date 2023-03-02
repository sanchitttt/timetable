import React, { useState } from 'react';
import TextField from '../../../common/inputs/TextField';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';

function SubjectsDesktop({ subjects }) {
  const [value, setValue] = useState('');
  
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

          <div className='mt-[25px] grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
            {subjects.map((subject, idx) => {
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
          </div>
        </div>


      </div>
    </div>
  )
}

export default SubjectsDesktop;