import { useState } from "react";
import UseAxiosPublic from "../../../../Hooks/AxiosPublic";
import UseAuth from "../../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import { FaArrowsToDot } from "react-icons/fa6";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const DashBoardOverview = () => {
   ChartJS.register(ArcElement, Tooltip, Legend);
   const { user } = UseAuth();
   const axiosPublic = UseAxiosPublic();

   const [loading, setLoading] = useState(true);
   const [totalTasks, setTotalTasks] = useState([]);

   const [todoTasks, setTodoTasks] = useState([]);
   const [ongoingTasks, setOngoingTasks] = useState([]);
   const [completedTasks, setCompletedTasks] = useState([]);


   const { data: tasks = [] } = useQuery({
      queryKey: ['tasks', user.email],
      queryFn: async () => {
         const res = await axiosPublic.get(`/tasks?email=${user.email}`);
         // console.log(res.data)
         setLoading(false);
         setTodoTasks(res.data.filter(task => task.section === 'ToDo'));
         setOngoingTasks(res.data.filter(task => task.section === 'OnGoing'));
         setCompletedTasks(res.data.filter(task => task.section === 'Completed'));
         setTotalTasks(tasks)
         return res.data;
      }
   });

   
   const data = {
      labels: ['ToDo tasks', 'Ongoing Tasks', 'Completed Tasks'],
      datasets: [
         {
            data: [todoTasks.length, ongoingTasks.length, completedTasks.length],
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)'],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
         },
      ],
   };
   return (
      <div>
         <h2 className="text-3xl font-bold text-center text-black">
            <span>Hi, Welcome!! </span>
            {
               user?.displayName ? user?.displayName : 'Back'
            }
         </h2>
         {
            loading ? <div className="flex justify-center">
               <span className="loading loading-ring loading-xs"></span>
               <span className="loading loading-ring loading-sm"></span>
               <span className="loading loading-ring loading-md"></span>
               <span className="loading loading-ring loading-lg"></span>
            </div>
               :
               <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl">

                     <div className="stat">
                        <div className="stat-figure text-primary">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Completed Tasks</div>
                        <div className="stat-value text-primary">{completedTasks.length}</div>
                        <div className="stat-desc">21% more than last month</div>
                     </div>
                     <div className="stat">
                        <div className="stat-figure text-secondary">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">OnGoing</div>
                        <div className="stat-value text-secondary">{ongoingTasks.length}</div>
                        <div className="stat-desc">Hurry Up</div>
                     </div>
                     <div className="stat">
                        <div className="stat-figure text-secondary">
                           <FaArrowsToDot className="inline-block w-8 h-8 stroke-current" />
                        </div>
                        <div className="stat-title">To Do </div>
                        <div className="stat-value text-secondary">{todoTasks.length}</div>
                        <div className="stat-desc">Worm Up</div>
                     </div>

                     <div className="stat">
                        <div className="stat-figure text-secondary">
                           <div className="avatar online">
                              <div className="w-16 rounded-full">
                                 <img src="/total.gif" />
                              </div>
                           </div>
                        </div>
                        <div className="stat-value">{totalTasks.length}</div>
                        <div className="stat-title">Total Tasks</div>
                        <div className="stat-desc text-secondary">{totalTasks.length - completedTasks.length} tasks remaining</div>
                     </div>
                     
                  </div>
                  <div className="my-10 w-full shadow-xl pb-7 rounded-xl">
                     <div className="pie-chart-container w-full h-96 flex justify-center">
                        <Pie data={data} />
                     </div>
                  </div>
               </div>
         }

      </div>
   );
};

export default DashBoardOverview;