import { cartContext } from "../../App";
import CardItem from "./CardItem";
import {useContext} from 'react';
import LogIn from "./LogIn";
import CardPage from "./CardPage";

const CardList = () => {
   

    const myCartList = useContext(cartContext)
   console.log(myCartList.cardFood)

    return (  
        
<>

<div >
{myCartList.cardFood.length == 0 ? (<CardPage/>) : (
    <div className="flex flex-row justify-around mt-36 gap-4 items-start mb-12">
<div className="w-1/4  border ml-20 mr-12 border-gray-800 rounded-md"><LogIn/></div>
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