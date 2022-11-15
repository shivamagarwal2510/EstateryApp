import {Link, Outlet} from "react-router-dom";
import logo from "../Images/logo.png";
import { useState } from "react";

const Navbar = ()=>{
  
    return(
        <div>
           
            <nav className="flex shadow-md items-center justify-between">

            <ul className=" px-2 py-4 flex  justify-center items-center">
            <li>
                <Link className="flex" to="/">
                    <img src={logo} alt="logo" className="w-[2.4rem] ml-[3rem]"  />
                    <strong className=" text-xl">Estatery</strong>
                </Link>
            </li>

                    <li className="ml-6  hover:bg-[#baceed] px-5 py-1 rounded-lg hover:border-2 hover:border-[#3a89ff] hover:color-[#3a89ff] hover:text-[#3a89ff]">

                        <Link className="text-black " to="/">Rent</Link>
                    </li>
                    <li className="hover:bg-[#baceed] px-5 py-1 rounded-lg hover:border-2 hover:border-[#3a89ff] ">

                        <Link className="text-black " to="/">Buy</Link>
                    </li>

                    <li className="hover:bg-[#baceed] px-5 py-1 rounded-lg hover:border-2 hover:border-[#3a89ff]  ">
                        <Link className="text-black " to="/">Sell</Link>
                    </li>
                </ul>
                <ul className="flex items-center">
                    <li>
                        <button className="order-2 hover:bg-[#baceed]  text-[#3a89ff] border-2 border-[#3a89ff] text-sm rounded-lg  w-20  px-4 py-2 mr-2 my-2">
                            Login
                        </button>
                    </li>

                    <li>
                        <button className="order-2 bg-[#3a89ff] hover:bg-[#82aff3] text-white text-sm rounded-lg w-20 px-4 py-2 mr-16 ml-2 my-2">
                            Sign up
                        </button>
                    </li>
                </ul>
            </nav>
            <Outlet />
            
        </div>
    )
}
export default Navbar;