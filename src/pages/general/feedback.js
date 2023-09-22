import React from 'react'

export default function feedback({isOpen}) {
  return (
    <div className={isOpen ? "master-flexbox": "master-flexbox-closed"}>feedback</div>
  )
}
