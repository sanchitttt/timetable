import React, { useContext, useEffect, useState } from 'react';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import TeachersContext from '../../../global/contexts/TeachersContext';
import PageHeading from '../../components/PageHeading';
import TeachersBox from '../../components/teachers_box';


function TeachersDesktop() {
  const Teachers = useContext(TeachersContext);
  const { teachersValue } = Teachers;
  const [viewableData, setViewableData] = useState(teachersValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (teachersValue.length) {
      setLoading(false)
      setViewableData(teachersValue)
    }
  }, [teachersValue])
  return (
    <div className='relative flex justify-center item-center flex-col'>
      <div className='desktop-navbar absolute left-[0px] h-[100%]'>
        <DesktopNavbar />
      </div>

      <div className='mobile-navbar w-[100%]'>
        <MobileNavbar />
      </div>

      <div className='flex items-center justify-center flex flex-col mt-[25px]'>
        <div className='desktop:w-[630px] biggerDesktops:w-[850px] justify-between'>
          <PageHeading
            buttonText={'Add teacher'}
            amount={viewableData ? viewableData.length : 0}
            subHeading={'Teachers'}
          >
            Teachers
          </PageHeading>
        </div>
        <div className='h-[85vh]' style={{ overflowY: 'scroll' }}>
          <div className='mt-[25px] grid biggerDesktops:grid-cols-4 desktop:grid-cols-3 gap-[20px] '>
            {viewableData.map((item, idx) => {
              return <div
                key={item.id}
              >
                <TeachersBox
                  teacherName={item.teacherName}
                  teacherInitials={item.teacherInitials}
                />
              </div>
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default TeachersDesktop;