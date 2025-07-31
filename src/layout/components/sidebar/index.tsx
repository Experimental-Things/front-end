import { SIDEBAR_DATA } from '@/layout/components/sidebar/sidebar-data'
import { LogoAndBanner } from '@/layout/components/logo'

export function SideBar() {
    return <>
        <div className='w-full p-1'>
            <LogoAndBanner />
            <h4>MENU</h4>
            <ul className='w-full flex flex-col gap-1 overflow-y-auto min-h-[75vh] max-h-[75vh] custom-scrollbar'>
                {Array(5).fill(SIDEBAR_DATA[0])?.map((menu: Record<string, any>, i: number) => (
                    <li className="w-full flex flex-row p-4  rounded-sm" key={i}>
                        {menu.icon}&nbsp; {menu?.name}</li>
                ))}
            </ul>
            <hr className='border-[1px] border-gray'/>
        </div>
    </>
}