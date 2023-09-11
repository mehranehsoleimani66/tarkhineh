import { Badge } from "antd";
import { useContext } from "react";
import { cartContext, userContext } from "../../App";
import { Link } from "react-router-dom";
const Icons = () => {
    

const myCartList = useContext(cartContext);
const myUserContext = useContext(userContext);
console.log(myUserContext,'uuuuu')
    return ( 
        <>
        <div className="sm:w-50 flex flex-row justify-between items-center mx-20  gap-2 ">

           <div className="bg-[#E5F2E9] rounded-lg p-1 text-[#417F56] cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
           </div>
           {myCartList.cardFood.length === 0 ? <Link  to="/CardPage">
            <div className="bg-[#E5F2E9] rounded-lg p-1 text-[#417F56] cursor-pointer">          
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                 </svg>
            </div>
            </Link> : <Link to="/cardList">
               <div className="bg-[#417F56] rounded-lg  text-[#417F56]">
            <Badge count={myCartList.cardFood.length}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                 </svg>
                 </Badge>
                 </div>
            </Link> }
           

            {myUserContext.user.name ? <Link  to='/profile' className="text-[#417F56] cursor-pointer"> <div className="bg-[#E5F2E9] rounded-lg p-1 text-[#417F56] cursor-pointer flex flex-row justify-center  ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>  
                  {myUserContext.user.name}  خوش آ مدید 
            </div>
            </Link>
           : <Link  to='/login'  className="text-[#417F56] cursor-pointer"> <div className="bg-[#E5F2E9] rounded-lg p-1 text-[#417F56] cursor-pointer flex flex-row justify-center  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg> 
             
               </div>
         </Link> 
           }
            <span className="pl-5 text-[#417F56]"> </span>
        </div>
        </>
     );
}
 
export default Icons;