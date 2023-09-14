import { Modal } from "antd"
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
 import { userContext } from "../../App";
import {  useNavigate } from "react-router-dom";

const Login = () => {
    const [step , setStep] = useState(1)
    const [userPhoneNumber,setUserPhoneNumber] = useState()
    const [optCode,SetOptCode]= useState([])
    const navigate = useNavigate()

const myUserContext = useContext(userContext)
     useEffect(()=>{
        console.log(userPhoneNumber,'userPhoneNumber')
     },[userPhoneNumber])
    
     const setOptHandler=(e)=>{
       const prevoptCode = [...optCode]
        prevoptCode.push(e.target.value)
        SetOptCode(prevoptCode)
     }


    //login 
const loginHandler=()=>{
  
//شماره کاربر و کد تایید به بک اند ارسال  می کنیم
axios.post("https://8ebb1f5c-f534-4420-af16-9b421a69871b.mock.pstmn.io/signin",{
phone:userPhoneNumber,
code:optCode,
}).then(({data})=>{
    console.log(data,'data from post')
    myUserContext.setUserHandler(data?.data)
    navigate("/profile")
}).catch((err)=>{
   console.log(err)
})
    
}

    return ( 
     <Modal open={true} footer={null} closeIcon={false}> 
       
        {step===1 ?<Step1 phone={userPhoneNumber} setPhone={(e)=>setUserPhoneNumber(e)} setStep={()=>setStep(2)} SetOptCode={e=>setOptHandler(e)} />:
        <Step2 
        phone={userPhoneNumber}
        optCode={optCode}
        setStep={()=>setStep(1)}
        loginHandler={loginHandler}
        />}

     </Modal>

     );
}
 
export default Login;