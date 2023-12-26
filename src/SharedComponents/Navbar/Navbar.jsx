
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
   const { user, logOut } = UseAuth();
   // console.log(user);

   const handleLogOut = () => {
      logOut()
         .then()
      toast.success('LogOut Successfully')
   }
   const navLinks = <>
      <li className="block p-1 text-sm leading-normal text-inherit antialiased"><NavLink to="/">Home</NavLink></li>
      <li className="block p-1 text-sm leading-normal text-inherit antialiased"><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li className="block p-1 text-sm leading-normal text-inherit antialiased"><NavLink to="/contact">Contact Us</NavLink></li>
      <li className="block p-1 text-sm leading-normal text-inherit antialiased"><NavLink to="/about">About Us</NavLink></li>
   </>
   return (
      <div className="navbar bg-slate-300 rounded-b-xl shadow-xl mb-4">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
                  {
               user ? <li className="block p-1 text-sm leading-normal text-inherit antialiased"><button  onClick={handleLogOut}>
               <Link to="/">Log Out</Link> </button></li> :
                <li className="block p-1 text-sm leading-normal text-inherit antialiased"><Link to="/login">Log In</Link> </li>       
            }
            </ul> 
            </div>
            <a className="btn btn-ghost text-xl">SSC Technovision</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navLinks}
            </ul>           
         </div>
         <div className="navbar-end">
            {
               user ? <div className="flex items-center">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                     </div>
                  </div>
                  <button className="btn-sm middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                     type="button" data-ripple-light="true" onClick={handleLogOut}>
                     <Link to="/">Log Out</Link> </button>
               </div>
                  :
                  <button className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                     type="button" data-ripple-light="true">
                     <Link to="/login">Log In</Link>
                  </button>
            }
         </div>
      </div>
   );
};

export default Navbar;