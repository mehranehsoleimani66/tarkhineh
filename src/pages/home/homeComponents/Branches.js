import CardItem from './CartItem';
import axios from 'axios';
import { useEffect,useState } from 'react';


const Branches =()=>{
const [branchState,setBranchState]=useState([])
 const getBranchesData =async()=>{
 
    const response = await axios.get('https://8ebb1f5c-f534-4420-af16-9b421a69871b.mock.pstmn.io/branches')
    const {data} = response
    setBranchState(data)
    
    
 }
 

    useEffect(()=>{getBranchesData();}
    ,[])
    
  

return(

  <>
  <div className='flex flex-col justify-center items-center w-full p-10'>
   <div className='p-5'><h4>شعبه های ترخینه</h4></div>
   <div className='flex flex-row-reverse justify-center items-start gap-2'>
   
 {
  
  branchState?.data ? branchState?.data.map((item)=>

  <CardItem  title={item?.title} description={item?.adress} 
  cartImg={`/images/branches/${item?.id}.png`}
  
  />
) : null
 }
   
    
    
    </div>
    </div>
     </>
    
);

}
export default Branches;