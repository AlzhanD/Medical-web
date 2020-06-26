import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp, updateLoginField, updatePasswordField } from '../redux/reducers/auth'

const Login = () => {
  const password = useSelector((store) => store.auth.password)
  const dispatch = useDispatch()
  return (
    <div className="container mx-auto flex flex-col ">
      <div className="mt-24 flex justify-center items-center  flex-col">
        <img
          src="https://mimc.education/images/tild3631-6632-4666-b336-393039396632__mimc-logoeng-main-rg.png"
          alt="icon"
          className="w-3/12 h-3/12 mr-64"
        />
      </div>

      <div className="flex justify-center items-center  flex-col">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => dispatch(updateLoginField(e.target.value))}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => dispatch(updatePasswordField(e.target.value))}
                value={password}
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                    dispatch(signIn())
                  }
                }}
              />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex flex-col">
              <button
                className=" mb-5 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => dispatch(signIn())}
              >
                Sign In
              </button>
              <div className="inline-block align-baseline font-bold text-sm text-pink-600 hover:text-pink-800">
                <button
                  className=" mb-5 text-black hover:bg-pink-700 hover:text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => dispatch(signUp())}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {}

export default React.memo(Login)
