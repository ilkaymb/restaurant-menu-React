import React from 'react';
import '../Styles/MenuCard.css'

class Menu extends React.Component{
    render(){
        return(   
            <div className="container">
            <div className="row">
            {this.props.menuItems.map((menu)=>(
                <div id="Menu-Card" className="col-lg-4 d-flex align-items-stretch">
                    <div className="card mb-4 shadow-sm" st>
                        <img src={menu.img} className="img-thumbnail" alt="Sample Movie" width="400" height="300" style={{width:400,height:300,marginLeft: 'auto',marginRight: 'auto'}}/>
                        <div className="card-body">
                            <h2 className="card-title">{menu.title}</h2>
                            <p className="card-text">{menu.desc}</p>
                           
                         </div>
                         <h1 className="price">{menu.price}TL</h1>
                    </div>
                 </div>
            ))
            }
            </div>
        </div>
        )
     
    }
}
export default Menu;