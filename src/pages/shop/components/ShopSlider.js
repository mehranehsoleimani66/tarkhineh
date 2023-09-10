
import Foods from './Foods';
import axios from 'axios';
import { useEffect,useState ,useContext} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { message } from 'antd';
import { cartContext } from '../../../App';


const ShopSlider = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade :false,
    
      
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: false,
             fade:false
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
         
       ]
    };

  const [productState,setProductState]=useState([])
  // const [cardFood,setCardFood]=useState([])
  const cardFood = useContext(cartContext)
  const getProductData =async()=>{
  
     const response = await axios.get('https://8ebb1f5c-f534-4420-af16-9b421a69871b.mock.pstmn.io/products')
     const {data} = response
     setProductState(data)
     
  }
  
     useEffect(()=>{getProductData();}
     ,[])


    const buyFoodHandler=(newFood)=>{

       //first food
      if (cardFood?.cardFood == undefined || cardFood?.cardFood.length==0){


        cardFood.buyFoodHandler([newFood])
      }

      //second or more foods without repeatiation
      else{
        const duplicate= cardFood?.cardFood.map((itm)=>{
          return itm.id == newFood.id ? true :false
        })
        if (duplicate.includes(true)){
          message.warning('غذا تکراری است.')
        }
        else{
          cardFood.buyFoodHandler([...cardFood.cardFood,newFood])
        }
      }}
     
    return (
      

      <div className='flex flex-col justify-between items-center  text-2xl w-full'>
        <h4 className='mt-9' >پیشنهاد ویزه</h4>
        {/* <div className='flex flex-row w-full'> */}
        <div style={{paddingBottom:'30px' }}>
        <Slider {...settings} style={{width:'1024px'}} className='shadow-none'>
         {productState?.data?.map((item)=>(
            <Foods
            key={item.id}
            title={item?.title}
            price={item?.price}
            starCount={item?.starCount}
            scoreCount={item?.scoreCount}
            hasDiscount={item?.hasDiscount}
            discountedPrice={item?.discountedPrice}
            discountedPercent={item?.discountedPercent}
            foodImage={`/images/foods/${item?.id}.png`}
            buyFoodHandler={()=>buyFoodHandler(item)}
            /> 

      ) )} 
</Slider></div>
{/* </div> */}
</div> 
   
    )}
 
export default ShopSlider;



