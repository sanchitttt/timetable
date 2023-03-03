import React from 'react'
import EditSubjectBoxDesktop from './desktop';
import EditSubjectBoxMobile from './mobile';

function EditSubjectBox({ id, subjectTitle, subjectCode, scheduledClassesPerWeek, className, semesterLevel, branch, closeModal, setViewableData, status }) {
    return (
        <>
            <div className='mobile:hidden desktop:block biggerDesktop:block'>
                <EditSubjectBoxDesktop
                    id={id}
                    subjectTitle={subjectTitle}
                    semesterLevel={semesterLevel}
                    subjectCode={subjectCode}
                    scheduledClassesPerWeek={scheduledClassesPerWeek}
                    branch={branch}
                    status={status}
                    className={className}
                    closeModal={closeModal}
                    setViewableData={setViewableData}
                />
            </div>
            <div className='mobile:block desktop:hidden biggerDesktop:hidden'>
                <EditSubjectBoxMobile
                    id={id}
                    subjectTitle={subjectTitle}
                    semesterLevel={semesterLevel}
                    subjectCode={subjectCode}
                    scheduledClassesPerWeek={scheduledClassesPerWeek}
                    branch={branch}
                    status={status}
                    className={className}
                    closeModal={closeModal}
                    setViewableData={setViewableData}
                />
            </div>
        </>
    )
}

export default EditSubjectBox;