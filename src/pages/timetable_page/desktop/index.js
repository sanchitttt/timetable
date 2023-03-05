import React, { useContext, useEffect, useState } from 'react'
import generateTimetable from 'timetablegeneratorpackage';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import Text24px from '../../../common/text/Text24px';
import RoomsContext from '../../../global/contexts/RoomsContext';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import Table from '../Table';

const inputArr = [
    ['bca', 'II'],
    ['bca', 'IV'],
    ['bca', 'VI'],
    ['mca', 'II'],
    ['mca', 'IV'],
]

function TimetableDesktop() {
    const [data, setData] = useState();
    const Rooms = useContext(RoomsContext);
    const Subjects = useContext(SubjectsContext);
    const [hasErrors, setHasErrors] = useState(false);

    const { roomsValue } = Rooms;
    const { subjectValue } = Subjects;

    useEffect(() => {
        let res = generateTimetable(inputArr, roomsValue, subjectValue)
        setData(res)
    }, [roomsValue,subjectValue])

    if (hasErrors) {
        return <div className='flex items-center justify-center w-[100%] h-[100%]'>
            <h1>Make sure the subjects are active!</h1>
        </div>
    }
    return (
        <div className='flex items-center flex-col justify-center h-[100vh] overflow-scroll'>
            <div className='desktop-navbar absolute left-[0px] h-[100%]'>
                <DesktopNavbar />
            </div>
            <div className='desktop:w-[900px] biggerDesktops:w-[1200px] gap-[30px] flex flex-col justify-between'>
                <div className='flex justify-between items-center w-[100%]'>
                    <div className='flex flex-col'>
                        <Text24px>Timetable</Text24px>
                    </div>
                </div>

                <div className='w-[100%] h-[90vh]  '>
                    {data && <Table data={data} />}
                </div>

            </div>

        </div>
    )
}

export default TimetableDesktop;