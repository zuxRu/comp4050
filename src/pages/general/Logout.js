import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Use a setTimeout to delay the navigation to the home page after 5000 milliseconds (5 seconds)
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array to run this effect only once

  return <div>Logging out... You will be redirected to the homepage shortly.</div>;
}