



const MenuList =({title,link,menuImg})=>{
    return(
        <>
        <div className="flex flex-col justify-center w-full items-center  relative m-auto pt-32">
        <img className="w-40 absolute inset-x-15 bottom-6 " src={menuImg}/>
        <div className="w-52 h-24 bg-[#417F56] shadow-2xl shadow-green-950 rounded-md "></div>
        <a href={link} className=" w-28  pt-1 pb-1 bg-white shadow-2xl cursor-pointer shadow-zinc-950 absolute inset-x-46 -bottom-2 inset-y-46 rounded-md text-black ">{title}</a>

        </div>
        </>
    )
}

 export default MenuList;