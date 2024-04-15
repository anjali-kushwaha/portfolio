import profilePhoto from '../assets/profile.jpg';
import SocailLinks from './SocialLinks';

export default function Banner() {
    return (
        //  bg-gray-100
        <div name="home" className="h-screen w-full bg-gray-100 px-px	">
            <div className="max-w-screen-lg mx-auto grid grid-cols-[700px,1fr] gap-x-24 items-center justify-center pt-32 md:flex-row md:items-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-medium"><strong>HEY,</strong><strong className="text-purple-500"> I'M ANJALI KUSHAWHA</strong></h1>
                    <p className="pt-5 text-lg mb-12">A frontend developer focused on web development, building the frontend of websites and web applications that leads to the success of the overall product.</p>
                    <span>
                    <SocailLinks/>
                  </span>
                    <span className='flex gap-2'>
                    <button className="text-white px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100">
                    <span>
                    <a href="#">Contact me</a></span>
                  </button>
                  <button className="text-black px-3 py-2 flex items-center rounded-md bg-white  border-2 border-gradient-to-r border-purple-600  font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white">
                 <span><a href="#">Download CV</a></span>
                 </button>
                 </span>
                    

         </div>
                {/* <div className="hero-image">
                    <img className="w-150 h-150 rounded-full" src={profilePhoto} alt="Banner" />
                </div> */}
              
  <div className="w-250 h-250 bg-grey-200 border-8 border-gradient-to-r border-purple-600  rounded-full grid place-items-center transition duration-400">
    <div className="w-180 h-180 rounded-full overflow-hidden flex items-center justify-center">
      <img className="w-150 h-150 rounded-full md:w-full" src={profilePhoto} alt="Banner" />
    </div>
  </div>
            </div>
        </div>
    );
}
