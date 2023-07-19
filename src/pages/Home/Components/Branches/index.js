import axios from 'axios';
import CardItems from '../CardItems';
import { useEffect,useState } from 'react';

const Branches =()=>{
const [branchState,setBranchState]=useState([])
 const getBranchesData =async()=>{
 
    const response = await axios.get('https://90f24d9c-4271-42b4-a7e4-9fc8d26cbc4f.mock.pstmn.io/branches')
    const {data} = response
    setBranchState(data)
    
    
 }
 

    useEffect(()=>{getBranchesData();}
    ,[])
    
  

return(

  <>
  <div className='flex flex-col justify-center items-center w-full p-10'>
   <div className='p-5'><h4>شعبه های ترخینه</h4></div>
   <div className='flex flex-row justify-center items-center gap-2'>
   
 {
  
  branchState?.data ? branchState?.data.map((item)=>

  <CardItems title={item?.title} description={item?.adress}/>
) : null
 }
   
    
    
    </div>
    </div>
     </>
    
);

}
export default Branches;