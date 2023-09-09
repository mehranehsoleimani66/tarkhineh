import { Link } from "react-router-dom";

const CardPage = () => {

    return (  
<>
<div className="flex flex-row justify-center items-center w-4/5 border  border-[#417F56] h-80 ml-auto mr-auto mb-5 mt-20 p-28 relative">
    <div className=" w-[325px] h-72" style={{backgroundImage:`url(${'./images/Vector.png'})` , color:'transparent'}}></div>
<div className="absolute left-auto top-44">
<h1 className="text-[#757575] text-lg">شما در حال حاضر هیچ  سفارشی پبت نکرده اید </h1>
<Link to='/shop'><button className="border border-[#417F56]  bg-white p-1 pl-8 pr-8 m-5 text-center rounded-md "><span className="text-[#417F56]  text-center ">منوی رستوران</span></button>
</Link>
</div>
</div>
</>
    );
}
 
export default CardPage;