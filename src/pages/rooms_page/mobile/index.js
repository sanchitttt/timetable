import React from 'react'
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import PageHeading from '../../components/PageHeading';
import RoomBox from '../../components/rooms_box';

function RoomsPageMobile({ rooms }) {
  return (
    <div>
      <MobileNavbar />
      <div className='flex justify-center flex-col items-center gap-[25px]'>
        <div className='mt-[20px] w-[327px] flex justify-center'>
          <PageHeading
            buttonText='Add Room'
            amount={rooms.length}
            subHeading='Rooms'
          >Rooms</PageHeading>
        </div>
        {rooms.map((room, idx) => {
          return <RoomBox
            key={idx}
            mainText={room}
          />
        })}
      </div>
    </div>
  )
}

export default RoomsPageMobile;