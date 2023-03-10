import React, { useContext, useEffect, useState } from 'react'
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import TeachersContext from '../../../global/contexts/TeachersContext';
import InvoiceItemMobile from '../../components/InvoiceItemMobile';
import PageHeading from '../../components/PageHeading';
import InvoicesHeading from '../../components/PageHeading';
import TeachersBox from '../../components/teachers_box';

function TeachersMobile() {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(true);
    const Teachers = useContext(TeachersContext);
    const { teachersValue, setTeachersValue } = Teachers;
    const [viewableData, setViewableData] = useState(teachersValue);
    const [addSubjectModal, setAddSubjectModal] = useState(false);

    useEffect(() => {
        if (teachersValue.length) {
          setLoading(false)
          setViewableData(teachersValue)
        }
      }, [teachersValue])

    return (
        <div>
            <MobileNavbar />
            <div className='flex justify-center flex-col items-center gap-[25px]'>
                <div className='mt-[20px] w-[327px] flex justify-center'>
                    <PageHeading
                        amount={viewableData ? viewableData.length : 0}
                        subHeading='teachers'
                    >
                        Teachers
                    </PageHeading>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='mt-[25px] grid grid-cols-2 gap-[30px]'>
                        {viewableData.map((item) => {
                            return <TeachersBox
                                teacherInitials={item.teacherInitials}
                                teacherName={item.teacherName}
                            />
                        })}
                    </div>
                </div>
                {/* <NoInvoices /> */}
            </div>


        </div>
    )
}

export default TeachersMobile;