import { NavLink } from "react-router-dom";
import { FcBarChart } from "react-icons/fc";
import { MdAddCall } from "react-icons/md";

const Navbar = () => {

    const navlink = <div className="flex justify-center items-center gap-5   ">
    <NavLink  className={({ isActive }) =>
          isActive
            ? "  font-grasick text-[18px] font-bold  text-green-500 "
            : " font-grasick text-[18px] font-bold  "
        }><li>Home</li></NavLink>
  <NavLink  className={({ isActive }) =>
          isActive
            ? "  font-grasick text-[18px] font-bold  text-green-500 "
            : " font-grasick  text-[18px] font-bold "
        }><li>About</li></NavLink>
    <NavLink   className={({ isActive }) =>
          isActive
            ? "  font-grasick text-[18px] font-bold  text-green-500 "
            : " font-grasick  text-[18px] font-bold"
        }><li>Service</li></NavLink>
    <NavLink   className={({ isActive }) =>
          isActive
            ? "  font-grasick text-[18px]  font-bold  text-green-500"
            : " font-grasick  text-[18px] font-bold "
        }><li>Component</li></NavLink>

    </div>



    return (
        <div className="container mx-auto ">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlink}
      </ul>
    </div>

  <div className="flex   justify-center items-center">
    <img  className="w-14 drop-shadow-md" src="../../../../public/logo.png" alt="" />
  
  <a className=" font-grasick font-bold drop-shadow-md  text-xl text-green-500"><span className="font-rancho text-3xl">N</span>eedx </a>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
  {navlink}
    </ul>
  </div>
  <div className="navbar-end">
 
    <a className="font-grasick font-bold bg-green-400 px-3 py-2 rounded-xl flex items-center gap-1">    <MdAddCall></MdAddCall>Contact</a>
  </div>
</div>

        </div>
    );
};

export default Navbar;