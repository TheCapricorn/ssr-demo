import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import './App.css';

const App=(props)=>{
  return(
    <div>
      {
        renderRoutes(props.route.routes)
      }
    </div>
  )
}

export default App;
