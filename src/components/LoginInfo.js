import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';


export default function LoginInfo() {
  let { isLoggedIn } = useParams();
  return (
    <div>
      test: {isLoggedIn}
    </div>
  )
}
