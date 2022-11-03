import React from 'react';
import '../Styles/PageButton.css'


function PageButton() {
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


  return (
    <button href="#top" id="myBtn">Top</button>
    
  );
}

export default PageButton;