
import Foods from './Foods'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopSlider = () => {
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
    };

  const [productState,setProductState]=useState([])
  const getProductData =async()=>{
  
     const response = await axios.get('https://8d75c6cb-beb8-4542-bdbd-2b39ebbb89f7.mock.pstmn.io/products')
     const {data} = response
     setProductState(data)
     
  }
  
     useEffect(()=>{getProductData();}
     ,[])
     
    return (
      

      <div className='flex flex-col justify-between items-center  text-2xl w-full'>
        <h4 className='mt-9' >پیشنهاد ویزه</h4>
        <div className='flex flex-row w-full'>
        <Slider {...settings}>
         {productState?.data?.map((item)=>(
            <Foods
            key={item.id}
            title={item?.title}
            price={item?.price}
            starCount={item?.starCount}
            scoreCount={item?.scoreCount}
            hasDisCount={false}
            discountedPrice={item?.discountedPrice}
            discountedPercent={item?.discountedPercent}
            foodImage={`/images/foods/${item?.id}.png`}
            /> 

      ) )   
}
</Slider>
</div>
      
    

    

    
     
     </div> 
   
    )
    
 
}
 
export default ShopSlider;



