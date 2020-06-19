import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex items-center text-white w-64 flex-wrap bg-purple-900 py-6 pr-6 h-screen flex-col font-bold ">
        <div>
          <img
            src="https://mimc.education/images/tild3631-6632-4666-b336-393039396632__mimc-logoeng-main-rg.png"
            alt="icon"
          />
        </div>
        <div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="bg-white mb-4 w-5 h-5"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
            </svg>
            <div className="ml-4 "> Задачи и работы</div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="bg-white mb-4 w-5 h-5"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
            </svg>
            <div className="ml-4">Проекты</div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="bg-white mb-4 w-5 h-5"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
            </svg>
            <div className="ml-4"> Календарь</div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="bg-white mb-4 w-5 h-5"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
            </svg>
            <div className="ml-4"> Возможнрсти</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
