import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Fill } from "react-icons/ri";

function Card2() {
    return (
        <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between'>
            <div className='w-[60%] h-full flex gap-5 '>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'><img src={image1} className='object-cover' /></div>
                <div className='w-[40%] h-full flex  flex-col gap-5'>
                    <div className='text-lg text-gray-600 font-semibold'>Pancakes</div>
                    <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center  text-green-400'>1</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center  text-green-400 hover:bg-gray-200'>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col  items-end gap-6'>
                <span className='text-xl text-green-400 font-semibold'>Rs 499/-</span>
                <RiDeleteBin6Fill className='text-red-500'/>
            </div>
        </div>
        
    )
}

export default Card2
