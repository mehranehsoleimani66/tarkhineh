import CardItem from './CartItem';
import axios from 'axios';
import { useEffect,useState } from 'react';


const Branches =()=>{
const [branchState,setBranchState]=useState([])
 const getBranchesData =async()=>{
 
    const response = await axios.get('https://f8c36224-169f-44a4-9908-74bc77bb153c.mock.pstmn.io/branches')
    const {data} = response
    setBranchState(data)
    
    
 }
 

    useEffect(()=>{getBranchesData();}
    ,[])
    
  

return(

  <>
  <div className='flex flex-col justify-center items-center w-full p-10'>
   <div className='p-5'><h4>شعبه های ترخینه</h4></div>
   <div className='flex flex-row justify-center items-start gap-2'>
   
 {
  
  branchState?.data ? branchState?.data.map((item)=>

  <CardItem title={item?.title} description={item?.adress}/>
) : null
 }
   
    
    
    </div>
    </div>
     </>
    
);

}
export default Branches;