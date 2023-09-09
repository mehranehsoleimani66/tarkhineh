import { Button, Input } from "antd";
import { useEffect } from "react";

const Step2 = ({phone,optCode,SetOptCode,setStep,loginHandler}) => {
    useEffect(()=>{
        console.log(setStep,'setstep2')
     },[setStep])



    return ( 
        <>
        
<div className="flex flex-col justify-center items-center gap-5">
    <div ><img src='/images/logo.png'/></div>
    <div className="flex flex-col justify-center items-center gap-5 ">
        
        <h4 className="text-lg font-bold" > کد تایید</h4>
        <h4  className="text-slate-400">کد تایید پنج رقمی به شماره {phone} ارسال خواهد شد</h4>
     </div>
    <div className="flex flex-row gap-1 mt-5">
    <Input value={optCode[0]} onChange={SetOptCode} className="text-black" maxLength={1} />
    <Input  value={optCode[1]} onChange={SetOptCode} className="text-black" maxLength={1}/>
    <Input value={optCode[2]} onChange={SetOptCode}  className="text-black" maxLength={1}/>
    <Input value={optCode[3]} onChange={SetOptCode}  className="text-black" maxLength={1}/>
     <Input value={optCode[4]} onChange={SetOptCode}  className="text-black" maxLength={1}/>
    </div>
    <div className="flex flex-row justify-between items-center text-slate-400 w-full">

        <h2 onClick={setStep} className="text-[#417F56] cursor-pointer">ویرایش کد</h2>
        <h2 className=" cursor-pointer">دریافت مجدد کد</h2>

    </div>
    <div>
        <Button onClick={loginHandler} >ارسال کد</Button>
    </div>
    <div className="flex flex-row-reverse gap-0.5">ورود و عضویت در ترخینه به منزله قبول<h2 className="text-[#417F56]">قوانین و مقررات</h2>   . است</div>
</div>


        </>
     );
}
 
export default Step2;