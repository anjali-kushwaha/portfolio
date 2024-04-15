import aboutmephoto from '../assets/Aboutme.jpg'

export default function About(){
    return(
        <div name='about' className='ml-10 mr-10 px-5 mt-3 py-40 '>
        <div className='flex flex-col items-center mb-9 '>
        <h1 className='text-4xl font-bold border-b-4 border-purple-500 p3 inline'>ABOUT ME</h1>
        <h4 className='text-2xl font-grey-100 mt-4 '>My Introdution</h4>
        </div>   
        <div className='flex sm:flex-row flex-col-reverse  gap-5 md:flex-row md:items-center'>
            <div className='px-8'>
            <img className='w-[1000px] h-full rounded-lg' src={aboutmephoto} alt="laptop image" />
            </div>
            <div className='flex flex-col gap-2'>
            <p className='pt-5 text-lg '>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
           </p>
           <p className='pt-5 text-lg mb-12'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
           </div>
        </div>
        </div>
    )
}