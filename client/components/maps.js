import React from 'react'
import { Link } from 'react-router-dom'

const Maps = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex text-2xl mt-16">КАРТЫ</div>
        <div className=" border-solid border-b-2 border-gray-200 h-20 flex items-end ">
          <Link to="/projects" className="mr-5">
            СИПСОК ПРОЕКТОВ
          </Link>
          <Link to="/maps">ДОРОЖНЫЕ КАРТЫ</Link>
        </div>
        <div className="flex justify-between mt-6 ">
          <div>ДОРОЖНЫЕ КАРТЫ</div>
        </div>
        <img
          src="https://www.preceptaustin.org/files/images/map%20of%20abrahams%20journey.gif"
          alt="asd"
        />
      </div>
    </div>
  )
}

Maps.propTypes = {}

export default React.memo(Maps)
