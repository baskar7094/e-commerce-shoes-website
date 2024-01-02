import React from 'react'
import Nav from './nav'
import '../../index.css'
import { Link } from 'react-router-dom'
import { ToggleImg1 } from '../../App'
import About from '../about/about'
import Quality from '../quality/quality'
import Slide from '../slide.jsx/slide'
import Feild from '../form/feild'
import Contact from '../contact/contact'
import Aos from 'aos'



const toggle =<ToggleImg1/>
export default function Page() {
  Aos.init()
    return (
        <>
        <div className='bg-img'>
            <Nav />

            <section className='md:px-10 px-1 py-5 text-slate-200  w-full h-full overflow-hidden'>
                <div className='text-left '>
                    <button className='   absolute md:top-40 top-5    right-5  max-w-20 md:left-10   md:p-4 rounded-sm '><span className=''>{toggle}</span></button>
                    <div className='md:px-10 px-1 py-16 md:py-20  '>
                        <h1 className='md:text-4xl text-xl xl:text-5xl capitalize md:p-10 p-5 font-bold '>genuine <br /> shoes online shop</h1>
                        <p className='md:px-10 px-5 md:py-0 xl:text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                        <br />
                        <Link to='/' className='bg-slate-800 md:px-12 px-6 xl:w-40 xl:py-4 font-bold xl:my-4 md:mx-10 mx-5 my-5 rounded-lg hover:shadow-inner hover:border hover:bg-transparent capitalize md:py-3 py-2' >buy now</Link>

                    </div>
                </div>
            </section>

        </div>

        <div className='overflow-hidden scroll-smooth' data-aos='fade-up' data-aos-mirror='false'>
        <About />
        <Quality />
        <Slide/>
        <Feild/>
        <Contact/>
      </div>
        </>
    )
}
