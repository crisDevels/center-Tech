import React from 'react'

export const DescriptionComponent = ({ description, openDescription })=> {
  if(!openDescription) {
    return null
  }
  return (
    <div>
      <p>{description}</p>
    </div>
  )
}