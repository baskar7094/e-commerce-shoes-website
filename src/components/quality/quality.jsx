import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Img02, Img03, Img04, Img05, Img06, Img07, Img08 } from '../../App'
import Aos from 'aos'

const Img2 = <Img02 />
const Img3 = <Img03 />
const Img4 = <Img04 />
const Img5 = <Img05 />
const Img6 = <Img06 />
const Img7 = <Img07 />
const Img8 = <Img08 />

export default function Quality() {
    useEffect(()=>{
        Aos.init()
    })
    const Btnlink =
        <Link to={'/'} className='bg-slate-700 lg:bg-slate-800 hover:border border-slate-800 hover:text-black  text-white  hover:shadow-lg font-bold capitalize  md:px-4 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>
    return (
        <>
            <section className='bg-slate-950 text-slate-300 md:py-10 py-5 md:my-10 my-5'>
                <div className='w-11/12 mx-auto text-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl  capitalize md:py-3 '>best quality </h1>
                    <p className='py-3 md:py-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora.</p>
                    <div  className='flex flex-col    md:flex-row gap-10 w-32 lg:w-11/12  md:w-2/3  mx-auto'>

                        <div className=''  data-aos='slide-left' data-aos-once='false' data-aos-duration='2000'>
                            <Card img={Img2} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-2 w-32 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>
                        <div  data-aos='slide-left' data-aos-once='false' data-aos-duration='2000'>
                            <Card img={Img3} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black   hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-2 w-32 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>
                        <div  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000'>
                            <Card img={Img4} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-2 w-32 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>
                        <div  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000'>
                            <Card img={Img5} price={`$ ${100}`} name={`Shoes`} />

                            <Link to={'/'} className='bg-slate-200 border border-slate-800 text-black  hover:text-white hover:bg-yellow-400 hover:shadow-lg font-bold capitalize  md:px-2 w-32 md:py-3 px-2 py-1   rounded-lg'>buy now</Link>

                        </div>

                    </div>
                </div>

            </section>

            <section className='w-11/12 text-center mx-auto' >
                <h1 className='md:text-4xl text-xl capitalize md:py-5 py-3'  data-aos='fade-right' data-aos-once='false' data-aos-duration='2000'>best quality</h1>
                <p className='py-2'  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illum nobis?</p>


                <div className='flex w-full mx-auto md:p-10 p-5 md:flex-row flex-col md:gap-10 gap-3 items-center text-center'>
                    <div className='md:my-3 my-2'  data-aos='slide-left' data-aos-once='false' data-aos-duration='2000'>
                        <Card img={Img6} heading={`Lorem ipsum dolor sit amet. `} para={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!temporibus, a veritatis!`} />
                        {Btnlink}

                    </div>
                    <div className='mt-4'  data-aos='slide-up' data-aos-once='false' data-aos-duration='2000'>
                        <Card img={Img7} heading={`Lorem ipsum dolor sit amet.`} para={`Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis! adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!`} />
                        {Btnlink}

                    </div>
                    <div  data-aos='slide-right' data-aos-once='false' data-aos-duration='2000'>
                        <Card img={Img8} heading={`Lorem ipsum dolor sit amet.`} para={` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quidem modi temporibus, a veritatis!`} />
                        {Btnlink}

                    </div>
                </div>
            </section>
        </>
    )
}


export function Card(props) {



    return (
        <div className='text-center'>
            <picture className='md:w-32  w-5 mx-auto h-5 md:h-auto object-cover '>{props.img}</picture>
            <h3 className='text-yellow-400 text-xl md:text-3xl font-bold py-2'>{props.price}</h3>
            <h2 className='text-xl py-1 md:text-4xl'>{props.name}</h2>
            <h2 className='font-bold py-2'>{props.heading}</h2>
            <p className='py-2'>{props.para}</p>
        </div>
    )
}