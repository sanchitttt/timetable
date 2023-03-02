import React, { useEffect, useState } from 'react'
import dataJSON from '../../assets/data/data.json';
import TeachersDesktop from './desktop';
import TeachersMobile from './mobile';

function TeachersPage() {
    const [data, setData] = useState(dataJSON);


    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <TeachersMobile invoices={data} />
            </div>
            <div className='desktop:block mobile:hidden'>
                <TeachersDesktop invoices={data} />
            </div>
        </div>
    )
}

export default TeachersPage;