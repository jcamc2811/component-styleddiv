import React from 'react';
import ReactDOM from 'react-dom';
import DivStyled from './apps/DivStyled';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DivStyled configTitle={{tagTitle: "h1", colorTitle: "red", sizeTitle: "50px", paddingTitle: "0px 50px"}}
               configText={{tagText: "p", colorText: "blue", sizeText: "50px", paddingText: "0px 50px"}}
               configDiv={{colorDiv: "green", marginDiv: "10px 50px", paddingDiv: "0px 50px", widthDiv: "100%", heightDiv: "500px"}}>
      <h1>Hello World!</h1>
      <p>Hello World!</p>
    </DivStyled>
  </React.StrictMode>,
  document.getElementById('root')
);
