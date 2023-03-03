import React, { useContext, useState } from 'react'
import Button2 from '../../../../common/buttons/Button2';
import Button4 from '../../../../common/buttons/Button4';
import ErrorLabel from '../../../../common/inputs/ErrorLabel';
import Select from '../../../../common/inputs/Select';
import SelectItem from '../../../../common/inputs/SelectItem';
import TextField from '../../../../common/inputs/TextField';
import Text15px from '../../../../common/text/Text15px';
import ThemeContext from '../../../../global/contexts/ThemeContext';
import PageHeading from '../../PageHeading';
import EditSubjectHeading from '../EditSubjectHeading';

function EditSubjectBoxDesktop({ id, subjectTitle, subjectCode, scheduledClassesPerWeek, className, semesterLevel, branch, closeModal, setViewableData, state }) {
  const [subjectTitleState, setSubjectTitleState] = useState(subjectTitle);
  const [subjectCodeState, setSubjectCodeState] = useState(subjectCode);
  const [classesPerWeek, setClassesPerWeek] = useState(scheduledClassesPerWeek);
  const [classNameState, setClassNameState] = useState(className?className:'');
  const [semesterLevelState, setSemesterLevelState] = useState(semesterLevel);
  const [branchState, setBranchState] = useState(branch);
  const [statusState, setStatusState] = useState(state);

  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  const saveHandler = () => {

  }

  return (
    <div style={{transform:'translate(-50%,-50%)'}} className={`absolute left-[50%] top-[50%] rounded-[8px] h-[800px] flex flex-col gap-[30px] w-[616px] bg-03 px-[30px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"}`}>
      <div className='mt-[30px]'>
        <EditSubjectHeading>{subjectCode} - {subjectTitle} </EditSubjectHeading>
      </div>
      <div>
        <TextField
          label='Subject Title'
          value={subjectTitleState}
          onChange={(e) => setSubjectTitleState(e.target.value)}
          placeholder={subjectTitle}
          required
        />
        {subjectTitleState.length === 0 && <ErrorLabel>Subject title cant be empty</ErrorLabel>}
      </div>
      <div className='flex justify-between'>
        <div>
          <TextField
            label={'Subject code'}
            value={subjectCodeState}
            onChange={(e) => setSubjectCodeState(e.target.value)}
            placeholder={subjectCode}
            required
          />
          {subjectCodeState.length === 0 && <ErrorLabel>Subject code cant be empty</ErrorLabel>}
        </div>

        <div>
          <TextField
            label={'Classes Per Week'}
            value={classesPerWeek}
            onChange={(e) => setClassesPerWeek(e.target.value)}
            placeholder={scheduledClassesPerWeek}
            required
          />
          {classesPerWeek.length === 0 && <ErrorLabel>Classes per week cant be empty</ErrorLabel>}
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <TextField
            value={classNameState}
            onChange={(e) => setClassNameState(e.target.value)}
            label={'Class'}
            placeholder={className}
            required
          />
          {classNameState.length === 0 && <ErrorLabel>Class cant be empty</ErrorLabel>}
        </div>
        <div>
          <TextField
            value={semesterLevelState}
            onChange={(e) => setSemesterLevelState(e.target.value)}
            label={'Semester / Level'}
            placeholder={semesterLevel}
            required
          />
          {semesterLevelState.length === 0 && <ErrorLabel>Semester level cant be empty</ErrorLabel>}
        </div>

      </div>
      <Select
        value={statusState}
        onChange={(e) => setStatusState(e.target.value)}
        label={'Status'}
      >
        <SelectItem value='Active' />
        <SelectItem value='Inactive' />
      </Select>
      <div>
        <TextField
          value={branchState}
          onChange={(e) => setBranchState(e.target.value)}
          label={'Branch'}
          placeholder={branch}
          required
        />
        {branchState.length === 0 && <ErrorLabel>Branch cant be empty</ErrorLabel>}
      </div>
      <div className='flex items-center justify-end gap-[15px]'>
        <Button4 onClick={closeModal}>Cancel</Button4>
        <Button2
          onClick={saveHandler}
        >Save</Button2>
      </div>
    </div>

  )
}

export default EditSubjectBoxDesktop;