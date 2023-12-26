/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import banner1 from "/banner-1.jpeg";
import banner2 from "/banner-2.webp";
import banner3 from "/banner-3.png";
import banner4 from "/banner-4.png";

const Banner = () => {
   return (
      <div className="carousel w-full h-[80vh]  mb-5">
      <div id="slide1" className="carousel-item relative w-full">
         <img src={banner1} className="w-full rounded-xl" />
         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
               <h2 className="text-2xl md:text-6xl font-extrabold text-sky-400">Manage Your Tasks</h2>
               <p className="text-sm md:text-lg">Management Platform with the specified requirements. Good luck with your project!</p>
               <Link to='/login'>
               <button className="btn btn-info btn-outline btn-sm mt-4">Explore Now!!</button>                 
               </Link> 
            </div>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
         </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
         <img src={banner2} className="w-full rounded-xl" />
         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
               <h2 className="text-2xl md:text-6xl font-extrabold text-blue-500">Manage Your Tasks</h2>
               <p className="text-sm md:text-lg">Management Platform with the specified requirements. Good luck with your project!</p>
               <Link to='/login'>
               <button className="btn btn-success btn-outline btn-sm mt-4">Explore Now!!</button>                 
               </Link> 
            </div>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
         </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
         <img src={banner3} className="w-full rounded-xl" />
         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
               <h2 className="text-2xl md:text-6xl font-extrabold text-amber-400">Manage Your Tasks</h2>
               <p className="text-sm md:text-lg">Management Platform with the specified requirements. Good luck with your project!</p>
               <Link to='/login'>
               <button className="btn btn-warning btn-outline btn-sm mt-4">Explore Now!!</button>                 
               </Link> 
            </div>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
         </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
         <img src={banner4} className="w-full rounded-xl" />
         <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
               <h2 className="text-2xl md:text-6xl font-extrabold text-red-400">Manage Your Tasks</h2>
               <p className="text-sm md:text-lg">Management Platform with the specified requirements. Good luck with your project!</p>
               <Link to='/login'>
               <button className="btn btn-error btn-outline btn-sm mt-4">Explore Now!!</button>                 
               </Link> 
            </div>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
         </div>
      </div>

   
      </div>
   );
};

export default Banner;