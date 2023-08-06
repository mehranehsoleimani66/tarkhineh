import Icons from "./Icons"
import Logo from "./Logo"
import Navbar from "./Navbar"


const Header=()=>{
    return(
            <div className=" w-full flex flex-row justify-between items-center  bg-gray-primary h-24">
            
<Navbar/>
{/*            

            <div className="" >
              <Navbar/>
            </div>

             <div className=" w-1/2 items-center md:w-20 mx-20 my-2 ">
                <Logo/>
            </div> 
 
           <div className="md:hidden  mr-5" ><img className="w-28 h-10" src='./images/menu.png'/></div> */}
            </div>
    )
}

export default Header