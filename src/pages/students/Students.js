import React from 'react'
import { useDocTitle } from '../../components/useDocTitle'
import { title } from '../../utils/urlString'

export default function Students({isOpen}) {
  useDocTitle(`${title} :Students`)

  return (
    <div>Students</div>
  )
}
