import React, { useEffect, useState } from 'react'
import subjectsData from '../../assets/data/subjects.json';
import SubjectsMobile from './mobile';
import SubjectsDesktop from './desktop';



function SubjectsPage() {
    const [data, setData] = useState(subjectsData);
    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <SubjectsMobile subjects={data} />
            </div>
            <div className='desktop:block mobile:hidden'>
                <SubjectsDesktop subjects={data} />
            </div>
        </div>

    )
}

export default SubjectsPage;