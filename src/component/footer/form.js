import { Button,Input,message } from "antd";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Form=()=>{
const [name,setName]=useState('');
const [num,setNum]=useState('');
const [email,setEMail]=useState('');
const [text,setText]=useState('');
const [loading,setLoading]=useState(false);
const  SendEmailHandler= () => {
    setLoading(true)
const templateParams={
    name,
    num,
    email,
    text,
}
    emailjs.send('service_8vcwirc','template_7itoadq', templateParams,'gbXcI0OngCdAjqkAA')
 
    .then(function(response) {
           message.success('با موفقیت انجام شد')
           setLoading(false)
 }, function(err) {
    console.log('مشکلی پیش امد', err);
       setLoading(false)
 });
   }

return(


<div className="  flex flex-col items-end justify-center p-10 gap-2  w-1/2 ">
           <h4 className="font-bold cursor-pointer ">پیام به ترخینه</h4>
           <div className="flex flex-row-reverse ">
            <div className="flex flex-col gap-2 pl-2 " >
            <Input className="text-right  bg-transparent border rounded-sm"  value={name} placeholder='نام نام خانوادگی' onChange={(e)=>{setName(e.target.value)}}/>
            <Input className="text-right bg-transparent border rounded-sm"   placeholder='شماره تماس' value={num} onChange={(e)=>{setNum(e.target.value)}}/>
            <Input className="text-right bg-transparent border rounded-sm" type='email' placeholder='آدرس ایمیل(اختیاری)' value={email} onChange={(e)=>{setEMail(e.target.value)}} />
             </div>
           <div className=" flex flex-col justify-center items-center gap-5">
           <textarea  className="text-right leading-10 rounded-sm bg-transparent text-white border" type="text" placeholder='...پیام شما ' value={text} onChange={(e)=>{setText(e.target.value)}}  />
            <Button className="w-25 text-white" loading={loading} onClick={SendEmailHandler}>ارسال پیام</Button>
           </div>
           
            </div>
          </div>

)

}
 export default Form

