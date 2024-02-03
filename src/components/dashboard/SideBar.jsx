import React from 'react'
import { Link } from 'react-router-dom'
import DashboardList from './DashboardList'

const SideBar = () => {
    return (
        <div className='w-1/5 bg-white h-full my-3 rounded-lg shadow-xl'>
            {/* logo section  */}
            <div >
                <Link to={''} className=' font-bold uppercase py-2 px-2 rounded flex justify-start gap-1 drop-shadow-md text-lg md:text-xl '>
                    <span><img src="/trolley.png" alt="" height={28} width={28} /></span>
                    <span>Shopshere</span>
                </Link>
            </div>
            {/* logo section end  */}

            <DashboardList />
        </div>
    )
}

export default SideBar