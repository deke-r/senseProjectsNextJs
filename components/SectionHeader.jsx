import React from 'react'

const SectionHeader = (props) => {
  return (
    <> 
    <div className="heading-wrapper">
    <h2 className="custom-heading fw-bold font-pop mb-0" style={{color:props.color}}>{props.header}</h2>
  </div>
  </>
  )
}

export default SectionHeader