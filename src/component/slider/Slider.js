import {Button, Carousel} from 'antd';


const Slider = () => {
    
   
    return ( 
        
      <Carousel autoplay dots={false}>
            <div className='relative' >
              <img style={{width:'100%'}} src='./images/slider.png'/>
              <h4 style={{fontSize:'20px', position:'absolute', top:'45%', left:'39%',color:'white',margin:'auto'}}>تجربه غذای سالم و گیاهی به سبک ترخینه</h4>
               <Button style={{ position:'absolute', bottom:'25%', left:'46%',backgroundColor:'green',margin:'auto',color:'white'}}>سفارش آنلاین غذا</Button>

            </div>
            <div className='relative'>
            <img style={{width:'100%'}} src='./images/slider2.png'/>
            <h4 style={{fontSize:'25px', position:'absolute', top:'45%', left:'43%',color:'white',margin:'auto'}}>!طعم بی نظیر طبیعت</h4>
               <Button style={{ position:'absolute', bottom:'25%', left:'45%',backgroundColor:'green',margin:'auto',color:'white'}}>سفارش آنلاین غذا</Button>
            </div>
            <div className='relative'>
            <img style={{width:'100%'}} src='./images/slider3.png'/>
          <h4 style={{fontSize:'25px', position:'absolute', top:'45%', left:'40%',color:'white',margin:'auto',fontStyle:'italic'}}>لذت غذای سالم و گیاهی را با ترخینه تجربه کنید </h4>
               
            </div>
            
          </Carousel>
       
     );
}
 
export default Slider;