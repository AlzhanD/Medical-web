import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Header from './header1'
import Projects from './projects'
import { logOut, stateCleaner } from '../redux/reducers/auth'

const Home = () => {
  const userName = useSelector((store) => store.auth.user)
  const dispatch = useDispatch()
  return (
    <div className="flex font-serif">
      <Header />
      <div className="flex  flex-col w-full">
        <div className="flex flex-col   bg-gray-100 p-5 items-end ">
          <div className="flex">
            <div>{userName.email} </div>
            <img
              className=" rounded-full h-8 w-8 mr-6 ml-6"
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
              alt="Human"
            />
            <button
              type="button"
              onClick={() => {
                dispatch(logOut())
                dispatch(stateCleaner())
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
              </svg>
            </button>
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
