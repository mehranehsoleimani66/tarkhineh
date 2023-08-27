import { useContext } from "react";
import { cartContext } from "../../App";

const LogIn = () => {
    const myCartCount = useContext(cartContext)
   
  console.log (myCartCount.cardFood) 
let prices =  myCartCount.cardFood.reduce((amount,item)=> item.price + amount,0)
let disCounts = myCartCount.cardFood.reduce((amount,item)=> item.discountedPrice + amount,0)
    return ( 
<>
<div className="flex flex-col  justify-between  items-center" >
  
<div className="flex flex-row  w-full justify-between border border-b-2 p-2 items-center" >
<span> <img src='./images/trash.png'/></span>
<span >سبد خرید  ({myCartCount.cardFood.length})</span>    
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
 
export default LogIn;