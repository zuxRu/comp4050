import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom/dist';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>Login
      <Button onClick={() => {navigate("/dashboard")}} variant='text'>Go to Student Dashboard</Button>
      <Button onClick={() => {navigate("/Academics")}} variant='text'>Go to Academics Dashboard</Button>
    </div>
  )
}
