import React from 'react';
import '../../styles/tailwind.css';
import Menu from '../../resources/icons/menu.png';
import JeffHsu from '../../resources/img/JeffHsu.jpg';

const JHsu = () =>(
  <img src={JeffHsu} className="rounded-full object-center h-32 w-32" alt="Jeff Hsu" />
)
const MenuIcon = () => (
  <a className="h-6"><img src={Menu} className="w-6 pt-3" alt="Menu Icon" /></a>
)

export{
  JHsu,
  MenuIcon
}