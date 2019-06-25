import React from 'react'
import './Select.scss'

const Select = (props) => {
  return (
    <select className="crm-options" onChange={props.options}> 
        <option value="0"> Contacts </option>
        <option value="1"> Company </option>
        <option value="2"> Projects </option>  
    </select>
  )
}

export default Select