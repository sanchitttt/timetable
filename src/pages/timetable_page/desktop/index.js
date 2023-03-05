import React, { useContext, useEffect, useReducer, useState } from 'react'
import generateTimetable from 'timetablegeneratorpackage';
import Checkbox from '../../../common/inputs/Checkbox';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import Text15px from '../../../common/text/Text15px';
import Text24px from '../../../common/text/Text24px';
import RoomsContext from '../../../global/contexts/RoomsContext';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import { generateInputForTimetable } from '../../../utils';
import Table from '../Table';

const inputArr = [
    ['bca', 'II'],
    ['bca', 'IV'],
    ['bca', 'VI'],
    ['mca', 'II'],
    ['mca', 'IV'],
]

const initialState = {
    bca1: false,
    bca2: true,
    bca3: false,
    bca4: true,
    bca5: false,
    bca6: true,
    mca1: false,
    mca2: true,
    mca3: false,
    mca4: true
}
const reducerFn = (state, action) => {
    switch (action.type) {
        case 'bca1':
            return { ...state, bca1: action.value }
        case 'bca2':
            return { ...state, bca2: action.value }
        case 'bca3':
            return { ...state, bca3: action.value }
        case 'bca4':
            return { ...state, bca4: action.value }
        case 'bca5':
            return { ...state, bca5: action.value }
        case 'bca6':
            return { ...state, bca6: action.value }
        case 'mca1':
            return { ...state, mca1: action.value }
        case 'mca2':
            return { ...state, mca2: action.value }
        case 'mca3':
            return { ...state, mca3: action.value }
        case 'mca4':
            return { ...state, mca4: action.value }
        default:
            return state;
    }
}

function TimetableDesktop() {
    const [data, setData] = useState();
    const Rooms = useContext(RoomsContext);
    const Subjects = useContext(SubjectsContext);
    const [hasErrors, setHasErrors] = useState(false);
    const [markedSubjects, dispatch] = useReducer(reducerFn, initialState);
    const [inputArrState, setInputArrState] = useState(inputArr);

    const { roomsValue } = Rooms;
    const { subjectValue } = Subjects;

    // console.log(markedSubjects)
    useEffect(() => {
        const res = generateInputForTimetable(markedSubjects);
        setInputArrState(res);
    }, [markedSubjects])
    useEffect(() => {
        let res = generateTimetable(inputArrState, roomsValue, subjectValue)
        setData(res)
    }, [inputArrState, roomsValue, subjectValue])

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
                        <Text15px>Generate timetable for : </Text15px>
                        <div className='flex gap-[40px]'>
                            <Checkbox label='BCA-I' value={markedSubjects.bca1} onChange={(e) => dispatch({ type: 'bca1', value: e.target.checked })} />
                            <Checkbox label='BCA-II' value={markedSubjects.bca2} onChange={(e) => dispatch({ type: 'bca2', value: e.target.checked })} />
                            <Checkbox label='BCA-III' value={markedSubjects.bca3} onChange={(e) => dispatch({ type: 'bca3', value: e.target.checked })} />
                            <Checkbox label='BCA-IV' value={markedSubjects.bca4} onChange={(e) => dispatch({ type: 'bca4', value: e.target.checked })} />
                            <Checkbox label='BCA-V' value={markedSubjects.bca5} onChange={(e) => dispatch({ type: 'bca5', value: e.target.checked })} />
                            <Checkbox label='BCA-VI' value={markedSubjects.bca6} onChange={(e) => dispatch({ type: 'bca6', value: e.target.checked })} />
                            <Checkbox label='MCA-I' value={markedSubjects.mca1} onChange={(e) => dispatch({ type: 'mca1', value: e.target.checked })} />
                            <Checkbox label='MCA-II' value={markedSubjects.mca2} onChange={(e) => dispatch({ type: 'mca2', value: e.target.checked })} />
                            <Checkbox label='MCA-III' value={markedSubjects.mca3} onChange={(e) => dispatch({ type: 'mca3', value: e.target.checked })} />
                            <Checkbox label='MCA-IV' value={markedSubjects.mca4} onChange={(e) => dispatch({ type: 'mca4', value: e.target.checked })} />
                        </div>
                    </div>
                </div>


                <div className='w-[100%] h-[80vh]  '>
                    {data && <Table data={data} />}
                </div>

            </div>

        </div>
    )
}

export default TimetableDesktop;