import React, { useEffect, useState } from 'react'
import Select from '../../../common/inputs/Select';
import SelectItem from '../../../common/inputs/SelectItem';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import Text24px from '../../../common/text/Text24px';
import PageHeading from '../../components/PageHeading';
import Table from '../Table';

function TimetableDesktop({ data }) {
    const [details, setDetails] = useState(data);
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
                    <Table data={details} />
                </div>

            </div>

        </div>
    )
}

export default TimetableDesktop;