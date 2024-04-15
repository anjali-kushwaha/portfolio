export default function Contact(){
    return<div id="cont" name="contact" className="className='h-screen w-ful pt-10  bg-gray-100 ">
        <div className='flex flex-col gap-5' >
        <div className='flex flex-col justify-center items-center'>
             <h1 className='text-4xl font-bold border-b-4 border-purple-500 p3 inline'>CONTACT</h1>
             <p className='text-xl font-grey-100 mt-4'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>

         <div className='flex justify-center items-center h-screen'>
            <form action="https://getform.io/f/navvmmga"  method="POST" className='flex flex-col shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 bg-white'>
             <input type='text' name="name" placeholder="Enter Your Name" className="my-6 p-4 bg-gray-300 bottom-2 rounded-md bg-white-300 focus:outline-none"/>
             <input type='text' name="email" placeholder="Enter Your Email" className="p-4 mb-6 bg-gray-300 bottom-2 rounded-md focus:outline-none"/>
              <textarea name="message" rows="10" placeholder="Enter Your Meassage" className="p-2 mb-11  bg-gray-300 rounded-md focus:outline-none "/>
               <span>
               <button className="text-white px-8 py-4 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100">SUBMIT</button>
               </span>
            </form>
         </div>    
        </div>
    </div>
}