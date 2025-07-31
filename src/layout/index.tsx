import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { SideBar } from '@/layout/components/sidebar'
import { TopBar } from '@/layout/components/topbar'
import { CircleArrowLeft } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';

export default function Layout() {
    const [isContentAreaExpanded, setisContentAreaExpanded] = useState(false)
    return <>
        <div className="min-h-screen flex flex-col md:flex-row p-[1.5rem] shadow-xl bg-gray-200">
            {/* Sidebar */}
            <aside className={`transition-all duration-500 ease-in-out w-full ${isContentAreaExpanded ? 'md:w-15' : 'md:w-45'} bg-zinc-100 text-black p-l-4 p-t-4 p-b-4 rounded-bl-2xl rounded-tl-2xl inset-shadow-xl`}>
                <SideBar isContentAreaExpanded={isContentAreaExpanded} />
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-zinc-100 p-6 rounded-br-2xl rounded-tr-2xl inset-shadow-xl">
                <div className='h-full flex flex-col bg-white rounded-2xl relative'>
                    {/* Profile banner */}
                    <div className='h-[5rem] p-[1rem]'>
                       <TopBar />
                    </div>
                    <div className='absolute z-40 top-[4rem] left-[-1rem]' onClick={() => setisContentAreaExpanded(!isContentAreaExpanded)}>{ !isContentAreaExpanded ? <CircleArrowLeft /> : <CircleArrowRight /> }</div>
                     <hr className='border'/>
                    <div className='h-full p-[1rem]'>
                        {/* Content Area */}
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    </>
}
