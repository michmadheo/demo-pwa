import React from 'react';
import mo88i from './assets/mo88iCircleIcon.webp';
import menu1 from './assets/menu1.webp';
import menu2 from './assets/menu2.webp';
import menu3 from './assets/menu3.webp';
import menu4 from './assets/menu4.webp';
import menu5 from './assets/menu5.webp';
import menu6 from './assets/menu6.webp';
import menu7 from './assets/menu7.webp';
import menu8 from './assets/menu8.webp';
import banner from './assets/banner.webp';
import promo1 from './assets/promo1.webp';
import promo2 from './assets/promo2.webp';
import promo3 from './assets/promo3.webp';
import promo4 from './assets/promo4.webp';
import nav1 from './assets/nav1.webp';
import nav2 from './assets/nav2.webp';
import nav3 from './assets/nav3.webp';
import nav4 from './assets/nav4.webp';
import './App.css';

const App =()=> {
  return (
    <div className="App-header">
      <div className="App-body">
        <div className="Container-welcome">
          <img alt='img' src={mo88i} className='Logo'/>
          <b className='Text-title'>Hi, Techbox</b>
        </div>
        <img alt='img' src={banner} className='Container-hero'/>

        <div className='Container-menu-buttons'>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu1}/>
            <b>Schedule</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu5}/>
            <b>Balance</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu2}/>
            <b>Test</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu6}/>
            <b>Fasttrack</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu3}/>
            <b>Payment</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu7}/>
            <b>Reminder</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu4}/>
            <b>Pitstop</b>
          </div>
          <div className='Container-button-menu'>
            <img alt='img' className='Button-menu' src={menu8}/>
            <b>Handover</b>
          </div>
        </div>

        <div className='Border-line'/>

        <div className="Container-welcome">
          <b className='Text-promo'>Promo</b>
        </div>

        <div className='Container-promo-buttons'>
          <div className='Container-button-promo'>
            <img alt='img' className='Button-promo' src={promo1}/>
            <b>Sport</b>
          </div>
          <div className='Container-button-promo'>
            <img alt='img' className='Button-promo' src={promo2}/>
            <b>Family</b>
          </div>
          <div className='Container-button-promo'>
            <img alt='img' className='Button-promo' src={promo3}/>
            <b>Offroad</b>
          </div>
          <div className='Container-button-promo'>
            <img alt='img' className='Button-promo' src={promo4}/>
            <b>Lifestyle</b>
          </div>
        </div>
      </div>
      <div className='Navbar-bottom'>
        <div className='Navbar-button-menu'>
          <img alt='img' className='Navbar-menu' src={nav1}/>
          <b>Home</b>
        </div>
        <div className='Navbar-button-menu'>
          <img alt='img' className='Navbar-menu' src={nav2}/>
          <b>Favorites</b>
        </div>
        <div className='Navbar-button-menu'>
          <img alt='img' className='Navbar-menu' src={nav3}/>
          <b>History</b>
        </div>
        <div className='Navbar-button-menu'>
          <img alt='img' className='Navbar-menu' src={nav4}/>
          <b>Acount</b>
        </div>
      </div>
    </div>
  );
}

export default App;
