import profilePhoto from '../assets/profile.jpg';
import {FaBars , FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header(){
  
  const [nav,setnav] = useState(false);

  const links=[
      {
        id:1,
        link:'home'
      }, 
      {
        id:2,
        link:'about'
      },
      {
        id:3,
        link:'skills'
      },
      {
        id:1,
        link:'projects'
      },   
      {
        id:1,
        link:'contact'
      }       
  ];
  
  return (   
        // h-10 px-10
        
    <header className="flex justify-between items-center cursor-pointer font-medium text-gray-800 w-full h-15 px-10 py-2 ">
    <div className="flex gap-2">
    <img className="w-12 h-12 rounded-full" src={profilePhoto} alt="Banner" />
    <h3 className='mt-3 font-bold  text-lg'>ANJALI KUSHAWHA</h3>
    </div>
     <ul className="space-x-5  hidden  md:flex">
        {links.map(({id,link}) =>(
          <li key={id} className='font-bold  text-lg cursor-pointer capitalize hover:scale-105 duration-200' ><a href='#' className='hover:text-purple-500'> <ScrollLink to={link} smooth duration={500}>{link}</ScrollLink></a></li>
        )) }
        
      </ul>

    <div onClick={()=> setnav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
      {nav ? <FaTimes size={30}/> :<FaBars size={30}/>} 
    </div>

    {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white'>
      {links.map(({id,link}) =>(
          <li key={id} className='font-bold px-4 py-6  text-4xl cursor-pointer capitalize hover:scale-105 duration-200' ><a href='#' className='hover:text-purple-500'> <ScrollLink to={link} smooth duration={500}>{link}</ScrollLink></a></li>
        )) }
      </ul>
    )}
  </header>)
}