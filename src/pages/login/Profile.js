import React, { useContext } from 'react';
import { userContext } from '../../App';

const Profile = ({phone}) => {
   console.log(userContext,'v') 
   const myUserContext = useContext(userContext);
    console.log(myUserContext,'vard sho')
   return(
  
      <div  className='w-[300px] m-auto mt-20 mb-20 border border-black h-auto'>
      <div className='flex flex-row-reverse justify-start items-center p-3' >
         <img src='images/Ellipse.png' alt='profile image' />
         <div className='flex flex-col justify-start items-center pr-3'>
         <p className='text-lg'>{myUserContext.user.name} </p>
         <p className='text-sm text-slate-400'>{phone}</p>
         </div>
         </div>
         <div className='w-[260px] border border-b-2 m-auto'></div>
      <div className='flex flex-col justify-end items-end gap-4 mb-5 mt-5 pr-3'>
         
     <div className='flex flex-row-reverse justify-end items-center gap-2'>
         <img src='images/user.png' className='rounded-full w-5 h-5' alt='profile image' /> 
         <p> پروفایل</p>
         </div> 
      <div className='flex flex-row-reverse justify-end items-center gap-2'>
         <img src='images/Wallet-2.png' className='rounded-full' alt='profile image' /> 
         <p> سفارشات</p> 
         </div>
         <div className='flex flex-row-reverse justify-end items-center gap-2'>
         <img src='images/Wallet-2.png' className='rounded-full' alt='profile image' /> 
         <p> فروشگاه</p>  
         </div>
         <div className='flex flex-row-reverse justify-end items-center gap-2'>
         <img src='images/Logout.png' className='rounded-full' alt='profile image' />  
         <p> خروج</p>   
         </div>
      </div>
      </div>
   );
}
 


export default Profile;
