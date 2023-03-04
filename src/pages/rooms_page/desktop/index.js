import React, { useState } from 'react'
import DesktopNavbar from '../../../common/navbar/DesktopNavbar'
import NewRoom from '../../components/add_room';
import PageHeading from '../../components/PageHeading'
import RoomsBox from '../../components/rooms_box';
import { Modal } from '@mui/material';

function RoomsPageDesktop({ rooms }) {
    const [roomsState, setRoomsState] = useState(rooms)
    const [showModal, setShowModal] = useState(false);

    const deleteHandler = (roomName) => {
        console.log(roomName)
        const filtered = roomsState.filter((item) => {
            if(item !== roomName) return item;
        })
        setRoomsState([...filtered]);
    }

    return (
        <div className='relative flex justify-center item-center flex-col'>
            <div className='desktop-navbar absolute left-[0px] h-[100%]'>
                <DesktopNavbar />
            </div>
            <div className='flex items-center justify-center flex flex-col mt-[25px]'>
                <div className='desktop:w-[600px] biggerDesktops:w-[940px] justify-between'>
                    <PageHeading
                        buttonText='Add Room'
                        amount={rooms.length}
                        subHeading='Rooms'
                        onClickHandler={() => setShowModal(true)}
                        onClose={() => setShowModal(false)}
                    >Rooms</PageHeading>
                </div>
                <div className='mt-[25px] grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
                    {roomsState.map((room, idx) => {
                        return <div
                            key={idx}
                        >
                            <RoomsBox
                                mainText={room}
                                deleteHandler={deleteHandler}
                            />
                        </div>
                    })}
                </div>
            </div>
            <Modal open={showModal}>
                <div className='absolute top-[50%] left-[50%]' style={{ transform: 'translate(-50%,-50%)' }}>
                    <NewRoom
                        closeModal={() => setShowModal(false)}
                        viewableData={roomsState}
                        setViewableData={setRoomsState}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default RoomsPageDesktop