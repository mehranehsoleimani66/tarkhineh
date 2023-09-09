import { useState } from 'react';
import './Navbar.css';
import Logo from './Logo';
import Icons from './Icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
    return ( 
        <>
     
    <div className="Navbar">
    <Icons/>
    <div className="nav-items">
        <Link to="/">صفحه اصلی</Link>
        <Link to="/Shop">فروشگاه</Link>
        <Link to="/branches">شعبه </Link>
        <Link to="/agency">اعطای نمایندگی</Link>
        <Link to="/aboutUs">درباره ی ما</Link>
        <Link to="contactUs"> ارتباط با ما</Link>
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