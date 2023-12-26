import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";

const DashBoardLayout = () => {
   const links = <>
   <li><Link to="home"><div className="flex items-center text-sm lg:text-base font-bold gap-1"> <FaHome/><p>Home</p></div></Link></li>
   <li><Link to="addTask"><div className="flex items-center text-sm lg:text-base font-bold gap-1"> <MdAssignmentAdd/><p>Add Task</p></div></Link></li>
   <li><Link to="allTasks"><div className="flex items-center text-sm lg:text-base font-bold gap-1"> <IoStorefrontSharp/><p>All Tasks</p></div></Link></li>
   <li><Link to="overview"><div className="flex items-center text-sm lg:text-base font-bold gap-1"> <TiWorld /><p>Over View</p></div></Link></li>
   </>
   return (
      <div>
         <div className="text-2xl font-semibold text-center">DashBoard</div>
         <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />           
            <div className="drawer-content flex mb-10">
               <div className="navbar bg-zinc-300 w-12 pl-0 lg:w-40 ">
                  <div className="flex lg:hidden">   
                     <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                     </label>
                  </div>           
                  <div className="flex-none hidden lg:block">
                     <ul className="menu">
                        {links} 
                     </ul>
                  </div>
               </div>
               <div className="flex-1 p-8 bg-slate-100">
                  
               <Outlet></Outlet>
               </div>
            </div>
            <div className="drawer-side mt-28">
               <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
               <ul className="menu p-2 w-40 rounded-r-xl bg-base-200">
                  {links}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashBoardLayout;