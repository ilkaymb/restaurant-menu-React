import React from 'react';
import MenuCard from './MenuCard'

class Menu extends React.Component{
state={
   menu_doner: [
    {
      title: "Tombik Et Döner",
      category: "Döner",
      price: 7.99,
      img:
        "https://www.kasapozkan.com/images/tombik-doner-akcaabat.png",
      desc:`Tombik arası et dürüm`,
    },
    {
      title: "Tombik Tavuk Döner",
      category: "Döner",
      price: 9.99,
      img:
        "https://www.tekinusta.com/content/userfiles/ListItem/big/tombik-doner-nasil-yapilir-i4835.jpg",
      desc: `Tombik arası tavuk dürüm`,
    },
    {
      title: "Ekmek Arası Et Döner",
      category: "Döner",
      price: 3.99,
      img:
        "https://static.daktilo.com/sites/302/uploads/2013/07/22/large/58341-0.jpg",
      desc: `Ekmek arası et döner `,
    },
    {
        title:"Ekmek Arası Tavuk Döner",
        category:"Döner",
        price:16,
        img:"https://www.oncudoner.com/content/urunler/f29262e6367f715c653279f9bc90b4ca.jpg",
        desc:`Ekmek Arası Tavuk Döner`
    },
    {
      title:"İskender",
      category:"Döner",
      price:30,
      img:"https://www.atakoysarksofrasi.com.tr/images/product/c26c12ed-1ddd-40cf-aca4-4b89a5312d6d.jpg",
      desc:`İskender`
    }
  ],
  menu_corba: [
    {
      title: "Mercimek Çorbası",
      category: "Çorbalar",
      price: 5.99,
      img:
        "https://w7.pngwing.com/pngs/230/940/png-transparent-lentil-soup-ezogelin-soup-turkish-cuisine-chicken-soup-bouillon-meat-soup-food-recipe.png",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      title: "Ezogelin Çorbası",
      category: "Çorbalar",
      price: 12.99,
      img:
        "https://e7.pngegg.com/pngimages/1017/558/png-clipart-ezogelin-soup-greek-cuisine-turkish-cuisine-tripe-soup-recipe-meat-soup-food-thumbnail.png",
      desc: `Ezogelin çorbası`,
    },
    {
      title: "Yoğurtlu Çorba",
      category: "Çorbalar",
      price: 12.99,
      img:
        "https://www.tandirunlumamuller.com/assets/images/corba-04.jpg",
      desc: `Yoğurt Çorbası`,
    }  
  ],
  menu_tatlı: [
    {
      title: "Künefe",
      category: "Tatlılar",
      price: 10.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/kaymakli_kunefe-1fda980f-6b06-464f-8cbc-101155f01e3d.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    
    {
      title: "Sütlaç",
      category: "Tatlılar",
      price: 8.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge/firin-sutlac-751ef39f-fc8b-4f3d-8e6f-f36e57f88e74",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
  ],
  menu_icecek: [
    {
      title:"Su",
      category:"içecekler",
      price:12,
      img:"https://ayb.akinoncdn.com/products/2021/06/18/2318/f985fe36-6811-46e0-85f9-3075e1f7914f_size780x780_quality60_cropCenter.jpg",
      desc:`250 ml su`
    },
    {
      title:"Cola",
      category:"içecekler",
      price:15,
      img:"https://n11scdn.akamaized.net/a1/602_857/12/97/39/36/07009641.jpg",
      desc:`330 ml Cola`  
    },
    {
      title:"Fanta",
      category:"içecekler",
      price:15,
      img:"https://productimages.hepsiburada.net/s/7/375/9774924005426.jpg",
      desc:`330 ml Fanta`   
    },
    {
      title:"Büyük Ayran",
      category:"içecekler",
      price:10,
      img:"https://www.sutas.com.tr/uploads/products/thumb/21b5e9d8029e311d500da464afd72ae7_thumb.jpg",
      desc:`Büyük boy ayran`  
    },
    {
       title:"Küçük Boy Ayran",
       category:"içecekler",
       price:15,
       img:"https://www.sutas.com.tr/uploads/products/thumb/3ae20b0db202bdc6768f24ee9c0f6c1c_thumb.jpg",
       desc:`küçük boy ayran`  
    },
    {
        title:"Sprite",
        category:"içecekler",
        price:15,
        img:"https://cdn.dsmcdn.com/mnresize/500/-/ty64/product/media/images/20210202/13/59324012/136986391/1/1_org.jpg",
        desc:`küçük boy ayran`,  
    },
    {
        title:"Soda",
        category:"içecekler",
        price:12,
        img:"https://productimages.hepsiburada.net/s/32/375/10364946645042.jpg",
        desc:`Soda 330ml`,
    }
  ]
}

    render(){
        return(   
        <div className="container">
         
            <div className="row">  
            <a name="doner"></a>
            <h1>DÖNERLER</h1>
           
                <div className="col-lg-12">
                   <MenuCard
                    menuItems={this.state.menu_doner}/>
                </div>

            </div>
            <div className="row">  
            <a name="corba"></a>
            <h1>ÇORBALAR</h1>
    
                <div className="col-lg-12">
                   <MenuCard
                    menuItems={this.state.menu_corba}/>
                </div>

            </div>
            <div className="row">  
            <a name="tatlı"></a>
            <h1>TATLILAR</h1>
           
                <div className="col-lg-12">
                   <MenuCard
                    menuItems={this.state.menu_tatlı}/>
                </div>

            </div>
            <div className="row">  
            <a name="icecek"></a>
            <h1>İÇECEKLER</h1>
           
                <div className="col-lg-12">
                   <MenuCard
                    menuItems={this.state.menu_icecek}/>
                </div>

            </div>
        </div>
        )
     
    }
}
export default Menu;