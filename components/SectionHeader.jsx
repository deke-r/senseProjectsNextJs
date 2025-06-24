import React from 'react'

const SectionHeader = (props) => {
  return (
    <> 
    <div className="heading-wrapper">
    <h3 className="custom-heading fw-bold font-pop mb-0" style={{color:props.color}}>{props.header}</h3>
  </div>
  </>
  )
}

export default SectionHeader