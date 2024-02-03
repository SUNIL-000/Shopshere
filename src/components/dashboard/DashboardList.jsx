import React from 'react'
import { dashboardList } from '../cart_components/constant/dashboardList'
import { Link, useLocation } from 'react-router-dom'
const DashboardList = () => {
    const location = useLocation();
    return (
        <div>
            <h3 className='uppercase font-semibold ml-3 my-1 px-3 text-gray-500'>Dashboard</h3>
            <hr />
            <ul className=' ml-4 capitalize flex flex-col font-medium text-gray-600 text-lg my-1 '>
                {
                    dashboardList.map((item) => {

                        return <Link
                            to={item.linked}
                            key={item.title}
                            className={`py-2 w-auto ${location.pathname === item.linked ? "bg-[#f4f2f2] " : ""
                                } rounded-md m-1 px-5`}
                        >
                            {item.title}
                        </Link>
                    })
                }
            </ul>
        </div>
    )
}

export default DashboardList