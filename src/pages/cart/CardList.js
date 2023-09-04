import { cartContext } from "../../App";
import CardItem from "./CardItem";
import {useContext} from 'react';
import CardPage from "./CardPage";
import TotalCart from "./TotalCart";

const CardList = () => {
   

      const myCartList = useContext(cartContext);
      console.log(myCartList,'mycartlist')
      const {cardFood} = myCartList;
      console.log(cardFood,'cardfood')
     
//برای حذف از سبد خرید

   const deletFoodHandler=(id)=>{
    console.log(id);
    const prevCart = cardFood;
    const foodIndex = prevCart.findIndex((item)=>item.id==id);
    prevCart.splice(foodIndex,1);
    console.log(prevCart,'prevcart');
    myCartList.buyFoodHandler([...prevCart])


}
    return (  
        
<>

<div >
{myCartList?.cardFood.length == 0 ? (<CardPage/>) : (
    <div className="flex flex-row justify-around mt-36 gap-4 items-start mb-12">
<div className="w-1/4  border ml-20 mr-12 border-gray-800 rounded-md"><TotalCart/></div>
<div className=" w-3/4 h-96 border mr-20 mb-10 gap-4 border-gray-500 rounded-md overflow-y-scroll ">

         {myCartList?.cardFood?.map((item)=>(
            <CardItem
            key={item.id}
            title={item?.title}
            price={item?.price}
            starCount={item?.starCount}
            scoreCount={item?.scoreCount}
            hasDiscount={item?.hasDiscount}
            discountedPrice={item?.discountedPrice}
            discountedPercent={item?.discountedPercent}
            foodImage={`/images/foods/${item?.id}.png`}
            deletFoodHandler={()=>{deletFoodHandler(item.id)}}
            /> 

      ) )} 
      </div>

</div>

)}


</div>
</>

    );
}
 
export default CardList;