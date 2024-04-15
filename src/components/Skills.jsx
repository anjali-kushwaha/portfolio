import htmllogo from '../assets/htmllogo.jpg'
import css from '../assets/css.jpg'
import js from '../assets/Javascript.jpg'
import reactlogo from '../assets/react.jpg'
import tailwindlogo from '../assets/tailwind.jpg'
import bootstaplogo from '../assets/bootstaplogo.jpg'
import nodejs from '../assets/nodejs.jpg'
import c from '../assets/c.jpg'
import clogo from '../assets/cplush.jpg'
import pythonlogo from '../assets/python.jpg'
import mysql from '../assets/mysql.jpg'
import github from '../assets/githublogo.jpg'
import vitelogo from '../assets/vite.jpg'


export default function Skills(){
  
  return <div name='skills' className='h-screen w-full bg-gray-100 ' >
             <div className='ml-20 mr-15 pt-12'>
             <div className='flex flex-col items-center'>
             <h1 className='text-4xl font-bold border-b-4 border-purple-500 p3 inline'>Skills</h1>
             <p className='text-2xl font-grey-100 mt-4 mb-7'>My Teachnical Skills</p>
             </div>
             <div className='grid grid-cols-5 gap-8'>
                    <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={htmllogo} alt='html logo'/>
                </div> 
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={css} alt='css logo'/>
                </div> 
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={js} alt=' logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={reactlogo} alt='react logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={vitelogo} alt='vite logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={tailwindlogo} alt='tailwind logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={bootstaplogo} alt='bootstap logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={nodejs} alt='nodejs logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={c} alt='c logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={clogo} alt='c++ logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={pythonlogo} alt='python logo'/>
                </div>        
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full overflow-hidden border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-22 h-22 bg-white " src={mysql} alt='mysql logo'/>
                </div> 
                
                <div className='w-40 h-40 px-4 flex items-center justify-center rounded-full  border-4 border-gradient-to-r border-purple-600 border-pink-500 bg-white' >
                <img className="w-20 h-20 " src={github} alt='github logo'/>
                </div> 
                

                </div>  
                </div>
                </div>

}