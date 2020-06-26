import React from 'react'

import Header from './header1'
import Projects from './projects'

const Home = () => {
  return (
    <div className="flex font-serif">
      <Header />
      <div className="flex  flex-col w-full">
        <div className="flex flex-col   bg-gray-100 p-5 items-end ">
          <div>
            <img
              className=" rounded-full h-8 w-8 "
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
              alt="Human"
            />
          </div>
        </div>
        <div className="container mx-auto ">
          <Projects />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
