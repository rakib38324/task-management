import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer/Footer";

const MainLayout = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <Navbar></Navbar>
         <div>
         <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;