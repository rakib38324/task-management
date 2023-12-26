import { useState } from "react";
import UseAxiosPublic from "../../../Hooks/AxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import { MdEditCalendar } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllTasks = () => {
   const { user } = UseAuth();
   // console.log(user.email)
   const axiosPublic = UseAxiosPublic();
   const [loading, setLoading] = useState(true)
   const { data: tasks = [], refetch } = useQuery({
      queryKey: ['tasks', user.email],
      queryFn: async () => {
         const res = await axiosPublic.get(`/tasks?email=${user.email}`);
         // console.log(res.data)
         setLoading(false);
         return res.data;
      }
   });
   // console.log(tasks);
   const handleDelete = id =>{
      // console.log(id);
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosPublic.delete(`/tasks/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     Swal.fire({
                        title: "Deleted!",
                        text: "Task has been deleted.",
                        icon: "success"
                     });
                  }
               })
         }
      });
   }
   return (
      <div>
         {
            loading ? <div className="flex justify-center">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
         </ div>
            :
            <div>
               <h2 className="text-xl font-bold mb-2">All Tasks: {tasks.length}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {
               tasks.map((item, index) => <div key={item._id} className="border-2 border-slate-400 p-2 w-60 md:w-96 rounded-xl">
                  <div className="flex justify-between items-center">
                  <h2 className="font-medium"><span>{index+1}.</span> {item.title}</h2>
                     <div className="flex items-center gap-3">
                     <Link to={`/dashboard/editTask/${item._id}`}><button className="btn btn-sm btn-outline btn-success"><MdEditCalendar  className="text-xl"/></button></Link>
                     <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-outline btn-error"><MdDelete className="text-xl"/></button>
                     </div>
                  </div>
               </div>)
            }
         </div>

            </div>
         }
         
      </div>
   );
};

export default AllTasks;