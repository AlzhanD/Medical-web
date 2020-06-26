import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { trySignIn } from '../redux/reducers/auth'

const Startup = (props) => {
  const token = useSelector((store) => store.auth.token)
  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      dispatch(trySignIn())
    }
  }, [dispatch, token])

  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
