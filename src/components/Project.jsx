import Tour from '../assets/project-1.jpeg';
import Hospital from '../assets/project-2.jpeg';
import qrcode from '../assets/project-3.jpeg';
import Task  from '../assets/project-4.jpeg';

export default function Project(){
  
  return(
    <div name='projects' className='ml-10 mr-10 px-5 mt-3 py-10 '>
     <div className='flex flex-col items-center'>
             <h1 className='text-4xl font-bold border-b-4 border-purple-500 p3 inline'>PROJECTS</h1>
             <p className='text-xl font-grey-100 mt-4'>Here you will find some of the personal projects that I created.</p>
    </div>
    <div className='items-center justify-center p-20 flex flex-col gap-10'>
    
    <div className='max-w-6xl flex gap-3 p-10'>
      <img className='w-[500px] h-full' src={Tour} alt='Tour and travel website' />
      <div className='flex flex-col gap-3'>
      <h1 className='text-4xl font-semibold'>Tour and Travel</h1>
      <p className='text-justify leading-7'>QR Code Generator is a versatile website that effortlessly generates QR codes for any desired website. By scanning these codes, users are seamlessly redirected to their designated 
      websites, simplifying access and enhancing user experience. Experience streamlined navigation through the power of QR technology.</p>
       <span className='flex gap-4'>
        <button className="text-white px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100"><a href='https://anjali-kushwaha.github.io/Tour-and-Travel-website/' target='_blank'>Live</a></button>
        <button className="text-black px-3 py-2 flex items-center rounded-md bg-white  border-2 border-gradient-to-r border-purple-600 font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white"><a href='https://github.com/anjali-kushwaha/Tour-and-Travel-website' target='_blank'>Source code</a></button>
        </span>
        </div>
    </div> 
     
    <div className='max-w-6xl flex gap-3 p-10'>
      <div className='flex flex-col gap-3'>
      <h1 className='text-4xl font-semibold'>Hospital</h1>
      <p className='text-justify leading-7'>This Task Tracker is a simple web application designed to help users manage their daily tasks efficiently. It allows for adding, editing, deleting, sorting, and filtering tasks, 
      providing a user-friendly interface to organize work or personal activities.</p>
       <span className='flex gap-4'>
        <button className="text-white px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100"><a href='https://anjali-kushwaha.github.io/hospital-website/' target='_blank'>Live</a></button>
        <button className="text-black px-3 py-2 flex items-center rounded-md bg-white  border-2 border-gradient-to-r border-purple-600 font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white"><a href='https://github.com/anjali-kushwaha/hospital-website' target='_blank'>Source code</a></button>
        </span>
        </div>
        <img className='w-[500px] h-full' src={Hospital} alt='Task Traker website' /> 
    </div> 
     
    <div className='max-w-6xl flex gap-3 p-10'>
      <img className='w-[500px] h-full' src={qrcode} alt='QR code grenrator website' />
      <div className='flex flex-col gap-3'>
      <h1 className='text-4xl font-semibold'>QR Code Generator</h1>
      <p className='text-justify leading-7'>QR Code Generator is a versatile website that effortlessly generates QR codes for any desired website. By scanning these codes, users are seamlessly redirected to their designated 
      websites, simplifying access and enhancing user experience. Experience streamlined navigation through the power of QR technology.</p>
       <span className='flex gap-4'>
        <button className="text-white px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100"><a href='https://anjali-kushwaha.github.io/QR-Code-Generator/' target='_blank'>Live</a></button>
        <button className="text-black px-3 py-2 flex items-center rounded-md bg-white  border-2 border-gradient-to-r border-purple-600 font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white"><a href='https://github.com/anjali-kushwaha/QR-Code-Generator' target='_blank'>Source code</a></button>
        </span>
        </div>
    </div> 

    
    <div className='max-w-6xl flex gap-3 p-10'>
      <div className='flex flex-col gap-3'>
      <h1 className='text-4xl font-semibold'>Task Tracker</h1>
      <p className='text-justify leading-7'>This Task Tracker is a simple web application designed to help users manage their daily tasks efficiently. It allows for adding, editing, deleting, sorting, and filtering tasks, 
      providing a user-friendly interface to organize work or personal activities.</p>
       <span className='flex gap-4'>
        <button className="text-white px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100"><a href='https://anjali-kushwaha.github.io/Task-Tracker/' target='_blank'>Live</a></button>
        <button className="text-black px-3 py-2 flex items-center rounded-md bg-white  border-2 border-gradient-to-r border-purple-600  font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white"><a href='https://github.com/anjali-kushwaha/Task-Tracker' target='_blank'>Source code</a></button>
        </span>
        </div>
        <img className='w-[500px] h-full' src={Task} alt='Task Traker website' /> 
    </div> 

    
    </div>

        
    </div>);
}