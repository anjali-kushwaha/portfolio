import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

export default function SocailLinks(){
    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: 'https://www.linkedin.com/in/anjali-kushwaha-436866200/',
          style: 'rounded-tr-md', // Corrected the class name here
        },
        {
            id: 2,
            child: (
              <>
                GitHub<FaGithub size={30} />
              </>
            ),
            href: 'https://github.com/anjali-kushwaha',
            style: 'rounded-md', // Corrected the class name here
          },
          {
            id: 3,
            child: (
              <>
                Mail <HiOutlineMail size={30} />
              </>
            ),
            href: 'mailto:anjalikushwaha3012@gmail.com',
            style: 'rounded-br-md', // Corrected the class name here
          }
      ];
      

    return(
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml[-10px] hover:rounded-md duration-300' + '' +style}>
                 <a href={href} className='flex justify-between items-center w-full text-purple-500' target='_blank' rel='noreferrer'>
                 {child}
                 </a>   
                </li>
            ))}
        </ul>

        </div>
    );
}