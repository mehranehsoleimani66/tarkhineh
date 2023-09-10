
import MenuList from "../homeComponents/MenuList";
import { useEffect,useState } from 'react';
import axios from "axios";
const Menu =()=>{
  const [menuState,setMenuState]=useState([])
 const getMenuList =async()=>{
 
    const response = await axios.get('https://27c52ff4-053e-4612-a436-399663ad1950.mock.pstmn.io/menugroup')
    const {data} = response
    setMenuState(data)
    console.log(data,'dataaa')
    
 }
 
    useEffect(()=>{getMenuList();}
    ,[])
    
    return(
       <div className="flex flex-col justify-right items-center w-full h-80  bg-white">
         <div className="pt-4 pb-1 font-bold text-lg"><p>منوی رستوران</p> </div>
         <div className="flex flex-row-reverse justify-center pb-5 w-3/4 items-center">
  
         {
  menuState.data?.map((item)=>
  
   <MenuList id={item?.id} title={item?.title} link={item?.link} 
   menuImg={`/images/menuImg/${item?.id}.png`}
   />


  
  )  }
 

   
       </div>
      </div>
    
    )
       
    }
    export default Menu;