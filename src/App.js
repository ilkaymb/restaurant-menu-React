import React from 'react';
import Header from './Components/Header'
import MainMenu from './Components/MainMenu'
import Menu from './Components/Menu'
import Pagebutton from './Components/PageButton'

import './Styles/Style.css'
import './Styles/PageButton.css'


function App() {

  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }


  return (
    <div className="container">
      <a name="top"></a>
         <Header/>
         <MainMenu/>
         <Menu/>  
         <a href="#top" id="myBtn">
         <p className="topbutton" style={{textAlign:'center',justifyContent:'center',alignItems:'center',float:'center'}}> &#8679;</p>
         </a>   
    </div>
  );
}

export default App;
