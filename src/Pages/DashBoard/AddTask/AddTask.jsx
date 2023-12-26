import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosPublic from "../../../Hooks/AxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddTask = () => {
   const { user } = UseAuth();
   // console.log(user.email)
   const { register, handleSubmit, reset, formState: { isValid }, setValue } = useForm();
   const axiosPublic = UseAxiosPublic();
   const navigate = useNavigate();
   const isValidDate = (date) =>{
      const selectedDate = new Date(date);
      // console.log(selectedDate)
      const currentDate = new Date();
      // console.log(currentDate);
      return selectedDate > currentDate;
   }

   const onSubmit = async (data) => {  
      const newTask = {
         email: user.email,
         title: data.title,
         description: data.description,
         deadline: data.deadline,
         priority: data.priority,
         section: "ToDo",
      }
      // console.log(newTask)
   if(isValid){
      const addedTask = await axiosPublic.post('/tasks', newTask);
   // console.log(addedTask.data)
   if (addedTask.data.insertedId) {
      reset();
      Swal.fire({
         position: "top-end",
         icon: "success",
         title: "You've successfully added task!!",
         showConfirmButton: false,
         timer: 1500
      });
      navigate('/dashboard/home')
   }
   }
}
   return (
      <div>
         <div className="py-4 rounded-xl text-black font-bold md:px-16 mb-12">
            <h2 className="text-4xl text-center font-bold">Add a Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Title*</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Enter Task Title..."
                     {...register('title', { required: true })}
                     className="input input-bordered w-full bg-white" />
               </div>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Description*</span>
                  </label>
                  <textarea
                     placeholder="Enter Task Description..."
                     {...register('description', { required: true })}
                     className="textarea textarea-bordered w-full bg-white h-20" />
               </div>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Deadline <span className="text-sm font-normal text-red-700">(select valid date)</span></span>
                  </label>
                  <input type="date"
                     {...register('deadline', {
                        required: true,
                        validate: isValidDate,
                     })}
                     className="input input-bordered w-full bg-white"
                  />
               </div>
               <div className="form-control w-full mt-6">
                  <label className="label">
                     <span className="label-text text-black font-bold">Priority <span className="text-sm font-normal text-red-700">(select level)</span></span>
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
                  disabled={!isValid}>
                     Add Task!!
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddTask;