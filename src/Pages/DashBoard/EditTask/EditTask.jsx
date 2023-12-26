import { useLoaderData, useNavigate} from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/AxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const EditTask = () => {
   const task = useLoaderData();
   // console.log(task)
   const {_id, email, title, description, deadline, priority, section} = task;
   const { register, handleSubmit, setValue } = useForm();
   const axiosPublic = UseAxiosPublic();
   const navigate = useNavigate();

   const onSubmit = async (data) => {  
      // console.log("clivck", data);
      const updateTask = {
         email: email,
         title: data.title,
         description: data.description,
         deadline: deadline,
         priority: data.priority,
         section: section,
      }
      console.log(updateTask)
      try {
         const updatedTask = await axiosPublic.put(`/tasks/${_id}`, updateTask);
         console.log(updatedTask.data);
            navigate('/myPostedJobs');
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Product has been Updated',
               showConfirmButton: false,
               timer: 1500
             })          
         navigate('/dashboard/home');
      } catch (error) {
         console.error("Error updating task:", error);
      }
   }

   return (
      <div>
         <div className="py-4 rounded-xl text-black font-bold md:px-16 mb-12">
            <h2 className="text-4xl text-center font-bold">Update Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Update-Title</span>
                  </label>
                  <input
                     type="text"
                     defaultValue={title}
                     {...register('title', { required: true })}
                     className="input input-bordered w-full bg-white" />
               </div>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Update-Description</span>
                  </label>
                  <textarea
                     defaultValue={description}
                     {...register('description', { required: true })}
                     className="textarea textarea-bordered w-full bg-white h-20" />
               </div>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Deadline <span className="text-sm font-normal text-red-700">(Not Editable)</span></span>
                  </label>
                  <input type="date"
                  defaultValue={deadline}
                     className="input input-bordered w-full bg-white" disabled
                  />
               </div>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Priority <span className="text-sm font-normal text-red-700">prev-({priority})</span></span>
                  </label>
                  <label className="input-group">
                  <select className="input input-bordered w-full bg-white" {...register("priority", { required: true })}
                  onChange={(e) => setValue("priority", e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                     </select>
                  </label>
               </div>

               <div className="flex justify-center pt-10">
                  <button className="btn-sm middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                 >
                     Update Task!!
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default EditTask;