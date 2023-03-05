import React, { useContext, useEffect, useState } from 'react'
import tableData from '../../assets/data/timetable.json';
import TimetableDesktop from './desktop';
import TimetableMobile from './mobile';
import generateTimetable from 'timetablegeneratorpackage'
import subjectsJSON from '../../assets/data/subjects.json';
import roomsJSON from '../../assets/data/rooms.json';
import RoomsContext from '../../global/contexts/RoomsContext';
import SubjectsContext from '../../global/contexts/SubjectsContext';


function TimetablePage() {
    return (
        <>
            <div className='desktop:hidden mobile:block'>
                <TimetableMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <TimetableDesktop />
            </div>
        </>
    )
}

export default TimetablePage;