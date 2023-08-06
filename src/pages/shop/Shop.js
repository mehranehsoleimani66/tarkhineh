// import CardItem from "../home/homeComponents/CartItem";
import Products from './components/Products';
import axios from 'axios';
import { useEffect,useState } from 'react';


const Shop = () => {
  const [productState,setProductState]=useState([])
  const getProductData =async()=>{
  
     const response = await axios.get('https://8d75c6cb-beb8-4542-bdbd-2b39ebbb89f7.mock.pstmn.io/products')
     const {data} = response
     setProductState(data)
     
  }
  
     useEffect(()=>{getProductData();}
     ,[])
     
    return (
      <div className='flex flex-col justify-between items-center  text-2xl'>
        <h4 className='mt-9' >پیشنهاد ویزه</h4>
     <div className='flex flex-row w-full justify-center items-center '>
     
      {productState?.data?.map((item)=>(
       <Products
       key={item.id}
       title={item?.title}
       price={item?.price}
       starCount={item?.starCount}
       scoreCount={item?.scoreCount}
       hasDisCount={item?.hasDiscount}
       discountedPrice={item?.discountedPrice}
       discountedPercent={item?.discountedPercent}
       /> 
       

      ) )
    
}

     </div>
     </div>
    )





}
 
export default Shop;





// <section  class="w-2/4 md:w-full flex flex-col justify-center items-center">
// <h1 class=''>منوی رستوران</h1>
// <CardItem />
// </section>

    
      
       
      //  <section  class="w-2/4 md:w-full flex flex-col justify-center items-center">
      //   <h1 class=''>منوی رستوران</h1>
      //   <container>
         
      //    <div>
            
      //   <img src='images/foodd.png'/>
       
        
      //   </div>
      //   <div className="flex flex-col justify-center items-center">
       
      //     <h1 className="">دلمه برگ کلم</h1>
      //     <div className="flex flex-row-reverse ">
      //       <div className="flex flex-col justify-space items-end border border-red-500 p-1">
      //       <h1 className="text-xs">افزودن به علاقه مندی ها</h1>
      //       <h1>5 امتیاز</h1>
      //       </div>
      //    <div className="flex flex-col justify-center items-end border border-red-500 p-3">
      //        <span>hhhhhhh</span>
      //        <span>4kkkkkk</span>
      //    </div>
          
      //     </div>
    


      //   </div>

         

      //   </container>
      //   </section>
