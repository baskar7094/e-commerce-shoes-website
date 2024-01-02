import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Img01 } from '../../App'
import AOS from 'aos'
import 'aos/dist/aos.css'


const img1 = <Img01/>
export default function About() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
        <section >
            <div className='w-11/12 mx-auto my-10 md:my-20 '>
                <div className=" md:px-10  px-3 md:py-5 py-2 md:flex justify-around items-center border   border-red-500" >
                        <div className='  md:px-5 px-2 md:w-1/2 w-full flex  flex-col  md:py-5 py-2'>
                            <h1 className='md:text-5xl capitalize md:px-5 md:py-4 py-2  text-xl font-bold    text-black'  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000' ><span className='bg-yellow-500 md:px-3 px-2 py-0  md:w-20  w-10 '></span> about our shop </h1>
                            <p  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000' className='px-5 w-full h-32 md:px-10 pb-5 md:pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias! Ducimus qui fugiat, odio veniam quia minima laborum esse commodi!</p>

                            <br />
                            <Link  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000' className='bg-slate-900 mx-auto  text-center md:px-5 md:py-3 md:w-40 w-32  py-2  md:mx-10   rounded-md hover:bg-slate-200 hover:text-slate-900 capitalize font-bold text-white '>read more </Link>
                        </div> 
  <div className='md:w-1/2  w-56 sm:w-96'>
    <Link to={'/'} className='mx-auto w-56 sm:w-96 '  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000' >{img1}</Link>
    
    </div>                                                
                                  
                
                </div>
            </div>
        </section>
    </div>
  )
}
