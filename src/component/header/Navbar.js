import { useState } from 'react';
import './Navbar.css';
import Logo from './Logo';
import Icons from './Icons';
const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
    return ( 
        <>
     
    <div className="Navbar">
    <Icons/>
    <div className="nav-items">
        <a href="/home">صفحه اصلی</a>
        <a href="/menu">منو</a>
        <a href="/branches">شعبه </a>
        <a href="/agency">اعطای نمایندگی</a>
        <a href="/aboutUs">درباره ی ما</a>
        <a href="contactUs"> ارتباط با ما</a>
    </div>
    <Logo/>
    <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}
    >
         <div className='bar'></div>

    </div>
    
</div> 

{/* 
         <ul className="flex flex-row-reverse items-center justify-center gap-6  flex-grow-2 text-[#717171] ">
            <li className=" hover:text-[#417F56] hover:border-b-2 cursor-pointer border-b-[#417F56] ">صفحه اصلی </li>
            <li className="flex flex-row justify-center items-end  gap-1 hover:text-[#417F56] cursor-pointer"><img className='w-4'src='./images/arrow-down.png'/><span className="hover:text-[#417F56] hover:border-b-2  border-b-[#417F56]">شعبه</span></li>
            <li className="flex  flex-row justify-center items-end  gap-1 hover:text-[#417F56] cursor-pointer"> <img  className='w-4' src='./images/arrow-down.png '/><span className="hover:text-[#417F56] hover:border-b-2 border-b-[#417F56]">منو</span> </li>
            <li className="hover:text-[#417F56] hover:border-b-[#417F56] hover:border-b-2 cursor-pointer ">اعطای نمایندگی</li>
            <li className="hover:text-[#417F56] hover:border-b-2 cursor-pointer border-b-[#417F56]">درباره ی ما</li>
            <li className="hover:text-[#417F56] hover:border-b-2 cursor-pointer border-b-[#417F56]"> ارتباط با ما </li>
    </ul>  */}
        </>
     );
}
 
export default Navbar;