import React from 'react'

function Links() {
  const items = [
    "HomePage",
    "About",
    "Services",
    "Gallery",
    "Contact",
  ]
  return (
    <div className='links'>
      {items.map(item=>(
        <a href={`#${item}`} key={item}>{item}</a>
      ))}
    </div>
  )
}

export default Links