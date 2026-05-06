import React from 'react';
import CompGet from './components/CompGet.jsx';
import CompGetParam from './components/CompGetParam.jsx';
import CompPost from './components/CompPost.jsx';
import CompLogin from './components/CompLogin.jsx';

export default function App() {
  return (
    <div>
      <CompLogin />
      <hr/>
      <CompPost />
      <hr/>
      <CompGet />
      <hr/>
      <CompGetParam />
    </div>
  );
}

