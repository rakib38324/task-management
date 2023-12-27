import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";


const SocialLogin = () => {
   const { googleSignIn, githubSignIn } = UseAuth();

   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";
   // console.log('state in the location login page', location.state)

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            toast.success('Sign In with Google Successfully');
            console.log(result.user);
            if (location.state && location.state.from) {
               navigate(location.state.from.pathname)
            }
            else {
               navigate(from, { replace: true });
            }
         })
   }
   const handleGithubSignIn = () => {
      githubSignIn()
         .then(result => {
            toast.success('Sign In with Github Successfully');
            console.log(result.user);
            if (location.state && location.state.from) {
               navigate(location.state.from.pathname)
            }
            else {
               navigate(from, { replace: true });
            }
         })
   }
   return (
      <div className="flex justify-center my-5 w-full gap-x-5">
         <div className="rounded-full text-4xl mx-auto  w-1/4 cursor-pointer" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></div>
         <div className="rounded-full  text-4xl  w-1/4 cursor-pointer" onClick={handleGithubSignIn}><FaGithub className="text-black"></FaGithub></div>
      </div>
   );
};

export default SocialLogin;