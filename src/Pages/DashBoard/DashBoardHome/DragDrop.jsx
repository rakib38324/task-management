import { useState } from "react";
import UseAxiosPublic from "../../../Hooks/AxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";


const DragDrop = () => {
   const { user } = UseAuth();
   const axiosPublic = UseAxiosPublic();
   const [loading, setLoading] = useState(true)
   const [todoTasks, setTodoTasks] = useState([]);
   const [ongoingTasks, setOngoingTasks] = useState([]);
   const [completedTasks, setCompletedTasks] = useState([]);

   const [isDragging, setIsDragging] = useState(false);
   const [ongoingDraggedList, setOngoingDraggedList] = useState([]);
   const [completedDraggedList, setCompletedDraggedList] = useState([]);

   const { data: tasks = [], refetch } = useQuery({
      queryKey: ['tasks', user.email],
      queryFn: async () => {
         const res = await axiosPublic.get(`/tasks?email=${user.email}`);
         // console.log(res.data)
         setLoading(false);
         setTodoTasks(res.data.filter(task => task.section === 'ToDo'));
         setOngoingTasks(res.data.filter(task => task.section === 'OnGoing'));
         setCompletedTasks(res.data.filter(task => task.section === 'Completed'));

         return res.data;
      }
   });
   console.log(tasks)
   console.log("todo", todoTasks);
   console.log("ongoing", ongoingTasks);
   console.log("complete", completedTasks);

   const handleDragOver = e => {
      e.preventDefault();
      setIsDragging(true);
   }
   const handleDragStart = e => {
      e.dataTransfer.setData("id", e.currentTarget.id);
   }
   const targetClassName = `border-2 bg-white border-slate-500 border-dashed ${isDragging ? "border-black" : "border-indigo-300"}`

   const handleOngoingDrop = async(e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("id");
      const item = todoTasks.find(x => x._id == id);
      if (item) {
         try {
            axiosPublic.patch(`/tasks/${item._id}`, {
               section: 'OnGoing',
            });
         
            setOngoingDraggedList([...ongoingDraggedList, item]);
            setIsDragging(false);

            const filteredList = todoTasks.filter((x) => x._id !== id);
            setTodoTasks(filteredList);
            refetch();
            
            //  window.location.reload();
               // navigate('/dashboard/overview');
         } catch (error) {
            console.error("Error updating task", error);
         }
      }
   }
   const handleCompletedDrop = e => {
      e.preventDefault();
      const id = e.dataTransfer.getData("id");
      const item = ongoingTasks.find(x => x._id == id);
      if (item) {
         try {
            axiosPublic.patch(`/tasks/${item._id}`, {
               section: 'Completed',
            });
            setCompletedDraggedList([...completedDraggedList, item]);
            setIsDragging(false);
            const filteredList = ongoingTasks.filter((x) => x._id !== id);
            setOngoingTasks(filteredList);
            refetch();
            // navigate('/dashboard/overview');
         } catch (error) {
            console.error("Error updating task", error);
         }
      }
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
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border-2 border-black">
                     {/* source */}
                     <h2 className="text-center font-semibold border-b-2">ToDo</h2>
                     <ul className="list-none p-0 m-0 ">
                        {
                           todoTasks.map(item => {
                              // console.log(item)
                              return <li key={item._id}
                                 id={item._id}
                                 draggable={true}
                                 onDragStart={handleDragStart}
                                 className="p-2 border-2 border-amber-400 text-center rounded-xl m-2 cursor-move">
                                 {item.title}</li>
                           })
                        }
                     </ul>
                  </div>

                  {/* target */}
                  <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleOngoingDrop}>
                     <h2 className="text-center font-semibold border-b-2">OnGoing</h2>
                     <ul className="list-none p-0 m-0" >
                        {ongoingTasks.map(item => (
                           <li key={item._id}
                              id={item._id}
                              draggable={true}
                              onDragStart={handleDragStart}
                              className="p-2 border-2 text-center border-green-400 rounded-xl m-2 cursor-move">
                              {item.title}
                           </li>
                        ))}
                        {
                           ongoingDraggedList.map(item => {
                              console.log(item)
                              return <li key={item._id}
                                 id={item._id}
                                 draggable={true}
                                 onDragStart={handleDragStart}
                                 className="p-2 border-2 text-center border-green-400 rounded-xl m-2 cursor-move"
                              >{item.title}</li>
                           })
                        }
                     </ul>
                  </div>
                  <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleCompletedDrop}>
                     <h2 className="text-center font-semibold border-b-2">Completed</h2>
                     <ul className="list-none p-0 m-0 " >
                        {completedTasks.map(item => (
                           <li key={item._id}
                              id={item._id}
                              className="p-2 border-2 text-center border-red-400 rounded-xl m-2 cursor-move">
                              {item.title}
                           </li>
                        ))}
                        {
                           completedDraggedList.map(item => {
                              console.log(item)
                              return <li key={item._id} id={item._id}
                                 className="p-2 border-2 border-red-400 text-center rounded-xl m-2 cursor-move">{item.title}</li>
                           })
                        }
                     </ul>
                  </div>
               </div>
         }

      </div>
   );
};

export default DragDrop;