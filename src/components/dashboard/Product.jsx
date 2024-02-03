import React from 'react'
import SideBar from './SideBar'

const Product = () => {
  return (
    <section className='w-full p-1 flex h-full justify-evenly gap-3 '>
        <SideBar />
        <main className='w-4/5 my-3'>
            product
        </main>
    </section>
  )
}

export default Product