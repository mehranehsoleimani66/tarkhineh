//import { Button } from "antd";



const About =()=>{
    return (

<div  className='flex flex-row-reverse  justify-around  items-center p-9  w-full text-white' style={{backgroundImage:`url(${'./images/about.png'})`}}>
<div className="flex flex-col gap-3  justify-around w-1/3 m-auto text-right ">
 <h4 className="pt-3 font-bold text-lg">دانستنی های ترخینه</h4>
<p className=" leading-relaxed  text-justify">همان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</p>
<div className="w-1/4 text-white flex flex-row justify-center items-center p-2 text-xs cursor-pointer rounded-sm mb-5  border border-white"><img  className='w-4 flex  justify-center items-center'    src="./images/arrow-left.png"/>اطلاعات بیشتر</div>

</div>
<div className=" flex flex-col justify-between items-center w-1/2 ">
<div class="grid  grid-cols-2  gap-x-32 gap-y-10">
  <div className="flex flex-col justify-center items-center gap-1">
    <img className="" src="./images/user2.png"/>
     <h4>کیفیت بالای غذاها</h4>
  </div>
  <div className="flex flex-col justify-center items-center">
  <img className="" src="./images/diagram.png"/>
     <h4>پرسنلی مجرب و حرفه‌ای</h4>
  </div>
  <div className="flex flex-col justify-center items-center">
  <img className="" src="./images/menu-board.png"/>
     <h4>منوی متنوع</h4>
  </div>
  <div className="flex flex-col justify-center items-center">
  <img className="" src="./images/home-wifi.png"/>
     <h4>محیطی دلنشین و آرام</h4>
  </div>
</div>



</div>


</div>


    )
}
export default About; 