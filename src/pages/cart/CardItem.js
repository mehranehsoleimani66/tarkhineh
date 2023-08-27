

import { Badge} from 'antd';
import { useState } from 'react';
import { FaStar} from 'react-icons/fa';



const CardItem =({title,foodImage,starCount,price,discountedPercent,discountedPrice,hasDiscount}) => {
   
    console.log(starCount,'kkkk')
        return ( 
    
    <div className=' flex flex-row-reverse m-5 h-48 items-center gap-5 border border-gray-400 rounded-md'>
     <div className=''><img src={foodImage} className='productImage ' alt='foodimage'/></div>
    <div className='flex flex-row-reverse justify-between w-full pl-5  items-center pr-5'>
    <div className='flex flex-col justify-center gap-4  items-end'>
        <h4 className='text-lg text-right'>{title}</h4>
        <span>استا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده</span>
        <div className='flex flex-row justify-center items-center'>
             { [starCount].map(()=>{
          return (
            <FaStar className='fill-orange-400 '></FaStar>
          )
         
        })
    }
       </div>
    </div>
    <div className='flex flex-col justify-between  gap-2 items-center'>
        <div><img src='./images/trash.png'/></div>
        <div style={{visibility:hasDiscount?'visible':'hidden'}}  className='flex flex-row-reverse justify-between gap-2'>
       <span className=' line-through text-gray-400 text-sm pl-1'>{discountedPrice}</span> 
        <Badge count={`${discountedPercent}%`} ></Badge>
        </div>
        <div>{price}تومان </div>
    </div>
    </div>
    </div>
     );
}
 

    
export default CardItem;