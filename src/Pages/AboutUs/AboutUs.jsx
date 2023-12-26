/* eslint-disable react/no-unescaped-entities */


const AboutUs = () => {
   return (
      <div className="container mx-auto p-8">
         <h1 className="text-4xl font-bold mb-6">About Us</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <img
                  src="/banner-4.png"
                  alt="About Us"
                  className="w-full h-auto rounded-lg"
               />
            </div>

            <div>
               <p className="text-lg mb-4">
                  Welcome to our company! We are a dedicated team of professionals
                  passionate about delivering high-quality solutions to our clients.
                  Our mission is to provide innovative and reliable services that
                  exceed your expectations.
               </p>

               <p className="text-lg mb-4">
                  At our core, we believe in collaboration, integrity, and continuous
                  improvement. Our talented team consists of experts in various fields,
                  working together to create exceptional experiences for our clients.
               </p>

               <p className="text-lg mb-4">
                  Whether you're a potential client, partner, or someone interested in
                  joining our team, we look forward to connecting with you. Feel free to
                  reach out and explore how we can work together to achieve success.
               </p>
            </div>
         </div>

         <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center mb-4">
                  <img
                     src="https://i.ibb.co/w4P6S5x/IMG-8071.jpg"
                     alt="Team Member 1"
                     className="w-32 h-32 object-cover rounded-full mb-2"
                  />
                  <p className="text-lg font-bold"> Md.Raisul Islam</p>
                  <p className="text-sm text-gray-500">CEO</p>
               </div>

               <div className="flex flex-col items-center mb-4">
                  <img
                     src="https://i.ibb.co/tbVvNz2/How-to-become-a-peer-reviewer-Tips-for-early-career-researchers-resized-0-0.jpg"
                     alt="Team Member 2"
                     className="w-32 h-32 object-cover rounded-full mb-2"
                  />
                  <p className="text-lg font-bold">Jane Smith</p>
                  <p className="text-sm text-gray-500">CTO</p>
               </div>

               <div className="flex flex-col items-center mb-4">
                  <img
                     src="https://i.ibb.co/V2PMc5R/Google-Reviews-for-Fitness-Businesses-scaled.jpg"
                     alt="Team Member 3"
                     className="w-32 h-32 object-cover rounded-full mb-2"
                  />
                  <p className="text-lg font-bold">Bob Johnson</p>
                  <p className="text-sm text-gray-500">Lead Developer</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
