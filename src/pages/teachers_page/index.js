import React, { useEffect, useState } from 'react'
import dataJSON from '../../assets/data/data.json';
import { getTeachers } from '../../utils/apiCalls';
import TeachersDesktop from './desktop';
import TeachersMobile from './mobile';

function TeachersPage() {
    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <TeachersMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <TeachersDesktop />
            </div>
        </div>
    )
}

export default TeachersPage;