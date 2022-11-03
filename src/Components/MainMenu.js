import React from 'react';
import '../Styles/MainMenu.css'

function MainMenu() {

  return (
        <div className="container mb-5">
          <center>
              <div className="row">
                <a href="#doner" className="col-sm-3 p-2 m-3">
                  Dönerler
                </a>
                <a  href="#corba" className="col-sm-3 p-2 m-3">
                  Çorbalar
                </a>
              </div>
              <div className="row">
                <a  href="#tatlı" className="col-sm-3 p-2 m-3">
                  Tatlılar
                </a>
                <a  href="#icecek" className="col-sm-3 p-2 m-3">
                  İçecekler
                </a>
              </div>
      </center>
    </div>
  );
}

export default MainMenu;