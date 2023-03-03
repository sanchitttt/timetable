import React from 'react'

function SelectItem({value}) {
  return (
    <option value={value}>{value}</option>
  )
}

export default SelectItem