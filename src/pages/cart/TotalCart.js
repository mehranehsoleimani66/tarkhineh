import { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";

const TotalCart = () => {
    const myCartList = useContext(cartContext)
   
  console.log (myCartList.cardFood) 
let prices =  myCartList.cardFood.reduce((amount,item)=> item.price + amount,0)
let disCounts = myCartList.cardFood.reduce((amount,item)=> item.discountedPrice + amount,0)


const deleteAllProduct=()=>{
    myCartList.buyFoodHandler([])
}

    return ( 
<>
<div className="flex flex-col  justify-between  items-center" >
  
<div className="flex flex-row  w-full justify-between border border-b-2 p-2 items-center" >
<div onClick={deleteAllProduct}> <img src='./images/trash.png'/></div>
<span >سبد خرید  ({myCartList.cardFood.length})</span>    
</div>
<div className="flex flex-row-reverse w-full justify-between  border border-b-2 p-2  items-center">
<span>تخفیف محصولات</span>
<span>{disCounts} ریال</span>
</div>
<div className="flex flex-row w-full justify-between  border border-b-2 p-2  items-center">
<span>{prices-disCounts} ریال</span>
<span>مبلغ واریزی</span>
</div>
<div className="w-full flex flex-row-reverse gap-1 p-2 justify-center items-center  bg-[#417F56] text-white">
    <span><img src='./images/user1.png' alt=""/></span>
    <span>ورود/پبت نام</span>
    </div>
    </div>
</>

     );
}
 
export default TotalCart;