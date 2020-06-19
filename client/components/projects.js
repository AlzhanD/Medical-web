import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import ReactShadowScroll from 'react-shadow-scroll'
import { setProjects } from '../redux/reducers/projects'

const Projects = () => {
  const dispatch = useDispatch()
  const projects = useSelector((store) => store.cards.projects)
  const [toggle, setToggle] = useState(true)

  const [newProject, setNewProject] = useState({})

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="container mx-auto">
      <div className="flex text-4xl mt-16 ">ПРОЕКТЫ</div>
      <div>
        <div className=" border-solid border-b-2 border-gray-200 h-20 flex items-end ">
          <Link to="/projects" className="mr-5 hover:underline hover:text-pink-700 ">
            СИПСОК ПРОЕКТОВ
          </Link>
          <Link to="/maps" className="hover:underline hover:text-pink-700 ">
            ДОРОЖНЫЕ КАРТЫ
          </Link>
        </div>
        <div className="flex justify-between mt-10 ">
          <div>СИПСОК ПРОЕКТОВ</div>
          <div className="flex flex-col items-end">
            <button
              type="button"
              className="hover:bg-pink-800 text-white font-bold py-2 px-4 rounded ml-2 outline-none bg-pink-600 text-white"
              onClick={openModal}
            >
              Добавить проект
            </button>

            <div>
              <button
                type="button"
                className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 outline-none bg-gray-200 w-12 mt-2 "
                onClick={() => setToggle(!toggle)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 4h10v2H11V4zm0 4h6v2h-6V8zm0 6h10v2H11v-2zm0 4h6v2h-6v-2zM3 4h6v6H3V4zm2 2v2h2V6H5zm-2 8h6v6H3v-6zm2 2v2h2v-2H5z" />
                </svg>
              </button>
              <button
                type="button"
                className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 outline-none bg-gray-200 w-12 mt-2"
                onClick={() => setToggle(!toggle)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex -mx-12 flex-wrap">
          {projects.map((el) =>
            toggle === true ? (
              <div key={el.name} className="w-1/3 px-8 sm:w-1/3 ">
                <div className=" shadow-xl  mb-5 border-solid border-b-2 border-gray-200 ...  cards ">
                  <div className="relative">
                    <div className="flex justify-center">
                      <img
                        className=" w-full object-contain"
                        src="https://med.stanford.edu/news/all-news/2019/05/new-stanford-hospital-nearing-completion/_jcr_content/main/image.img.476.high.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="p-8">
                      <div className=" mb-2 text-2xl font-mono ">{el.name}</div>
                      <div className="mb-1">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" />
                          </svg>
                          <div className="ml-2 text-l">
                            {el.dataStart} - {el.dataEnd}
                          </div>
                        </div>
                      </div>
                      <div className="flex mb-2 text-l">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                        </svg>
                        <div className="ml-2">{el.supervisor}</div>
                      </div>
                      <div className="flex mt-2 mb-4 text-l">
                        <div className="text-xl font-mono">₽</div>
                        <div className="ml-4">{el.admin}</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex w-10 h-10 ">
                          <img
                            className=" rounded-full h-8 w-8 flex items-center justify-center mr-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg"
                            alt="Human"
                          />
                          <img
                            className=" rounded-full h-8 w-8 flex items-center justify-center mr-2"
                            src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                            alt="Human"
                          />
                          <img
                            className=" rounded-full h-8 w-8 flex items-center justify-center"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg"
                            alt="Human"
                          />
                          <img
                            className=" rounded-full h-8 w-8 flex items-center justify-center"
                            src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                            alt="Human"
                          />
                        </div>
                        <div className="flex w-10 h-10 ">
                          <img
                            className=" rounded-full h-8 w-8 flex items-center justify-center"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSLoUHvGCEUuuzUCp9CU2XDO-LFZRPhunRxaobj6MTZ5XsDavK&usqp=CAU"
                            alt="Human"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={el.name}
                className="w-full flex mt-4 mb-4 justify-between border-b-2 rounded-lg border shadow-lg p-5 items-center"
              >
                <div className="mb-2 text-2xl font-mono mt-2">{el.name}</div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" />
                  </svg>
                  <div className="ml-2">
                    {el.dataStart} - {el.dataEnd}
                  </div>
                </div>
                <div className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  </svg>
                  <div className="ml-2">{el.supervisor}</div>
                </div>
                <div className="flex">
                  <div className="text-2xl font-mono">₽</div>
                  <div className="ml-4">{el.admin}</div>
                </div>
              </div>
            )
          )}
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <form>
              <input
                className="mt-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Название"
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              />
              <div className="mt-3" />
              <input
                className=" mt-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="date"
                placeholder="Продолжительность проекта"
                onChange={(e) => setNewProject({ ...newProject, dataStart: e.target.value })}
              />
              <div className="mt-3" />
              <input
                className=" mt-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="date"
                placeholder="Продолжительность проекта"
                onChange={(e) => setNewProject({ ...newProject, dataEnd: e.target.value })}
              />
              <div className="mt-3" />
              <input
                className=" mt-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Руководитель проекта"
                onChange={(e) => setNewProject({ ...newProject, supervisor: e.target.value })}
              />
              <div className="mt-3" />
              <input
                className=" mt-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Администратор проекта"
                onChange={(e) => setNewProject({ ...newProject, admin: e.target.value })}
              />
              <div className="flex flex-col">
                <button
                  type="button"
                  className=" mt-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    dispatch(setProjects(newProject))
                    closeModal()
                  }}
                >
                  add project
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {}

export default React.memo(Projects)
