import React from 'react'
import { ClientImg1, Left1, Right1 } from '../../App'
import Car from 'carousel-react-app'


const leftarrow = <Left1/>
const rightarrow = <Right1/>
const slideimg  = <ClientImg1/>

export default function Slide() {
  return (
<>
<Car images={Slider} delay={2000}/>

</>

    )
}

function Slider(){
    return(<>
    <section className=' w-full  relative'>
    <div className="card bg-slate-800 px-5 py-10 lg:w-4/5 md:w-2/3 w-full h-48   mx-auto max-h-fit my-3 md:my-10">
        <div className="card-header grid grid-cols-2 justify-center items-center  ">
            
        <picture className="md:px-10 px-1  object-cover">{slideimg}</picture>
        <h2 className="text-slate-300 md:text-xl  lg:-ml-56 text-start md:-ml-10 md:-mt-5  text-sm   md:px-5 ">Lorem, ipsum dolor. Lorem, ipsum dolor.</h2>
        <h3 className="md:ml-48 text-sm text-slate-300 py-3 md:-mt-10 w-56   ">Lorem ipsum dolor sit amet.</h3>
</div>        
<div className="card-body px-10 py-2 w-auto mx-auto overflow-hidden   text-slate-300">
    <p className=' text-wrap  text-xs break-after-auto h-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi ratione corrupti delectus provident! Harum quas modi voluptatem molestiae nam. Labore, sunt veritatis nihil recusandae molestiae aliquam consequatur repellat maxime! </p>
</div>
    </div>
    <div className="btn-group hidden md:block ">
        <button className='  absolute top-1/2 left-10'><span>{leftarrow}</span></button>
        <button className='absolute top-1/2 right-10'><span>{rightarrow}</span></button>
    </div>
</section>
    </>)
}
