import React from 'react'
import Array from './Array'

function ListEmployees(props) {
  return (
    <div className='container'>
      <h1>Current Employees</h1>
      <Array employees={props.employees} />
    </div>
  )
}

export default ListEmployees;