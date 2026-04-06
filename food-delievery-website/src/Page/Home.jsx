import React from 'react'
import Nav from '../Component/Nav'
import { categories } from '../categories'

function Home() {
    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav />

            <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
            {categories.map((item,i)=>
             <div key={i} value={item} className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-3 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-500
             duration'>
                <div>{item.image}</div>
                <div>{item.name}</div>
             </div>
            )}
            </div>

        </div>
    )
}

export default Home

