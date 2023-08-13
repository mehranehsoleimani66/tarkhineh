import { Button} from 'antd';
import { FaStar} from 'react-icons/fa';

const Foods = ({title,foodImage,starCount,scoreCount,discountedPercent,hasDiscount,discountedPrice,price}) => {
    return ( 
        
                 <div className=' flex-col justify-center  items-center m-5 border border-gray-400 rounded-md shadow-xl hover:-translate-y-2 transition-all' style={{boxShadow:"0.5rem 0.75rem 1.5rem #bbbbbb",background:'var --color-gray-primary'}}>
                    <img src={foodImage} className='productImage' alt='foodimage'/>
                    <div className='flex flex-col gap-2 justify-between items-center'>
                    <h3 className='pt-3 text-xl'>{title}</h3>

                   {/* contentscard */}

                    <div className='flex flex-row-reverse gap-3 mt-5 '>
                        <div className='flex flex-col  justify-end items-center '>
                            <div className='text-xs pb-2' style={{background:"url(./images/heart)"}} >
                            {/* <HeartOutlined/>  */}
                                افزودن به علاقه مندی ها</div>
                            <div className='flex flex-row-reverse justify-end items-right '>
                                    <FaStar style={{fill:'orange', paddingLeft:'2px'}}>{starCount}</FaStar>
                                    <span className='pl-2 text-sm'>
                                        {starCount}
                                        </span>
                                        <span className='pl-2 text-gray-500 text-sm'>
                                           (امتیاز {scoreCount}) 
                                        </span>
                            </div>
                        </div>  
                    <div className='flex flex-col justify-start items-center gap-1'>
                        <div style={{visibility:hasDiscount?'visible':'hidden'}}   className='flex flex-row justify-start items-center'>
                        <span className=' rounded-xl flex justify-center  items-center bg-red-300 w-7 h-5 text-sm'>%{discountedPercent}
                        </span>
                        <span className=' line-through text-gray-400 text-sm pl-1'>{discountedPrice}</span> 
                        </div>
                       
                        <div className='text-left text-sm'>{price}تومان</div>
                    </div>    
                   
                    </div>
                    </div>
                    <Button style={{background:'green',lineHeight:'20px' ,textAlign:'center', color:"white", margin:'15px' , width:"256px"}} >افزودن به سبد خرید </Button>
                    </div>
      
     );
}
 
export default Foods;