import Forms from "./Form/Forms";
const Footer=()=>{
    return(
        <div  className='flex flex-row  bottom-0 left-0 w-full text-white' style={{backgroundImage:`url(${'./images/Footerbg.png'})`}}>
           <div className='flex flex-row-reverse  justify-between items-start w-full'>
           <div className=" flex flex-col  justify-center items-center   p-10 gap-1  w-1/4 ">
           
           <h5 className="font-bold cursor-pointer ">پرسش‌های متداول</h5>
            <h1 className="cursor-pointer font-thin">قوانین ترخینه</h1>
           <h1 className="cursor-pointer font-thin">حریم خصوصی</h1>
           <div className="flex flex-row justify-center items-center gap-2 pt-2">
           <img src='./images/telegramicon.png' className="cursor-pointer"/>
           <img src='./images/instaicon.png' className="cursor-pointer"/>
           <img src='./images/twittericon.png' className="cursor-pointer"/>
           </div>
           </div>
           <div className="  flex flex-col  items-center justify-center p-10 gap-3  w-1/4">
         
           <h4 className="font-bold ">شعبه‌های ترخینه</h4>
            <h1 className="cursor-pointer font-thin">شعبه اکباتان</h1>
           <h1 className="cursor-pointer font-thin">شعبه چالوس</h1>
           <h1 className="cursor-pointer font-thin">شعبه اقدسیه</h1>
           </div>
           <div className="  flex flex-col justify-between  items-end  p-10 gap-3  w-1/2">
           <Forms/>
           </div>
           </div>
            </div>
            
    
        
    )
}
export default Footer;