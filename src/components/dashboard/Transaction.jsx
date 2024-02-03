import React from 'react'
import SideBar from './SideBar'

const Transaction = () => {
    return (
        <section className='w-full p-1 flex h-full justify-evenly gap-3 '>
        <SideBar />
        <main className='w-4/5 my-3'>
            transaction
        </main>
    </section>
    )
}

export default Transaction