// import React from 'react'
import Template from '../components/Template'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex justify-center z-0 items-center  rounded-xl '>

        <div className="hero h-[60vh] z-0  mx-3 rounded-xl bg-cover w-[95vw] md:w-[80vw] 
          " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-4xl uppercase font-bold">Welcome to shopshere</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <Link to={'/'} className="btn btn-neutral">Get Started</Link>
            </div>
          </div>

        </div>
        {/* shape provider */}



      </div>
      <section id='page1'>

        <Template />
      </section>
    </>
  )
}

export default Home