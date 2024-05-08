import profilePhoto from '../assets/profile.jpg';
import SocailLinks from './SocialLinks';


export default function Banner() {
    return (
        //  bg-gray-100
        <div name="home" className=" bg-gray-100 px-8 py-20 ">
            <div className="flex md:flex-row sm:flex-row flex-col-reverse gap-x-24 items-center justify-center pt-32 sm:items-center  md:items-center">
                <div className="w-1/2 flex flex-col gap-3">
                    <h1 className="text-5xl font-medium"><strong>HEY, I'M </strong></h1>
                    <h1 className="text-5xl font-medium"><strong className="text-purple-500">ANJALI KUSHAWHA</strong></h1>
                    <p className="pt-5 text-lg ">A frontend developer focused on web development, building the frontend of websites and web applications that leads to the success of the overall product.</p>
                    <span>
                    <SocailLinks/>
                  </span>
                    <span className='flex gap-2'>
                    <button className="text-white px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100">
                    <span>
                    <a href="#cont">Contact me</a></span>
                  </button>
                  <button className="text-black px-3 py-2 flex items-center rounded-md bg-white  border-2 border-gradient-to-r border-purple-600  font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white">
                  <span><a href="https://drive.google.com/file/d/1gr_AbhTAcTCz7revnGG2QgaXhWj0TMzB/view?usp=sharing"  target='_blank'>Download CV</a></span>
                 </button>
                 </span>
                    

         </div>
                {/* <div className="hero-image">
                    <img className="w-150 h-150 rounded-full" src={profilePhoto} alt="Banner" />
                </div> */}
              
  <div className=" bg-purple-600 border-8 border-purple-600  rounded-full place-items-center transition duration-400 w-[320px] h-full">
    <div className="rounded-full overflow-hidden items-center justify-center  w-[300px] h-full">
      <img src={profilePhoto} alt="Banner" />
    </div>
  </div>
            </div>
        </div>
    );
}
