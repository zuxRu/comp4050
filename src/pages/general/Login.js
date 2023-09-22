import { Button } from '@mui/material'
import React from 'react'
import { useNavigate} from 'react-router-dom/dist'
import LoginInfo from '../../components/LoginInfo';


export default function Login(props) {
  const {setIsAcademic, setIsStudent, setIsConvenor, setIsLoggedIn} = props;
  const navigate = useNavigate();
  const goToStudent = () => {
    setIsLoggedIn(true);
    setIsStudent(true);
    navigate("/dashboard");
  }
  const goToAcademic = () => {
    setIsLoggedIn(true);
    setIsAcademic(true);
    setIsConvenor(false);
    setIsStudent(false);
    navigate("/dashboard");
  }
  const goToConvenor = () => {
    setIsLoggedIn(true);
    setIsAcademic(false);
    setIsConvenor(true);
    setIsStudent(false);
    navigate("/dashboard");
  }
  const goToStudentFalse = () => {
    setIsLoggedIn(false);
    setIsStudent(true);
    setIsConvenor(false);
    setIsAcademic(false);
    navigate("/dashboard");
  }
  return (
    <div className='container'>
      <h1>Login Demo Buttons</h1>
      <Button color='error' className='container' onClick={goToStudent} variant='text'>Go to Student Dashboard</Button>
      <Button color='error' className='container' onClick={goToAcademic} variant='text'>Go to Academics Dashboard</Button>
      <Button color='error' className='container' onClick={goToConvenor} variant='text'>Go to Convenor Dashboard</Button>
      <Button color='error' className='container' onClick={goToStudentFalse} variant='text'>Go to Academics Dashboard - Not Logged In</Button>
    </div>
  )
} 