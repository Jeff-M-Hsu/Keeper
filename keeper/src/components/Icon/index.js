import React from 'react';
import Menu from '../../resources/icons/menu.png';
import JeffHsu from '../../resources/img/JeffHsu.jpg';

const JHsu = () =>(
  <img src={JeffHsu} className="rounded-full object-center h-32 w-32" alt="Jeff Hsu" />
)
const MenuIcon = () => (
  <img src={Menu} alt="Menu Icon" />
)

export{
  JHsu,
  MenuIcon
}