import { ChatOutlined } from '@mui/icons-material';
import React from 'react';
import { Navigate } from 'react-router-dom';


const Auth = ({ isLoggedIn, isAcademic, isStudent, children, isConvenor }) => {
  if (isLoggedIn) {
    if(isStudent){
      return children;
    }
    if(isAcademic){
      return children;
    }
    if(isConvenor){
      return children;
    }
    if(isAcademic && isStudent){
      //Invalid go to login for now
      return <><div>Session expired,please login.<Navigate to="/" replace={isLoggedIn}/></div></>;
    }
    } else {
     return <><div>Session expired,please login.<Navigate to="/" replace={isLoggedIn}/></div></>;
  }
};

export default Auth;