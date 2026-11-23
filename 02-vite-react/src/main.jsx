import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import React from 'react';

function MyApp(){
  return(
    <>
    <h1>
      Custom Apppppp!</h1></>
  )
}
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const hunu="call me hunu"

const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click me to visit google',
  hunu
);

createRoot(document.getElementById('root')).render(
 reactElement
 
)
