import React from 'react'
import RoomsPageDesktop from './desktop'
import RoomsPageMobile from './mobile'
import rooms from '../../assets/data/rooms.json';

function RoomsPage() {
    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <RoomsPageMobile rooms={rooms} />
            </div>
            <div className='desktop:block mobile:hidden'>
                <RoomsPageDesktop rooms={rooms} />
            </div>
        </div>
    )
}

export default RoomsPage